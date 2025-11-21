import { useState } from 'react'
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react'

function NavLink({ href, children, onClick }) {
  return (
    <a href={href} onClick={onClick} className="text-slate-200/90 hover:text-white transition-colors px-3 py-2 rounded-md">
      {children}
    </a>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const close = () => setOpen(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mt-4 backdrop-blur-md bg-slate-900/50 border border-white/10 rounded-2xl shadow-xl">
          <div className="flex items-center justify-between px-4 py-3">
            <a href="#home" className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 via-cyan-400 to-emerald-400 shadow-inner" />
              <div className="leading-tight">
                <div className="text-white font-semibold">Aarav Blaze</div>
                <div className="text-xs text-slate-300/70">Story-led Educator • Full‑Stack Dev</div>
              </div>
            </a>
            <nav className="hidden md:flex items-center gap-2">
              <NavLink href="#work">Work</NavLink>
              <NavLink href="#teaching">Teaching</NavLink>
              <NavLink href="#about">About</NavLink>
              <NavLink href="#contact">Contact</NavLink>
              <div className="w-px h-6 bg-white/10 mx-1" />
              <a href="https://github.com/" target="_blank" rel="noreferrer" className="text-slate-200/80 hover:text-white p-2 rounded-md">
                <Github size={18} />
              </a>
              <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="text-slate-200/80 hover:text-white p-2 rounded-md">
                <Linkedin size={18} />
              </a>
              <a href="mailto:hello@example.com" className="text-slate-200/80 hover:text-white p-2 rounded-md">
                <Mail size={18} />
              </a>
            </nav>
            <button onClick={() => setOpen(v => !v)} className="md:hidden text-white p-2">
              {open ? <X /> : <Menu />}
            </button>
          </div>
          {open && (
            <div className="md:hidden px-4 pb-4">
              <div className="grid gap-2">
                <NavLink href="#work" onClick={close}>Work</NavLink>
                <NavLink href="#teaching" onClick={close}>Teaching</NavLink>
                <NavLink href="#about" onClick={close}>About</NavLink>
                <NavLink href="#contact" onClick={close}>Contact</NavLink>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
