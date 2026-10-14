import { useEffect, useRef } from 'react'
import { finePointer, reduceMotion } from '../lib/env'

const GAP = 26
const RADIUS = 170

/* Grade de pontos que reage ao mouse (ou a um "ponto fantasma" no mobile) */
export default function HeroCanvas() {
  const ref = useRef(null)

  useEffect(() => {
    const c = ref.current
    const ctx = c.getContext('2d')
    const root = document.documentElement
    let w = 0, h = 0, dots = [], rgb = '242,242,242', visible = true, running = false
    const mouse = { x: -9999, y: -9999, tx: -9999, ty: -9999, last: -Infinity }

    const readColor = () => { rgb = getComputedStyle(root).getPropertyValue('--fg-rgb').trim() || rgb }

    const draw = (t) => {
      ctx.clearRect(0, 0, w, h)
      ctx.fillStyle = `rgb(${rgb})`
      if (!finePointer || t - mouse.last > 2500) {
        mouse.tx = w * (0.5 + 0.38 * Math.sin(t * 0.00035))
        mouse.ty = h * (0.5 + 0.3 * Math.sin(t * 0.00061 + 1))
      }
      if (mouse.x < -999) { mouse.x = mouse.tx; mouse.y = mouse.ty }
      mouse.x += (mouse.tx - mouse.x) * 0.08
      mouse.y += (mouse.ty - mouse.y) * 0.08
      const { x: mx, y: my } = mouse
      const R2 = RADIUS * RADIUS
      for (let i = 0; i < dots.length; i += 2) {
        let x = dots[i], y = dots[i + 1]
        let a = 0.06 + (Math.sin(t * 0.0011 + x * 0.011 + y * 0.007) * 0.5 + 0.5) * 0.07
        let s = 1.3
        const dx = x - mx, dy = y - my, d2 = dx * dx + dy * dy
        if (d2 < R2) {
          const d = Math.sqrt(d2) || 1, f = 1 - d / RADIUS
          a += f * f * 0.8; s += f * 1.8
          x += (dx / d) * f * 12; y += (dy / d) * f * 12
        }
        ctx.globalAlpha = a
        ctx.fillRect(x - s / 2, y - s / 2, s, s)
      }
      ctx.globalAlpha = 1
    }

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      const r = c.getBoundingClientRect()
      w = r.width; h = r.height
      c.width = Math.round(w * dpr); c.height = Math.round(h * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      dots = []
      const ox = (w % GAP) / 2, oy = (h % GAP) / 2
      for (let y = oy; y <= h; y += GAP) for (let x = ox; x <= w; x += GAP) dots.push(x, y)
      if (reduceMotion) draw(0)
    }

    let raf
    const loop = (t) => {
      if (!visible) { running = false; return }
      draw(t)
      raf = requestAnimationFrame(loop)
    }
    const start = () => { if (!running && !reduceMotion) { running = true; raf = requestAnimationFrame(loop) } }

    const onMove = (e) => {
      const r = c.getBoundingClientRect()
      mouse.tx = e.clientX - r.left; mouse.ty = e.clientY - r.top; mouse.last = performance.now()
    }

    // Recolore quando o tema muda
    const themeObs = new MutationObserver(() => { readColor(); if (reduceMotion) draw(0) })
    themeObs.observe(root, { attributes: true, attributeFilter: ['data-theme'] })
    const io = new IntersectionObserver(([e]) => { visible = e.isIntersecting; if (visible) start() })
    io.observe(c)

    readColor(); resize(); start()
    window.addEventListener('resize', resize)
    window.addEventListener('pointermove', onMove, { passive: true })
    return () => {
      cancelAnimationFrame(raf)
      themeObs.disconnect(); io.disconnect()
      window.removeEventListener('resize', resize)
      window.removeEventListener('pointermove', onMove)
    }
  }, [])

  return <canvas id="hero-canvas" ref={ref} aria-hidden="true" />
}
