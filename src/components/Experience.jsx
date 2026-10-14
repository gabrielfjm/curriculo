import { experience } from '../data/content'
import { useLang } from '../lib/i18n'
import { SectionHead } from './ui'

export default function Experience() {
  const { t } = useLang()

  return (
    <section id="experiencia" className="sec">
      <div className="wrap">
        <SectionHead
          index="06"
          label={{ pt: 'Experiência', en: 'Experience' }}
          right={{ pt: `2021 a ${new Date().getFullYear()}`, en: `2021 to ${new Date().getFullYear()}` }}
          title={{ pt: ['Experiência', 'profissional'], en: ['Professional', 'experience'] }}
        />

        <div className="xp-list">
          {experience.map((x, i) => (
            <article className={`xp rv${x.current ? ' current' : ''}`} key={i}>
              <div className="xp-when">
                <b>{t(x.when)}</b>
                {x.whenSub && t(x.whenSub)}
              </div>
              <div>
                <h3>{t(x.title)}</h3>
                <div className="xp-org">
                  {x.orgUrl ? <a href={x.orgUrl} target="_blank" rel="noopener">{t(x.org)}</a> : t(x.org)}
                  <span className="chip">{t(x.chip)}</span>
                </div>
                <ul>
                  {t(x.bullets).map((b, j) => <li key={j}>{b}</li>)}
                </ul>
              </div>
              <div className="xp-idx">{String(i + 1).padStart(2, '0')}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
