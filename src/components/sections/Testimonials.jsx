import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import { testimonials } from '../../constants/testimonials'
import SectionMarker from '../ui/SectionMarker'
import { staggerContainer, staggerItem } from '../../hooks/useScrollAnimation'

function TestimonialCard({ testimonial }) {
  return (
    <motion.div
      variants={staggerItem}
      className="group flex flex-col border border-ink-border/60 bg-paper-soft p-8 transition-all duration-300 hover:-translate-y-1"
    >
      {/* Stars */}
      <div className="mb-5 flex gap-1">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} size={14} className="fill-accent text-accent" />
        ))}
      </div>

      {/* Quote */}
      <blockquote className="mb-8 flex-1 text-base leading-relaxed text-text-dark">
        "{testimonial.quote}"
      </blockquote>

      {/* Author */}
      <div className="flex items-center gap-4 border-t border-ink-border/30 pt-6">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-ink font-semibold text-accent text-sm">
          {testimonial.name.charAt(0)}
        </div>
        <div>
          <p className="font-semibold text-text-dark text-sm">{testimonial.name}</p>
          <p className="text-xs text-text-secondary">
            {testimonial.title} · {testimonial.dealership}
          </p>
        </div>
      </div>
    </motion.div>
  )
}

export default function Testimonials() {
  return (
    <section className="bg-paper section-pad">
      <div className="container-site">
        <SectionMarker index="00.04°" label="Testimonials" light />

        <div className="mb-16 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-section font-bold text-text-dark text-balance"
          >
            What Dealers Are Saying
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex items-end text-base leading-relaxed text-text-secondary lg:text-lg"
          >
            Real results from dealerships that made the switch to content-first marketing.
          </motion.p>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 gap-6 md:grid-cols-3"
        >
          {testimonials.map((t) => (
            <TestimonialCard key={t.id} testimonial={t} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
