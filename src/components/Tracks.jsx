import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { HiOutlineLightningBolt, HiOutlineShieldCheck, HiOutlineCube, HiOutlineCloud, HiOutlineSparkles } from 'react-icons/hi'

const tracks = [
  {
    icon: <HiOutlineLightningBolt className="text-3xl" />,
    title: 'AI & Machine Learning',
    desc: 'Build intelligent systems that learn, adapt, and push the boundaries of what machines can achieve.',
    color: 'from-amber-500/20 to-yellow-600/5',
  },
  {
    icon: <HiOutlineShieldCheck className="text-3xl" />,
    title: 'Cybersecurity',
    desc: 'Defend the digital frontier. Create tools that protect, detect, and respond to evolving threats.',
    color: 'from-kintsugi-gold/20 to-kintsugi-dark/5',
  },
  {
    icon: <HiOutlineCube className="text-3xl" />,
    title: 'Robotics & IoT',
    desc: 'Bridge the physical and digital worlds with connected devices and autonomous systems.',
    color: 'from-orange-500/20 to-amber-600/5',
  },
  {
    icon: <HiOutlineCloud className="text-3xl" />,
    title: 'Web & Cloud Innovation',
    desc: 'Architect the next generation of scalable, serverless, and edge-powered applications.',
    color: 'from-yellow-500/20 to-kintsugi-gold/5',
  },
  {
    icon: <HiOutlineSparkles className="text-3xl" />,
    title: 'Open Innovation',
    desc: 'No constraints. Build anything that inspires you — wildcard ideas that defy categorization.',
    color: 'from-kintsugi-glow/20 to-kintsugi-gold/5',
  },
]

export default function Tracks() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="tracks" className="relative section-spacing bg-charcoal-800/30">
      <div className="kintsugi-divider mb-16 md:mb-20" />

      <div className="section-container" ref={ref}>
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="section-label text-kintsugi-gold font-mono text-sm tracking-[0.2em] uppercase mb-4">
            Choose Your Path
          </p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            Hackathon <span className="text-kintsugi-gold gold-glow">Tracks</span>
          </h2>
          <p className="section-desc text-gray-400 text-base">
            Select the track that matches your passion. Each path leads to unique challenges and opportunities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {tracks.map((track, i) => (
            <motion.div
              key={track.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`card-gold-border bg-gradient-to-br ${track.color} bg-charcoal-800/50 backdrop-blur-sm rounded-xl p-7 md:p-8 group hover:-translate-y-2 transition-all duration-400 ${
                i === 4 ? 'sm:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div className="w-14 h-14 rounded-xl bg-kintsugi-gold/10 flex items-center justify-center text-kintsugi-gold mb-5 group-hover:bg-kintsugi-gold/20 group-hover:scale-110 transition-all duration-300">
                {track.icon}
              </div>
              <h3 className="font-heading text-lg font-bold text-white mb-3 group-hover:text-kintsugi-gold transition-colors duration-300">
                {track.title}
              </h3>
              <p className="text-gray-400 text-sm leading-[1.7]">{track.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
