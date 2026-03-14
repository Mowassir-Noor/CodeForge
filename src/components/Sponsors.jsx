import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const sponsors = {
  platinum: [
    { name: 'TechCorp', initials: 'TC' },
    { name: 'NeuralForge', initials: 'NF' },
  ],
  gold: [
    { name: 'CloudScale', initials: 'CS' },
    { name: 'CipherGuard', initials: 'CG' },
    { name: 'DataStream', initials: 'DS' },
  ],
  silver: [
    { name: 'DevTools Inc', initials: 'DT' },
    { name: 'QuantumBit', initials: 'QB' },
    { name: 'ByteWorks', initials: 'BW' },
    { name: 'CodeLab', initials: 'CL' },
  ],
}

export default function Sponsors() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="sponsors" className="relative section-spacing bg-charcoal-800/30">
      <div className="kintsugi-divider mb-24 md:mb-32" />

      <div className="section-container" ref={ref}>
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="section-label text-kintsugi-gold font-mono text-sm tracking-[0.2em] uppercase mb-4">
            Our Partners
          </p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            <span className="text-kintsugi-gold gold-glow">Sponsors</span>
          </h2>
        </motion.div>

        {/* Platinum */}
        <div className="mb-20 md:mb-24">
          <p className="text-center text-kintsugi-gold/60 font-mono text-xs tracking-[0.3em] uppercase mb-6">
            Platinum
          </p>
          <div className="flex justify-center gap-8 flex-wrap">
            {sponsors.platinum.map((s, i) => (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="card-gold-border bg-charcoal-800/40 rounded-xl w-48 h-28 flex flex-col items-center justify-center gap-2 hover:bg-charcoal-700/40 transition-colors duration-300"
              >
                <span className="font-heading text-3xl font-bold text-kintsugi-gold">{s.initials}</span>
                <span className="text-gray-400 text-xs">{s.name}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Gold */}
        <div className="mb-20 md:mb-24">
          <p className="text-center text-kintsugi-gold/50 font-mono text-xs tracking-[0.3em] uppercase mb-6">
            Gold
          </p>
          <div className="flex justify-center gap-6 flex-wrap">
            {sponsors.gold.map((s, i) => (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                className="card-gold-border bg-charcoal-800/30 rounded-xl w-40 h-24 flex flex-col items-center justify-center gap-1.5 hover:bg-charcoal-700/30 transition-colors duration-300"
              >
                <span className="font-heading text-2xl font-bold text-kintsugi-gold/80">{s.initials}</span>
                <span className="text-gray-500 text-xs">{s.name}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Silver */}
        <div>
          <p className="text-center text-gray-500 font-mono text-xs tracking-[0.3em] uppercase mb-6">
            Silver
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            {sponsors.silver.map((s, i) => (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                className="card-gold-border bg-charcoal-800/20 rounded-lg w-32 h-20 flex flex-col items-center justify-center gap-1 hover:bg-charcoal-700/20 transition-colors duration-300"
              >
                <span className="font-heading text-lg font-bold text-gray-400">{s.initials}</span>
                <span className="text-gray-600 text-[10px]">{s.name}</span>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.p
          className="text-center text-gray-500 text-sm mt-12"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
        >
          Interested in sponsoring?{' '}
          <a href="mailto:sponsors@codeforge.dev" className="text-kintsugi-gold hover:underline">
            Contact us
          </a>
        </motion.p>
      </div>
    </section>
  )
}
