import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Countdown from './Countdown'
import { useTranslation } from 'react-i18next'

export default function Register() {
  const { t } = useTranslation();
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="register" className="relative section-spacing bg-charcoal-800/30 overflow-hidden">
      <div className="kintsugi-divider mb-24 md:mb-32" />

      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-kintsugi-gold/5 blur-[100px]" />
      </div>

      <div className="section-container max-w-4xl relative z-10 w-full flex flex-col items-center mx-auto" ref={ref}>
        <motion.div
          className="text-center w-full flex flex-col items-center"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="text-kintsugi-gold font-mono text-sm tracking-[0.2em] uppercase mb-4">
            {t('register.label')}
          </p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"style={{marginTop: '2rem'}}>
            {t('register.title1')} <span className="text-kintsugi-gold gold-glow">{t('register.title2')}</span>{t('register.title3')}
          </h2>
          <p className="text-gray-400 text-base md:text-lg prose-width mx-auto mb-12 leading-[1.8] text-center" style={{ marginBottom: '2rem' , marginTop: '2rem'}}>
            {t('register.desc')}
          </p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="card-gold-border bg-charcoal-900/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 max-w-2xl mx-auto w-full"
          >
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-left " style={{ marginTop: '0.5rem', marginLeft: '2rem' }}>
                <span className="font-heading text-3xl text-kintsugi-gold">📅</span>
                <div>
                  <p className="text-white font-semibold">{t('register.date')}</p>
                  <p className="text-gray-500 text-sm">{t('register.dateDesc')}</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-left"style={{ marginTop: '0.5rem', marginLeft: '2rem' }}>
                <span className="font-heading text-3xl text-kintsugi-gold">📍</span>
                <div>
                  <p className="text-white font-semibold">{t('register.loc')}</p>
                  <p className="text-gray-500 text-sm">{t('register.locDesc')}</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-left"style={{ marginTop: '0.5rem', marginLeft: '2rem' }}>
                <span className="font-heading text-3xl text-kintsugi-gold">💰</span>
                <div>
                  <p className="text-white font-semibold">{t('register.prize')}</p>
                  <p className="text-gray-500 text-sm">{t('register.prizeDesc')}</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-left"style={{ marginTop: '0.5rem' , marginLeft: '2rem'}}>
                <span className="font-heading text-3xl text-kintsugi-gold">🎟️</span>
                <div style={{ marginTop: '0.5rem' }}>
                  <p className="text-white font-semibold">{t('register.free')}</p>
                  <p className="text-gray-500 text-sm">{t('register.freeDesc')}</p>
                </div>
              </div>
            </div>

            <div className="mt-10 space-y-4" style={{ marginTop: '1rem' }}>
              <a
                href="https://forms.example.com/codeforge"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-4 bg-gradient-to-r from-kintsugi-dark via-kintsugi-gold to-kintsugi-dark text-charcoal-900 font-heading font-bold text-base tracking-wider rounded-lg text-center hover:shadow-[0_0_30px_rgba(212,168,67,0.4)] transition-all duration-500 hover:scale-[1.02]"
              style={{marginBottom:"1rem"}}>
                {t('register.regBtn')}
              </a>
            </div>
          </motion.div>

          {/* Countdown hint */}
          {/* <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6 }}
            className="mt-12 flex justify-center gap-6"
          >
            {[
              { number: '18', label: 'Days' },
              { number: '07', label: 'Hours' },
              { number: '42', label: 'Minutes' },
            ].map((item) => (
              <div key={item.label} className="text-center" style={{ marginTop: '2rem' }}>
                <p className="font-heading text-3xl md:text-4xl font-bold text-kintsugi-gold gold-glow">
                  {item.number}
                </p>
                <p className="text-gray-500 text-xs uppercase tracking-wider mt-1">{item.label}</p>
              </div>
            ))}
          </motion.div> */}
          <div style={{marginTop: '2rem'}}> <Countdown targetDate="2026-05-01" isInView={isInView} />  </div>
          
        </motion.div>
      </div>
    </section>
  )
}
