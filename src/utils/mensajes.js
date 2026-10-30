import { info } from '../data/restaurante.js'

// ============================================================================
//  ARMADO DEL MENSAJE DE RESERVA
// ----------------------------------------------------------------------------
//  NOTA DEMO: el envío por WhatsApp está desactivado. El texto se muestra como
//  vista previa. Para activarlo a futuro, usar `urlWhatsApp(texto)`.
// ============================================================================

// datos: { nombre, fecha, hora, personas, comentario }
export function textoReserva(datos) {
  const lineas = []
  lineas.push(`*Reserva — ${info.nombre}*`)
  lineas.push('')
  if (datos.nombre) lineas.push(`Nombre: ${datos.nombre}`)
  if (datos.fecha) lineas.push(`Fecha: ${datos.fecha}`)
  if (datos.hora) lineas.push(`Hora: ${datos.hora}`)
  if (datos.personas) lineas.push(`Personas: ${datos.personas}`)
  if (datos.comentario) lineas.push(`Comentario: ${datos.comentario}`)
  return lineas.join('\n')
}

// Enlace de WhatsApp (desactivado en la demo, listo para usar a futuro).
export function urlWhatsApp(texto) {
  return `https://wa.me/${info.telefonoLink}?text=${encodeURIComponent(texto)}`
}
