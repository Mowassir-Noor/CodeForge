import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const judges = [
  { name: 'Dr. Yuki Tanaka', role: 'AI Research Lead', org: 'DeepMind', initials: 'YT' },
  { name: 'Marcus Chen', role: 'CTO', org: 'NeuralForge', initials: 'MC' },
  { name: 'Priya Sharma', role: 'VP Engineering', org: 'CloudScale', initials: 'PS' },
  { name: 'Alex Rivera', role: 'Security Architect', org: 'CipherGuard', initials: 'AR' },
  { name: 'Dr. Sarah Kim', role: 'Robotics Director', org: 'AutoMotive AI', initials: 'SK' },
  { name: 'James Okafor', role: 'Founding Partner', org: 'TechVentures', initials: 'JO' },
]

const mentors = [
  { name: 'Lisa Zhang', role: 'ML Engineer', org: 'OpenAI', initials: 'LZ' },
  { name: 'David Park', role: 'Full-Stack Dev', org: 'Vercel', initials: 'DP' },
  { name: 'Emma Wilson', role: 'IoT Specialist', org: 'Arduino', initials: 'EW' },
  { name: 'Raj Patel', role: 'Cloud Architect', org: 'AWS', initials: 'RP' },
  { name: 'Sofia Costa', role: 'UX Designer', org: 'Figma', initials: 'SC' },
  { name: 'Omar Hassan', role: 'DevOps Lead', org: 'GitHub', initials: 'OH' },
]

function PersonCard({ person, index, isInView }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="card-gold-border bg-charcoal-800/40 rounded-xl p-8 md:p-10 flex flex-col items-center justify-center text-center group hover:-translate-y-1 transition-transform duration-300"
    >
      <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gradient-to-br from-kintsugi-gold/30 to-kintsugi-dark/20 flex items-center justify-center mx-auto mb-5 group-hover:from-kintsugi-gold/50 group-hover:to-kintsugi-gold/20 transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(212,168,67,0.3)]">
        <span className="font-heading text-2xl font-bold text-kintsugi-gold">
          {person.initials}
        </span>
      </div>
      <h4 className="font-semibold text-lg text-white group-hover:text-kintsugi-gold transition-colors duration-300">
        {person.name}
      </h4>
      <p className="text-kintsugi-gold/70 text-base mt-1.5">{person.role}</p>
      <p className="text-gray-500 text-sm mt-1">{person.org}</p>
    </motion.div>
  )
}

export default function Judges() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="judges" className="relative section-spacing bg-charcoal-900">
      <div className="kintsugi-divider mb-24 md:mb-32" />

      <div className="section-container" ref={ref}>
        {/* Judges */}
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="section-label text-kintsugi-gold font-mono text-sm tracking-[0.2em] uppercase mb-4">
            The Panel
          </p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            Judges & <span className="text-kintsugi-gold gold-glow">Mentors</span>
          </h2>
          <p className="section-desc text-gray-400 text-base">
            Industry leaders and experts ready to guide and evaluate your projects.
          </p>
        </motion.div>

        <div className="mb-16">
          <h3 className="font-heading text-xl font-bold text-kintsugi-gold/80 text-center mb-8">
            Judges
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 max-w-5xl mx-auto w-full">
            {judges.map((judge, i) => (
              <PersonCard key={judge.name} person={judge} index={i} isInView={isInView} />
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-heading text-xl font-bold text-kintsugi-gold/80 text-center mb-8">
            Mentors
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 max-w-5xl mx-auto w-full">
            {mentors.map((mentor, i) => (
              <PersonCard key={mentor.name} person={mentor} index={i + 6} isInView={isInView} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
