import { useEffect, useRef, useState } from 'react'

// Envuelve contenido y lo anima cuando entra en viewport.
// `as` elige el tag; `delay` 0–3 escalona; `variant`:
//   'text' (por defecto) → fade + slide del contenido
//   'img'  → la imagen interna entra con zoom + fundido
export default function Reveal({
  as: Tag = 'div',
  delay = 0,
  variant = 'text',
  className = '',
  children,
  ...rest
}) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisible(true)
            obs.unobserve(e.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  const base = variant === 'img' ? 'img-reveal' : 'reveal'
  const delayClass = delay && variant !== 'img' ? ` reveal-delay-${delay}` : ''
  return (
    <Tag
      ref={ref}
      className={`${base}${visible ? ' is-visible' : ''}${delayClass} ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  )
}
