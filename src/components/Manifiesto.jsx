import { manifiesto, imagenes } from '../data/restaurante.js'
import Parallax from './Parallax.jsx'
import Reveal from './Reveal.jsx'

export default function Manifiesto() {
  return (
    <section id="leña">
      <Parallax
        src={imagenes.lenos}
        alt="La leña encendida"
        speed={0.2}
        overlay="veil-dark"
        className="min-h-[70vh] flex items-center"
      >
        <div className="wrap py-24 text-center">
          <Reveal className="kicker justify-center mb-7" style={{ justifyContent: 'center' }}>
            Nuestra manera
          </Reveal>
          <Reveal
            as="p"
            delay={1}
            className="mx-auto max-w-4xl font-display text-[1.7rem] leading-snug sm:text-[2.6rem] sm:leading-[1.2] text-crema-light text-shadow-soft"
          >
            “{manifiesto}”
          </Reveal>
        </div>
      </Parallax>
    </section>
  )
}
