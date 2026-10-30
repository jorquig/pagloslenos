import { useEffect, useState } from 'react'
import { info } from '../data/restaurante.js'
import Icon from './Icon.jsx'

const enlaces = [
  { href: '#carta', label: 'Carta' },
  { href: '#historia', label: 'Nosotros' },
  { href: '#opiniones', label: 'Opiniones' },
  { href: '#ubicacion', label: 'Ubicación' },
]

export default function Navbar() {
  const [abierto, setAbierto] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={
        'sticky top-0 z-40 transition-all duration-500 ' +
        (scrolled
          ? 'bg-carbon-950/92 backdrop-blur-md border-b border-white/8 shadow-lg shadow-black/30'
          : 'bg-transparent border-b border-transparent')
      }
    >
      <nav className="wrap h-16 flex items-center justify-between">
        <a
          href="#inicio"
          className="font-display text-xl uppercase tracking-[0.22em] text-crema-light transition-colors hover:text-crema"
        >
          Los Leños
        </a>

        <ul className="hidden md:flex items-center gap-8 text-[0.8rem] font-semibold uppercase tracking-wider text-crema-muted">
          {enlaces.map((e) => (
            <li key={e.href}>
              <a href={e.href} className="transition-colors hover:text-crema-light">
                {e.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a href="#reservas" className="btn-ember !px-4 !py-2.5 !text-[0.72rem]">
            Reservar
          </a>
          <button
            className="md:hidden grid h-10 w-10 place-items-center rounded-full text-crema hover:bg-white/5"
            onClick={() => setAbierto((v) => !v)}
            aria-label="Abrir menú"
            aria-expanded={abierto}
          >
            <Icon name={abierto ? 'close' : 'menu'} className="h-6 w-6" />
          </button>
        </div>
      </nav>

      {abierto && (
        <div className="md:hidden border-t border-white/8 bg-carbon-900/97 backdrop-blur-md">
          <ul className="wrap py-2 text-crema">
            {enlaces.map((e) => (
              <li key={e.href}>
                <a
                  href={e.href}
                  className="block py-3 border-b border-white/5 text-sm uppercase tracking-wider"
                  onClick={() => setAbierto(false)}
                >
                  {e.label}
                </a>
              </li>
            ))}
            <li className="pt-3 pb-1">
              <a
                href={`tel:${info.telefonoLink}`}
                className="inline-flex items-center gap-2 text-ember-light"
              >
                <Icon name="phone" className="h-4 w-4" /> {info.telefono}
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
