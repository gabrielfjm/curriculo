import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Domínio próprio (gabrielfjm.com.br) no GitHub Pages: base na raiz
export default defineConfig({
  plugins: [react()],
  base: '/',
  // gsap e lenis entram no bundle do pré-render (evita problemas de import no Node)
  ssr: { noExternal: ['gsap', 'lenis'] },
})
