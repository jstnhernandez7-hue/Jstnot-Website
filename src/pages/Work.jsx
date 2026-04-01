import { motion } from 'framer-motion'
import { portfolioItems } from '../constants/portfolio'
import { Play, Eye } from 'lucide-react'
import SectionMarker from '../components/ui/SectionMarker'
import { staggerContainer, staggerItem } from '../hooks/useScrollAnimation'

export default function Work() {
  return (
    <div className="min-h-screen bg-paper pt-32 pb-24">
      <div className="container-site">
        <SectionMarker index="—" label="Portfolio" light />

        <div className="mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-section font-bold text-text-dark text-balance"
          >
            Our Work
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-6 max-w-xl text-lg text-text-secondary"
          >
            Content produced for car dealerships across the United States.
          </motion.p>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {portfolioItems.map((item) => (
            <motion.div
              key={item.id}
              variants={staggerItem}
              className="group relative overflow-hidden border border-ink-border/40 bg-ink-soft"
            >
              <div className="relative aspect-video bg-gradient-to-br from-ink-soft to-ink-border">
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full border border-accent/40 bg-ink/80 text-accent">
                    <Play size={20} className="translate-x-0.5" />
                  </div>
                </div>
                <div className="absolute left-4 top-4">
                  <span className="rounded-sm bg-ink/80 px-2.5 py-1 font-mono text-[10px] tracking-wide text-accent">
                    {item.platform}
                  </span>
                </div>
                <div className="absolute bottom-4 right-4 flex items-center gap-1.5">
                  <Eye size={12} className="text-text-secondary" />
                  <span className="font-mono text-xs text-white">{item.views}</span>
                </div>
              </div>
              <div className="p-5">
                <p className="mb-1 font-mono text-[10px] tracking-[0.2em] uppercase text-text-secondary">
                  {item.category}
                </p>
                <h3 className="text-sm font-semibold text-white">{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
