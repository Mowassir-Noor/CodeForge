import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'

const judges = [
  { name: 'Dr. Yuki Tanaka', role: 'AI Research Lead, DeepMind', initials: 'YT', url: 'https://deepmind.google' },
  { name: 'Marcus Chen', role: 'CTO, NeuralForge', initials: 'MC', url: 'https://neuralforge.tech' },
  { name: 'Priya Sharma', role: 'VP Engineering, CloudScale', initials: 'PS', url: 'https://cloudscale.com' },
  { name: 'Alex Rivera', role: 'Security Architect, CipherGuard', initials: 'AR', url: 'https://cipherguard.io' },
  { name: 'Dr. Sarah Kim', role: 'Robotics Director, AutoMotive AI', initials: 'SK', url: 'https://automotive.ai' },
  { name: 'James Okafor', role: 'Founding Partner, TechVentures', initials: 'JO', url: 'https://techventures.vc' },
]

const mentors = [
  { name: "Dr. Aiko Tanaka", role: "AI Research Lead, DeepMind", initials: "AT", url: "https://deepmind.google" },
  { name: "Marcus Chen", role: "Staff Engineer, Stripe", initials: "MC", url: "https://stripe.com" },
  { name: "Priya Sharma", role: "CTO, CyberVault", initials: "PS", url: "https://cybervault.com" },
  { name: "Jordan Rivera", role: "Design Director, Figma", initials: "JR", url: "https://figma.com" },
  { name: "Dr. Lena Okafor", role: "Prof. of CS, MIT", initials: "LO", url: "https://mit.edu" },
  { name: "Kai Nakamura", role: "Founder, NexusLab", initials: "KN", url: "https://nexuslab.dev" },
];

const duplicatedJudges = [...judges, ...judges];
const duplicatedMentors = [...mentors, ...mentors];

export default function Judges() {
  const { t } = useTranslation();
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [isPausedJudges, setIsPausedJudges] = useState(false);
  const [isPausedMentors, setIsPausedMentors] = useState(false);

  return (
    <section id="judges" className="relative section-spacing bg-charcoal-900 overflow-hidden" ref={ref}>
      <div className="kintsugi-divider mb-24 md:mb-32" />

      <div className="section-container px-6 mb-8">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label text-kintsugi-gold font-mono text-sm tracking-[0.2em] uppercase mb-4">
            {t('judges.label')}
          </p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            {t('judges.title1')}<span className="text-kintsugi-gold gold-glow">{t('judges.title2')}</span>
          </h2>
          <p className="section-desc text-gray-400 text-base mt-4 max-w-2xl mx-auto">
             {t('judges.desc')}
          </p>
        </motion.div>
      </div>

      {/* Judges Ticker */}
      <h3 className="font-heading text-xl font-bold text-kintsugi-gold/80 text-center mb-8">
        {t('judges.judgesTitle')}
      </h3>
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={isInView ? { opacity: 1 } : {}} 
        transition={{ duration: 0.8, delay: 0.3 }} 
        className="relative mb-16" 
        onMouseEnter={() => setIsPausedJudges(true)} 
        onMouseLeave={() => setIsPausedJudges(false)}
      >
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 z-10 pointer-events-none bg-gradient-to-r from-charcoal-900 to-transparent" />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 z-10 pointer-events-none bg-gradient-to-l from-charcoal-900 to-transparent" />

        <div className="flex gap-6 w-max will-change-transform" style={{ animation: `scroll-right 30s linear infinite`, animationPlayState: isPausedJudges ? "paused" : "running" }}>
          {duplicatedJudges.map((j, i) => (
            <a key={`judge-${j.name}-${i}`} href={j.url} target="_blank" rel="noopener noreferrer" className="card-gold-border rounded-xl p-7 text-center group flex-shrink-0 w-[260px] hover:border-kintsugi-gold/30 bg-charcoal-800/40 transition-all duration-500 no-underline">
              <div className="w-20 h-20 rounded-full bg-charcoal-700/50 flex items-center justify-center mx-auto mb-5 border border-charcoal-600 group-hover:border-kintsugi-gold/40 group-hover:shadow-[0_0_20px_rgba(212,168,67,0.2)] transition-all duration-500">
                <span className="font-heading text-xl font-bold text-gray-400 group-hover:text-kintsugi-gold transition-colors">{j.initials}</span>
              </div>
              <h3 className="font-heading text-lg font-semibold mb-1 text-white group-hover:text-kintsugi-gold transition-colors">{j.name}</h3>
              <p className="text-gray-400 text-sm">{j.role}</p>
            </a>
          ))}
        </div>
      </motion.div>

      {/* Mentors Ticker */}
      <h3 className="font-heading text-xl font-bold text-kintsugi-gold/80 text-center mb-8 mt-4">
        {t('judges.mentorsTitle')}
      </h3>
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={isInView ? { opacity: 1 } : {}} 
        transition={{ duration: 0.8, delay: 0.5 }} 
        className="relative" 
        onMouseEnter={() => setIsPausedMentors(true)} 
        onMouseLeave={() => setIsPausedMentors(false)}
      >
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 z-10 pointer-events-none bg-gradient-to-r from-charcoal-900 to-transparent" />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 z-10 pointer-events-none bg-gradient-to-l from-charcoal-900 to-transparent" />

        <div className="flex gap-6 w-max will-change-transform" style={{ animation: `scroll-left 30s linear infinite`, animationPlayState: isPausedMentors ? "paused" : "running" }}>
          {duplicatedMentors.map((m, i) => (
            <a key={`mentor-${m.name}-${i}`} href={m.url} target="_blank" rel="noopener noreferrer" className="card-gold-border rounded-xl p-7 text-center group flex-shrink-0 w-[260px] hover:border-kintsugi-gold/30 bg-charcoal-800/40 transition-all duration-500 no-underline">
              <div className="w-20 h-20 rounded-full bg-charcoal-700/50 flex items-center justify-center mx-auto mb-5 border border-charcoal-600 group-hover:border-kintsugi-gold/40 group-hover:shadow-[0_0_20px_rgba(212,168,67,0.2)] transition-all duration-500">
                <span className="font-heading text-xl font-bold text-gray-400 group-hover:text-kintsugi-gold transition-colors">{m.initials}</span>
              </div>
              <h3 className="font-heading text-lg font-semibold mb-1 text-white group-hover:text-kintsugi-gold transition-colors">{m.name}</h3>
              <p className="text-gray-400 text-sm">{m.role}</p>
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
