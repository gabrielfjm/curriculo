import { useState } from 'react'
import { company, profile } from '../data/content'
import { useLang } from '../lib/i18n'
import { useToast } from '../lib/toast'
import { SectionHead } from './ui'

const links = [
  { href: profile.whatsapp, icon: 'fab fa-whatsapp', label: 'WhatsApp', value: profile.phone },
  { href: company.url, icon: 'fas fa-globe', label: company.name, value: company.domain },
  { href: company.instagram, icon: 'fab fa-instagram', label: 'Instagram', value: company.instagramHandle },
  { href: profile.linkedin, icon: 'fab fa-linkedin-in', label: 'LinkedIn', value: 'in/gabrielfjm' },
  { href: profile.github, icon: 'fab fa-github', label: 'GitHub', value: 'github.com/gabrielfjm' },
]

const fields = [
  { id: 'name', type: 'text', auto: 'name', label: { pt: 'nome *', en: 'name *' }, ph: { pt: 'Seu nome', en: 'Your name' } },
  { id: 'email', type: 'email', auto: 'email', label: 'email *', ph: { pt: 'seu@email.com', en: 'your@email.com' } },
  { id: 'subject', type: 'text', label: { pt: 'assunto *', en: 'subject *' }, ph: { pt: 'Proposta, projeto, pesquisa...', en: 'Proposal, project, research...' } },
]

export default function Contact() {
  const { t, en } = useLang()
  const toast = useToast()
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  const copyEmail = async () => {
    const ok = () => toast(en ? 'Email copied!' : 'Email copiado!')
    try {
      await navigator.clipboard.writeText(profile.email)
      ok()
    } catch {
      toast(profile.email)
    }
  }

  const submit = (e) => {
    e.preventDefault()
    const { name, email, subject, message } = Object.fromEntries(Object.entries(form).map(([k, v]) => [k, v.trim()]))
    if (!name || !email || !subject || !message) { toast(en ? 'Please fill in all fields!' : 'Preencha todos os campos!'); return }
    const subj = encodeURIComponent(subject + (en ? ' | via Portfolio' : ' | via Portfólio'))
    const body = encodeURIComponent(`${en ? 'Name' : 'Nome'}: ${name}\nEmail: ${email}\n\n${message}`)
    window.location.href = `mailto:${profile.email}?subject=${subj}&body=${body}`
    toast(en ? 'Opening your email client...' : 'Abrindo seu cliente de email...')
  }

  const [nameField, emailField, subjectField] = fields
  const input = (f) => (
    <div className="fg" key={f.id}>
      <label htmlFor={`c-${f.id}`}>{t(f.label)}</label>
      <input type={f.type} id={`c-${f.id}`} autoComplete={f.auto} placeholder={t(f.ph)} value={form[f.id]} onChange={set(f.id)} />
    </div>
  )

  return (
    <section id="contato" className="sec alt">
      <div className="wrap">
        <SectionHead index="09" label={{ pt: 'Contato', en: 'Contact' }} right={{ pt: 'Resposta rápida', en: 'Fast reply' }} />
        <h2 className="sr-only">{t({ pt: 'Contato', en: 'Contact' })}</h2>

        <a className="contact-big rv" href={profile.whatsapp} target="_blank" rel="noopener" data-cursor="Chat">
          {en ? "Let's build" : 'Vamos criar'}<br />
          <span className="outline">{en ? 'something?' : 'algo juntos?'}</span> <span className="arr">↗</span>
        </a>

        <div className="contact-grid">
          <div className="rv">
            <p className="contact-intro">
              {t({
                pt: 'Disponível para novas oportunidades, projetos com a JESS, colaborações, pesquisas e parcerias. Não hesite em entrar em contato, respondo o mais rápido possível!',
                en: "Available for new opportunities, projects with JESS, collaborations, research and partnerships. Don't hesitate to get in touch. I'll reply as soon as possible!",
              })}
            </p>

            <button className="ci" type="button" onClick={copyEmail}>
              <span className="ci-ico"><i className="fas fa-envelope" /></span>
              <span className="ci-text"><span className="ci-label">Email</span><span className="ci-val">{profile.email}</span></span>
              <span className="ci-end">{en ? 'copy' : 'copiar'} <i className="fas fa-copy" /></span>
            </button>
            {links.map((l) => (
              <a href={l.href} target="_blank" rel="noopener" className="ci" key={l.href}>
                <span className="ci-ico"><i className={l.icon} /></span>
                <span className="ci-text"><span className="ci-label">{l.label}</span><span className="ci-val">{l.value}</span></span>
                <span className="ci-end">↗</span>
              </a>
            ))}
          </div>

          <form className="form card rv" onSubmit={submit} noValidate>
            <p className="form-title">{en ? '// send a message' : '// envie uma mensagem'}</p>
            <div className="fg-row">{input(nameField)}{input(emailField)}</div>
            {input(subjectField)}
            <div className="fg">
              <label htmlFor="c-message">{en ? 'message *' : 'mensagem *'}</label>
              <textarea id="c-message" placeholder={en ? 'Hi Gabriel, I would like to...' : 'Olá Gabriel, gostaria de...'} value={form.message} onChange={set('message')} />
            </div>
            <button className="btn btn-solid magnetic" type="submit">
              {en ? 'Send message' : 'Enviar mensagem'} <i className="fas fa-paper-plane" />
            </button>
            <p className="form-note">{en ? '// opens your email client with the filled data' : '// abre seu cliente de email com os dados preenchidos'}</p>
          </form>
        </div>
      </div>
    </section>
  )
}
