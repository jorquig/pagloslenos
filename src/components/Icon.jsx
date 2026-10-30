// Set de íconos SVG (line icons). Reemplaza cualquier emoji del sitio.
// Uso: <Icon name="fire" className="h-5 w-5" />
const paths = {
  fire: (
    <path d="M12 3c.5 3-1.5 4.5-3 6.5C7.5 11.5 7 13 7 14.5A5 5 0 0 0 17 15c0-2-1-3.5-2.2-5C13.5 8.4 13 7 13 5.5c0-.9-.3-1.8-1-2.5Z" />
  ),
  leaf: (
    <path d="M11 20A7 7 0 0 1 4 13c0-5 4-9 16-9 0 10-4 14-9 14ZM4 20c2-4 5-7 9-9" />
  ),
  log: (
    <>
      <ellipse cx="6" cy="12" rx="2.5" ry="6" />
      <path d="M6 6h11a2.5 6 0 0 1 0 12H6M14 9.5c.6.8.6 4.2 0 5" />
    </>
  ),
  mapPin: (
    <>
      <path d="M12 21s-7-5.2-7-11a7 7 0 1 1 14 0c0 5.8-7 11-7 11Z" />
      <circle cx="12" cy="10" r="2.6" />
    </>
  ),
  phone: (
    <path d="M5 4h3l1.5 4-2 1.5a12 12 0 0 0 5 5l1.5-2 4 1.5v3a2 2 0 0 1-2.2 2A16 16 0 0 1 3 6.2 2 2 0 0 1 5 4Z" />
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </>
  ),
  cart: (
    <>
      <circle cx="9" cy="20" r="1.4" />
      <circle cx="18" cy="20" r="1.4" />
      <path d="M3 4h2l2.3 11.3a1.5 1.5 0 0 0 1.5 1.2h8a1.5 1.5 0 0 0 1.5-1.2L20 8H6.2" />
    </>
  ),
  search: (
    <>
      <circle cx="11" cy="11" r="6.5" />
      <path d="m20 20-3.6-3.6" />
    </>
  ),
  star: <path d="M12 3.5l2.6 5.5 6 .8-4.4 4.1 1.1 5.9L12 17l-5.3 2.8 1.1-5.9L3.4 9.8l6-.8L12 3.5Z" />,
  arrowDown: <path d="M12 5v14M6 13l6 6 6-6" />,
  arrowRight: <path d="M5 12h14M13 6l6 6-6 6" />,
  arrowUpRight: <path d="M7 17 17 7M8 7h9v9" />,
  close: <path d="M6 6l12 12M18 6 6 18" />,
  plus: <path d="M12 5v14M5 12h14" />,
  minus: <path d="M5 12h14" />,
  trash: <path d="M4 7h16M9 7V5h6v2M6 7l1 13h10l1-13" />,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  utensils: (
    <>
      <path d="M7 3v8a2 2 0 0 0 4 0V3M9 3v18" />
      <path d="M17 3c-1.5 0-2.5 1.8-2.5 4.5S15.5 12 17 12v9" />
    </>
  ),
  calendar: (
    <>
      <rect x="4" y="5" width="16" height="16" rx="2" />
      <path d="M4 9h16M8 3v4M16 3v4" />
    </>
  ),
  navigation: <path d="M3 11 21 4l-7 17-2.5-7.5L3 11Z" />,
  check: <path d="M5 12.5 10 17 19 7" />,
  users: (
    <>
      <circle cx="9" cy="8" r="3" />
      <path d="M3 20a6 6 0 0 1 12 0M16 5.5a3 3 0 0 1 0 5M21 20a5.5 5.5 0 0 0-4-5.3" />
    </>
  ),
  quote: (
    <path d="M9 7c-2.5 1-4 3-4 6v4h5v-5H7c0-2 1-3.5 3-4.2L9 7Zm9 0c-2.5 1-4 3-4 6v4h5v-5h-3c0-2 1-3.5 3-4.2L18 7Z" />
  ),
  wheat: (
    <path d="M12 3v18M12 7c-2-1-3-2.5-3-4 2 0 3.5 1 3 4Zm0 0c2-1 3-2.5 3-4-2 0-3.5 1-3 4Zm0 5c-2-1-3-2.5-3-4 2 0 3.5 1 3 4Zm0 0c2-1 3-2.5 3-4-2 0-3.5 1-3 4Zm0 5c-2-1-3-2.5-3-4 2 0 3.5 1 3 4Zm0 0c2-1 3-2.5 3-4-2 0-3.5 1-3 4Z" />
  ),
}

export default function Icon({ name, className = 'h-5 w-5', filled = false, ...rest }) {
  const node = paths[name]
  if (!node) return null
  const isFilled = filled || name === 'star' || name === 'navigation'
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill={isFilled ? 'currentColor' : 'none'}
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...rest}
    >
      {node}
    </svg>
  )
}
