import { reduceMotion } from './env'

/* Instância única do Lenis (smooth scroll), registrada pelo App */
let lenis = null
export const setLenis = (instance) => { lenis = instance }
export const getLenis = () => lenis

const expoOut = (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t))

/* target: número (px), seletor ('#sobre') ou elemento */
export function scrollToTarget(target) {
  const el = typeof target === 'string' ? document.querySelector(target) : target
  if (el === null) return
  if (lenis) { lenis.scrollTo(el, { duration: 1.6, easing: expoOut }); return }
  const behavior = reduceMotion ? 'auto' : 'smooth'
  if (typeof el === 'number') window.scrollTo({ top: el, behavior })
  else el.scrollIntoView({ behavior })
}
