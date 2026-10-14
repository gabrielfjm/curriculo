import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useLang } from '../lib/i18n'
import { reduceMotion } from '../lib/env'

gsap.registerPlugin(ScrollTrigger)

/* Cabeçalho de seção: (01) Sobre ......... meta, mais título com palavra vazada */
export function SectionHead({ index, label, right, title }) {
  const { t } = useLang()
  const ttl = t(title)
  return (
    <header className="sec-head">
      <div className="sec-meta">
        <span><b>({index})</b> {t(label)}</span>
        <span>{t(right)}</span>
      </div>
      {ttl && (
        <h2 className="sec-title">
          {ttl[0]} <em>{ttl[1]}</em>
        </h2>
      )}
    </header>
  )
}

/* Faixa de texto infinita (o conteúdo é duplicado para o loop ficar contínuo) */
export function Marquee({ items, small, dir = 1, speed = 40 }) {
  const group = (hidden) => (
    <div className="marquee-group" aria-hidden={hidden || undefined}>
      {items.map((it) => <span className="marquee-item" key={it}>{it}</span>)}
    </div>
  )
  return (
    <div className={`marquee${small ? ' small' : ''}`} data-dir={dir} data-speed={speed} aria-hidden="true">
      <div className="marquee-track">{group(false)}{group(true)}</div>
    </div>
  )
}

/* Texto que "decodifica" a partir de caracteres aleatórios */
const GLYPHS = '!<>-_\\/[]{}=+*^?#01ABCDEFGHJKLMNOPQRSTUVWXYZ'
export function Scramble({ text, active, delay = 0, duration = 1400, className }) {
  const [out, setOut] = useState(text)

  useEffect(() => {
    if (!active || reduceMotion) { setOut(text); return }
    let raf, start = null, lastSwap = 0
    const len = text.length
    const cur = text.split('')
    const resolveAt = cur.map((_, i) => (i / len) * duration * 0.65 + Math.random() * duration * 0.35)
    const frame = (time) => {
      if (start === null) start = time + delay
      const elapsed = time - start
      const swap = time - lastSwap > 45
      let done = true
      for (let i = 0; i < len; i++) {
        if (text[i] === ' ') continue
        if (elapsed >= resolveAt[i]) cur[i] = text[i]
        else { done = false; if (swap) cur[i] = GLYPHS[(Math.random() * GLYPHS.length) | 0] }
      }
      if (swap) { lastSwap = time; setOut(cur.join('')) }
      if (done) setOut(text)
      else raf = requestAnimationFrame(frame)
    }
    raf = requestAnimationFrame(frame)
    return () => cancelAnimationFrame(raf)
  }, [active, text, delay, duration])

  return <span className={className} aria-hidden="true">{out}</span>
}

/* Efeito de digitação em loop */
export function Typing({ phrases, active }) {
  const [txt, setTxt] = useState(phrases[0])

  useEffect(() => {
    if (!active || reduceMotion) { setTxt(phrases[0]); return }
    let pi = 0, ci = 0, del = false, timer
    const tick = () => {
      const ph = phrases[pi % phrases.length]
      if (del) {
        ci--; setTxt(ph.slice(0, ci))
        if (ci <= 0) { del = false; pi = (pi + 1) % phrases.length; timer = setTimeout(tick, 350); return }
      } else {
        ci++; setTxt(ph.slice(0, ci))
        if (ci >= ph.length) { timer = setTimeout(() => { del = true; tick() }, 2200); return }
      }
      timer = setTimeout(tick, del ? 32 : 45 + Math.random() * 55)
    }
    setTxt('')
    timer = setTimeout(tick, 400)
    return () => clearTimeout(timer)
  }, [active, phrases])

  return <span>{txt}</span>
}

/* Número que conta até o valor quando entra na tela */
export function Counter({ value, ready }) {
  const ref = useRef(null)
  const [n, setN] = useState(value)

  useLayoutEffect(() => {
    if (!ready || reduceMotion) return
    setN(0)
    const o = { v: 0 }
    const st = ScrollTrigger.create({
      trigger: ref.current, start: 'top 92%', once: true,
      onEnter: () => gsap.to(o, { v: value, duration: 1.8, ease: 'expo.out', onUpdate: () => setN(Math.round(o.v)) }),
    })
    return () => st.kill()
  }, [ready, value])

  return <span ref={ref}>{n}</span>
}
