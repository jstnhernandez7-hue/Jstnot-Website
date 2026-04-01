import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { useNavScroll } from '../../hooks/useNavScroll'
import Button from '../ui/Button'

const navLinks = [
  { label: 'WORK', to: '/work' },
  { label: 'SERVICES', to: '/#services' },
  { label: 'PRICING', to: '/#pricing' },
  { label: 'CONTACT', href: 'mailto:hello@jstnot.com' },
]

export default function Navbar() {
  const isScrolled = useNavScroll()
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'border-b border-ink-border bg-ink/90 backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <div className="container-site flex h-16 items-center justify-between lg:h-20">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          <span className="text-xl font-bold tracking-tight text-white">
            JSTNOT<span className="text-accent">®</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) =>
            link.to ? (
              <NavLink
                key={link.label}
                to={link.to}
                className="font-mono text-xs tracking-[0.15em] text-text-secondary transition-colors hover:text-white"
              >
                {link.label}
              </NavLink>
            ) : (
              <a
                key={link.label}
                href={link.href}
                className="font-mono text-xs tracking-[0.15em] text-text-secondary transition-colors hover:text-white"
              >
                {link.label}
              </a>
            )
          )}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-4 lg:flex">
          <Button variant="primary" size="sm" href="https://calendly.com" target="_blank" rel="noopener noreferrer">
            Book a Call
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="flex items-center justify-center text-text-secondary transition-colors hover:text-white lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="border-t border-ink-border bg-ink lg:hidden">
          <nav className="container-site flex flex-col gap-0 pb-6 pt-4">
            {navLinks.map((link) =>
              link.to ? (
                <NavLink
                  key={link.label}
                  to={link.to}
                  onClick={() => setMobileOpen(false)}
                  className="border-b border-ink-border py-4 font-mono text-xs tracking-[0.15em] text-text-secondary transition-colors hover:text-white"
                >
                  {link.label}
                </NavLink>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="border-b border-ink-border py-4 font-mono text-xs tracking-[0.15em] text-text-secondary transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              )
            )}
            <div className="pt-6">
              <Button
                variant="primary"
                size="md"
                href="https://calendly.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                Book a Call
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
