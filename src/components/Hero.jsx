import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[92vh] pt-28">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/50 to-slate-950 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 items-center gap-12">
        <div className="py-20">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.22,1,0.36,1] }}>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white/90 text-xs border border-white/15 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> Available for collaborations
            </span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.8, ease: [0.22,1,0.36,1] }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white"
            >
              Innovative storytelling for the next wave of makers
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8, ease: [0.22,1,0.36,1] }}
              className="mt-5 text-lg text-slate-200/90 leading-relaxed max-w-xl"
            >
              I’m a content creator and tech educator turned full‑stack developer. I craft immersive lessons and build tools that turn complex ideas into adventures.
            </motion.p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <motion.a href="#work" whileHover={{ y: -2, scale: 1.02 }} whileTap={{ scale: 0.98 }} className="px-5 py-3 rounded-xl bg-gradient-to-tr from-blue-500 via-sky-500 to-cyan-400 text-white font-medium shadow-[0_8px_40px_0_rgba(56,189,248,0.35)] hover:shadow-[0_8px_50px_0_rgba(56,189,248,0.55)] transition">See selected work</motion.a>
              <motion.a href="#contact" whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }} className="px-5 py-3 rounded-xl bg-white/10 text-white border border-white/15 hover:bg-white/15 transition font-medium">Get in touch</motion.a>
            </div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8, ease: [0.22,1,0.36,1] }} className="mt-8 grid grid-cols-3 gap-6 max-w-md">
              <Stat label="Students reached" value="120K+" />
              <Stat label="Videos" value="250+" />
              <Stat label="Years building" value="8" />
            </motion.div>
          </motion.div>
        </div>
        <div className="h-[60vh] lg:h-[80vh]" />
      </div>

      {/* subtle scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-300/80 text-xs"
      >
        <div className="w-[1px] h-8 mx-auto bg-gradient-to-b from-transparent via-slate-300/50 to-slate-300/0" />
        Scroll
      </motion.div>
    </section>
  )
}

function Stat({ label, value }) {
  return (
    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 text-center">
      <div className="text-2xl font-bold text-white">{value}</div>
      <div className="text-xs uppercase tracking-wide text-slate-300/80">{label}</div>
    </div>
  )
}
