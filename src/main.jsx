import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { LangProvider } from './lib/i18n'
import { ToastProvider } from './lib/toast'
import App from './App'
import './styles.css'

const app = (
  <StrictMode>
    <LangProvider>
      <ToastProvider>
        <App />
      </ToastProvider>
    </LangProvider>
  </StrictMode>
)

// Em produção o HTML já vem pré-renderizado (SEO): só hidrata. No dev, renderiza do zero.
const container = document.getElementById('root')
if (container.hasChildNodes()) hydrateRoot(container, app)
else createRoot(container).render(app)

console.log('%c\n ██████╗ ███████╗     ██╗███╗   ███╗\n██╔════╝ ██╔════╝     ██║████╗ ████║\n██║  ███╗█████╗       ██║██╔████╔██║\n██║   ██║██╔══╝  ██   ██║██║╚██╔╝██║\n╚██████╔╝██║     ╚█████╔╝██║ ╚═╝ ██║\n ╚═════╝ ╚═╝      ╚════╝ ╚═╝     ╚═╝\n', 'color:#f2f2f2;font-family:monospace')
console.log('%c Gabriel Felipe Jess Meira ', 'background:#f2f2f2;color:#050505;font-weight:bold;padding:3px 8px')
console.log('%c Engenheiro de Software · CEO & Founder @ JESS Branding · Mestrando PUCPR', 'color:#a3a3a3')
console.log('%c → jessbranding.com.br', 'color:#a3a3a3')
