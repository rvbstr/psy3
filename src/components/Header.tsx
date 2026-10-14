import { useState, useEffect } from 'react'

const navLinks = [
  { label: 'С\u00a0чем я\u00a0работаю', href: '#problems' },
  { label: 'Как\u00a0проходит терапия', href: '#process' },
  { label: 'Обо\u00a0мне', href: '#about' },
  { label: 'FAQ', href: '#faq' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-md ${
        scrolled || menuOpen
          ? 'bg-surface/90 border-b border-rule'
          : 'bg-surface/70 border-b border-transparent'
      }`}
      style={{ paddingTop: 'var(--sat)' }}
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12 h-[64px] flex items-center justify-between">
        <a href="#" className="flex flex-col leading-snug">
          <span className="font-serif text-[15px] font-medium text-ink tracking-tight">
            Никита Нечаев
          </span>
          <span className="text-[11px] text-muted font-sans tracking-wide">
            Психолог · гештальт-терапевт
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="text-[13.5px] text-muted hover:text-ink transition-colors duration-150 font-sans tracking-wide"
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#format"
            className="hidden lg:inline-flex items-center h-[48px] px-5 bg-pine text-white text-[14px] font-sans font-medium rounded-[6px] hover:bg-pine-deep transition-colors duration-150"
          >
            Записаться на&nbsp;встречу
          </a>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 -mr-1 text-ink"
            aria-label={menuOpen ? 'Закрыть меню' : 'Открыть меню'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M3 3L17 17M17 3L3 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M2 6h16M2 10h16M2 14h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="lg:hidden bg-transparent border-t border-rule" aria-label="Мобильное меню">
          <div className="max-w-[1280px] mx-auto px-6 py-5 flex flex-col gap-0">
            {navLinks.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="text-[16px] text-ink font-sans py-3.5 border-b border-rule last:border-b-0"
              >
                {label}
              </a>
            ))}
            <a
              href="#format"
              onClick={() => setMenuOpen(false)}
              className="mt-5 inline-flex justify-center items-center h-[50px] px-6 bg-pine text-white text-[15px] font-sans font-medium rounded-[6px]"
            >
              Записаться на&nbsp;встречу
            </a>
          </div>
        </nav>
      )}
    </header>
  )
}
