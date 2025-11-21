import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="order-2 lg:order-1">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Hi, I’m Aarav</h2>
          <p className="mt-4 text-slate-300/90 leading-relaxed">
            I create cinematic tech content and teach full‑stack development. I’ve led dev teams, mentored thousands of students, and shipped products that blend storytelling with solid engineering.
          </p>
          <p className="mt-3 text-slate-300/90 leading-relaxed">
            My toolkit: React, Node, Python, cloud, and a camera. My superpower: turning dense topics into engaging journeys.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {['React', 'Node', 'Python', 'MongoDB', 'Framer Motion', 'Tailwind'].map((s) => (
              <span key={s} className="text-xs px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-slate-200">{s}</span>
            ))}
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} className="order-1 lg:order-2">
          <div className="aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-slate-800 to-slate-900">
            <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1640&auto=format&fit=crop')] bg-cover bg-center mix-blend-luminosity opacity-90" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
