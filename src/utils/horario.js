import { horarios, info } from '../data/restaurante.js'

// Convierte "HH:MM" a minutos desde la medianoche.
function aMinutos(hhmm) {
  const [h, m] = hhmm.split(':').map(Number)
  return h * 60 + m
}

// Minutos transcurridos del día actual según la hora de Argentina.
export function minutosAhoraArgentina(fecha = new Date()) {
  const partes = new Intl.DateTimeFormat('es-AR', {
    timeZone: info.zonaHoraria,
    hour: '2-digit',
    minute: '2-digit',
    hourCycle: 'h23',
  }).formatToParts(fecha)
  const h = Number(partes.find((p) => p.type === 'hour').value)
  const m = Number(partes.find((p) => p.type === 'minute').value)
  return h * 60 + m
}

// Hora legible actual en Argentina, ej "23:05".
export function horaArgentina(fecha = new Date()) {
  return new Intl.DateTimeFormat('es-AR', {
    timeZone: info.zonaHoraria,
    hour: '2-digit',
    minute: '2-digit',
    hourCycle: 'h23',
  }).format(fecha)
}

// Normaliza las franjas a minutos. Si una franja cruza la medianoche
// (hasta <= desde), se extiende el "hasta" al día siguiente (+1440).
function franjasEnMinutos() {
  return horarios.franjas.map(({ desde, hasta }) => {
    let ini = aMinutos(desde)
    let fin = aMinutos(hasta)
    if (fin <= ini) fin += 24 * 60
    return { ini, fin }
  })
}

// ¿Está abierto ahora? Devuelve true/false.
export function estaAbiertoAhora(fecha = new Date()) {
  const t = minutosAhoraArgentina(fecha)
  const franjas = franjasEnMinutos()
  return franjas.some(({ ini, fin }) => {
    // caso normal dentro del mismo día
    if (t >= ini && t < fin) return true
    // caso madrugada: la franja de ayer sigue vigente (t + 1440 cae en el rango)
    if (t + 24 * 60 >= ini && t + 24 * 60 < fin) return true
    return false
  })
}

// Devuelve un objeto con el estado y un texto secundario útil.
// { abierto: boolean, detalle: string }
export function estadoActual(fecha = new Date()) {
  const t = minutosAhoraArgentina(fecha)
  const franjas = franjasEnMinutos()
  const abierto = estaAbiertoAhora(fecha)

  const fmt = (min) => {
    const total = ((min % (24 * 60)) + 24 * 60) % (24 * 60)
    const h = Math.floor(total / 60)
    const m = total % 60
    return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`
  }

  if (abierto) {
    // Encontrar cuándo cierra la franja vigente
    let cierre = null
    for (const { ini, fin } of franjas) {
      if (t >= ini && t < fin) cierre = fin
      else if (t + 24 * 60 >= ini && t + 24 * 60 < fin) cierre = fin - 24 * 60
    }
    return { abierto: true, detalle: cierre != null ? `Cierra a las ${fmt(cierre)}` : '' }
  }

  // Cerrado: buscar la próxima apertura (el "ini" más cercano por delante)
  const inicios = franjas.map((f) => f.ini % (24 * 60)).sort((a, b) => a - b)
  let proximo = inicios.find((ini) => ini > t)
  if (proximo == null) proximo = inicios[0] // mañana
  return { abierto: false, detalle: `Abre a las ${fmt(proximo)}` }
}
