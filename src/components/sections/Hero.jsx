import { motion } from 'framer-motion'
import { ArrowRight, ChevronDown } from 'lucide-react'
import Button from '../ui/Button'
import MarqueeStrip from '../ui/MarqueeStrip'

const marqueeItems = [
  'Content That Converts',
  'Social Media Growth',
  'Paid Ads Creative',
  'Lead Generation',
  'Short-Form Video',
  'Car Dealerships',
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
}

const lineVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
  },
}

export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col bg-ink">
      {/* Background gradient */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(200,169,110,0.08) 0%, transparent 70%)',
        }}
      />

      {/* Grain texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\' opacity=\'1\'/%3E%3C/svg%3E")',
        }}
      />

      {/* Main content */}
      <div className="container-site flex flex-1 flex-col justify-center pt-32 pb-12 lg:pt-40 lg:pb-20">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-8 flex items-center gap-3"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          <span className="font-mono text-xs tracking-[0.25em] uppercase text-text-secondary">
            Social Media Marketing for Car Dealerships
          </span>
        </motion.div>

        {/* Headline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-8"
        >
          <motion.h1
            variants={lineVariants}
            className="text-hero font-bold text-white text-balance"
          >
            We Turn
          </motion.h1>
          <motion.h1
            variants={lineVariants}
            className="text-hero font-bold text-white text-balance"
          >
            Dealerships Into
          </motion.h1>
          <motion.h1
            variants={lineVariants}
            className="text-hero font-bold text-balance"
            style={{ color: '#C8A96E' }}
          >
            Content Machines.
          </motion.h1>
        </motion.div>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="mb-12 max-w-xl text-lg leading-relaxed text-text-secondary lg:text-xl"
        >
          High-converting video content, social media growth, and paid ads
          creative built specifically for car dealerships.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col gap-4 sm:flex-row"
        >
          <Button
            variant="primary"
            size="lg"
            href="https://calendly.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Book a Free Call
            <ArrowRight size={16} />
          </Button>
          <Button variant="outline" size="lg" to="/work">
            See Our Work
          </Button>
        </motion.div>

        {/* Trust badge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-14 flex items-center gap-6"
        >
          <div className="h-px w-8 bg-ink-border" />
          <div className="flex items-center gap-2">
            <div className="flex -space-x-1.5">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="flex h-7 w-7 items-center justify-center rounded-full border border-ink-border bg-ink-soft text-[10px] font-semibold text-accent"
                >
                  {String.fromCharCode(65 + i)}
                </div>
              ))}
            </div>
            <span className="text-sm text-text-secondary">
              Trusted by <span className="text-white font-medium">30+ dealerships</span> across the US
            </span>
          </div>
        </motion.div>
      </div>

      {/* Marquee */}
      <div className="border-y border-ink-border py-4">
        <MarqueeStrip items={marqueeItems} />
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="container-site flex justify-end py-6"
      >
        <a
          href="#services"
          aria-label="Scroll to services"
          className="flex items-center gap-2 text-text-secondary transition-colors hover:text-white"
        >
          <span className="font-mono text-xs tracking-widest">SCROLL</span>
          <ChevronDown size={14} className="animate-bounce" />
        </a>
      </motion.div>
    </section>
  )
}
