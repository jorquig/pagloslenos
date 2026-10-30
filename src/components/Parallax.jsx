import { useEffect, useRef } from 'react'

// Banda full-bleed con imagen de fondo y parallax suave (mobile-friendly).
// La imagen se mueve un poco más lento que el scroll mientras está en viewport.
export default function Parallax({
  src,
  alt = '',
  speed = 0.18,
  overlay = 'veil-dark',
  className = '',
  imgClassName = '',
  children,
}) {
  const wrapRef = useRef(null)
  const imgRef = useRef(null)

  useEffect(() => {
    const wrap = wrapRef.current
    const img = imgRef.current
    if (!wrap || !img) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let raf = 0
    let inView = false

    const io = new IntersectionObserver(([e]) => (inView = e.isIntersecting), {
      threshold: 0,
    })
    io.observe(wrap)

    const update = () => {
      raf = 0
      if (!inView) return
      const rect = wrap.getBoundingClientRect()
      const vh = window.innerHeight
      // progreso -1 (abajo) .. 1 (arriba) centrado en el viewport
      const progress = (rect.top + rect.height / 2 - vh / 2) / (vh / 2 + rect.height / 2)
      const shift = -progress * speed * rect.height
      img.style.transform = `translate3d(0, ${shift.toFixed(1)}px, 0) scale(1.18)`
    }
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      io.disconnect()
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [speed])

  return (
    <div ref={wrapRef} className={`relative overflow-hidden ${className}`}>
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        loading="lazy"
        className={`absolute inset-0 h-full w-full object-cover scale-[1.18] will-change-transform ${imgClassName}`}
      />
      <div className={`absolute inset-0 ${overlay}`} />
      <div className="relative">{children}</div>
    </div>
  )
}
