import { useEffect } from 'react'
import { finePointer, reduceMotion } from '../lib/env'

/*
 * Efeitos de mouse por delegação (funcionam com qualquer re-render):
 *  .spot      → luz radial que segue o cursor
 *  .magnetic  → elemento é "puxado" pelo cursor
 *  .tilt      → leve rotação 3D
 */
export function usePointerEffects() {
  useEffect(() => {
    if (!finePointer) return
    let mag = null
    let tilt = null

    const resetMag = () => { if (mag) mag.style.transform = '' }
    const resetTilt = () => { if (tilt) { tilt.style.transition = ''; tilt.style.transform = '' } }

    const onMove = (e) => {
      const target = e.target instanceof Element ? e.target : null
      if (!target) return

      for (let el = target.closest('.spot'); el; el = el.parentElement?.closest('.spot')) {
        const r = el.getBoundingClientRect()
        el.style.setProperty('--mx', `${e.clientX - r.left}px`)
        el.style.setProperty('--my', `${e.clientY - r.top}px`)
      }

      if (reduceMotion) return

      const m = target.closest('.magnetic')
      if (m !== mag) { resetMag(); mag = m }
      if (mag) {
        const r = mag.getBoundingClientRect()
        const dx = e.clientX - (r.left + r.width / 2)
        const dy = e.clientY - (r.top + r.height / 2)
        mag.style.transform = `translate(${dx * 0.22}px, ${dy * 0.32}px)`
      }

      const tl = target.closest('.tilt')
      if (tl !== tilt) { resetTilt(); tilt = tl }
      if (tilt) {
        const r = tilt.getBoundingClientRect()
        const px = (e.clientX - r.left) / r.width - 0.5
        const py = (e.clientY - r.top) / r.height - 0.5
        tilt.style.transition = 'border-color .4s, transform .15s linear'
        tilt.style.transform = `rotateY(${px * 8}deg) rotateX(${-py * 8}deg) translateZ(0)`
      }
    }

    const onLeave = () => { resetMag(); resetTilt(); mag = tilt = null }

    document.addEventListener('pointermove', onMove, { passive: true })
    document.documentElement.addEventListener('mouseleave', onLeave)
    return () => {
      document.removeEventListener('pointermove', onMove)
      document.documentElement.removeEventListener('mouseleave', onLeave)
    }
  }, [])
}
