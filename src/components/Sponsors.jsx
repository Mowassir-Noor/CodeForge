import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'

const sponsors = [
  { name: "TechNova", url: "https://technova.dev" },
  { name: "Quantum Labs", url: "https://quantumlabs.io" },
  { name: "CipherCore", url: "https://ciphercore.com" },
  { name: "NeuralPath", url: "https://neuralpath.ai" },
  { name: "Arclight", url: "https://arclight.tech" },
  { name: "SynthWave", url: "https://synthwave.dev" },
  { name: "Vertex AI", url: "https://cloud.google.com/vertex-ai" },
  { name: "Orion Systems", url: "https://orionsystems.io" },
];

const duplicated = [...sponsors, ...sponsors];

export default function Sponsors() {
  const { t } = useTranslation();
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section id="sponsors" className="relative section-spacing bg-charcoal-800/30 overflow-hidden">
      <div className="kintsugi-divider mb-24 md:mb-32" />

      <div className="section-container" ref={ref}>
        <motion.div
          className="section-header mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label text-kintsugi-gold font-mono text-sm tracking-[0.2em] uppercase mb-4">
            {t('sponsors.label')}
          </p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            <span className="text-kintsugi-gold gold-glow">{t('sponsors.title')}</span>
          </h2>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="relative"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 z-10 pointer-events-none fade-gradient-left" />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 z-10 pointer-events-none fade-gradient-right" />

        <div 
          className="flex gap-5 w-max will-change-transform" 
          style={{ 
            animation: `scroll-right 25s linear infinite`, 
            animationPlayState: isPaused ? "paused" : "running" 
          }}
        >
          {duplicated.map((s, i) => (
            <a
              key={`${s.name}-${i}`}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="card-gold-border bg-charcoal-800/40 rounded-xl px-10 py-8 flex items-center justify-center group cursor-pointer flex-shrink-0 w-[240px] hover:bg-charcoal-700/40 transition-colors duration-300 no-underline h-28"
            >
              <span className="font-heading text-xl font-bold text-gray-400 group-hover:text-kintsugi-gold transition-colors duration-300">
                {s.name}
              </span>
            </a>
          ))}
        </div>
      </motion.div>
      
      <div className="section-container">
        <motion.p
          className="text-center text-gray-500 text-sm mt-12 mb-8"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
        >
          {t('sponsors.interested')}{' '}
          <a href="mailto:sponsors@codeforge.dev" className="text-kintsugi-gold hover:underline">
            {t('sponsors.contact')}
          </a>
        </motion.p>
      </div>
    </section>
  )
}
