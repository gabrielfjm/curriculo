import { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { about } from '../data/content'
import { Rich, useLang } from '../lib/i18n'
import { reduceMotion } from '../lib/env'
import { Counter, SectionHead } from './ui'

gsap.registerPlugin(ScrollTrigger)

/* Frase de destaque: cada palavra acende conforme o scroll */
function Statement({ text, ready }) {
  const ref = useRef(null)
  const { lang } = useLang()

  useLayoutEffect(() => {
    if (!ready || reduceMotion) return
    const ctx = gsap.context(() => {
      gsap.fromTo(ref.current.querySelectorAll('.w'), { opacity: 0.12 }, {
        opacity: 1, stagger: 0.1, ease: 'none',
        scrollTrigger: { trigger: ref.current, start: 'top 82%', end: 'bottom 50%', scrub: true },
      })
    })
    return () => ctx.revert()
  }, [ready, lang])

  // Divide em palavras (mantendo espaços e pontuação originais) e preserva os trechos em **negrito**
  const words = text.split(/(\*\*[^*]+\*\*)/g).filter(Boolean).flatMap((part, i) => {
    const bold = part.startsWith('**')
    const clean = bold ? part.slice(2, -2) : part
    return clean.split(/(\s+)/).filter(Boolean).map((w, j) => (
      /^\s+$/.test(w) ? ' ' : <span className="w" key={`${i}-${j}`}>{bold ? <strong>{w}</strong> : w}</span>
    ))
  })

  return (
    <div className="statement" ref={ref}>
      <p>{words}</p>
    </div>
  )
}

export default function About({ ready }) {
  const { t } = useLang()
  return (
    <section id="sobre" className="sec">
      <div className="wrap">
        <SectionHead index="01" label={{ pt: 'Sobre', en: 'About' }} right={`GFJM/${new Date().getFullYear()}`} />

        <h2 className="sr-only">{t({ pt: 'Sobre Gabriel Felipe Jess Meira', en: 'About Gabriel Felipe Jess Meira' })}</h2>
        <Statement text={t(about.statement)} ready={ready} />

        <div className="about-grid">
          <div className="rv">
            <div className="card spot bio">
              <p className="label">bio</p>
              {t(about.bio).map((p, i) => <p key={i}><Rich text={p} /></p>)}

              <div className="stats">
                {about.stats.map((s, i) => (
                  <div className="stat spot" key={i}>
                    <span className="stat-n">
                      {s.text ?? <><Counter value={s.value} ready={ready} /><sup>{s.suffix}</sup></>}
                    </span>
                    <span className="stat-l">{t(s.label)}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="side-stack">
            <div className="card spot rv">
              <p className="label">soft skills</p>
              <div className="chips">
                {about.softSkills.map((s) => (
                  <span className="chip" key={s.icon}><i className={`fas ${s.icon}`} />{t(s.label)}</span>
                ))}
              </div>
            </div>

            <div className="card spot rv">
              <p className="label">{t({ pt: 'idiomas', en: 'languages' })}</p>
              <div className="lang-row">
                {about.languages.map((l) => (
                  <div key={l.pct}>
                    <div className="lang-meta"><span>{t(l.name)}</span><span>{t(l.level)}</span></div>
                    <div className="bar"><i style={{ '--w': `${l.pct}%` }} /></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
