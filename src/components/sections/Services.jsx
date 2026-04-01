import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { services } from '../../constants/services'
import SectionMarker from '../ui/SectionMarker'
import AnimatedText from '../ui/AnimatedText'
import { staggerContainer, staggerItem } from '../../hooks/useScrollAnimation'

function ServiceCard({ service }) {
  const Icon = service.icon

  return (
    <motion.div
      variants={staggerItem}
      className="group relative border border-ink-border/60 bg-paper-soft p-8 transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-[0_0_40px_rgba(200,169,110,0.06)]"
    >
      {/* Number */}
      <span className="mb-6 block font-mono text-xs tracking-[0.2em] text-text-secondary">
        {service.number}
      </span>

      {/* Icon */}
      <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-sm border border-ink-border/40 bg-ink text-accent">
        <Icon size={18} />
      </div>

      {/* Title */}
      <h3 className="mb-3 text-xl font-semibold text-text-dark">{service.title}</h3>

      {/* Description */}
      <p className="mb-6 text-sm leading-relaxed text-text-secondary">{service.description}</p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {service.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-sm border border-ink-border/30 bg-ink/5 px-2.5 py-1 font-mono text-[10px] tracking-wide text-text-secondary"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Arrow */}
      <div className="absolute right-6 top-6 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
        <ArrowUpRight size={16} className="text-accent" />
      </div>
    </motion.div>
  )
}

export default function Services() {
  return (
    <section id="services" className="bg-paper section-pad">
      <div className="container-site">
        {/* Header */}
        <div className="mb-16 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionMarker index="00.02°" label="Services" light />
            <AnimatedText as="h2" className="text-section font-bold text-text-dark text-balance">
              Everything Your Dealership Needs to Win Online
            </AnimatedText>
          </div>
          <AnimatedText delay={0.15} className="flex items-end">
            <p className="text-base leading-relaxed text-text-secondary lg:text-lg">
              We don't offer cookie-cutter social media packages. Every service we provide is built around automotive — your inventory, your market, your buyers.
            </p>
          </AnimatedText>
        </div>

        {/* Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
