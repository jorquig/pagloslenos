import { opiniones, imagenes } from '../data/restaurante.js'
import Parallax from './Parallax.jsx'
import Reveal from './Reveal.jsx'
import Icon from './Icon.jsx'

function Estrellas({ valor }) {
  return (
    <div className="relative inline-flex" aria-label={`${valor} de 5`}>
      <div className="flex text-white/15">
        {[0, 1, 2, 3, 4].map((i) => (
          <Icon key={i} name="star" className="h-6 w-6" />
        ))}
      </div>
      <div
        className="absolute inset-0 flex overflow-hidden text-oro"
        style={{ width: `${(valor / 5) * 100}%` }}
      >
        {[0, 1, 2, 3, 4].map((i) => (
          <Icon key={i} name="star" className="h-6 w-6 shrink-0" />
        ))}
      </div>
    </div>
  )
}

export default function Opiniones() {
  return (
    <section id="opiniones">
      <Parallax src={imagenes.fuego} alt="Fuego y humo" speed={0.16} overlay="veil-dark">
        <div className="wrap py-24 text-center sm:py-32">
          <Reveal className="kicker justify-center mb-6" style={{ justifyContent: 'center' }}>
            Opiniones
          </Reveal>

          <Reveal className="flex flex-col items-center gap-3">
            <span className="font-display text-7xl leading-none text-crema-light text-shadow-soft sm:text-8xl">
              {opiniones.rating.toLocaleString('es-AR')}
            </span>
            <Estrellas valor={opiniones.rating} />
            <span className="text-crema/80">{opiniones.totalTexto}</span>
          </Reveal>

          <ul className="mx-auto mt-10 grid max-w-3xl gap-2.5 sm:grid-cols-2">
            {opiniones.destacados.map((d, i) => (
              <Reveal
                as="li"
                key={d}
                delay={(i % 3) + 1}
                className="flex items-center gap-3 rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-left text-sm text-crema/85 backdrop-blur-sm"
              >
                <span className="text-ember-glow">
                  <Icon name="check" className="h-5 w-5" />
                </span>
                {d}
              </Reveal>
            ))}
          </ul>

          <Reveal delay={2} className="mt-10">
            <a
              href={opiniones.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              Ver reseñas en Google Maps <Icon name="arrowUpRight" className="h-4 w-4" />
            </a>
          </Reveal>
        </div>
      </Parallax>
    </section>
  )
}
