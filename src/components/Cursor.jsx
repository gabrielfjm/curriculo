import { useEffect, useRef } from 'react'
import { finePointer, reduceMotion } from '../lib/env'

/* Cursor customizado: ponto + anel com atraso, em mix-blend difference */
export default function Cursor() {
  const dot = useRef(null)
  const ring = useRef(null)
  const label = useRef(null)

  useEffect(() => {
    if (!finePointer) return
    const root = document.documentElement
    root.classList.add('has-cursor')
    let cx = innerWidth / 2, cy = innerHeight / 2, rx = cx, ry = cy, raf
    const lerp = reduceMotion ? 1 : 0.17

    const move = (e) => {
      cx = e.clientX; cy = e.clientY
      dot.current.style.transform = `translate(${cx}px, ${cy}px)`
      root.classList.remove('cursor-hidden')
    }
    const follow = () => {
      rx += (cx - rx) * lerp; ry += (cy - ry) * lerp
      ring.current.style.transform = `translate(${rx}px, ${ry}px)`
      raf = requestAnimationFrame(follow)
    }
    const over = (e) => {
      if (!(e.target instanceof Element)) return
      const labeled = e.target.closest('[data-cursor]')
      const link = e.target.closest('a, button, .tile, .chip, .tag')
      if (labeled) {
        label.current.textContent = labeled.dataset.cursor
        root.classList.add('cursor-label'); root.classList.remove('cursor-hover')
      } else {
        root.classList.remove('cursor-label'); root.classList.toggle('cursor-hover', !!link)
      }
    }
    const leave = () => root.classList.add('cursor-hidden')

    window.addEventListener('pointermove', move, { passive: true })
    document.addEventListener('pointerover', over)
    root.addEventListener('mouseleave', leave)
    raf = requestAnimationFrame(follow)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('pointermove', move)
      document.removeEventListener('pointerover', over)
      root.removeEventListener('mouseleave', leave)
      root.classList.remove('has-cursor', 'cursor-hover', 'cursor-label', 'cursor-hidden')
    }
  }, [])

  return (
    <>
      <div className="cursor-dot" ref={dot} aria-hidden="true" />
      <div className="cursor-ring" ref={ring} aria-hidden="true"><span ref={label} /></div>
    </>
  )
}
