import { info, creditoImagenes } from '../data/restaurante.js'
import Icon from './Icon.jsx'

export default function Footer() {
  return (
    <footer className="border-t border-white/8 bg-carbon-900">
      <div className="wrap py-14">
        <div className="flex flex-col items-center text-center">
          <span className="mb-3 text-ember-glow">
            <Icon name="fire" className="h-7 w-7" />
          </span>
          <p className="font-display text-3xl text-crema-light">Los Leños</p>
          <p className="mt-1 text-sm italic text-crema/60 font-display">{info.lema}</p>

          <div className="my-6 h-px w-40 rule-gold" />

          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1 text-sm text-crema/65">
            <span className="inline-flex items-center gap-1.5">
              <Icon name="mapPin" className="h-4 w-4 text-ember-light" /> {info.direccion}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Icon name="phone" className="h-4 w-4 text-ember-light" /> {info.telefono}
            </span>
          </div>

          <nav className="mt-6 flex flex-wrap items-center justify-center gap-2">
            <a href="#carta" className="btn-ghost !py-2 text-sm">Carta</a>
            <a href="#reservas" className="btn-ghost !py-2 text-sm">Reservar</a>
            <a href="#opiniones" className="btn-ghost !py-2 text-sm">Opiniones</a>
            <a
              href={info.google.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost !py-2 text-sm"
            >
              Google Maps
            </a>
          </nav>
        </div>

        <div className="mt-10 border-t border-white/5 pt-6 text-center text-xs text-crema-muted/70">
          <p>
            Versión de demostración · sitio de muestra, sin afiliación oficial. {creditoImagenes}
          </p>
        </div>
      </div>
    </footer>
  )
}
