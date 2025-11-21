import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Reveal({ children, delay = 0, y = 24, once = true, className = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once, margin: '0px 0px -20% 0px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
