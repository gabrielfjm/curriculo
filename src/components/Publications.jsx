import { publications } from '../data/content'
import { Rich, useLang } from '../lib/i18n'
import { SectionHead } from './ui'

function Authors({ list }) {
  return (
    <p className="paper-authors">
      {list.map((a, i) => (
        <span key={a.name}>
          {a.me ? <b>{a.name}</b> : a.name}
          {i < list.length - 1 && ', '}
        </span>
      ))}
    </p>
  )
}

function Links({ links }) {
  const { t } = useLang()
  return (
    <div className="paper-links">
      {links.map((l) => (
        <a key={l.url} href={l.url} target="_blank" rel="noopener" className={`btn ${l.solid ? 'btn-solid' : 'btn-ghost'} magnetic`}>
          <i className={l.icon} /> {t(l.label)}
        </a>
      ))}
    </div>
  )
}

function Paper({ p, index }) {
  const { t, en } = useLang()
  return (
    <article className={`paper rv${p.featured ? ' featured' : ''}`}>
      <div className="paper-in">
        <div className="paper-top">
          <span className="paper-badge"><i className={`fas ${p.featured ? 'fa-star' : 'fa-user-pen'}`} />{t(p.badge)}</span>
          <span className="paper-short">{String(index + 1).padStart(2, '0')} / {p.short}</span>
        </div>

        <div className={`paper-body${p.facts ? ' has-facts' : ''}`}>
          <div className="paper-main">
            <p className="paper-venue">{p.venue}</p>
            <h3 className="paper-title">{p.title}</h3>
            <Authors list={p.authors} />

            <div className="paper-review">
              <p className="label">{p.featured ? 'review' : t({ pt: 'resumo', en: 'summary' })}</p>
              {t(p.review).map((r, i) => <p key={i}><Rich text={r} /></p>)}
            </div>

            <p className="paper-cite">
              <span><i className="fas fa-book-open" /> {t(p.cite)}</span>
              {p.doi && (
                <a href={p.doiUrl || `https://doi.org/${p.doi}`} target="_blank" rel="noopener">
                  <i className="fas fa-link" /> DOI {p.doi}
                </a>
              )}
            </p>
            <Links links={p.links} />
          </div>

          {p.facts && (
            <dl className="paper-facts">
              {p.facts.map((f) => (
                <div key={f.value}>
                  <dt>{en && f.valueEn ? f.valueEn : f.value}</dt>
                  <dd>{t(f.label)}</dd>
                </div>
              ))}
            </dl>
          )}
        </div>
      </div>
    </article>
  )
}

export default function Publications() {
  return (
    <section id="publicacoes" className="sec alt">
      <div className="wrap">
        <SectionHead
          index="03"
          label={{ pt: 'Publicações', en: 'Publications' }}
          right="ICEIS · WBOTS"
          title={{ pt: ['Publicações', 'científicas'], en: ['Scientific', 'publications'] }}
        />
        <div className="papers">
          {publications.map((p, i) => <Paper p={p} index={i} key={p.short} />)}
        </div>
      </div>
    </section>
  )
}
