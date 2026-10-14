import { useEffect, useRef, useState } from 'react'
import { nav, profile, company } from '../data/content'
import { useLang } from '../lib/i18n'
import { getLenis } from '../lib/scroll'
import { useTheme } from '../hooks/useTheme'
import { useClock } from '../hooks/useClock'

function MenuClock() {
  const time = useClock()
  return <span className="clock-wrap">CWB {time}</span>
}

export default function Nav() {
  const { t, toggle: toggleLang, en } = useLang()
  const { toggle: toggleTheme } = useTheme()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [active, setActive] = useState('')
  const lastY = useRef(0)

  // Estado ao rolar: fundo com blur e esconde ao descer
  useEffect(() => {
    let ticking = false
    const update = () => {
      const y = window.scrollY
      setScrolled(y > 40)
      setHidden(y > lastY.current && y > 400)
      lastY.current = y
      ticking = false
    }
    const onScroll = () => { if (!ticking) { ticking = true; requestAnimationFrame(update) } }
    window.addEventListener('scroll', onScroll, { passive: true })
    update()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Link ativo conforme a seção visível
  useEffect(() => {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id) })
    }, { rootMargin: '-45% 0px -50% 0px' })
    document.querySelectorAll('section[id]').forEach((s) => io.observe(s))
    return () => io.disconnect()
  }, [])

  // Menu mobile: trava o scroll e fecha com Esc
  useEffect(() => {
    document.documentElement.classList.toggle('menu-open', open)
    document.body.style.overflow = open ? 'hidden' : ''
    const lenis = getLenis()
    if (lenis) open ? lenis.stop() : lenis.start()
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false) }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open])

  const close = () => setOpen(false)

  return (
    <>
      <header className={`nav${scrolled ? ' scrolled' : ''}${hidden && !open ? ' hidden' : ''}`} id="nav">
        <a href="#hero" className="brand" aria-label={en ? 'Home' : 'Início'}>
          <span className="brand-box" />GFJM<span className="brand-year">/{new Date().getFullYear()}</span>
        </a>

        <ul className="nav-links">
          {nav.map((n) => (
            <li key={n.id}>
              <a href={`#${n.id}`} className={active === n.id ? 'active' : ''}>
                <span className="roll"><span>{t(n.label)}</span></span>
              </a>
            </li>
          ))}
        </ul>

        <div className="nav-right">
          <button className="icon-btn" type="button" onClick={toggleLang} aria-label={en ? 'Mudar para português' : 'Switch to English'}>
            <i className="fas fa-globe" />{en ? 'EN' : 'PT'}
          </button>
          <button className="icon-btn btn-theme" type="button" onClick={toggleTheme} aria-label={en ? 'Switch theme' : 'Alternar tema'}>
            <i className="fas fa-sun ico-sun" /><i className="fas fa-moon ico-moon" />
          </button>
          <button className="icon-btn menu-btn" type="button" onClick={() => setOpen((o) => !o)} aria-label="Menu" aria-expanded={open} aria-controls="menu">
            <i /><i />
          </button>
        </div>
      </header>

      <div className="menu" id="menu">
        <ol>
          {nav.map((n) => (
            <li key={n.id}><a href={`#${n.id}`} onClick={close} tabIndex={open ? 0 : -1}>{t(n.menuLabel || n.label)}</a></li>
          ))}
        </ol>
        <div className="menu-foot">
          <MenuClock />
          <nav>
            <a href={profile.github} target="_blank" rel="noopener" aria-label="GitHub" tabIndex={open ? 0 : -1}><i className="fab fa-github" /></a>
            <a href={profile.linkedin} target="_blank" rel="noopener" aria-label="LinkedIn" tabIndex={open ? 0 : -1}><i className="fab fa-linkedin-in" /></a>
            <a href={company.instagram} target="_blank" rel="noopener" aria-label="Instagram JESS" tabIndex={open ? 0 : -1}><i className="fab fa-instagram" /></a>
            <a href={profile.whatsapp} target="_blank" rel="noopener" aria-label="WhatsApp" tabIndex={open ? 0 : -1}><i className="fab fa-whatsapp" /></a>
          </nav>
        </div>
      </div>
    </>
  )
}
