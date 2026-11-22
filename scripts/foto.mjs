/*
 * Gera as fotos otimizadas do site a partir de assets-src/perfil_2.jpeg:
 * recorte quadrado central em public/assets/foto-480.webp, foto-800.webp e foto-800.jpg.
 * Uso: npm run foto (precisa do Google Chrome ou da variável CHROME_PATH).
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import puppeteer from 'puppeteer-core'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const source = path.join(root, 'assets-src/perfil_2.jpeg')
const outDir = path.join(root, 'public/assets')

const chromePath = [
  process.env.CHROME_PATH,
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe',
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/usr/bin/google-chrome',
  '/usr/bin/chromium',
].find((p) => p && fs.existsSync(p))
if (!chromePath) throw new Error('Chrome não encontrado. Defina a variável CHROME_PATH.')

const outputs = [
  { file: 'foto-480.webp', size: 480, type: 'image/webp', quality: 0.82 },
  { file: 'foto-800.webp', size: 800, type: 'image/webp', quality: 0.82 },
  { file: 'foto-800.jpg', size: 800, type: 'image/jpeg', quality: 0.86 },
]

const browser = await puppeteer.launch({ executablePath: chromePath, headless: true })
try {
  const page = await browser.newPage()
  const src = 'data:image/jpeg;base64,' + fs.readFileSync(source).toString('base64')
  const results = await page.evaluate(async (src, outputs) => {
    const img = new Image()
    img.src = src
    await img.decode()
    const side = Math.min(img.naturalWidth, img.naturalHeight)
    const sx = (img.naturalWidth - side) / 2
    const sy = (img.naturalHeight - side) / 2
    return outputs.map(({ size, type, quality }) => {
      const c = document.createElement('canvas')
      c.width = c.height = size
      const ctx = c.getContext('2d')
      ctx.imageSmoothingQuality = 'high'
      ctx.drawImage(img, sx, sy, side, side, 0, 0, size, size)
      return c.toDataURL(type, quality)
    })
  }, src, outputs)

  outputs.forEach((o, i) => {
    const buf = Buffer.from(results[i].split(',')[1], 'base64')
    fs.writeFileSync(path.join(outDir, o.file), buf)
    console.log(`foto: ${o.file} · ${Math.round(buf.length / 1024)} kB`)
  })
} finally {
  await browser.close()
}
