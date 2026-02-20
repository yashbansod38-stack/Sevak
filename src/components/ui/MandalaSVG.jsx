export default function MandalaSVG({ className = '', style = {} }) {
  return (
    <svg
      viewBox="0 0 500 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
    >
      <circle cx="250" cy="250" r="240" stroke="#D4AF37" strokeWidth="0.5" />
      <circle cx="250" cy="250" r="200" stroke="#FF6B00" strokeWidth="0.5" />
      <circle cx="250" cy="250" r="160" stroke="#D4AF37" strokeWidth="0.5" />
      <circle cx="250" cy="250" r="120" stroke="#FF6B00" strokeWidth="0.5" />
      <circle cx="250" cy="250" r="80"  stroke="#D4AF37" strokeWidth="0.5" />
      <circle cx="250" cy="250" r="40"  stroke="#FF6B00" strokeWidth="0.5" />
      <line x1="10" y1="250" x2="490" y2="250" stroke="#D4AF37" strokeWidth="0.5" />
      <line x1="250" y1="10" x2="250" y2="490" stroke="#D4AF37" strokeWidth="0.5" />
      <line x1="74"  y1="74"  x2="426" y2="426" stroke="#D4AF37" strokeWidth="0.5" />
      <line x1="426" y1="74"  x2="74"  y2="426" stroke="#FF6B00" strokeWidth="0.5" />
      <line x1="10" y1="147" x2="490" y2="353" stroke="#D4AF37" strokeWidth="0.4" />
      <line x1="10" y1="353" x2="490" y2="147" stroke="#D4AF37" strokeWidth="0.4" />
      <line x1="147" y1="10" x2="353" y2="490" stroke="#D4AF37" strokeWidth="0.4" />
      <line x1="353" y1="10" x2="147" y2="490" stroke="#D4AF37" strokeWidth="0.4" />
      <ellipse cx="250" cy="150" rx="18" ry="50" stroke="#FF6B00" strokeWidth="0.4" />
      <ellipse cx="250" cy="350" rx="18" ry="50" stroke="#FF6B00" strokeWidth="0.4" />
      <ellipse cx="150" cy="250" rx="50" ry="18" stroke="#FF6B00" strokeWidth="0.4" />
      <ellipse cx="350" cy="250" rx="50" ry="18" stroke="#FF6B00" strokeWidth="0.4" />
      <ellipse cx="178" cy="178" rx="18" ry="50" stroke="#D4AF37" strokeWidth="0.4" transform="rotate(45 178 178)" />
      <ellipse cx="322" cy="178" rx="18" ry="50" stroke="#D4AF37" strokeWidth="0.4" transform="rotate(-45 322 178)" />
      <ellipse cx="178" cy="322" rx="18" ry="50" stroke="#D4AF37" strokeWidth="0.4" transform="rotate(-45 178 322)" />
      <ellipse cx="322" cy="322" rx="18" ry="50" stroke="#D4AF37" strokeWidth="0.4" transform="rotate(45 322 322)" />
    </svg>
  )
}
