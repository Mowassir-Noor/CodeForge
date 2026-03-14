import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenuAlt3, HiX } from 'react-icons/hi'

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Tracks', href: '#tracks' },
  { name: 'Schedule', href: '#schedule' },
  { name: 'Prizes', href: '#prizes' },
  { name: 'Judges', href: '#judges' },
  { name: 'FAQ', href: '#faq' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
          ? 'bg-charcoal-900/90 backdrop-blur-xl border-b border-kintsugi-gold/20 shadow-lg shadow-kintsugi-gold/5'
          : 'bg-transparent'
        }`}
    >
      <div className="section-container py-6 flex items-center justify-between " style={{marginTop:"2rem", marginBottom:"2rem"}}>
        <a href="#" className="flex items-center gap-2 " style={{marginBottom:"1rem"}}>
          <span className="font-heading text-2xl md:text-3xl font-bold text-kintsugi-gold tracking-wider">
            CODE<span className="text-white">FORGE</span>
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-base text-gray-300 hover:text-kintsugi-gold transition-colors duration-300 font-medium tracking-wide"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#register"
            className="px-6 py-2.5 bg-kintsugi-gold/10 border border-kintsugi-gold/40 text-kintsugi-gold rounded-lg text-base font-semibold hover:bg-kintsugi-gold/20 hover:border-kintsugi-gold/60 transition-all duration-300 hover:shadow-[0_0_15px_rgba(212,168,67,0.3)]"
          >
            Register
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-kintsugi-gold text-2xl"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-charcoal-800/95 backdrop-blur-xl border-b border-kintsugi-gold/20"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-gray-300 hover:text-kintsugi-gold transition-colors py-2"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#register"
                onClick={() => setMobileOpen(false)}
                className="px-5 py-2 bg-kintsugi-gold/10 border border-kintsugi-gold/40 text-kintsugi-gold rounded-lg text-sm font-semibold text-center"
              >
                Register
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
