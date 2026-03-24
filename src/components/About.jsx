import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { useTranslation } from 'react-i18next'

function AnimatedSection({ children, className = '' }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default function About() {
  const { t } = useTranslation();

  return (
    <section id="about" className="relative section-spacing bg-charcoal-900">
      <div className="kintsugi-divider mb-16 md:mb-20" />

      <div className="section-container">
        <AnimatedSection>
          <div className="section-header">
            <p className="section-label text-kintsugi-gold font-mono text-sm tracking-[0.2em] uppercase mb-4">
              {t('about.label')}
            </p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              {t('about.title1')}<span className="text-kintsugi-gold gold-glow">{t('about.title2')}</span>
            </h2>
          </div>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <AnimatedSection>
            <div className="space-y-6 prose-width mx-auto">
              <p className="text-gray-300 text-base md:text-lg leading-[1.8]">
  {t('about.desc1')}
</p>

<p className="text-gray-400 leading-[1.8]">
  {t('about.desc2')}
</p>

<p className="text-gray-400 leading-[1.8]">
  {t('about.desc3')}
</p>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-2xl mx-auto">
              {[
                { number: '500+', label: t('about.statHackers') },
                { number: '48', label: t('about.statHours') },
                { number: '$50K', label: t('about.statPrizes') },
                { number: '30+', label: t('about.statMentors') },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="card-gold-border bg-charcoal-800/50 backdrop-blur-sm rounded-xl p-6 md:p-8 text-center"
                >
                  <p className="font-heading text-3xl md:text-4xl font-bold text-kintsugi-gold gold-glow mb-3">
                    {stat.number}
                  </p>
                  <p className="text-gray-400 text-xs md:text-sm uppercase tracking-wider">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>

        {/* Kintsugi philosophy cards */}
        <AnimatedSection className="mt-16 md:mt-24">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto " style={{ marginTop: '2rem', marginBottom: '2rem' }}>
            {[
              {
                icon: '破',
                title: t('about.kintsugi1Title'),
                desc: t('about.kintsugi1Desc'),
              },
              {
                icon: '金',
                title: t('about.kintsugi2Title'),
                desc: t('about.kintsugi2Desc'),
              },
              {
                icon: '鍛',
                title: t('about.kintsugi3Title'),
                desc: t('about.kintsugi3Desc'),
              },
            ].map((item) => (
              <div
                key={item.title}
                className="card-gold-border bg-charcoal-800/30 backdrop-blur-sm rounded-xl p-8 md:p-10 text-center group hover:-translate-y-1 transition-transform duration-300"
              >
                <span className="text-5xl mb-4 block text-kintsugi-gold/80 group-hover:text-kintsugi-glow transition-colors duration-300">
                  {item.icon}
                </span>
                <h3 className="font-heading text-xl font-bold text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
