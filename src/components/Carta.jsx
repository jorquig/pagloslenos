import { useMemo } from 'react'
import { carta, categorias, CARTA_ES_DE_MUESTRA, imagenCategoria } from '../data/restaurante.js'
import Reveal from './Reveal.jsx'

export default function Carta() {
  const porCategoria = useMemo(() => {
    const grupos = {}
    for (const item of carta) (grupos[item.categoria] ||= []).push(item)
    return categorias
      .filter((c) => grupos[c]?.length)
      .map((c) => ({ categoria: c, items: grupos[c] }))
  }, [])

  return (
    <section id="carta" className="relative pt-20 sm:pt-28">
      <div className="wrap">
        <div className="mb-10 max-w-3xl">
          <Reveal className="kicker mb-4">La carta</Reveal>
          <Reveal as="h2" delay={1} className="titulo text-6xl sm:text-8xl leading-[0.9]">
            Lo que sale
            <span className="block italic text-ember-glow">de la brasa</span>
          </Reveal>
          <Reveal as="p" delay={2} className="mt-6 max-w-prose text-lg text-crema/70 sm:text-xl">
            Cortes, achuras y clásicos de parrilla, cocinados a la leña. Esta es la carta —
            mirá, elegí y reservá tu mesa.
          </Reveal>
          {CARTA_ES_DE_MUESTRA && (
            <Reveal
              as="p"
              delay={2}
              className="mt-4 inline-flex rounded-full border border-oro/25 bg-oro/5 px-4 py-2 text-sm text-crema/75"
            >
              <span className="font-semibold text-oro-light">Carta de muestra</span>
              <span className="mx-2 opacity-40">·</span> precios como{' '}
              <span className="mx-1 font-mono text-crema">$ —</span> hasta cargar los reales.
            </Reveal>
          )}
        </div>
      </div>

      {/* Navegación por categorías (pegada bajo la nav) */}
      <div className="sticky top-16 z-20 -mt-2 mb-14 border-y border-white/8 bg-carbon-950/92 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl gap-7 overflow-x-auto px-5 py-3.5 text-sm font-semibold uppercase tracking-wider text-crema-muted sm:px-8 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {porCategoria.map(({ categoria }) => (
            <a
              key={categoria}
              href={`#cat-${categoria}`}
              className="whitespace-nowrap transition-colors hover:text-ember-light"
            >
              {categoria}
            </a>
          ))}
        </div>
      </div>

      {/* Bloques de categoría — full-bleed, editorial y alternado */}
      <div className="space-y-14 sm:space-y-20">
        {porCategoria.map(({ categoria, items }, i) => {
          const imgLeft = i % 2 === 0
          return (
            <div
              key={categoria}
              id={`cat-${categoria}`}
              className="grid scroll-mt-32 items-stretch lg:min-h-[520px] lg:grid-cols-2"
            >
              {/* Foto (llega al borde de la pantalla) */}
              <Reveal
                className={
                  'relative h-72 overflow-hidden sm:h-96 lg:h-auto ' +
                  (imgLeft ? 'lg:order-1' : 'lg:order-2')
                }
              >
                {/* [FOTO DEL LOCAL] foto de la categoría — reemplazar */}
                <img
                  src={imagenCategoria[categoria]}
                  alt={categoria}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.4s] ease-soft hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-carbon-950/70 via-transparent to-transparent" />
                <span className="absolute left-6 top-5 text-[11px] uppercase tracking-label text-crema/70">
                  Los Leños · a la leña
                </span>
              </Reveal>

              {/* Platos */}
              <div
                className={
                  'flex flex-col justify-center px-5 py-10 sm:px-10 sm:py-14 lg:px-16 ' +
                  (imgLeft ? 'lg:order-2' : 'lg:order-1')
                }
              >
                <Reveal className="mb-6 flex items-center gap-4">
                  <h3 className="titulo text-5xl sm:text-6xl">{categoria}</h3>
                  <span className="h-px flex-1 rule-gold" />
                </Reveal>

                <ul>
                  {items.map((item, j) => (
                    <Reveal
                      as="li"
                      key={item.nombre}
                      delay={Math.min((j % 3) + 1, 3)}
                      className="border-b border-white/5 py-4 last:border-0"
                    >
                      <div className="flex items-baseline justify-between gap-3">
                        <h4 className="min-w-0 font-display text-2xl leading-tight text-crema-light sm:text-[1.7rem]">
                          {item.nombre}
                        </h4>
                        <span className="hidden flex-1 -translate-y-1 border-b border-dotted border-white/15 sm:block" />
                        <span className="shrink-0 font-mono text-base font-semibold text-oro-light">
                          {item.precio}
                        </span>
                      </div>
                      <p className="mt-1.5 max-w-prose text-[0.98rem] leading-snug text-crema/55">
                        {item.descripcion}
                      </p>
                    </Reveal>
                  ))}
                </ul>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
