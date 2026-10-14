import { useEffect, useRef, useState } from 'react'
import { company, profile } from '../data/content'
import { useLang } from '../lib/i18n'
import { scrollToTarget } from '../lib/scroll'
import { useClock } from '../hooks/useClock'

/* Botão de voltar ao topo com anel de progresso + barra de progresso no topo */
function ScrollProgress() {
  const { en } = useLang()
  const bar = useRef(null)
  const circle = useRef(null)
  const [show, setShow] = useState(false)

  useEffect(() => {
    let ticking = false
    const update = () => {
      const y = window.scrollY
      const max = document.documentElement.scrollHeight - innerHeight
      const p = max > 0 ? Math.min(y / max, 1) : 0
      bar.current.style.transform = `scaleX(${p})`
      circle.current.style.strokeDashoffset = 151 * (1 - p)
      setShow(y > innerHeight * 0.8)
      ticking = false
    }
    const onScroll = () => { if (!ticking) { ticking = true; requestAnimationFrame(update) } }
    window.addEventListener('scroll', onScroll, { passive: true })
    update()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <div className="progress" ref={bar} aria-hidden="true" />
      <button className={`to-top${show ? ' show' : ''}`} type="button" onClick={() => scrollToTarget(0)} aria-label={en ? 'Back to top' : 'Voltar ao topo'}>
        <svg viewBox="0 0 52 52" aria-hidden="true"><circle ref={circle} cx="26" cy="26" r="24" /></svg>
        <i className="fas fa-arrow-up" />
      </button>
    </>
  )
}

export default function Footer() {
  const { t } = useLang()
  const time = useClock()
  const year = new Date().getFullYear()

  return (
    <>
      <footer>
        <div className="wrap">
          <div className="foot-top">
            <div>
              <h4>{profile.name}</h4>
              <p>{t({
                pt: 'Engenheiro de Software, CEO & Founder da JESS Branding e Mestrando em Informática pela PUCPR.',
                en: 'Software Engineer, CEO & Founder of JESS Branding and MSc student in Computer Science at PUCPR.',
              })}</p>
            </div>
            <div>
              <h4>{t({ pt: 'Navegação', en: 'Navigation' })}</h4>
              <ul>
                <li><a href="#sobre">{t({ pt: 'Sobre', en: 'About' })}</a></li>
                <li><a href="#jess">JESS</a></li>
                <li><a href="#publicacoes">{t({ pt: 'Publicações', en: 'Publications' })}</a></li>
                <li><a href="#experiencia">{t({ pt: 'Experiência', en: 'Experience' })}</a></li>
                <li><a href="#projetos">{t({ pt: 'Projetos', en: 'Projects' })}</a></li>
              </ul>
            </div>
            <div>
              <h4>Social</h4>
              <ul>
                <li><a href={profile.github} target="_blank" rel="noopener">GitHub ↗</a></li>
                <li><a href={profile.linkedin} target="_blank" rel="noopener">LinkedIn ↗</a></li>
                <li><a href={company.instagram} target="_blank" rel="noopener">Instagram ↗</a></li>
                <li><a href={company.url} target="_blank" rel="noopener">{company.domain} ↗</a></li>
              </ul>
            </div>
            <div>
              <h4>{t({ pt: 'Hora local', en: 'Local time' })}</h4>
              <p className="mono">Curitiba, BR<br />{time} (GMT-3)</p>
            </div>
          </div>

          <div className="foot-mark" aria-hidden="true">GFJM</div>

          <div className="foot-bottom">
            <span>© {year} {profile.name}</span>
            <span>{t({ pt: 'Feito com código, café e fé', en: 'Built with code, coffee & faith' })}</span>
          </div>
        </div>
      </footer>
      <ScrollProgress />
    </>
  )
}
