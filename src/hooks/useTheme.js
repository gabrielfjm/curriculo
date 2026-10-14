import { useCallback, useState } from 'react'
import { flushSync } from 'react-dom'
import { reduceMotion, storage } from '../lib/env'

function apply(theme) {
  const root = document.documentElement
  root.dataset.theme = theme
  storage.set('gfm-theme', theme)
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'dark' ? '#050505' : '#f4f4f2')
}

/* Tema preto/branco com transição circular (View Transitions API) a partir do clique */
export function useTheme() {
  const [theme, setTheme] = useState(() => (typeof document !== 'undefined' && document.documentElement.dataset.theme) || 'dark')

  const toggle = useCallback((e) => {
    const next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark'
    const commit = () => { apply(next); flushSync(() => setTheme(next)) }

    if (!document.startViewTransition || reduceMotion) { commit(); return }

    const r = e.currentTarget.getBoundingClientRect()
    const x = e.clientX || r.left + r.width / 2
    const y = e.clientY || r.top + r.height / 2
    const radius = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y))

    document.startViewTransition(commit).ready.then(() => {
      document.documentElement.animate(
        { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${radius}px at ${x}px ${y}px)`] },
        { duration: 750, easing: 'cubic-bezier(.7,0,.3,1)', pseudoElement: '::view-transition-new(root)' }
      )
    })
  }, [])

  return { theme, toggle }
}
