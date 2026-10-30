# Los Leños Parrilla — Web demo

Página de demostración (mobile-first) para **Los Leños Parrilla**, San Salvador de Jujuy.
React + Vite + Tailwind, sin backend.

## Correr localmente

```bash
npm install
npm run dev
```

Abrir la URL que muestra Vite (por defecto http://localhost:5173).

## Build de producción

```bash
npm run build      # genera /dist
npm run preview    # previsualiza el build
```

## Editar los datos

Todo lo editable (carta, precios, horarios, contacto, textos) está en un solo archivo:

```
src/data/restaurante.js
```

- La **carta es de muestra**: los platos son ejemplos típicos de parrilla y los precios
  figuran como `$ —`. Reemplazar por la carta real cuando esté disponible.
- Las coordenadas, dirección, teléfono y horarios son datos reales del local (Google Maps).

## Notas de esta versión

- **WhatsApp desactivado**: los flujos de pedido y reserva arman el mensaje y lo muestran
  como vista previa. El texto y el enlace `wa.me` ya están preparados en
  `src/utils/mensajes.js` para activarlos en la versión final.
- **Fotos de muestra**: las imágenes en `public/img` son fotos genéricas de parrilla/asado
  de banco libre (Unsplash, licencia libre) usadas como marcador de posición — **no son del
  local**. Reemplazar por fotos reales de Los Leños manteniendo el nombre de archivo (el mapeo
  está en `imagenes` dentro de `src/data/restaurante.js`). Los puntos donde van fotos están
  marcados con `[FOTO DEL LOCAL]` en los componentes. No se usa el logo del local.
- **Diseño**: tipografías Fraunces (títulos) + Figtree (texto), paleta carbón/brasa/oro/crema,
  animaciones al hacer scroll, parallax en las bandas de imagen y textura de grano. Sin emojis
  (íconos SVG propios en `src/components/Icon.jsx`).
- Franja superior **"Versión de demostración"**.
```
