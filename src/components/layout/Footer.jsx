import MandalaSVG from '@/components/ui/MandalaSVG'

const QUICK_LINKS = [
  { label: 'Home', href: '#hero' },
  { label: 'Collections', href: '#categories' },
  { label: 'Shop All', href: '#products' },
  { label: 'Reviews', href: '#testimonials' },
  { label: 'Place Order', href: '#' },
]

const INFO_LINKS = [
  { label: 'Size Guide', href: '#' },
  { label: 'Shipping Policy', href: '#' },
  { label: 'Return Policy', href: '#' },
  { label: 'Privacy Policy', href: '#' },
  { label: 'Terms of Service', href: '#' },
]

const SOCIAL = [
  { icon: 'fab fa-instagram', href: '#', label: 'Instagram' },
  { icon: 'fab fa-youtube',   href: '#', label: 'YouTube' },
  { icon: 'fab fa-twitter',   href: '#', label: 'Twitter / X' },
  { icon: 'fab fa-whatsapp',  href: '#', label: 'WhatsApp' },
]

export default function Footer() {
  return (
    <footer
      id="footer"
      className="relative overflow-hidden border-t border-[var(--border)]"
      style={{ background: 'var(--bg)' }}
    >
      {/* Background mandala */}
      <div className="footer-bg-mandala">
        <MandalaSVG />
      </div>

      {/* Main grid */}
      <div className="relative z-10 max-w-[1300px] mx-auto px-8 md:px-14 pt-16 pb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-14">
        {/* Brand */}
        <div>
          <p
            className="text-dharma-gold text-xl mb-1"
            style={{ fontFamily: "'Cinzel Decorative', serif", fontWeight: 700 }}
          >
            ॐ Dharma Threads
          </p>
          <p className="text-dharma-saffron text-[10px] tracking-[3px] uppercase mb-4 font-poppins">
            Rooted in Dharma, Dressed for Today
          </p>
          <p className="text-dharma-muted text-sm leading-relaxed max-w-[280px] mb-6">
            We craft premium T-shirts that carry the spirit of Sanatan Dharma into the
            modern world. Every thread tells a story of an ancient civilisation that never
            stopped inspiring.
          </p>
          {/* Social icons */}
          <div className="flex gap-3">
            {SOCIAL.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="
                  w-9 h-9 rounded-full flex items-center justify-center
                  border border-[var(--border)] text-dharma-muted text-sm
                  transition-all duration-300 no-underline
                  hover:border-dharma-saffron hover:text-dharma-saffron
                  hover:shadow-saffron
                "
              >
                <i className={s.icon} />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-cinzel text-sm text-dharma-gold mb-5 tracking-wide">
            Quick Links
          </h4>
          <ul className="space-y-2.5 list-none">
            {QUICK_LINKS.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  className="text-dharma-muted text-sm no-underline hover:text-dharma-saffron transition-colors duration-300"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Help & Info */}
        <div>
          <h4 className="font-cinzel text-sm text-dharma-gold mb-5 tracking-wide">
            Help & Info
          </h4>
          <ul className="space-y-2.5 list-none">
            {INFO_LINKS.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  className="text-dharma-muted text-sm no-underline hover:text-dharma-saffron transition-colors duration-300"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="font-cinzel text-sm text-dharma-gold mb-5 tracking-wide">
            Newsletter
          </h4>
          <p className="text-dharma-muted text-xs leading-relaxed mb-4">
            Get exclusive drops, Dharma stories & early access to new collections.
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Your email..."
              className="
                flex-1 dharma-input rounded-r-none border-r-0
                text-[12px] py-2.5
              "
            />
            <button className="bg-dharma-saffron hover:bg-dharma-saffron2 text-white border-none px-3.5 rounded-r cursor-pointer transition-colors duration-300 text-sm">
              <i className="fa-solid fa-paper-plane" />
            </button>
          </div>
        </div>
      </div>

      {/* Saffron strip */}
      <div
        className="relative z-10 py-3.5 text-center text-white text-[12px] font-semibold tracking-[3px]"
        style={{ background: 'linear-gradient(90deg, #FF6B00, #c45200, #FF6B00)' }}
      >
        🚩 Jai Shri Ram &nbsp;·&nbsp; ॐ Har Har Mahadev &nbsp;·&nbsp; 🪷 Jai Mata Di &nbsp;·&nbsp; 🔱 Sanatan Dharma Zindabad 🚩
      </div>

      {/* Copyright */}
      <div
        className="
          relative z-10 flex flex-col sm:flex-row items-center justify-between
          px-10 py-4 border-t border-[var(--border)] gap-2
          text-dharma-muted text-xs
        "
      >
        <span>© {new Date().getFullYear()} Dharma Threads. All rights reserved.</span>
        <span>Made with 🧡 in Bharat</span>
        <span>Payments via Google Forms · Personal Delivery</span>
      </div>
    </footer>
  )
}
