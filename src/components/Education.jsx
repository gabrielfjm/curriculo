import { education } from '../data/content'
import { Rich, useLang } from '../lib/i18n'
import { SectionHead } from './ui'

export default function Education() {
  const { t } = useLang()
  const { award } = education

  return (
    <section id="formacao" className="sec">
      <div className="wrap">
        <SectionHead
          index="04"
          label={{ pt: 'Formação', en: 'Education' }}
          right="PUCPR · TECPUC"
          title={{ pt: ['Formação', 'acadêmica'], en: ['Academic', 'education'] }}
        />

        <div className="timeline">
          <div className="tl-rail"><i /></div>
          {education.items.map((it, i) => (
            <div className="tl-item rv" key={i}>
              <div className="tl-date">{t(it.date)}</div>
              <div className="tl-card">
                <h3>{t(it.title)}</h3>
                <p className="inst">{it.inst}</p>
                <p>{t(it.desc)}</p>
                {it.badge && <span className="chip"><i className={`fas ${it.badge.icon}`} />{t(it.badge.label)}</span>}
              </div>
            </div>
          ))}
        </div>

        {/* Prêmio Marcelino Champagnat */}
        <div className="award rv">
          <div className="award-in">
            <div className="award-ico"><i className="fas fa-trophy" /></div>
            <div>
              <p className="label">{t(award.label)}</p>
              <h3>{t(award.title)}</h3>
              <p className="sub">{t(award.sub)}</p>
              <p><Rich text={t(award.text)} /></p>
              <div className="chips">
                {award.chips.map((c) => <span className="chip" key={c.icon}><i className={`fas ${c.icon}`} />{t(c.label)}</span>)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
