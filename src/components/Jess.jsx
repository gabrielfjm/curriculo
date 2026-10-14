import { company, jess, profile } from '../data/content'
import { Rich, useLang } from '../lib/i18n'
import { Marquee, SectionHead } from './ui'

export default function Jess() {
  const { t } = useLang()
  const [quoteA, quoteB] = t(jess.quote)

  return (
    <>
      <section id="jess" className="sec invert">
        <div className="wrap">
          <SectionHead index="02" label={{ pt: 'Empresa', en: 'Company' }} right={company.domain} />
          <h2 className="sr-only">{t({ pt: 'JESS Branding: sites, sistemas e branding', en: 'JESS Branding: websites, systems and branding' })}</h2>

          <div className="jess-hero">
            <div className="wordmark" aria-hidden="true">Jess</div>
            <div className="jess-badge rv">
              <span>{t(jess.role)}</span>
              <b>{profile.name}</b>
              <span>{t(jess.pillars)}</span>
            </div>
          </div>

          <div className="jess-intro">
            <h3 className="jess-tagline rv">{t(jess.tagline)}</h3>
            <div className="rv">
              <p><Rich text={t(jess.intro)} /></p>
              <ul className="svc-list" aria-label={t({ pt: 'Serviços', en: 'Services' })}>
                {jess.services.map((s) => (
                  <li key={s.icon}><i className={`fas ${s.icon}`} />{t(s.name)}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="jess-cta rv">
            <q>{quoteA} <span>{quoteB}</span></q>
            <div className="actions">
              <a href={company.url} target="_blank" rel="noopener" className="btn btn-solid magnetic">
                {t(jess.cta)} <i className="fas fa-arrow-right arr" />
              </a>
              <a href={company.instagram} target="_blank" rel="noopener" className="btn btn-ghost magnetic">
                <i className="fab fa-instagram" /> {company.instagramHandle}
              </a>
            </div>
          </div>
        </div>
      </section>

      <Marquee items={jess.segments} small dir={-1} speed={45} />
    </>
  )
}
