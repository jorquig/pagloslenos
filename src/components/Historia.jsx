import { historia, imagenes } from '../data/restaurante.js'
import Reveal from './Reveal.jsx'

export default function Historia() {
  return (
    <section id="historia" className="relative">
      <div className="seccion grid gap-10 lg:grid-cols-2 lg:items-center">
        {/* Foto */}
        <Reveal className="order-1">
          <div className="foto-frame aspect-[4/5] sm:aspect-[5/5] group">
            {/* [FOTO DEL LOCAL] el parrillero / la brasa — reemplazar /img/historia.jpg */}
            <img
              src={imagenes.historia}
              alt="Asado a la leña en Los Leños"
              className="transition-transform duration-[1.2s] ease-soft group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 veil-bottom" />
            <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2 text-[11px] uppercase tracking-label text-crema/70">
              <span className="h-px w-6 bg-oro/70" /> El fuego, todos los días
            </div>
          </div>
        </Reveal>

        {/* Texto */}
        <div className="order-2 lg:pl-6">
          <Reveal className="kicker mb-5">Nuestra historia</Reveal>
          <Reveal as="h2" delay={1} className="titulo text-5xl sm:text-6xl mb-6">
            {historia.titulo}
          </Reveal>
          {historia.parrafos.map((p, i) => (
            <Reveal
              as="p"
              delay={i + 1}
              key={i}
              className="mb-4 max-w-prose text-[1.02rem] leading-relaxed text-crema/80"
            >
              {p}
            </Reveal>
          ))}
          <Reveal delay={3} className="mt-6 flex items-center gap-3">
            <span className="font-display italic text-2xl text-ember-glow">{historia.firma}</span>
            <span className="h-px flex-1 max-w-[120px] rule-gold" />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
