import { Link } from 'react-router-dom'
import { Instagram, Youtube, Mail } from 'lucide-react'

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.77a4.85 4.85 0 01-1.01-.08z" />
  </svg>
)

const footerLinks = [
  { label: 'Work', to: '/work' },
  { label: 'Services', to: '/#services' },
  { label: 'Pricing', to: '/#pricing' },
  { label: 'Studio', to: '/studio' },
]

const legalLinks = [
  { label: 'Privacy Policy', href: '#' },
  { label: 'Terms of Service', href: '#' },
]

const socials = [
  { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
  { icon: TikTokIcon, href: 'https://tiktok.com', label: 'TikTok' },
  { icon: Youtube, href: 'https://youtube.com', label: 'YouTube' },
  { icon: Mail, href: 'mailto:hello@jstnot.com', label: 'Email' },
]

export default function Footer() {
  return (
    <footer className="border-t border-ink-border bg-ink">
      <div className="container-site py-16 lg:py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="mb-4 inline-block">
              <span className="text-2xl font-bold tracking-tight text-white">
                JSTNOT<span className="text-accent">®</span>
              </span>
            </Link>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-text-secondary">
              We turn car dealerships into content machines. High-converting video, social growth, and paid ads creative that fills your pipeline.
            </p>
            <div className="mt-6 flex items-center gap-4">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-sm border border-ink-border text-text-secondary transition-colors hover:border-accent hover:text-accent"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <p className="mb-5 font-mono text-xs tracking-[0.2em] uppercase text-text-secondary">
              Navigation
            </p>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-sm text-text-secondary transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="mb-5 font-mono text-xs tracking-[0.2em] uppercase text-text-secondary">
              Contact
            </p>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:hello@jstnot.com"
                  className="text-sm text-text-secondary transition-colors hover:text-white"
                >
                  hello@jstnot.com
                </a>
              </li>
              <li className="text-sm text-text-secondary">
                United States
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-ink-border pt-8 sm:flex-row sm:items-center">
          <p className="text-xs text-text-secondary">
            © {new Date().getFullYear()} JSTNOT Media LLC. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {legalLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs text-text-secondary transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
