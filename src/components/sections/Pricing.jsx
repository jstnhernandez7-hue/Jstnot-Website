import { motion } from 'framer-motion'
import { Check, ArrowRight } from 'lucide-react'
import { plans } from '../../constants/pricing'
import SectionMarker from '../ui/SectionMarker'
import Button from '../ui/Button'
import { staggerContainer, staggerItem } from '../../hooks/useScrollAnimation'

function PricingCard({ plan }) {
  return (
    <motion.div
      variants={staggerItem}
      className={`relative flex flex-col border p-8 transition-all duration-300 lg:p-10 ${
        plan.isPopular
          ? 'border-accent/50 bg-ink-soft shadow-[0_0_60px_rgba(200,169,110,0.08)]'
          : 'border-ink-border bg-ink-soft hover:border-ink-border/80'
      }`}
    >
      {/* Popular badge */}
      {plan.isPopular && (
        <div className="absolute -top-px left-1/2 -translate-x-1/2">
          <span className="block rounded-b-sm bg-accent px-4 py-1.5 font-mono text-[10px] tracking-[0.2em] uppercase text-ink font-semibold">
            Most Popular
          </span>
        </div>
      )}

      {/* Plan name */}
      <p className="mb-2 font-mono text-xs tracking-[0.2em] uppercase text-text-secondary">
        {plan.name}
      </p>

      {/* Price */}
      <div className="mb-3 flex items-end gap-2">
        <span className="text-5xl font-bold text-white">
          ${plan.price.toLocaleString()}
        </span>
        <span className="mb-2 text-text-secondary">{plan.period}</span>
      </div>

      {/* Tagline */}
      <p className="mb-8 border-b border-ink-border pb-8 text-sm text-text-secondary">
        {plan.tagline}
      </p>

      {/* Features */}
      <ul className="mb-10 flex flex-1 flex-col gap-3">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-3">
            <Check size={14} className="mt-0.5 shrink-0 text-accent" />
            <span className="text-sm text-text-secondary">{feature}</span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <Button
        variant={plan.isPopular ? 'primary' : 'outline'}
        size="md"
        href="https://calendly.com"
        target="_blank"
        rel="noopener noreferrer"
        className="w-full justify-center"
      >
        {plan.cta}
        <ArrowRight size={14} />
      </Button>
    </motion.div>
  )
}

export default function Pricing() {
  return (
    <section id="pricing" className="bg-ink section-pad">
      <div className="container-site">
        <SectionMarker index="00.07°" label="Pricing" />

        <div className="mb-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-section font-bold text-white text-balance"
          >
            Simple, Transparent Pricing
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex flex-col justify-end gap-4"
          >
            <p className="text-base leading-relaxed text-text-secondary lg:text-lg">
              No long-term contracts, no hidden fees. Pick the plan that fits your dealership and we'll get started within 48 hours.
            </p>
            <p className="font-mono text-xs tracking-wider text-text-secondary">
              Not sure which plan is right? →{' '}
              <a href="https://calendly.com" className="text-accent underline underline-offset-2" target="_blank" rel="noopener noreferrer">
                Book a free strategy call
              </a>
            </p>
          </motion.div>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 gap-6 lg:grid-cols-3"
        >
          {plans.map((plan) => (
            <PricingCard key={plan.id} plan={plan} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
