
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { useTranslation } from 'react-i18next';

import { HiOutlineSun, HiOutlineMoon, HiOutlineTranslate } from "react-icons/hi";

const navLinks = [
  { key: "about", href: "#about" },
  { key: "tracks", href: "#tracks" },
  { key: "schedule", href: "#schedule" },
  { key: "prizes", href: "#prizes" },
  { key: "judges", href: "#judges" },
  { key: "faq", href: "#faq" },
];

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isLightMode, setIsLightMode] = useState(false);

  useEffect(() => {
    if (isLightMode) {
      document.documentElement.classList.add('light-mode');
    } else {
      document.documentElement.classList.remove('light-mode');
    }
  }, [isLightMode]);

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'tr' : 'en';
    i18n.changeLanguage(newLang);
  };
  
  const toggleTheme = () => {
    setIsLightMode(!isLightMode);
  };

  useEffect(() => {
    const onScroll = () => {
      const currentScrollY = window.scrollY;

      setScrolled(currentScrollY > 50);

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowNavbar(false); // scrolling down
      } else {
        setShowNavbar(true); // scrolling up
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [lastScrollY]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: showNavbar ? 0 : -120 }}
      transition={{ duration: 0.35 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-charcoal-900/90 backdrop-blur-xl border-b border-kintsugi-gold/20 shadow-lg shadow-kintsugi-gold/5"
          : "bg-transparent"
      }`}
    >
      <div
        className="section-container py-6 flex items-center justify-between"
        style={{ marginTop: "2rem", marginBottom: "2rem" }}
      >
        <a href="#" className="flex items-center gap-2" style={{ marginBottom: "1rem" }}>
          <span className="font-heading text-2xl md:text-3xl font-bold text-kintsugi-gold tracking-wider">
            CODE<span className="text-white">FORGE</span>
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.key}
              href={link.href}
              className="text-base text-gray-300 hover:text-kintsugi-gold transition-colors duration-300 font-medium tracking-wide"
            >
              {t(`nav.${link.key}`)}
            </a>
          ))}

          <div className="flex items-center gap-3 border-l border-gray-600 pl-4 ml-2">
            <button onClick={toggleTheme} className="text-gray-300 hover:text-kintsugi-gold transition-colors text-xl" aria-label="Toggle Theme">
              {isLightMode ? <HiOutlineMoon /> : <HiOutlineSun />}
            </button>
            <button onClick={toggleLanguage} className="text-gray-300 hover:text-kintsugi-gold transition-colors text-xl" aria-label="Toggle Language">
              <span className="text-sm font-bold">{i18n.language.toUpperCase()}</span>
            </button>
          </div>

          <a
            href="#register"
            className="px-6 py-2.5 bg-kintsugi-gold/10 border border-kintsugi-gold/40 text-kintsugi-gold rounded-lg text-base font-semibold hover:bg-kintsugi-gold/20 hover:border-kintsugi-gold/60 transition-all duration-300 hover:shadow-[0_0_15px_rgba(212,168,67,0.3)]"
          >
            {t('nav.register')}
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
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-charcoal-800/95 backdrop-blur-xl border-b border-kintsugi-gold/20"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.key}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-gray-300 hover:text-kintsugi-gold transition-colors py-2"
                >
                  {t(`nav.${link.key}`)}
                </a>
              ))}
              
              <div className="flex items-center gap-4 py-2 border-t border-gray-600 mt-2">
                <button onClick={toggleTheme} className="flex items-center gap-2 text-gray-300 hover:text-kintsugi-gold">
                  {isLightMode ? <HiOutlineMoon className="text-xl" /> : <HiOutlineSun className="text-xl" />}
                  <span>{isLightMode ? 'Dark Mode' : 'Light Mode'}</span>
                </button>
                <div className="w-px h-5 bg-gray-600"></div>
                <button onClick={toggleLanguage} className="text-gray-300 hover:text-kintsugi-gold font-bold">
                  {i18n.language.toUpperCase()}
                </button>
              </div>

              <a
                href="#register"
                onClick={() => setMobileOpen(false)}
                className="px-5 py-2 bg-kintsugi-gold/10 border border-kintsugi-gold/40 text-kintsugi-gold rounded-lg text-sm font-semibold text-center"
              >
                {t('nav.register')}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
