import { useState, useEffect, useRef } from 'react'
import { useInView } from 'framer-motion'
import { animate } from 'framer-motion'

export function useCounter(target, duration = 2000) {
  const [value, setValue] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  useEffect(() => {
    if (!isInView) return

    const controls = animate(0, target, {
      duration: duration / 1000,
      ease: [0.25, 0.46, 0.45, 0.94],
      onUpdate: (v) => setValue(Math.round(v)),
    })

    return () => controls.stop()
  }, [isInView, target, duration])

  return { ref, value }
}
