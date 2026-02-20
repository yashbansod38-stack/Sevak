'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import Image from 'next/image'
import { heroSlides } from '@/data/siteData'

export default function HeroBanner() {
  const [current, setCurrent] = useState(0)
  const [dragging, setDragging] = useState(false)
  const dragStartX = useRef(0)
  const timerRef = useRef(null)
  const trackRef = useRef(null)
  const total = heroSlides.length

  const goTo = useCallback((idx) => {
    setCurrent(((idx % total) + total) % total)
  }, [total])

  const next = useCallback(() => goTo(current + 1), [current, goTo])
  const prev = useCallback(() => goTo(current - 1), [current, goTo])

  const startTimer = useCallback(() => {
    clearInterval(timerRef.current)
    timerRef.current = setInterval(next, 3500)
  }, [next])

  useEffect(() => {
    startTimer()
    return () => clearInterval(timerRef.current)
  }, [startTimer])

  // Mouse drag
  const onMouseDown = (e) => { dragStartX.current = e.clientX; setDragging(true) }
  const onMouseUp = (e) => {
    if (!dragging) return
    setDragging(false)
    const diff = e.clientX - dragStartX.current
    if (Math.abs(diff) > 50) { diff < 0 ? next() : prev(); startTimer() }
  }

  // Touch drag
  const onTouchStart = (e) => { dragStartX.current = e.touches[0].clientX }
  const onTouchEnd = (e) => {
    const diff = e.changedTouches[0].clientX - dragStartX.current
    if (Math.abs(diff) > 50) { diff < 0 ? next() : prev(); startTimer() }
  }

  const slide = heroSlides[current]

  return (
    <section
      id="hero"
      className="relative h-screen overflow-hidden select-none"
      style={{ cursor: dragging ? 'grabbing' : 'grab' }}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onMouseLeave={() => setDragging(false)}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {/* Slides */}
      <div
        ref={trackRef}
        className="hero-track"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {heroSlides.map((s, i) => (
          <div
            key={s.id}
            className={`hero-slide ${i === current ? 'active' : ''}`}
          >
            <Image
              src={s.img}
              alt={s.alt}
              fill
              priority={i === 0}
              draggable={false}
              className="object-cover pointer-events-none"
              sizes="100vw"
            />
          </div>
        ))}
      </div>

      {/* Gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(135deg, rgba(10,5,0,0.78) 0%, rgba(180,80,0,0.18) 50%, rgba(10,5,0,0.82) 100%)',
        }}
      />

      {/* Slow-spinning mandala */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        style={{ opacity: 0.04 }}
      >
        <svg
          className="animate-spin-slow w-[700px] h-[700px]"
          viewBox="0 0 500 500"
          fill="none"
        >
          <circle cx="250" cy="250" r="240" stroke="#D4AF37" strokeWidth="0.6" />
          <circle cx="250" cy="250" r="190" stroke="#FF6B00" strokeWidth="0.6" />
          <circle cx="250" cy="250" r="140" stroke="#D4AF37" strokeWidth="0.6" />
          <circle cx="250" cy="250" r="90" stroke="#FF6B00" strokeWidth="0.6" />
          <line x1="10" y1="250" x2="490" y2="250" stroke="#D4AF37" strokeWidth="0.6" />
          <line x1="250" y1="10" x2="250" y2="490" stroke="#D4AF37" strokeWidth="0.6" />
          <line x1="74" y1="74" x2="426" y2="426" stroke="#FF6B00" strokeWidth="0.6" />
          <line x1="426" y1="74" x2="74" y2="426" stroke="#FF6B00" strokeWidth="0.6" />
          <line x1="10" y1="147" x2="490" y2="353" stroke="#D4AF37" strokeWidth="0.4" />
          <line x1="10" y1="353" x2="490" y2="147" stroke="#D4AF37" strokeWidth="0.4" />
          <line x1="147" y1="10" x2="353" y2="490" stroke="#D4AF37" strokeWidth="0.4" />
          <line x1="353" y1="10" x2="147" y2="490" stroke="#D4AF37" strokeWidth="0.4" />
        </svg>
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-5 pointer-events-none">
        <p
          key={`tag-${current}`}
          className="text-dharma-saffron text-[10px] tracking-[6px] uppercase font-poppins mb-4 animate-fade-up"
        >
          {slide.tag}
        </p>
        <h1
          key={`title-${current}`}
          className="font-cinzel font-black leading-tight mb-5 animate-fade-up"
          style={{ fontSize: 'clamp(44px, 9vw, 108px)', animationDelay: '0.15s', opacity: 0 }}
        >
          <span className="text-gold-glow block">{slide.titleLine1}</span>
          <span className="text-saffron-glow block">{slide.titleLine2}</span>
        </h1>
        <p
          key={`sub-${current}`}
          className="text-dharma-muted text-sm tracking-[3px] uppercase mb-10 animate-fade-up"
          style={{ animationDelay: '0.3s', opacity: 0 }}
        >
          {slide.subtitle}
        </p>
        <div
          className="flex gap-4 pointer-events-auto animate-fade-up"
          style={{ animationDelay: '0.45s', opacity: 0 }}
        >
          <button
            className="btn-primary"
            onClick={() => document.querySelector('#products')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Explore Collection
          </button>
          <button
            className="btn-outline"
            onClick={() => document.querySelector('#categories')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Categories
          </button>
        </div>
      </div>

      {/* Dot indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => { goTo(i); startTimer() }}
            className={`
              border-none cursor-pointer rounded-full transition-all duration-300 h-2
              ${i === current
                ? 'bg-dharma-saffron w-6 shadow-saffron'
                : 'bg-white/30 w-2 hover:bg-white/60'
              }
            `}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Arrow buttons */}
      <div className="hidden md:flex absolute bottom-8 right-10 gap-2.5 z-10">
        {[{ icon: 'fa-chevron-left', action: () => { prev(); startTimer() } },
        { icon: 'fa-chevron-right', action: () => { next(); startTimer() } }].map((b, i) => (
          <button
            key={i}
            onClick={b.action}
            className="
              w-11 h-11 rounded-full flex items-center justify-center
              border border-dharma-saffron/40 bg-dharma-saffron/15
              text-dharma-saffron text-sm cursor-pointer
              transition-all duration-300
              hover:bg-dharma-saffron hover:text-white
            "
          >
            <i className={`fa-solid ${b.icon}`} />
          </button>
        ))}
      </div>

      {/* Scroll hint */}
      <div className="hidden md:flex absolute bottom-8 left-10 items-center gap-3 text-dharma-muted text-[10px] tracking-[2px] uppercase z-10">
        <span className="w-10 h-px bg-dharma-muted/50" />
        <span>Scroll</span>
      </div>
    </section>
  )
}
