import { valores } from '../data/restaurante.js'
import Reveal from './Reveal.jsx'
import Icon from './Icon.jsx'

const iconos = ['fire', 'utensils', 'wheat', 'star']

export default function Valores() {
  return (
    <section className="relative border-y border-white/5 bg-carbon-900/60">
      <div className="seccion">
        <div className="mb-12 text-center">
          <Reveal className="kicker justify-center mb-4" style={{ justifyContent: 'center' }}>
            Por qué nos eligen
          </Reveal>
          <Reveal as="h2" delay={1} className="titulo text-5xl sm:text-6xl">
            Lo que se siente en la mesa
          </Reveal>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {valores.map((v, i) => (
            <Reveal
              key={v.titulo}
              delay={(i % 3) + 1}
              className="card p-6 transition-colors duration-300 hover:border-ember/40"
            >
              <span className="mb-5 inline-grid h-12 w-12 place-items-center rounded-full border border-ember/30 bg-ember/10 text-ember-glow">
                <Icon name={iconos[i % iconos.length]} className="h-6 w-6" />
              </span>
              <h3 className="font-display text-xl text-crema-light mb-2">{v.titulo}</h3>
              <p className="text-sm leading-relaxed text-crema/70">{v.texto}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
