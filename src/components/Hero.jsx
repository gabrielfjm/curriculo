import { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { hero, profile, company } from '../data/content'
import { useLang } from '../lib/i18n'
import { reduceMotion } from '../lib/env'
import { useClock } from '../hooks/useClock'
import HeroCanvas from './HeroCanvas'
import { Scramble, Typing } from './ui'

export default function Hero({ ready }) {
  const { t, lang } = useLang()
  const time = useClock()
  const ref = useRef(null)

  // Entrada do hero depois do preloader
  useLayoutEffect(() => {
    if (!ready || reduceMotion) return
    const el = ref.current
    const ctx = gsap.context(() => {
      gsap.from(el.querySelectorAll('.hero-anim'), { y: 30, autoAlpha: 0, duration: 1.3, ease: 'expo.out', stagger: 0.09, delay: 0.15, clearProps: 'transform,opacity,visibility' })
      gsap.from(el.querySelector('.frame'), { clipPath: 'inset(100% 0 0 0)', duration: 1.6, ease: 'expo.inOut', delay: 0.2, clearProps: 'clipPath' })
      gsap.from('#nav', { y: -30, autoAlpha: 0, duration: 1.1, ease: 'expo.out', clearProps: 'transform,opacity,visibility' })
    })
    return () => ctx.revert()
  }, [ready])

  return (
    <section id="hero" ref={ref}>
      <HeroCanvas />
      <div className="hero-vignette" aria-hidden="true" />

      <div className="hero-wrap">
        <div className="hero-top hero-anim">
          <span className="live">{t(hero.status)}</span>
          <span className="hide-sm">{t(hero.areas)}</span>
          <span>CWB {time}</span>
        </div>

        <div className="hero-main">
          <p className="eyebrow hero-anim">{t(hero.eyebrow)}</p>

          <h1 className="hero-name" aria-label={profile.name}>
            <Scramble text={profile.nameLines[0]} active={ready} />
            <Scramble text={profile.nameLines[1]} active={ready} delay={220} className="outline" />
          </h1>

          <div className="hero-role hero-anim">
            <span className="prompt">&gt;_</span>
            <Typing key={lang} phrases={hero.phrases[lang]} active={ready} />
            <span className="caret" />
          </div>

          <div className="hero-cta hero-anim">
            <a href="#projetos" className="btn btn-solid magnetic">
              {t(hero.ctaProjects)} <i className="fas fa-arrow-right arr" />
            </a>
            <a href={company.url} target="_blank" rel="noopener" className="btn btn-ghost magnetic">
              {company.name} <i className="fas fa-arrow-right arr" />
            </a>
            <a href={profile.cv} target="_blank" rel="noopener" className="btn btn-ghost magnetic">
              <i className="fas fa-download" /> CV
            </a>
          </div>
        </div>

        <aside className="hero-card hero-anim" data-cursor="Hi!">
          <div className="frame">
            <div className="frame-img">
              <img src={profile.avatar} alt={`Foto de ${profile.name}`} />
              <div className="scanline" />
            </div>
            <span className="frame-tag">ID · GFJM-001</span>
          </div>
          <div className="hero-card-info">
            <div className="row"><span>Role</span><b>CEO &amp; Founder</b></div>
            <a className="row" href={company.url} target="_blank" rel="noopener">
              <span>{t({ pt: 'Empresa', en: 'Company' })}</span><b>{company.name} ↗</b>
            </a>
            <div className="row"><span>MSc</span><b>PUCPR · CAPES</b></div>
          </div>
        </aside>

        <div className="hero-bottom hero-anim">
          <div className="socials">
            <a href={`mailto:${profile.email}`} className="soc magnetic" aria-label="Email"><i className="fas fa-envelope" /></a>
            <a href={profile.github} target="_blank" rel="noopener" className="soc magnetic" aria-label="GitHub"><i className="fab fa-github" /></a>
            <a href={profile.linkedin} target="_blank" rel="noopener" className="soc magnetic" aria-label="LinkedIn"><i className="fab fa-linkedin-in" /></a>
            <a href={profile.whatsapp} target="_blank" rel="noopener" className="soc magnetic" aria-label="WhatsApp"><i className="fab fa-whatsapp" /></a>
          </div>
          <div className="scroll-ind"><span className="track" /><span>Scroll</span></div>
          <span className="hide-sm">{profile.location} · {profile.coords}</span>
        </div>
      </div>
    </section>
  )
}
