import { motion } from 'framer-motion'

const projects = [
  {
    title: 'CodeQuest: Interactive CS Series',
    description: 'A narrative-driven video series turning algorithms into quests with playable sandboxes.',
    tags: ['React', 'Framer Motion', 'Storyboarding'],
    link: '#'
  },
  {
    title: 'Stream Studio Toolkit',
    description: 'Open-source overlays and widgets for educators and streamers to run live coding shows.',
    tags: ['TypeScript', 'WebSocket', 'OBS'],
    link: '#'
  },
  {
    title: 'Learning Paths Platform',
    description: 'Modular curriculum framework that adapts to a student’s pace with real-world projects.',
    tags: ['Next.js', 'MongoDB', 'Design Systems'],
    link: '#'
  }
]

export default function Work() {
  return (
    <section id="work" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(56,189,248,0.12),transparent_60%)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Selected work</h2>
          <p className="mt-3 text-slate-300/90">Projects that blend education, engineering and storytelling.</p>
        </div>

        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.a
              key={i}
              href={p.link}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 26, rotateX: -6 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, margin: '0px 0px -10% 0px' }}
              transition={{ delay: i * 0.06, duration: 0.6, ease: [0.22,1,0.36,1] }}
              className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-5 hover:bg-white/10 hover:border-white/20 transition will-change-transform"
              whileHover={{ y: -4 }}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-white font-semibold group-hover:text-white/95">{p.title}</h3>
                  <p className="mt-2 text-sm text-slate-300/90">{p.description}</p>
                </div>
                <motion.div
                  initial={false}
                  whileHover={{ rotate: 8, scale: 1.06 }}
                  className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-400 via-sky-500 to-indigo-500 opacity-80 group-hover:opacity-100 transition"
                />
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="text-[11px] px-2.5 py-1 rounded-full bg-slate-900/40 border border-white/10 text-slate-300">{t}</span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
