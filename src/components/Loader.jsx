import { useEffect, useRef, useState } from 'react'
import { profile } from '../data/content'

const LINES = [
  <>&gt; <b>boot</b> gabriel_felipe_jess_meira <span className="ok">[ok]</span></>,
  <>&gt; <b>load</b> engineering · branding · research <span className="ok">[ok]</span></>,
  <>&gt; <b>mount</b> jess_branding.module <span className="ok">[ok]</span></>,
  <>&gt; <b>render</b> interface --mode=monochrome</>,
]
const DURATION = 1700

/* Tela de boot estilo terminal. Exibida uma vez por sessão.
   Sempre renderiza (igual ao HTML pré-renderizado); o CSS esconde quando html.no-loader. */
export default function Loader({ onDone }) {
  const [visible, setVisible] = useState(true)
  const [lines, setLines] = useState(0)
  const [out, setOut] = useState(false)
  const numRef = useRef(null)
  const barRef = useRef(null)

  useEffect(() => {
    if (document.documentElement.classList.contains('no-loader')) { setVisible(false); onDone(); return }
    document.body.classList.add('is-loading')
    const timers = LINES.map((_, i) => setTimeout(() => setLines(i + 1), 120 + i * 340))
    let raf, t0 = null
    const step = (t) => {
      if (t0 === null) t0 = t
      const p = Math.min((t - t0) / DURATION, 1)
      const e = 1 - Math.pow(1 - p, 3)
      numRef.current.textContent = String(Math.round(e * 100)).padStart(3, '0')
      barRef.current.style.transform = `scaleX(${e})`
      if (p < 1) { raf = requestAnimationFrame(step); return }
      try { sessionStorage.setItem('gfm-loaded', '1') } catch { /* sessão indisponível */ }
      timers.push(setTimeout(() => {
        setOut(true)
        document.body.classList.remove('is-loading')
        onDone()
        timers.push(setTimeout(() => setVisible(false), 1100))
      }, 200))
    }
    raf = requestAnimationFrame(step)
    return () => { cancelAnimationFrame(raf); timers.forEach(clearTimeout); document.body.classList.remove('is-loading') }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (!visible) return null
  return (
    <div id="loader" className={out ? 'out' : ''} aria-hidden="true">
      <div className="loader-top">
        <span>GFJM.SYS</span>
        <span>Portfolio © {new Date().getFullYear()}</span>
      </div>
      <div className="loader-lines">
        {LINES.map((l, i) => <div key={i} className={`loader-line${i < lines ? ' on' : ''}`}>{l}</div>)}
      </div>
      <div className="loader-bottom">
        <div className="loader-num" ref={numRef}>000</div>
        <div className="loader-top loader-coords">
          <span>{profile.location}</span>
          <span>{profile.coords}</span>
        </div>
      </div>
      <div className="loader-bar" ref={barRef} />
    </div>
  )
}
