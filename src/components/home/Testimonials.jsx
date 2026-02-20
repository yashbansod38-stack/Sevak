import Image from 'next/image'
import { testimonials } from '@/data/siteData'
import SectionHeader from '@/components/ui/SectionHeader'

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-24 px-5 md:px-10"
      style={{ background: 'var(--bg2)' }}
    >
      <SectionHeader tag="Community" title="What Our Warriors Say" />

      {/* Decorative Om */}
      <p
        className="text-center text-5xl mb-12 opacity-25"
        style={{ color: 'var(--saffron)', filter: 'drop-shadow(0 0 15px #FF6B00)' }}
      >
        ॐ
      </p>

      <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((t) => (
          <TestimonialCard key={t.id} testimonial={t} />
        ))}
      </div>
    </section>
  )
}

function TestimonialCard({ testimonial: t }) {
  return (
    <div
      className="
        relative overflow-hidden rounded-xl p-9
        border border-[var(--border)] backdrop-blur-xl
        transition-all duration-300
        hover:border-dharma-gold hover:shadow-gold
      "
      style={{ background: 'rgba(26,14,4,0.8)' }}
    >
      {/* Decorative quote mark */}
      <span
        className="absolute -top-2 right-5 font-cinzel text-[120px] leading-none pointer-events-none select-none"
        style={{ color: 'rgba(255,107,0,0.06)' }}
      >
        &ldquo;
      </span>

      {/* Stars */}
      <div
        className="text-dharma-gold text-sm mb-4"
        style={{ filter: 'drop-shadow(0 0 5px rgba(212,175,55,0.4))' }}
      >
        {'★'.repeat(t.rating)}
      </div>

      {/* Quote */}
      <p className="text-dharma-text text-[13px] leading-relaxed italic mb-6">
        {t.text}
      </p>

      {/* Person */}
      <div className="flex items-center gap-3.5">
        <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0 border-2 border-dharma-saffron">
          <Image src={t.avatar} alt={t.name} fill className="object-cover" sizes="48px" />
        </div>
        <div>
          <p className="font-cinzel text-dharma-gold text-[13px] font-semibold">{t.name}</p>
          <p className="text-dharma-muted text-[11px] tracking-wide">📍 {t.location}</p>
        </div>
      </div>
    </div>
  )
}
