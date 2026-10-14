import { useEffect, useLayoutEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { reduceMotion } from '../lib/env'

gsap.registerPlugin(ScrollTrigger)

/* Animações de scroll globais. Só começam depois do preloader (ready). */
export function useScrollAnimations(ready, lang) {
  useLayoutEffect(() => {
    if (!ready || reduceMotion) return

    const ctx = gsap.context(() => {
      // Revelações em lote
      gsap.set('.rv', { autoAlpha: 0, y: 48 })
      ScrollTrigger.batch('.rv', {
        start: 'top 90%',
        once: true,
        onEnter: (batch) => gsap.to(batch, { autoAlpha: 1, y: 0, duration: 1.1, ease: 'expo.out', stagger: 0.08, overwrite: true }),
      })

      // Títulos de seção: revelação por máscara
      gsap.utils.toArray('.sec-title').forEach((t) => {
        gsap.fromTo(t, { clipPath: 'inset(0 0 100% 0)', y: 40 }, {
          clipPath: 'inset(0 0 -10% 0)', y: 0, duration: 1.3, ease: 'expo.out',
          scrollTrigger: { trigger: t, start: 'top 88%', once: true },
        })
      })
      gsap.utils.toArray('.sec-meta').forEach((m) => {
        gsap.from(m, { opacity: 0, x: -20, duration: 1, ease: 'expo.out', scrollTrigger: { trigger: m, start: 'top 92%', once: true } })
      })

      // Wordmark JESS preenchendo com o scroll
      const wm = document.querySelector('.wordmark')
      if (wm) {
        gsap.fromTo(wm, { backgroundPosition: '100% 0' }, {
          backgroundPosition: '0% 0', ease: 'none',
          scrollTrigger: { trigger: wm, start: 'top 85%', end: 'bottom 35%', scrub: true },
        })
        gsap.from(wm, { yPercent: 30, opacity: 0, duration: 1.4, ease: 'expo.out', scrollTrigger: { trigger: wm, start: 'top 92%', once: true } })
      }

      // Linha da timeline
      const rail = document.querySelector('.tl-rail i')
      if (rail) {
        gsap.fromTo(rail, { scaleY: 0 }, { scaleY: 1, ease: 'none', scrollTrigger: { trigger: '.timeline', start: 'top 75%', end: 'bottom 60%', scrub: true } })
      }

      // Barras de idiomas
      gsap.utils.toArray('.bar i').forEach((b) => {
        gsap.fromTo(b, { scaleX: 0 }, { scaleX: 1, duration: 1.6, ease: 'expo.inOut', scrollTrigger: { trigger: b, start: 'top 92%', once: true } })
      })

      // Marca gigante do rodapé
      gsap.from('.fm-l', {
        yPercent: 70, rotateX: -70, opacity: 0, duration: 1.4, ease: 'expo.out', stagger: 0.09,
        clearProps: 'transform,opacity',
        scrollTrigger: { trigger: '.foot-mark', start: 'top 92%', once: true },
      })

      // Marquees reagem à velocidade e direção do scroll
      const tweens = gsap.utils.toArray('.marquee').map((m) => {
        const track = m.querySelector('.marquee-track')
        track.style.animation = 'none'
        const dur = parseFloat(m.dataset.speed) || 40
        return m.dataset.dir === '-1'
          ? gsap.fromTo(track, { xPercent: -50 }, { xPercent: 0, duration: dur, ease: 'none', repeat: -1 })
          : gsap.to(track, { xPercent: -50, duration: dur, ease: 'none', repeat: -1 })
      })
      ScrollTrigger.create({
        onUpdate: (self) => {
          const dir = self.direction || 1
          const boost = 1 + Math.min(Math.abs(self.getVelocity()) / 600, 5)
          tweens.forEach((tw) => {
            gsap.to(tw, {
              timeScale: dir * boost, duration: 0.25, overwrite: true,
              onComplete: () => gsap.to(tw, { timeScale: dir, duration: 1.2, overwrite: true }),
            })
          })
        },
      })
    })

    return () => ctx.revert()
  }, [ready])

  // Troca de idioma muda alturas: recalcula posições
  useEffect(() => {
    if (ready) ScrollTrigger.refresh()
  }, [lang, ready])
}
