import { useState } from 'react'
import { horarios, imagenes } from '../data/restaurante.js'
import { textoReserva } from '../utils/mensajes.js'
import Modal from './Modal.jsx'
import Reveal from './Reveal.jsx'
import Icon from './Icon.jsx'

function horaValida(hhmm) {
  if (!hhmm) return false
  const [h, m] = hhmm.split(':').map(Number)
  const t = h * 60 + m
  return horarios.franjas.some(({ desde, hasta }) => {
    const [hd, md] = desde.split(':').map(Number)
    const [hh, mh] = hasta.split(':').map(Number)
    const ini = hd * 60 + md
    const fin = hh * 60 + mh
    if (fin <= ini) return t >= ini || t < fin
    return t >= ini && t <= fin
  })
}

export default function Reservas() {
  const [form, setForm] = useState({ nombre: '', fecha: '', hora: '', personas: 2, comentario: '' })
  const [error, setError] = useState('')
  const [preview, setPreview] = useState(null)

  const set = (campo) => (e) => setForm((f) => ({ ...f, [campo]: e.target.value }))
  const hoy = new Date().toISOString().split('T')[0]

  const confirmar = () => {
    if (!form.nombre.trim()) return setError('Ingresá tu nombre.')
    if (!form.fecha) return setError('Elegí una fecha.')
    if (!form.hora) return setError('Elegí una hora.')
    if (!horaValida(form.hora))
      return setError(
        `La hora está fuera del horario de atención (${horarios.texto.replace('Todos los días · ', '')}).`,
      )
    if (!form.personas || Number(form.personas) < 1) return setError('Indicá cuántas personas.')
    setError('')
    setPreview(
      textoReserva({
        nombre: form.nombre.trim(),
        fecha: form.fecha,
        hora: form.hora,
        personas: form.personas,
        comentario: form.comentario.trim(),
      }),
    )
  }

  return (
    <section id="reservas" className="seccion">
      <div className="overflow-hidden rounded-3xl border border-white/8 bg-carbon-800/70 lg:grid lg:grid-cols-2">
        {/* Imagen de ambiente (entra con zoom + fundido) */}
        <Reveal variant="img" className="relative hidden min-h-[520px] lg:block">
          {/* [FOTO DEL LOCAL] salón / ambiente — reemplazar /img/ambiente.jpg */}
          <img
            src={imagenes.ambiente}
            alt="Ambiente del salón"
            className="absolute inset-0 h-full w-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-carbon-950/30 to-carbon-900/80" />
          <div className="absolute bottom-8 left-8 right-8">
            <p className="font-display text-3xl italic text-crema-light text-shadow-soft">
              La mesa larga de los domingos
            </p>
            <p className="mt-2 text-sm text-crema/70">
              Ambiente familiar, para turistas y para los de siempre.
            </p>
          </div>
        </Reveal>

        {/* Formulario */}
        <div className="p-6 sm:p-10">
          <Reveal className="kicker mb-4">Reservas</Reveal>
          <Reveal as="h2" delay={1} className="titulo text-5xl sm:text-6xl mb-2">
            Reservá tu mesa
          </Reveal>
          <Reveal as="p" delay={1} className="mb-7 flex items-center gap-2 text-sm text-crema/65">
            <Icon name="clock" className="h-4 w-4 text-ember-light" /> {horarios.texto}
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label className="mb-1.5 block text-sm text-crema/70">Nombre</label>
              <input value={form.nombre} onChange={set('nombre')} placeholder="A nombre de…" className="input" />
            </div>
            <div>
              <label className="mb-1.5 block text-sm text-crema/70">Fecha</label>
              <input type="date" min={hoy} value={form.fecha} onChange={set('fecha')} className="input" />
            </div>
            <div>
              <label className="mb-1.5 block text-sm text-crema/70">Hora</label>
              <input type="time" value={form.hora} onChange={set('hora')} className="input" />
            </div>
            <div className="sm:col-span-2">
              <label className="mb-1.5 block text-sm text-crema/70">Cantidad de personas</label>
              <input
                type="number"
                min={1}
                max={30}
                value={form.personas}
                onChange={set('personas')}
                className="input"
              />
            </div>
            <div className="sm:col-span-2">
              <label className="mb-1.5 block text-sm text-crema/70">Comentario (opcional)</label>
              <textarea
                value={form.comentario}
                onChange={set('comentario')}
                rows={3}
                placeholder="Festejo, mesa tranquila, silla para bebé…"
                className="input resize-none"
              />
            </div>
          </div>

          {error && <p className="mt-3 text-sm text-red-300">{error}</p>}

          <button onClick={confirmar} className="btn-ember mt-6 w-full">
            Confirmar reserva
          </button>
        </div>
      </div>

      <Modal abierto={preview != null} onClose={() => setPreview(null)} titulo="Reserva lista">
        <p className="mb-3 text-sm text-crema/70">
          Este es el mensaje que recibiría el local con tu reserva:
        </p>
        <pre className="whitespace-pre-wrap rounded-xl border border-white/10 bg-carbon-900/80 p-4 font-body text-sm text-crema/90">
          {preview}
        </pre>
        <div className="mt-4 rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-xs text-crema/60">
          En esta versión de demostración el envío por WhatsApp está desactivado. En la versión
          final, al confirmar se abre WhatsApp con este mensaje ya escrito para el local.
        </div>
        <button onClick={() => setPreview(null)} className="btn-outline mt-4 w-full">
          Cerrar
        </button>
      </Modal>
    </section>
  )
}
