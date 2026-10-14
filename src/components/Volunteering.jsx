import { volunteering } from '../data/content'
import { useLang } from '../lib/i18n'
import { SectionHead } from './ui'

export default function Volunteering() {
  const { t } = useLang()

  return (
    <section id="voluntariado" className="sec">
      <div className="wrap">
        <SectionHead
          index="08"
          label={{ pt: 'Voluntariado', en: 'Volunteering' }}
          right={{ pt: 'Liderança', en: 'Leadership' }}
          title={{ pt: ['Voluntariado &', 'liderança'], en: ['Volunteering &', 'leadership'] }}
        />

        <div className="vol-grid">
          {volunteering.map((v) => (
            <article className="vol card spot rv" key={v.icon}>
              <div className="vol-ico"><i className={`fas ${v.icon}`} /></div>
              <h3>{t(v.title)}</h3>
              <p className="org">{t(v.org)}</p>
              <p>{t(v.desc)}</p>
              {v.link && <a className="more" href={v.link.url} target="_blank" rel="noopener">{t(v.link.label)} ↗</a>}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
