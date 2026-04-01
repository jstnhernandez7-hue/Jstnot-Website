import { motion } from 'framer-motion'
import { steps } from '../../constants/process'
import SectionMarker from '../ui/SectionMarker'
import { staggerContainer, staggerItem } from '../../hooks/useScrollAnimation'

export default function Process() {
  return (
    <section className="bg-ink section-pad">
      <div className="container-site">
        <SectionMarker index="00.05°" label="Process" />

        <div className="mb-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-section font-bold text-white text-balance"
          >
            How We Work
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex items-end text-base leading-relaxed text-text-secondary lg:text-lg"
          >
            From first call to first post, we move fast and stay focused on what drives results for your dealership.
          </motion.p>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 gap-px bg-ink-border md:grid-cols-2 lg:grid-cols-4"
        >
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              variants={staggerItem}
              className="relative bg-ink px-8 py-10 lg:px-10 lg:py-12"
            >
              {/* Connector dot */}
              {index < steps.length - 1 && (
                <div className="absolute right-0 top-10 hidden h-px w-px translate-x-1/2 lg:block">
                  <div className="h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/40" />
                </div>
              )}

              <span className="mb-6 block font-mono text-xs tracking-[0.2em] text-accent">
                {step.number}
              </span>
              <h3 className="mb-4 text-lg font-semibold text-white">{step.title}</h3>
              <p className="text-sm leading-relaxed text-text-secondary">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
