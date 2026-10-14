/*
 * Gera o CV em PDF (PT e EN) a partir de src/data/content.js.
 * Uso: npm run cv   (precisa do Google Chrome instalado; ou defina CHROME_PATH)
 *
 * Saída: public/assets/curriculo.pdf (PT) e public/assets/resume.pdf (EN)
 */
import fs from 'node:fs'
import crypto from 'node:crypto'
import path from 'node:path'
import puppeteer from 'puppeteer-core'
import { PDFDocument } from 'pdf-lib'
import { renderCV, footerTemplate } from './template.mjs'
import { profile } from '../../src/data/content.js'

const root = path.resolve(import.meta.dirname, '../..')
const out = path.join(root, 'public/assets')

const chromePath = process.env.CHROME_PATH || [
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe',
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/usr/bin/google-chrome',
  '/usr/bin/chromium',
].find((p) => fs.existsSync(p))
if (!chromePath) throw new Error('Chrome não encontrado. Defina a variável CHROME_PATH.')

const iconDataUri = 'data:image/png;base64,' + fs.readFileSync(path.join(root, 'public/icon-192.png')).toString('base64')

// Fontes estáticas (@fontsource) embutidas em base64
const fontFiles = [
  ['Inter', '@fontsource/inter/files/inter-latin', [400, 500, 600, 700]],
  ['Space Grotesk', '@fontsource/space-grotesk/files/space-grotesk-latin', [500, 600, 700]],
  ['JetBrains Mono', '@fontsource/jetbrains-mono/files/jetbrains-mono-latin', [400, 500]],
]
const fontCss = fontFiles.flatMap(([family, base, weights]) => weights.map((w) => {
  const data = fs.readFileSync(path.join(root, 'node_modules', `${base}-${w}-normal.woff2`)).toString('base64')
  return `  @font-face { font-family: '${family}'; font-weight: ${w}; font-style: normal; src: url(data:font/woff2;base64,${data}) format('woff2'); }`
})).join('\n')

const variants = [
  {
    lang: 'pt', file: 'curriculo.pdf',
    title: 'Currículo · Gabriel Felipe Jess Meira · Engenheiro de Software',
    subject: 'Currículo de Gabriel Felipe Jess Meira: Engenheiro de Software, Desenvolvedor Full Stack e CEO da JESS Branding',
    keywords: ['Engenheiro de Software', 'Desenvolvedor Full Stack', 'Java', 'Spring Boot', 'React', 'TypeScript', 'Flutter', '.NET', 'PHP', 'MySQL', 'JESS Branding', 'PUCPR', 'Mestrado em Informática'],
  },
  {
    lang: 'en', file: 'resume.pdf',
    title: 'Resume · Gabriel Felipe Jess Meira · Software Engineer',
    subject: 'Resume of Gabriel Felipe Jess Meira: Software Engineer, Full Stack Developer and CEO of JESS Branding',
    keywords: ['Software Engineer', 'Full Stack Developer', 'Java', 'Spring Boot', 'React', 'TypeScript', 'Flutter', '.NET', 'PHP', 'MySQL', 'JESS Branding', 'PUCPR', 'MSc Computer Science'],
  },
]

const browser = await puppeteer.launch({ executablePath: chromePath, headless: true })
try {
  // Foto reduzida para 640px, colorida (a original tem 2048px)
  const photoPage = await browser.newPage()
  const photoDataUri = await photoPage.evaluate(async (src) => {
    const img = new Image()
    img.src = src
    await img.decode()
    const c = document.createElement('canvas')
    c.width = c.height = 640
    const ctx = c.getContext('2d')
    ctx.imageSmoothingQuality = 'high'
    ctx.drawImage(img, 0, 0, 640, 640)
    return c.toDataURL('image/jpeg', 0.86)
  }, 'data:image/png;base64,' + fs.readFileSync(path.join(root, 'assets-src/foto-original.png')).toString('base64'))
  await photoPage.close()

  for (const v of variants) {
    const page = await browser.newPage()
    await page.setContent(renderCV(v.lang, { iconDataUri, photoDataUri, fontCss }), { waitUntil: 'load' })
    await page.evaluate(() => document.fonts.ready)
    const pdf = await page.pdf({
      format: 'A4',
      preferCSSPageSize: true,
      printBackground: true,
      tagged: true,
      outline: true,
      displayHeaderFooter: true,
      headerTemplate: '<span></span>',
      footerTemplate: footerTemplate(v.lang),
    })
    await page.close()

    // Metadados lidos por buscadores e sistemas de recrutamento
    const doc = await PDFDocument.load(pdf)
    doc.setTitle(v.title, { showInWindowTitleBar: true })
    doc.setAuthor(profile.name)
    doc.setSubject(v.subject)
    doc.setKeywords(v.keywords)
    doc.setLanguage(v.lang === 'en' ? 'en-US' : 'pt-BR')
    doc.setCreator('gabrielfjm.com.br')
    doc.setProducer('gabrielfjm.com.br')
    const bytes = await doc.save()
    fs.writeFileSync(path.join(out, v.file), bytes)
    console.log(`cv: ${v.file} · ${doc.getPageCount()} página(s) · ${(bytes.length / 1024).toFixed(0)} kB`)
  }
} finally {
  await browser.close()
}

// Código de versão usado no link do CV no site (muda a cada PDF novo e fura o cache do navegador)
const hash = crypto.createHash('sha1')
for (const v of variants) hash.update(fs.readFileSync(path.join(out, v.file)))
const version = hash.digest('hex').slice(0, 8)
fs.writeFileSync(path.join(root, 'src/data/cv-version.js'), `// Gerado por npm run cv. Não edite.
export const cvVersion = '${version}'
`)
console.log(`cv: versão ${version}`)
