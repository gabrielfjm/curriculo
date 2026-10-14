import { useEffect } from 'react'
import Lenis from 'lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { reduceMotion } from '../lib/env'
import { setLenis, scrollToTarget } from '../lib/scroll'

gsap.registerPlugin(ScrollTrigger)

/* Lenis sincronizado com o ticker do GSAP + âncoras internas com rolagem suave */
export function useSmoothScroll() {
  useEffect(() => {
    let lenis = null
    let raf = null
    if (!reduceMotion) {
      lenis = new Lenis({ lerp: 0.1 })
      lenis.on('scroll', ScrollTrigger.update)
      raf = (t) => lenis.raf(t * 1000)
      gsap.ticker.add(raf)
      gsap.ticker.lagSmoothing(0)
      setLenis(lenis)
    }

    const onClick = (e) => {
      const a = e.target.closest('a[href^="#"]')
      if (!a) return
      const id = a.getAttribute('href')
      if (id === '#' || !document.querySelector(id)) return
      e.preventDefault()
      scrollToTarget(id === '#hero' ? 0 : id)
    }
    document.addEventListener('click', onClick)

    return () => {
      document.removeEventListener('click', onClick)
      if (raf) gsap.ticker.remove(raf)
      lenis?.destroy()
      setLenis(null)
    }
  }, [])
}
