import { useEffect, useState } from 'react'
import { info, imagenes, heroTitulo } from '../data/restaurante.js'
import { estadoActual, horaArgentina } from '../utils/horario.js'

// Estado Abierto/Cerrado — sobrio, monocromático (sin punto ni verde).
function EstadoLinea() {
  const [estado, setEstado] = useState(() => estadoActual())
  const [hora, setHora] = useState(() => horaArgentina())

  useEffect(() => {
    const id = setInterval(() => {
      setEstado(estadoActual())
      setHora(horaArgentina())
    }, 30 * 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="flex items-center gap-3 text-[0.68rem] uppercase tracking-[0.28em] text-crema/55">
      <span className={estado.abierto ? 'text-crema-light' : 'text-crema/45'}>
        {estado.abierto ? 'Abierto ahora' : 'Cerrado'}
      </span>
      <span className="h-px w-8 bg-crema/25" />
      <span>
        {estado.detalle} · {hora} hs
      </span>
    </div>
  )
}

export default function Hero() {
  return (
    <section id="inicio" className="relative -mt-16 flex min-h-[94svh] items-end overflow-hidden">
      {/* [FOTO DEL LOCAL] fondo principal — reemplazar /img/hero.jpg */}
      <img
        src={imagenes.hero}
        alt="Parrilla a la leña con los cortes al fuego"
        className="absolute inset-0 h-full w-full object-cover animate-kenburns"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-carbon-950/80 via-carbon-950/40 to-carbon-950" />
      <div className="absolute inset-0 veil-side" />

      <div className="wrap relative pb-20 pt-28 sm:pb-28">
        <div className="max-w-2xl">
          <p className="mb-7 text-[0.72rem] uppercase tracking-[0.34em] text-crema/70 text-shadow-soft">
            Parrilla · San Salvador de Jujuy
          </p>

          <h1 className="titulo text-shadow-soft font-bold uppercase text-[3.4rem] leading-[0.9] sm:text-[6.8rem] sm:leading-[0.86]">
            {heroTitulo[0]}
            <span className="block">{heroTitulo[1]}</span>
          </h1>

          <p className="mt-7 max-w-xl text-lg text-crema/80 text-shadow-soft sm:text-xl">
            {info.descripcionCorta}
          </p>

          <div className="mt-8">
            <EstadoLinea />
          </div>

          <div className="mt-9 flex flex-col sm:flex-row gap-3">
            <a href="#reservas" className="btn-ember">
              Reservar mesa
            </a>
            <a href="#carta" className="btn-outline">
              Ver la carta
            </a>
          </div>
        </div>
      </div>

      {/* Indicador de scroll (como la referencia) */}
      <div className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 sm:flex">
        <span className="text-[0.6rem] uppercase tracking-[0.35em] text-crema/50">Scroll</span>
        <span className="h-12 w-px bg-gradient-to-b from-crema/45 to-transparent" />
      </div>
    </section>
  )
}
