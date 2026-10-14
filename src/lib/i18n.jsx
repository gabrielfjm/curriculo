import { createContext, useCallback, useContext, useEffect, useLayoutEffect, useMemo, useState } from 'react'
import { meta } from '../data/content'
import { storage } from './env'

const LangContext = createContext(null)

export function LangProvider({ children }) {
  // Sempre começa em PT (igual ao HTML pré-renderizado) e troca logo após hidratar
  const [lang, setLang] = useState('pt')

  useLayoutEffect(() => {
    if (document.documentElement.dataset.lang === 'en') setLang('en')
  }, [])

  useEffect(() => {
    const root = document.documentElement
    root.dataset.lang = lang
    root.lang = lang === 'en' ? 'en' : 'pt-BR'
    document.title = meta[lang].title
    document.querySelector('meta[name="description"]')?.setAttribute('content', meta[lang].desc)
  }, [lang])

  /* Resolve um valor bilíngue { pt, en } ou devolve o próprio valor */
  const t = useCallback((v) => (v && typeof v === 'object' && !Array.isArray(v) && 'pt' in v ? v[lang] : v), [lang])
  const toggle = useCallback(() => setLang((l) => {
    const next = l === 'pt' ? 'en' : 'pt'
    storage.set('gfm-lang', next)
    return next
  }), [])

  const value = useMemo(() => ({ lang, t, toggle, en: lang === 'en' }), [lang, t, toggle])
  return <LangContext.Provider value={value}>{children}</LangContext.Provider>
}

export const useLang = () => useContext(LangContext)

/* Converte **texto** em <strong> */
export function Rich({ text }) {
  return text.split(/(\*\*[^*]+\*\*)/g).filter(Boolean).map((part, i) =>
    part.startsWith('**') ? <strong key={i}>{part.slice(2, -2)}</strong> : part
  )
}
