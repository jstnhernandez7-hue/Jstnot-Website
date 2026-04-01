import { motion } from 'framer-motion'
import { metrics } from '../../constants/metrics'
import Counter from '../ui/Counter'
import SectionMarker from '../ui/SectionMarker'
import { staggerContainer, staggerItem } from '../../hooks/useScrollAnimation'

export default function Metrics() {
  return (
    <section className="bg-ink section-pad">
      <div className="container-site">
        <SectionMarker index="00.03°" label="Results" />

        <div className="mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-section font-bold text-white text-balance max-w-2xl"
          >
            Numbers That Move Inventory
          </motion.h2>
        </div>

        {/* Stats grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-2 gap-px bg-ink-border lg:grid-cols-4"
        >
          {metrics.map((metric, i) => (
            <motion.div
              key={metric.id}
              variants={staggerItem}
              className="bg-ink px-8 py-12 lg:px-10"
            >
              <div className="mb-3 text-5xl font-bold tracking-tight text-white lg:text-6xl">
                <Counter
                  target={metric.value}
                  suffix={metric.suffix}
                  duration={1800 + i * 200}
                />
              </div>
              <p className="mb-2 text-base font-semibold text-white">{metric.label}</p>
              <p className="text-sm text-text-secondary">{metric.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-12 font-mono text-xs tracking-[0.2em] uppercase text-text-secondary"
        >
          Tracked across all active client accounts ✦ Updated quarterly
        </motion.p>
      </div>
    </section>
  )
}
