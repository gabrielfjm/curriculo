import { createContext, useCallback, useContext, useRef, useState } from 'react'

const ToastContext = createContext(() => {})

export function ToastProvider({ children }) {
  const [state, setState] = useState({ msg: '', show: false })
  const timer = useRef()

  const toast = useCallback((msg) => {
    setState({ msg, show: true })
    clearTimeout(timer.current)
    timer.current = setTimeout(() => setState((s) => ({ ...s, show: false })), 3200)
  }, [])

  return (
    <ToastContext.Provider value={toast}>
      {children}
      <div className={`toast${state.show ? ' show' : ''}`} role="status" aria-live="polite">
        <i className="fas fa-check" />
        <span>{state.msg}</span>
      </div>
    </ToastContext.Provider>
  )
}

export const useToast = () => useContext(ToastContext)
