import { galeria } from '../data/restaurante.js'
import Reveal from './Reveal.jsx'

// Distribución de tamaños para dar ritmo al mosaico.
const spans = [
  'col-span-2 row-span-2',
  'col-span-1 row-span-1',
  'col-span-1 row-span-1',
  'col-span-2 row-span-1 sm:col-span-1 sm:row-span-2',
  'col-span-1 row-span-1',
  'col-span-1 row-span-1',
]

export default function Galeria() {
  return (
    <section id="galeria" className="seccion">
      <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
        <div>
          <Reveal className="kicker mb-4">De la parrilla</Reveal>
          <Reveal as="h2" delay={1} className="titulo text-5xl sm:text-6xl">
            Lo que sale al plato
          </Reveal>
        </div>
        <Reveal
          as="p"
          delay={2}
          className="max-w-xs text-sm text-crema/60"
        >
          Un vistazo a la brasa. Las fotos reales del local van en este mismo espacio.
        </Reveal>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 auto-rows-[140px] sm:auto-rows-[180px] gap-3">
        {galeria.map((g, i) => (
          <Reveal
            key={g.src + i}
            delay={(i % 3) + 1}
            className={`foto-frame group ${spans[i % spans.length]}`}
          >
            {/* [FOTO DEL LOCAL] reemplazar por foto real */}
            <img
              src={g.src}
              alt={g.alt}
              loading="lazy"
              className="transition-transform duration-[1.1s] ease-soft group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
            <span className="absolute bottom-3 left-3 right-3 translate-y-2 text-xs text-crema/85 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
              {g.alt}
            </span>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
