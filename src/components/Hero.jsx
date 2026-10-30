import { useEffect, useState } from 'react'
import { info, imagenes } from '../data/restaurante.js'
import { estadoActual, horaArgentina } from '../utils/horario.js'
import Icon from './Icon.jsx'

function EstadoChip() {
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
    <div className="inline-flex flex-col items-start gap-2 text-shadow-soft sm:flex-row sm:items-center sm:gap-4">
      <span className="inline-flex items-center gap-2.5">
        <span
          aria-hidden="true"
          className={'h-2 w-2 shrink-0 ' + (estado.abierto ? 'bg-green-400' : 'bg-red-400')}
        />
        <span
          className={
            'text-xs font-semibold uppercase tracking-[0.2em] ' +
            (estado.abierto ? 'text-green-300' : 'text-red-300')
          }
        >
          {estado.abierto ? 'Abierto ahora' : 'Cerrado'}
        </span>
      </span>
      <span className="hidden h-3.5 w-px bg-crema/25 sm:block" />
      <span className="text-[0.7rem] uppercase tracking-[0.14em] text-crema-muted">
        {estado.detalle} · {hora} hs
      </span>
    </div>
  )
}

export default function Hero() {
  return (
    <section id="inicio" className="relative -mt-16 min-h-[94svh] flex items-end overflow-hidden">
      {/* [FOTO DEL LOCAL] fondo principal — reemplazar /img/hero.jpg */}
      <img
        src={imagenes.hero}
        alt="Parrilla a la leña con los cortes al fuego"
        className="absolute inset-0 h-full w-full object-cover animate-kenburns"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-carbon-950/80 via-carbon-950/35 to-carbon-950" />
      <div className="absolute inset-0 veil-side" />

      <div className="wrap relative pb-16 pt-28 sm:pb-24">
        <div className="max-w-2xl">
          <div className="reveal is-visible kicker mb-5">
            Parrilla · San Salvador de Jujuy
          </div>

          <h1 className="titulo text-shadow-soft text-[4.2rem] leading-[0.86] sm:text-[8.5rem]">
            Los Leños
            <span className="-mt-1 block font-display italic font-normal text-ember-glow text-[3rem] sm:text-[6rem]">
              a la leña
            </span>
          </h1>

          <p className="mt-7 max-w-prose text-xl text-crema/85 text-shadow-soft sm:text-2xl">
            {info.descripcionCorta}
          </p>

          <div className="mt-8">
            <EstadoChip />
          </div>

          <div className="mt-9 flex flex-col sm:flex-row gap-3">
            <a href="#carta" className="btn-ember">
              Ver la carta
            </a>
            <a href="#reservas" className="btn-outline">
              Reservar mesa
            </a>
          </div>
        </div>
      </div>

      <a
        href="#leña"
        aria-label="Bajar"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-crema-muted animate-floaty hover:text-crema"
      >
        <Icon name="arrowDown" className="h-6 w-6" />
      </a>
    </section>
  )
}
