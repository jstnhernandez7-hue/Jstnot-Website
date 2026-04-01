import { useInView } from 'framer-motion'
import { useRef } from 'react'

const prefersReduced =
  typeof window !== 'undefined'
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
    : false

export const fadeUp = {
  hidden: prefersReduced ? {} : { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
}

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: prefersReduced ? 0 : 0.08,
      delayChildren: 0.1,
    },
  },
}

export const staggerItem = {
  hidden: prefersReduced ? {} : { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
}

export function useScrollRef(options = {}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px', ...options })
  return { ref, isInView }
}
