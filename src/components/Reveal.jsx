import { useEffect, useRef, useState } from 'react'

// Envuelve contenido y lo anima (fade + slide) cuando entra en viewport.
// `as` permite elegir el tag; `delay` 0–3 agrega un pequeño escalonado.
export default function Reveal({ as: Tag = 'div', delay = 0, className = '', children, ...rest }) {
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
      { threshold: 0.15, rootMargin: '0px 0px -8% 0px' },
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  const delayClass = delay ? ` reveal-delay-${delay}` : ''
  return (
    <Tag
      ref={ref}
      className={`reveal${visible ? ' is-visible' : ''}${delayClass} ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  )
}
