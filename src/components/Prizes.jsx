import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { HiOutlineStar, HiOutlineTrophy } from 'react-icons/hi2'
import { useTranslation } from 'react-i18next'

export default function Prizes() {
  const { t } = useTranslation();
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const prizes = [
    {
      place: t('prizes.p1st'),
      amount: '$20,000',
      perks: [t('prizes.cloud5k'), t('prizes.mentorship'), t('prizes.confTix'), t('prizes.trophy')],
      highlight: true,
    },
    {
      place: t('prizes.p2nd'),
      amount: '$15,000',
      perks: [t('prizes.cloud3k'), t('prizes.hardware'), t('prizes.confTix'), t('prizes.cert')],
      highlight: false,
    },
    {
      place: t('prizes.p3rd'),
      amount: '$10,000',
      perks: [t('prizes.cloud1k'), t('prizes.premiumSub'), t('prizes.confTix'), t('prizes.cert')],
      highlight: false,
    },
  ]

  const specialPrizes = [
    { title: t('prizes.sp1'), amount: '$2,000' },
    { title: t('prizes.sp2'), amount: '$2,000' },
    { title: t('prizes.sp3'), amount: '$1,500' },
    { title: t('prizes.sp4'), amount: '$1,500' },
  ]

  return (
    <section id="prizes" className="relative section-spacing bg-charcoal-800/30">
      <div className="kintsugi-divider mb-16 md:mb-20" />

      <div className="section-container" ref={ref}>
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="section-label text-kintsugi-gold font-mono text-sm tracking-[0.2em] uppercase mb-4">
            {t('prizes.label')}
          </p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            {t('prizes.title1')} <span className="text-kintsugi-gold gold-glow">{t('prizes.title2')}</span>
          </h2>
          <p className="font-heading text-5xl md:text-6xl font-black text-kintsugi-gold gold-glow">
            $50,000+
          </p>
        </motion.div>

        {/* Main prizes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16 max-w-5xl mx-auto w-full">
          {prizes.map((prize, i) => (
            <motion.div
              key={prize.place}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className={`relative card-gold-border rounded-xl overflow-hidden ${prize.highlight
                  ? 'bg-gradient-to-b from-kintsugi-gold/10 to-charcoal-800/80 md:-mt-4 md:mb-4'
                  : 'bg-charcoal-800/50'
                }`}
            >
              {prize.highlight && (
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-kintsugi-gold to-transparent" />
              )}
              <div className="p-7 md:p-8 text-center">
                <div className="flex justify-center mb-4">
                  {prize.highlight ? (
                    <HiOutlineTrophy className="text-4xl text-kintsugi-gold" />
                  ) : (
                    <HiOutlineStar className="text-3xl text-kintsugi-gold/60" />
                  )}
                </div>
                <h3 className="font-heading text-lg font-bold text-white mb-2">{prize.place}</h3>
                <p className={`font-heading text-4xl font-black mb-6 ${prize.highlight ? 'text-kintsugi-gold gold-glow' : 'text-kintsugi-gold/80'
                  }`}>
                  {prize.amount}
                </p>
                <ul className="space-y-2 text-left">
                  {prize.perks.map((perk) => (
                    <li key={perk} className="flex items-center gap-2 text-gray-400 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-kintsugi-gold/60 shrink-0" />
                      {perk}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Special prizes */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h3 className="font-heading text-lg md:text-xl font-bold text-center text-white  " style={{ marginTop: '2rem', marginBottom: '2rem' }}>
            {t('prizes.spec')}
          </h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 max-w-3xl ">
            {specialPrizes.map((sp) => (
              <div
                key={sp.title}
                className="card-gold-border bg-charcoal-800/30 rounded-lg p-6 text-center"
              >
                <p className="text-gray-300 text-sm mb-1">{sp.title}</p>
                <p className="font-heading text-2xl font-bold text-kintsugi-gold">{sp.amount}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
