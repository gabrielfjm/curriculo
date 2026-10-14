import { useCallback, useState } from 'react'
import { marqueeMain } from './data/content'
import { useLang } from './lib/i18n'
import { useSmoothScroll } from './hooks/useSmoothScroll'
import { usePointerEffects } from './hooks/usePointerEffects'
import { useScrollAnimations } from './hooks/useScrollAnimations'
import Loader from './components/Loader'
import Cursor from './components/Cursor'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Jess from './components/Jess'
import Publications from './components/Publications'
import Education from './components/Education'
import Stack from './components/Stack'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Volunteering from './components/Volunteering'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { Marquee } from './components/ui'

export default function App() {
  const { lang, en } = useLang()
  const [ready, setReady] = useState(false)
  const onLoaded = useCallback(() => setReady(true), [])

  useSmoothScroll()
  usePointerEffects()
  useScrollAnimations(ready, lang)

  return (
    <>
      <a className="skip" href="#sobre">{en ? 'Skip to content' : 'Pular para o conteúdo'}</a>
      <Loader onDone={onLoaded} />

      <div className="grain" aria-hidden="true" />
      <div className="gridlines" aria-hidden="true"><span /><span /><span /><span /><span /></div>
      <Cursor />
      <Nav />

      <main>
        <Hero ready={ready} />
        <Marquee items={marqueeMain} speed={38} />
        <About ready={ready} />
        <Jess />
        <Publications />
        <Education />
        <Stack />
        <Experience />
        <Projects />
        <Volunteering />
        <Contact />
      </main>

      <Footer />
    </>
  )
}
