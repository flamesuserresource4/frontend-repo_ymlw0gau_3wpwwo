import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  const [status, setStatus] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const payload = Object.fromEntries(form.entries())

    setStatus('Sending...')
    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL || ''}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      const data = await res.json().catch(() => ({}))
      if (res.ok) setStatus('Thanks! I will get back to you shortly.')
      else setStatus(data?.detail || 'Something went wrong.')
    } catch (e) {
      setStatus('Unable to send right now.')
    }
  }

  return (
    <section id="contact" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Let’s collaborate</h2>
          <p className="mt-3 text-slate-300/90">Speaking, workshops, brand partnerships, or cool ideas — say hi.</p>
        </div>
        <motion.form onSubmit={handleSubmit} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mt-8 grid md:grid-cols-2 gap-5 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6">
          <input name="name" required placeholder="Your name" className="px-4 py-3 rounded-xl bg-slate-900/50 border border-white/10 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400" />
          <input name="email" type="email" required placeholder="Email" className="px-4 py-3 rounded-xl bg-slate-900/50 border border-white/10 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400" />
          <input name="subject" placeholder="Subject" className="md:col-span-2 px-4 py-3 rounded-xl bg-slate-900/50 border border-white/10 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400" />
          <textarea name="message" required placeholder="Tell me about your project" rows="5" className="md:col-span-2 px-4 py-3 rounded-xl bg-slate-900/50 border border-white/10 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400" />
          <div className="md:col-span-2 flex items-center gap-4">
            <button type="submit" className="px-5 py-3 rounded-xl bg-gradient-to-tr from-blue-500 via-sky-500 to-cyan-400 text-white font-medium shadow-[0_8px_40px_0_rgba(56,189,248,0.35)] hover:shadow-[0_8px_50px_0_rgba(56,189,248,0.55)] transition">Send message</button>
            <span className="text-sm text-slate-300/80">{status}</span>
          </div>
        </motion.form>
      </div>
    </section>
  )
}
