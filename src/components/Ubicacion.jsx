import { info } from '../data/restaurante.js'
import Reveal from './Reveal.jsx'
import Icon from './Icon.jsx'

export default function Ubicacion() {
  const { lat, lng } = info.coordenadas
  const mapaSrc = `https://www.google.com/maps?q=${lat},${lng}&z=16&output=embed`

  return (
    <section id="ubicacion" className="seccion">
      <div className="mb-10 text-center">
        <Reveal className="kicker justify-center mb-4" style={{ justifyContent: 'center' }}>
          Dónde estamos
        </Reveal>
        <Reveal as="h2" delay={1} className="titulo text-5xl sm:text-6xl">
          Ubicación y horarios
        </Reveal>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Reveal className="foto-frame min-h-[300px] border border-white/8">
          <iframe
            title="Mapa de Los Leños Parrilla"
            src={mapaSrc}
            className="h-full min-h-[300px] w-full"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </Reveal>

        <Reveal delay={1} className="card flex flex-col gap-6 p-6 sm:p-8">
          {[
            {
              icon: 'mapPin',
              titulo: 'Dirección',
              lineas: [`${info.direccion}`, `San Salvador de Jujuy (CP ${info.codigoPostal})`],
            },
            {
              icon: 'clock',
              titulo: 'Horarios',
              lineas: ['Todos los días', '11:00 a 16:00', '20:00 a 02:00'],
            },
            { icon: 'phone', titulo: 'Teléfono', lineas: [info.telefono] },
          ].map((b) => (
            <div key={b.titulo} className="flex items-start gap-4">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-ember/30 bg-ember/10 text-ember-glow">
                <Icon name={b.icon} className="h-5 w-5" />
              </span>
              <div>
                <p className="font-display text-lg text-crema-light">{b.titulo}</p>
                {b.lineas.map((l) => (
                  <p key={l} className="text-crema/70">
                    {l}
                  </p>
                ))}
              </div>
            </div>
          ))}

          <div className="mt-auto flex flex-col gap-3 pt-2 sm:flex-row">
            <a
              href={info.google.comoLlegarUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ember flex-1"
            >
              <Icon name="navigation" className="h-5 w-5" /> Cómo llegar
            </a>
            <a href={`tel:${info.telefonoLink}`} className="btn-outline flex-1">
              <Icon name="phone" className="h-5 w-5" /> Llamar
            </a>
          </div>
        </Reveal>
      </div>

      <p className="mt-5 text-center text-xs text-crema-muted/70">
        {/* [FOTOS DEL LOCAL] se pueden sumar fotos reales de la parrilla y el salón. */}
        Coordenadas y datos de contacto públicos (Google Maps).
      </p>
    </section>
  )
}
