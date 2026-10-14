/* Seguro para o pré-render no Node (sem window) */
const isBrowser = typeof window !== 'undefined'
const media = (q) => isBrowser && window.matchMedia(q).matches

export const reduceMotion = media('(prefers-reduced-motion: reduce)')
export const finePointer = media('(hover: hover) and (pointer: fine)')

export const storage = {
  get(k) { try { return localStorage.getItem(k) } catch { return null } },
  set(k, v) { try { localStorage.setItem(k, v) } catch { /* armazenamento indisponível */ } },
}
