import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Button from '../ui/Button'
import MarqueeStrip from '../ui/MarqueeStrip'

const marqueeItems = [
  'Book a Free Strategy Call',
  'Let\'s Grow Your Dealership',
  'Content That Converts',
  'Fill Your Pipeline',
  'Dominate Your Market',
]

export default function ContactCTA() {
  return (
    <section className="bg-ink">
      {/* Marquee */}
      <div className="border-y border-ink-border py-4">
        <MarqueeStrip items={marqueeItems} />
      </div>

      {/* Main CTA */}
      <div className="container-site py-24 lg:py-36">
        <div className="mx-auto max-w-3xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-6 font-mono text-xs tracking-[0.25em] uppercase text-text-secondary"
          >
            00.08° — Ready to Start
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-6 text-section font-bold text-white text-balance"
          >
            Ready to Dominate Your Market?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12 text-lg leading-relaxed text-text-secondary"
          >
            Book a free 30-minute strategy call. We'll audit your current social presence, identify your biggest opportunities, and show you exactly how we'd approach your dealership.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
          >
            <Button
              variant="primary"
              size="lg"
              href="https://calendly.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book a Free Strategy Call
              <ArrowRight size={16} />
            </Button>
            <a
              href="mailto:hello@jstnot.com"
              className="text-sm text-text-secondary transition-colors hover:text-white"
            >
              or email hello@jstnot.com
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
