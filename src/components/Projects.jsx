import { profile, projects } from '../data/content'
import { useLang } from '../lib/i18n'
import { SectionHead } from './ui'

export default function Projects() {
  const { t } = useLang()

  return (
    <section id="projetos" className="sec alt">
      <div className="wrap">
        <SectionHead
          index="07"
          label={{ pt: 'Projetos', en: 'Projects' }}
          right="Top 6"
          title={{ pt: ['Projetos em', 'destaque'], en: ['Featured', 'projects'] }}
        />

        <div className="proj-grid">
          {projects.map((p, i) => (
            <a className="proj card spot tilt rv" href={p.url} target="_blank" rel="noopener" data-cursor="Open" key={i}>
              <div className="proj-head">
                <span className="proj-ico"><i className={`fas ${p.icon}`} /></span>
                <span className="proj-yr">{t(p.kind)} · {p.year}</span>
              </div>
              <h3>{p.name}</h3>
              <p>{t(p.desc)}</p>
              <div className="techs">
                {p.techs.map((tech, j) => <span className="tech" key={j}>{t(tech)}</span>)}
              </div>
              <span className="proj-link">{t(p.cta)} <i className="fas fa-arrow-right" /></span>
            </a>
          ))}
        </div>

        <a className="proj-more rv" href={profile.github} target="_blank" rel="noopener">
          <i className="fab fa-github" /> {t({ pt: 'Mais projetos no GitHub', en: 'More projects on GitHub' })} ↗
        </a>
      </div>
    </section>
  )
}
