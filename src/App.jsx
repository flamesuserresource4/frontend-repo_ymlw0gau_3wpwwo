import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Work from './components/Work'
import Teaching from './components/Teaching'
import About from './components/About'
import Contact from './components/Contact'
import ScrollProgress from './components/ScrollProgress'

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <div className="fixed inset-0 bg-[linear-gradient(to_bottom_right,rgba(56,189,248,0.08),transparent_40%),radial-gradient(60%_50%_at_10%_0%,rgba(59,130,246,0.15),transparent_60%),radial-gradient(50%_40%_at_100%_0%,rgba(16,185,129,0.15),transparent_60%)]" />
      <ScrollProgress />
      <Navbar />
      <main className="relative">
        <Hero />
        <Work />
        <Teaching />
        <About />
        <Contact />
        <footer className="py-12 text-center text-slate-400/80">
          © {new Date().getFullYear()} Aarav Blaze — Crafted with code and curiosity
        </footer>
      </main>
    </div>
  )
}

export default App
