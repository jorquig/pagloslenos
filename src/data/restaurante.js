// ============================================================================
//  LOS LEÑOS PARRILLA — DATOS DEL LOCAL
// ============================================================================
//  Este es el ÚNICO archivo que hay que editar para actualizar la web:
//  carta, precios, horarios, contacto y textos. No hace falta tocar el código.
//
//  ⚠️  CARTA DE MUESTRA
//  Los platos de abajo son EJEMPLOS típicos de parrilla, cargados para la demo.
//  Todos los precios están como "$ —" a propósito: NO son precios reales.
//  Cuando tengamos la carta real del local, reemplazar nombres, descripciones
//  y precios (campo `precio`) de cada ítem.
//
//  ⚠️  FOTOS DE MUESTRA
//  Las imágenes (en /public/img) son fotos genéricas de parrilla/asado de banco
//  libre (Unsplash, licencia libre), usadas como marcador de posición. NO son
//  del local. Reemplazar por fotos reales de Los Leños manteniendo los nombres
//  de archivo (ver objeto `imagenes` más abajo). No se usa su logo.
// ============================================================================

export const info = {
  nombre: 'Los Leños Parrilla',
  lema: 'Parrilla jujeña a la leña',
  descripcionCorta:
    'Cortes y achuras a la leña, porciones abundantes y buena mesa. En el corazón de San Salvador de Jujuy.',

  direccion: 'El Rastreador 10, San Salvador de Jujuy',
  codigoPostal: 'Y4604',
  ciudad: 'San Salvador de Jujuy',

  // Coordenadas reales (Google Maps)
  coordenadas: { lat: -24.1955297, lng: -65.2890086 },

  // Teléfono en formato internacional sin símbolos para enlaces,
  // y una versión legible para mostrar.
  telefono: '+54 388 465-6600',
  telefonoLink: '543884656600', // para tel: y, a futuro, wa.me

  // Zona horaria usada para calcular "Abierto ahora / Cerrado"
  zonaHoraria: 'America/Argentina/Buenos_Aires',

  rangoPrecios: '$$', // moderado

  google: {
    rating: 4.2,
    totalReseñas: 1000, // "+1.000 reseñas"
    // Enlace al perfil de Google Maps del local (basado en coordenadas)
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=-24.1955297,-65.2890086',
    comoLlegarUrl:
      'https://www.google.com/maps/dir/?api=1&destination=-24.1955297,-65.2890086',
  },
}

// ----------------------------------------------------------------------------
//  HORARIOS
//  Dos franjas por día: mediodía y noche. La franja de la noche cruza la
//  medianoche (cierra 02:00 del día siguiente).
//  Formato 24 hs. Editar acá si cambian los horarios.
// ----------------------------------------------------------------------------
export const horarios = {
  // Mismo horario todos los días
  texto: 'Todos los días · 11:00 a 16:00 y 20:00 a 02:00',
  franjas: [
    { desde: '11:00', hasta: '16:00' },
    { desde: '20:00', hasta: '02:00' }, // cierra a las 02:00 del día siguiente
  ],
}

// ----------------------------------------------------------------------------
//  CARTA
//  Orden de las categorías = orden en que aparecen en la web.
//  Cada ítem: { nombre, descripcion, precio }.
//  `precio` se muestra tal cual: dejar "$ —" hasta tener el precio real.
// ----------------------------------------------------------------------------
export const CARTA_ES_DE_MUESTRA = true // Mostrar aviso de "carta de ejemplo"

export const categorias = [
  'Entradas',
  'Parrilla',
  'Achuras',
  'Guarniciones',
  'Ensaladas',
  'Postres',
  'Bebidas',
]

export const carta = [
  // ---------------------- ENTRADAS ----------------------
  {
    categoria: 'Entradas',
    nombre: 'Provoleta a la parrilla',
    descripcion: 'Queso provolone grillado con orégano y aceite de oliva.',
    precio: '$ —',
  },
  {
    categoria: 'Entradas',
    nombre: 'Empanadas jujeñas (unidad)',
    descripcion: 'De carne cortada a cuchillo, al horno de barro.',
    precio: '$ —',
  },
  {
    categoria: 'Entradas',
    nombre: 'Tabla de fiambres y quesos',
    descripcion: 'Selección de fiambres, quesos y aceitunas para compartir.',
    precio: '$ —',
  },
  {
    categoria: 'Entradas',
    nombre: 'Chorizo a la pampa',
    descripcion: 'Chorizo parrillero con pan casero y chimichurri.',
    precio: '$ —',
  },

  // ---------------------- PARRILLA ----------------------
  {
    categoria: 'Parrilla',
    nombre: 'Parrillada completa (para 2)',
    descripcion: 'Surtido de cortes y achuras a la leña para dos personas.',
    precio: '$ —',
  },
  {
    categoria: 'Parrilla',
    nombre: 'Asado de tira',
    descripcion: 'Corte clásico a la leña, tierno y jugoso.',
    precio: '$ —',
  },
  {
    categoria: 'Parrilla',
    nombre: 'Bife de chorizo',
    descripcion: 'Corte grueso de novillo a punto.',
    precio: '$ —',
  },
  {
    categoria: 'Parrilla',
    nombre: 'Vacío',
    descripcion: 'Cocción lenta a la parrilla, bien sabroso.',
    precio: '$ —',
  },
  {
    categoria: 'Parrilla',
    nombre: 'Entraña',
    descripcion: 'Corte fino y jugoso, sellado a fuego fuerte.',
    precio: '$ —',
  },
  {
    categoria: 'Parrilla',
    nombre: 'Matambre de cerdo a la parrilla',
    descripcion: 'Tierno y dorado, con un toque de limón.',
    precio: '$ —',
  },
  {
    categoria: 'Parrilla',
    nombre: 'Pollo a la parrilla',
    descripcion: 'Medio pollo marinado con hierbas.',
    precio: '$ —',
  },

  // ---------------------- ACHURAS ----------------------
  {
    categoria: 'Achuras',
    nombre: 'Mollejas al limón',
    descripcion: 'Doradas a la leña, crocantes por fuera.',
    precio: '$ —',
  },
  {
    categoria: 'Achuras',
    nombre: 'Chinchulines',
    descripcion: 'Bien crocantes, a la parrilla.',
    precio: '$ —',
  },
  {
    categoria: 'Achuras',
    nombre: 'Riñón a la parrilla',
    descripcion: 'Con un toque de limón y perejil.',
    precio: '$ —',
  },
  {
    categoria: 'Achuras',
    nombre: 'Morcilla',
    descripcion: 'Suave y cremosa, a la leña.',
    precio: '$ —',
  },

  // ---------------------- GUARNICIONES ----------------------
  {
    categoria: 'Guarniciones',
    nombre: 'Papas fritas',
    descripcion: 'Abundantes y crocantes.',
    precio: '$ —',
  },
  {
    categoria: 'Guarniciones',
    nombre: 'Papas a la provenzal',
    descripcion: 'Con ajo y perejil.',
    precio: '$ —',
  },
  {
    categoria: 'Guarniciones',
    nombre: 'Puré de papa',
    descripcion: 'Casero y cremoso.',
    precio: '$ —',
  },
  {
    categoria: 'Guarniciones',
    nombre: 'Verduras grilladas',
    descripcion: 'Variedad de verduras a la parrilla.',
    precio: '$ —',
  },

  // ---------------------- ENSALADAS ----------------------
  {
    categoria: 'Ensaladas',
    nombre: 'Ensalada mixta',
    descripcion: 'Lechuga, tomate y cebolla.',
    precio: '$ —',
  },
  {
    categoria: 'Ensaladas',
    nombre: 'Ensalada criolla',
    descripcion: 'Tomate, cebolla, morrón y un toque de aceite.',
    precio: '$ —',
  },
  {
    categoria: 'Ensaladas',
    nombre: 'Ensalada completa',
    descripcion: 'Lechuga, tomate, huevo, zanahoria y más.',
    precio: '$ —',
  },

  // ---------------------- POSTRES ----------------------
  {
    categoria: 'Postres',
    nombre: 'Flan casero con dulce de leche',
    descripcion: 'Con crema o dulce de leche, a elección.',
    precio: '$ —',
  },
  {
    categoria: 'Postres',
    nombre: 'Queso y dulce',
    descripcion: 'Clásico postre del parrillero.',
    precio: '$ —',
  },
  {
    categoria: 'Postres',
    nombre: 'Helado (2 bochas)',
    descripcion: 'Sabores a elección.',
    precio: '$ —',
  },

  // ---------------------- BEBIDAS ----------------------
  {
    categoria: 'Bebidas',
    nombre: 'Agua mineral',
    descripcion: 'Con o sin gas.',
    precio: '$ —',
  },
  {
    categoria: 'Bebidas',
    nombre: 'Gaseosa',
    descripcion: 'Línea de gaseosas, consultar sabores.',
    precio: '$ —',
  },
  {
    categoria: 'Bebidas',
    nombre: 'Limonada casera',
    descripcion: 'Con menta y jengibre.',
    precio: '$ —',
  },
  {
    categoria: 'Bebidas',
    nombre: 'Cerveza',
    descripcion: 'Tirada o en botella.',
    precio: '$ —',
  },
  {
    categoria: 'Bebidas',
    nombre: 'Vino de la casa (copa)',
    descripcion: 'Tinto o blanco.',
    precio: '$ —',
  },
]

// ----------------------------------------------------------------------------
//  OPINIONES
//  Solo datos reales de Google. NO se inventan reseñas ni nombres.
// ----------------------------------------------------------------------------
export const opiniones = {
  rating: info.google.rating,
  totalTexto: '+1.000 reseñas en Google',
  mapsUrl: info.google.mapsUrl,
  // Aspectos que destacan las reseñas (resumen general, sin nombres).
  destacados: [
    'Carne muy buena, con cortes y achuras variados',
    'Porciones abundantes',
    'Atención amable y dedicada',
    'Buena relación precio-calidad',
    'Ambiente familiar, sobre todo los domingos y en eventos',
  ],
}

// ----------------------------------------------------------------------------
//  IMÁGENES  (marcador de posición — ver aviso de cabecera)
//  Reemplazar los archivos en /public/img por fotos reales del local,
//  manteniendo el mismo nombre. Rutas relativas a /public.
// ----------------------------------------------------------------------------
export const imagenes = {
  hero: '/img/hero.jpg', // [FOTO LOCAL] parrilla con los cortes al fuego
  brasas: '/img/brasas.jpg', // [FOTO LOCAL] brasas / braza con corte
  fuego: '/img/fuego.jpg', // [FOTO LOCAL] fuego y humo
  lenos: '/img/lenos.jpg', // [FOTO LOCAL] la leña encendida
  historia: '/img/historia.jpg', // [FOTO LOCAL] el parrillero trabajando
  bife: '/img/bife.jpg', // [FOTO LOCAL] corte jugoso
  parrillada: '/img/parrillada.jpg', // [FOTO LOCAL] parrillada completa
  picada: '/img/picada.jpg', // [FOTO LOCAL] entrada / picada / ambiente
  empanadas: '/img/empanadas.jpg', // [FOTO LOCAL] empanadas jujeñas
  ambiente: '/img/ambiente.jpg', // [FOTO LOCAL] salón / mesas
  tabla: '/img/tabla.jpg', // [FOTO LOCAL] tabla / corte servido
  postres: '/img/postres.jpg', // [FOTO LOCAL] postre (flan)
  bebidas: '/img/bebidas.jpg', // [FOTO LOCAL] vino / bebidas
}

// Foto que acompaña a cada categoría de la carta.
export const imagenCategoria = {
  Entradas: imagenes.empanadas,
  Parrilla: imagenes.parrillada,
  Achuras: imagenes.brasas,
  Guarniciones: imagenes.tabla,
  Ensaladas: imagenes.historia,
  Postres: imagenes.postres,
  Bebidas: imagenes.bebidas,
}

// ----------------------------------------------------------------------------
//  TEXTOS EDITORIALES  (editar libremente)
// ----------------------------------------------------------------------------
export const manifiesto =
  'Prendemos el fuego temprano. Elegimos la leña, esperamos la brasa justa y dejamos que el tiempo haga lo suyo. Acá no hay apuro con el sabor: hay asado jujeño hecho como se debe.'

export const historia = {
  titulo: 'De la leña a tu mesa',
  parrafos: [
    'Los Leños nació de una idea simple y testaruda: que un buen asado no se negocia. En pleno San Salvador de Jujuy, mantenemos la parrilla a la leña encendida todos los días, porque el fuego lento es lo que hace la diferencia entre comer carne y comerse un asado.',
    'Trabajamos cortes y achuras elegidos con criterio, porciones que se sienten, y una cocina que atiende con la misma dedicación al turista de paso y al vecino de siempre. Los domingos y las juntadas tienen algo especial: es cuando la parrilla se llena y la mesa se hace larga.',
  ],
  firma: 'La casa',
}

// Lo que la gente valora (resumen real de reseñas, sin inventar testimonios).
export const valores = [
  {
    titulo: 'A la leña, siempre',
    texto: 'Brasa de verdad y fuego lento. El sabor ahumado no se improvisa.',
  },
  {
    titulo: 'Cortes y achuras',
    texto: 'Variedad bien trabajada, del bife de chorizo a las mollejas al limón.',
  },
  {
    titulo: 'Porciones abundantes',
    texto: 'Se viene a comer en serio. Nadie se levanta de la mesa con hambre.',
  },
  {
    titulo: 'Atención de la casa',
    texto: 'Amable y dedicada, para que la espera valga la pena.',
  },
]

// Imágenes para la galería (orden en pantalla).
export const galeria = [
  { src: imagenes.parrillada, alt: 'Parrillada completa a la leña' },
  { src: imagenes.bife, alt: 'Corte jugoso recién cortado' },
  { src: imagenes.picada, alt: 'Picada y brasa al fondo' },
  { src: imagenes.brasas, alt: 'Corte sobre la parrilla con brasas' },
  { src: imagenes.empanadas, alt: 'Empanadas jujeñas' },
  { src: imagenes.tabla, alt: 'Corte servido en tabla' },
]

// Crédito de las fotos de muestra (Unsplash, licencia libre).
export const creditoImagenes = 'Fotos de muestra: Unsplash (licencia libre). Reemplazar por fotos reales del local.'
