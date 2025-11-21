import { motion } from 'framer-motion'

const items = [
  {
    title: 'The Story Arc Method',
    desc: 'A framework for teaching complex topics with narrative beats and emotional anchors.',
  },
  {
    title: 'Visual Metaphors in Code',
    desc: 'Turning abstract ideas like concurrency into tangible scenes and characters.',
  },
  {
    title: 'Community-first Learning',
    desc: 'Building supportive cohorts where learners ship projects together.',
  }
]

export default function Teaching() {
  return (
    <section id="teaching" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Teaching philosophy</h2>
          <p className="mt-3 text-slate-300/90">How I turn complexity into clarity with playful, modern visuals.</p>
        </div>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05, duration: 0.5 }} className="rounded-2xl p-6 bg-white/5 backdrop-blur-sm border border-white/10">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-400 via-cyan-400 to-blue-500 mb-4" />
              <h3 className="text-white font-semibold">{it.title}</h3>
              <p className="mt-2 text-slate-300/90 text-sm leading-relaxed">{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
