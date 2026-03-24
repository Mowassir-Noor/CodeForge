import { FaXTwitter, FaDiscord, FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa6'
import { HiOutlineMail, HiOutlineLocationMarker } from 'react-icons/hi'
import { useTranslation } from 'react-i18next'

const socialLinks = [
  { icon: <FaXTwitter />, href: 'https://x.com/GaziCyber', label: 'Twitter/X' },
  // { icon: <FaDiscord />, href: '#', label: 'Discord' },
  { icon: <FaGithub />, href: 'https://github.com/gazicyber', label: 'GitHub' },
  { icon: <FaLinkedin />, href: 'https://www.linkedin.com/company/gazicyber/posts/?feedView=all', label: 'LinkedIn' },
  { icon: <FaInstagram />, href: 'https://www.instagram.com/gazicyber/', label: 'Instagram' },
]

export default function Footer() {
  const { t } = useTranslation();

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
              {t('footer.desc')}
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
              {t('footer.quick')}
            </h4>
            <div className="grid grid-cols-2 gap-x-4 gap-y-3">
              {['about', 'tracks', 'schedule', 'prizes', 'judges', 'faq', 'register', 'sponsors'].map(
                (link) => (
                  <a
                    key={link}
                    href={`#${link}`}
                    className="text-gray-500 text-base hover:text-kintsugi-gold transition-colors duration-300 py-1"
                  >
                    {t(`nav.${link}`)}
                  </a>
                )
              )}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-base font-bold text-kintsugi-gold/80 uppercase tracking-wider mb-6">
              {t('footer.contact')}
            </h4>
            <div className="space-y-4">
              <a
                href="mailto:gazicyber@gmail.com"
                className="flex items-center gap-3 text-gray-500 text-base hover:text-kintsugi-gold transition-colors duration-300 py-1"
              >
                <HiOutlineMail className="text-xl shrink-0" />
               gazicyber@gmail.com
              </a>
              <div className="flex items-start gap-3 text-gray-500 text-base">
                <HiOutlineLocationMarker className="text-xl shrink-0 mt-1" />
                <div className="space-y-1">
                  <p>{t('footer.hub')}</p>
                  <p>{t('footer.uni')}</p>
                  <p>{t('footer.ankara')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-charcoal-600/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-xs">
            {t('footer.rights')}
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-600 text-xs hover:text-kintsugi-gold transition-colors">
              {t('footer.privacy')}
            </a>
            <a href="#" className="text-gray-600 text-xs hover:text-kintsugi-gold transition-colors">
              {t('footer.conduct')}
            </a>
            <a href="#" className="text-gray-600 text-xs hover:text-kintsugi-gold transition-colors">
              {t('footer.terms')}
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
