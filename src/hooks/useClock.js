import { useEffect, useState } from 'react'

let fmt = null
try {
  fmt = new Intl.DateTimeFormat('pt-BR', { timeZone: 'America/Sao_Paulo', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false })
} catch { /* Intl sem suporte a fuso horário */ }

const now = () => (fmt ? fmt.format(new Date()) : new Date().toTimeString().slice(0, 8))

/* Hora local de Curitiba, atualizada a cada segundo.
   Começa com um marcador para bater com o HTML pré-renderizado. */
export function useClock() {
  const [time, setTime] = useState('--:--:--')
  useEffect(() => {
    setTime(now())
    const id = setInterval(() => setTime(now()), 1000)
    return () => clearInterval(id)
  }, [])
  return time
}
