import { stack, stackBonus } from '../data/content'
import { useLang } from '../lib/i18n'
import { SectionHead } from './ui'

const pad = (n) => String(n).padStart(2, '0')

export default function Stack() {
  const { t } = useLang()
  const total = stack.reduce((n, cat) => n + cat.items.length, 0)

  return (
    <section id="habilidades" className="sec alt">
      <div className="wrap">
        <SectionHead
          index="05"
          label="Stack"
          right={{ pt: `${total} tecnologias`, en: `${total} technologies` }}
          title={{ pt: ['Stack', 'técnico'], en: ['Tech', 'stack'] }}
        />

        {stack.map((cat, i) => (
          <div className="stack-row rv" key={i}>
            <div className="stack-cat"><b>{pad(i + 1)}</b> {t(cat.name)}</div>
            <div className="tiles">
              {cat.items.map(([icon, label], j) => (
                <div className="tile spot" key={j}>
                  <i className={icon} />
                  <span>{t(label)}</span>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="stack-row rv">
          <div className="stack-cat"><b>{pad(stack.length + 1)}</b> {t(stackBonus.name)}</div>
          <div className="tags">
            {stackBonus.items.map((it) => <span className="tag" key={it}>{it}</span>)}
          </div>
        </div>
      </div>
    </section>
  )
}
