import { profile } from '../data/content'
import { useLang } from '../lib/i18n'

const message = {
  pt: 'Olá, Gabriel! Vim pelo seu site e gostaria de conversar.',
  en: 'Hi Gabriel! I found your website and would like to talk.',
}

/* Botão flutuante do WhatsApp: inverte as cores no hover e abre a conversa com mensagem pronta */
export default function WhatsAppButton({ ready }) {
  const { t, en } = useLang()
  const href = `${profile.whatsapp}?text=${encodeURIComponent(t(message))}`

  return (
    <a
      className={`wa-fab${ready ? ' show' : ''}`}
      href={href}
      target="_blank"
      rel="noopener"
      aria-label={en ? 'Chat on WhatsApp' : 'Conversar no WhatsApp'}
    >
      <span className="wa-label">{en ? "Let's talk" : 'Fale comigo'}</span>
      <span className="wa-ico"><i className="fab fa-whatsapp" /></span>
    </a>
  )
}
