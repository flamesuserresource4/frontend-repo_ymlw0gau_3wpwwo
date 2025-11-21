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
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white/90 text-xs border border-white/15 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> Available for collaborations
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
              Innovative storytelling for the next wave of makers
            </h1>
            <p className="mt-5 text-lg text-slate-200/90 leading-relaxed max-w-xl">
              I’m a content creator and tech educator turned full‑stack developer. I craft immersive lessons and build tools that turn complex ideas into adventures.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#work" className="px-5 py-3 rounded-xl bg-gradient-to-tr from-blue-500 via-sky-500 to-cyan-400 text-white font-medium shadow-[0_8px_40px_0_rgba(56,189,248,0.35)] hover:shadow-[0_8px_50px_0_rgba(56,189,248,0.55)] transition">See selected work</a>
              <a href="#contact" className="px-5 py-3 rounded-xl bg-white/10 text-white border border-white/15 hover:bg-white/15 transition font-medium">Get in touch</a>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-6 max-w-md">
              <Stat label="Students reached" value="120K+" />
              <Stat label="Videos" value="250+" />
              <Stat label="Years building" value="8" />
            </div>
          </motion.div>
        </div>
        <div className="h-[60vh] lg:h-[80vh]" />
      </div>
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
