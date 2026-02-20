const ITEMS = [
  '🚩 Jai Shri Ram',
  '✦',
  'ॐ Har Har Mahadev',
  '✦',
  '🪷 Jai Mata Di',
  '✦',
  '⚔️ Kshatriya Spirit',
  '✦',
  '🌸 Sanatan Dharma',
  '✦',
  '🔱 Wear Your Faith',
  '✦',
  '🚩 Jai Shri Ram',
  '✦',
  'ॐ Har Har Mahadev',
  '✦',
  '🪷 Jai Mata Di',
  '✦',
  '⚔️ Kshatriya Spirit',
  '✦',
  '🌸 Sanatan Dharma',
  '✦',
  '🔱 Wear Your Faith',
  '✦',
]

export default function MarqueeBar() {
  return (
    <div
      className="overflow-hidden py-3 relative z-10"
      style={{ background: 'linear-gradient(90deg, #FF6B00, #c45200, #FF6B00)' }}
    >
      <div className="flex animate-marquee whitespace-nowrap">
        {ITEMS.map((item, i) => (
          <span
            key={i}
            className={`
              text-white font-poppins font-semibold text-[11px] tracking-[4px] uppercase
              px-6
              ${item === '✦' ? 'opacity-50' : ''}
            `}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
