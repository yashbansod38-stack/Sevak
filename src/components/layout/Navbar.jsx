'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useCart } from '@/context/CartContext'

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Collections', href: '/#categories' },
  { label: 'Shop', href: '/shop' },
  { label: 'Quiz', href: '/quiz' },
  { label: 'Reviews', href: '/#testimonials' },
  { label: 'Contact', href: '/#footer' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { cartCount, openCart } = useCart()
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (e, href) => {
    e.preventDefault()
    setMobileOpen(false)

    if (href.startsWith('/#')) {
      const id = href.replace('/', '')
      if (pathname === '/') {
        const el = document.querySelector(id)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      } else {
        router.push(href)
      }
    } else {
      router.push(href)
    }
  }

  return (
    <>
      {/* ── Main Navbar ── */}
      <nav
        className={`
          fixed top-0 left-0 right-0 z-50 flex items-center justify-between
          px-6 lg:px-10 h-[70px] transition-all duration-300
          ${scrolled
            ? 'bg-dharma-black/95 shadow-[0_4px_40px_rgba(255,107,0,0.12)]'
            : 'bg-dharma-black/70 backdrop-blur-xl border-b border-[var(--border)]'
          }
        `}
      >
        {/* Logo */}
        <a href="/" className="flex items-center gap-3 no-underline">
          <span
            className="text-dharma-saffron text-3xl leading-none"
            style={{ filter: 'drop-shadow(0 0 8px #FF6B00)' }}
          >
            ॐ
          </span>
          <div>
            <p
              className="font-cinzel font-bold text-dharma-gold text-sm tracking-widest leading-tight"
              style={{ fontFamily: "'Cinzel Decorative', serif" }}
            >
              Dharma Threads
            </p>
            <p className="text-dharma-muted text-[9px] tracking-[4px] font-poppins font-light uppercase leading-tight">
              Wear Your Dharma
            </p>
          </div>
        </a>

        {/* Desktop Links */}
        <ul className="hidden lg:flex gap-8 list-none">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="
                  block text-dharma-text text-[11px] font-poppins
                  font-medium tracking-[1.5px] uppercase cursor-pointer
                  relative pb-1 transition-colors duration-300 no-underline
                  hover:text-dharma-gold
                  after:content-[''] after:absolute after:bottom-0 after:left-0
                  after:w-0 after:h-px after:bg-dharma-gold after:transition-all after:duration-300
                  hover:after:w-full
                "
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right Controls */}
        <div className="flex items-center gap-4">
          {/* Cart */}
          <button
            onClick={openCart}
            className="relative bg-none border-none text-dharma-text text-lg cursor-pointer transition-colors duration-300 hover:text-dharma-gold p-1"
            aria-label="Open cart"
          >
            <i className="fa-solid fa-bag-shopping" />
            {cartCount > 0 && (
              <span
                className="
                  absolute -top-2 -right-2 bg-dharma-saffron text-white
                  text-[9px] w-[17px] h-[17px] rounded-full flex items-center
                  justify-center font-bold leading-none
                "
              >
                {cartCount > 99 ? '99+' : cartCount}
              </span>
            )}
          </button>

          {/* CTA Button */}
          <button
            onClick={(e) => handleNavClick(e, '/shop')}
            className="hidden sm:block btn-primary !py-2.5 !px-5 !text-[10px]"
          >
            Shop Now
          </button>

          {/* Hamburger */}
          <button
            className="lg:hidden bg-none border-none text-dharma-text text-xl cursor-pointer p-1"
            onClick={() => setMobileOpen((p) => !p)}
            aria-label="Toggle menu"
          >
            <i className={mobileOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'} />
          </button>
        </div>
      </nav>

      {/* ── Mobile Menu ── */}
      <div
        className={`
          fixed top-[70px] left-0 right-0 z-40
          bg-dharma-black/98 backdrop-blur-xl
          border-b border-[var(--border)]
          transition-all duration-300 overflow-hidden
          ${mobileOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'}
        `}
      >
        <div className="px-6 py-4 flex flex-col gap-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="
                block text-left bg-none border-none text-dharma-text font-poppins
                py-3 text-sm tracking-[2px] uppercase cursor-pointer no-underline
                border-b border-[rgba(212,175,55,0.1)] last:border-none
                hover:text-dharma-gold transition-colors duration-300
              "
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={(e) => { handleNavClick(e, '/shop'); setMobileOpen(false) }}
            className="btn-primary mt-3 !text-[11px]"
          >
            Shop Now
          </button>
        </div>
      </div>
    </>
  )
}
