import { useEffect } from 'react'
import Icon from './Icon.jsx'

export default function Modal({ abierto, onClose, titulo, children }) {
  useEffect(() => {
    if (!abierto) return
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [abierto, onClose])

  if (!abierto) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4"
      role="dialog"
      aria-modal="true"
    >
      <div
        className="absolute inset-0 bg-black/75 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />
      <div className="relative flex max-h-[92vh] w-full flex-col rounded-t-3xl border border-white/12 bg-carbon-800 shadow-plate safe-bottom sm:max-w-lg sm:rounded-3xl">
        <div className="flex items-center justify-between gap-3 border-b border-white/8 px-6 py-5">
          <h3 className="font-display text-2xl text-crema-light">{titulo}</h3>
          <button
            onClick={onClose}
            className="grid h-9 w-9 place-items-center rounded-full text-crema-muted hover:bg-white/5 hover:text-crema"
            aria-label="Cerrar"
          >
            <Icon name="close" className="h-5 w-5" />
          </button>
        </div>
        <div className="overflow-y-auto px-6 py-5">{children}</div>
      </div>
    </div>
  )
}
