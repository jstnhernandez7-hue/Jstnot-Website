import { motion } from 'framer-motion'
import { fadeUp } from '../../hooks/useScrollAnimation'

export default function AnimatedText({ children, delay = 0, className = '', as = 'div' }) {
  const Tag = motion[as] || motion.div

  return (
    <Tag
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      transition={{ delay }}
      className={className}
    >
      {children}
    </Tag>
  )
}
