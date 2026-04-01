import { motion } from 'framer-motion'
import SectionMarker from '../components/ui/SectionMarker'
import Button from '../components/ui/Button'
import { ArrowRight } from 'lucide-react'

export default function Studio() {
  return (
    <div className="min-h-screen bg-ink pt-32 pb-24">
      <div className="container-site">
        <SectionMarker index="—" label="About" />

        <div className="mb-16 max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-section font-bold text-white text-balance"
          >
            Built for the Automotive Industry
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-6 text-lg leading-relaxed text-text-secondary"
          >
            JSTNOT Media LLC was founded with one mission: give car dealerships access to the same level of content marketing that enterprise brands use — without the enterprise price tag or the agency runaround.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-4 text-lg leading-relaxed text-text-secondary"
          >
            We specialize exclusively in automotive. That means our hooks are tested against car buyers, our content strategies are built around vehicle inventory cycles, and our ads are optimized for automotive intent.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-10"
          >
            <Button
              variant="primary"
              size="lg"
              href="https://calendly.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book a Call
              <ArrowRight size={16} />
            </Button>
          </motion.div>
        </div>

        {/* Stats */}
        <div className="mt-24 grid grid-cols-2 gap-px bg-ink-border lg:grid-cols-4">
          {[
            { value: '30+', label: 'Dealerships Served' },
            { value: '10M+', label: 'Views Generated' },
            { value: '500+', label: 'Leads Delivered' },
            { value: '3x', label: 'Avg. Engagement Lift' },
          ].map((stat) => (
            <div key={stat.label} className="bg-ink px-8 py-10">
              <p className="text-4xl font-bold text-accent">{stat.value}</p>
              <p className="mt-2 text-sm text-text-secondary">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
