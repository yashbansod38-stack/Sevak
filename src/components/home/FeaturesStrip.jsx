const FEATURES = [
  {
    icon: 'fa-solid fa-shirt',
    title: 'Premium Quality',
    desc: '100% combed cotton, 220 GSM fabric. Built to last, made to feel divine.',
  },
  {
    icon: 'fa-solid fa-truck-fast',
    title: 'Pan India Delivery',
    desc: 'Fast, reliable shipping across all of Bharat. 5–7 business days.',
  },
  {
    icon: 'fa-solid fa-rotate-left',
    title: 'Easy Returns',
    desc: '7-day hassle-free return policy. Your satisfaction is our dharma.',
  },
  {
    icon: 'fa-solid fa-paintbrush',
    title: 'Original Artwork',
    desc: 'Every design hand-crafted by our in-house artists. Truly one-of-a-kind.',
  },
]

export default function FeaturesStrip() {
  return (
    <section
      className="py-20 px-5 md:px-10"
      style={{ background: 'linear-gradient(180deg, var(--bg2) 0%, var(--bg) 100%)' }}
    >
      <div className="max-w-[1100px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {FEATURES.map((f) => (
          <div
            key={f.title}
            className="
              text-center p-10 rounded-xl border border-[var(--border)]
              transition-all duration-300 relative overflow-hidden group
              hover:-translate-y-1 hover:border-dharma-gold/50
            "
            style={{ background: 'rgba(26,14,4,0.6)' }}
          >
            {/* hover glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-dharma-saffron/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <i
              className={`${f.icon} text-3xl mb-4 block text-dharma-saffron`}
              style={{ filter: 'drop-shadow(0 0 10px rgba(255,107,0,0.5))' }}
            />
            <h4 className="font-cinzel text-dharma-gold text-sm font-semibold mb-2 tracking-wide">
              {f.title}
            </h4>
            <p className="text-dharma-muted text-xs leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
