import { renderToString } from 'react-dom/server'
import { LangProvider } from './lib/i18n'
import { ToastProvider } from './lib/toast'
import App from './App'

/* Usado só no build: gera o HTML estático da página (scripts/prerender.mjs) */
export function render() {
  return renderToString(
    <LangProvider>
      <ToastProvider>
        <App />
      </ToastProvider>
    </LangProvider>
  )
}
