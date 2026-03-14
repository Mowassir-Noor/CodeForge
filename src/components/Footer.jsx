import { FaXTwitter, FaDiscord, FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa6'
import { HiOutlineMail, HiOutlineLocationMarker } from 'react-icons/hi'

const socialLinks = [
  { icon: <FaXTwitter />, href: '#', label: 'Twitter/X' },
  { icon: <FaDiscord />, href: '#', label: 'Discord' },
  { icon: <FaGithub />, href: '#', label: 'GitHub' },
  { icon: <FaLinkedin />, href: '#', label: 'LinkedIn' },
  { icon: <FaInstagram />, href: '#', label: 'Instagram' },
]

export default function Footer() {
  return (
    <footer className="relative bg-charcoal-900 border-t border-kintsugi-gold/10">
      <div className="kintsugi-divider" />

      <div className="section-container py-24 md:py-32">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Brand */}
          <div>
            <h3 className="font-heading text-4xl font-bold mb-6">
              <span className="text-kintsugi-gold">CODE</span>
              <span className="text-white">FORGE</span>
            </h3>
            <p className="text-gray-500 text-base leading-[1.8] mb-8">
              Build. Break. Reforge. A hackathon inspired by the art of Kintsugi —
              where imperfections become innovations.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  aria-label={link.label}
                  className="w-10 h-10 rounded-lg bg-charcoal-700/50 flex items-center justify-center text-gray-400 hover:text-kintsugi-gold hover:bg-kintsugi-gold/10 transition-all duration-300"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-base font-bold text-kintsugi-gold/80 uppercase tracking-wider mb-6">
              Quick Links
            </h4>
            <div className="grid grid-cols-2 gap-x-4 gap-y-3">
              {['About', 'Tracks', 'Schedule', 'Prizes', 'Judges', 'FAQ', 'Register', 'Sponsors'].map(
                (link) => (
                  <a
                    key={link}
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-500 text-base hover:text-kintsugi-gold transition-colors duration-300 py-1"
                  >
                    {link}
                  </a>
                )
              )}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-base font-bold text-kintsugi-gold/80 uppercase tracking-wider mb-6">
              Contact
            </h4>
            <div className="space-y-4">
              <a
                href="mailto:hello@codeforge.dev"
                className="flex items-center gap-3 text-gray-500 text-base hover:text-kintsugi-gold transition-colors duration-300 py-1"
              >
                <HiOutlineMail className="text-xl shrink-0" />
                hello@codeforge.dev
              </a>
              <div className="flex items-start gap-3 text-gray-500 text-base">
                <HiOutlineLocationMarker className="text-xl shrink-0 mt-1" />
                <div className="space-y-1">
                  <p>Innovation Hub</p>
                  <p>123 Tech Boulevard</p>
                  <p>San Francisco, CA 94105</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-charcoal-600/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-xs">
            &copy; 2026 CodeForge Hackathon. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-600 text-xs hover:text-kintsugi-gold transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-600 text-xs hover:text-kintsugi-gold transition-colors">
              Code of Conduct
            </a>
            <a href="#" className="text-gray-600 text-xs hover:text-kintsugi-gold transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
