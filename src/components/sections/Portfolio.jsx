import { motion } from 'framer-motion'
import { Play, Eye } from 'lucide-react'
import { portfolioItems } from '../../constants/portfolio'
import SectionMarker from '../ui/SectionMarker'
import Button from '../ui/Button'
import { staggerContainer, staggerItem } from '../../hooks/useScrollAnimation'

function PortfolioCard({ item }) {
  return (
    <motion.div
      variants={staggerItem}
      className="group relative overflow-hidden border border-ink-border/60 bg-ink-soft"
    >
      {/* Thumbnail placeholder */}
      <div className="relative aspect-video bg-gradient-to-br from-ink-soft to-ink-border">
        {/* Play overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <div className="flex h-14 w-14 items-center justify-center rounded-full border border-accent/40 bg-ink/80 backdrop-blur-sm text-accent">
            <Play size={20} className="translate-x-0.5" />
          </div>
        </div>

        {/* Platform badge */}
        <div className="absolute left-4 top-4">
          <span className="rounded-sm bg-ink/80 px-2.5 py-1 font-mono text-[10px] tracking-wide text-accent backdrop-blur-sm">
            {item.platform}
          </span>
        </div>

        {/* Views badge */}
        <div className="absolute bottom-4 right-4 flex items-center gap-1.5">
          <Eye size={12} className="text-text-secondary" />
          <span className="font-mono text-xs text-white">{item.views} views</span>
        </div>

        {/* Grid pattern background */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      {/* Info */}
      <div className="p-5">
        <p className="mb-1 font-mono text-[10px] tracking-[0.2em] uppercase text-text-secondary">
          {item.category}
        </p>
        <h3 className="text-sm font-semibold text-white">{item.title}</h3>
      </div>
    </motion.div>
  )
}

export default function Portfolio() {
  return (
    <section id="work" className="bg-paper section-pad">
      <div className="container-site">
        <SectionMarker index="00.06°" label="Work" light />

        <div className="mb-16 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-section font-bold text-text-dark text-balance"
          >
            Content That Hits
          </motion.h2>
          <div className="flex flex-col justify-end gap-6">
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-base leading-relaxed text-text-secondary lg:text-lg"
            >
              A sample of the content we've produced for dealerships across the country.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <Button variant="outline-dark" size="md" to="/work">
                View All Work
              </Button>
            </motion.div>
          </div>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {portfolioItems.map((item) => (
            <PortfolioCard key={item.id} item={item} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
