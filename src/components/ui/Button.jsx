import { Link } from 'react-router-dom'

const variants = {
  primary:
    'bg-accent text-ink font-semibold hover:bg-accent-hover active:scale-[0.98]',
  outline:
    'border border-white/30 text-white hover:border-accent hover:text-accent active:scale-[0.98]',
  ghost:
    'text-text-secondary hover:text-white active:scale-[0.98]',
  'outline-dark':
    'border border-ink-border text-text-dark hover:border-accent hover:text-accent active:scale-[0.98]',
}

const sizes = {
  sm: 'px-5 py-2.5 text-sm',
  md: 'px-7 py-3.5 text-sm',
  lg: 'px-8 py-4 text-base',
}

export default function Button({
  variant = 'primary',
  size = 'md',
  href,
  to,
  children,
  className = '',
  ...props
}) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-sm tracking-wide transition-all duration-200 ease-smooth focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent whitespace-nowrap'

  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}
