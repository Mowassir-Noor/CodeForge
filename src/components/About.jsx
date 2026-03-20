import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

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
  return (
    <section id="about" className="relative section-spacing bg-charcoal-900">
      <div className="kintsugi-divider mb-16 md:mb-20" />

      <div className="section-container">
        <AnimatedSection>
          <div className="section-header">
            <p className="section-label text-kintsugi-gold font-mono text-sm tracking-[0.2em] uppercase mb-4">
              About the Event
            </p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              What is <span className="text-kintsugi-gold gold-glow">CodeForge</span>?
            </h2>
          </div>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <AnimatedSection>
            <div className="space-y-6 prose-width mx-auto">
              {/* <p className="text-gray-300 text-base md:text-lg leading-[1.8]">
                CodeForge is a 48-hour hackathon that embraces the philosophy of{' '}
                <span className="text-kintsugi-gold font-semibold">Kintsugi</span> — the
                Japanese art of repairing broken pottery with gold, treating breakage as part
                of an object's history rather than something to disguise.
              </p>
              <p className="text-gray-400 leading-[1.8]">
                We believe that the best innovations come from breaking existing paradigms and
                rebuilding them into something stronger and more beautiful. Join 500+ developers,
                designers, and innovators as they shatter convention and forge the future.
              </p>
              <p className="text-gray-400 leading-[1.8]">
                Whether you're a seasoned developer or a first-time hacker, CodeForge provides
                the tools, mentorship, and community to transform your bold ideas into reality.
                Every crack is an opportunity. Every repair makes you stronger.
              </p> */}
              <p className="text-gray-300 text-base md:text-lg leading-[1.8]">
  CodeForge is a hackathon designed to bring together creative minds to build,
  experiment, and innovate. It’s a space where ideas take shape through collaboration,
  curiosity, and hands-on problem solving.
</p>

<p className="text-gray-400 leading-[1.8]">
  Participants from different backgrounds come together to explore new technologies,
  share knowledge, and create impactful solutions. It’s an opportunity to learn,
  connect, and push your skills further in a supportive environment.
</p>

<p className="text-gray-400 leading-[1.8]">
  Whether you're an experienced developer or just starting out, CodeForge provides
  the resources and community to help you turn your ideas into reality. Build,
  learn, and grow throughout the experience.
</p>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-2xl mx-auto">
              {[
                { number: '500+', label: 'Hackers' },
                { number: '48h', label: 'Of Hacking' },
                { number: '$50K', label: 'In Prizes' },
                { number: '30+', label: 'Mentors' },
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
                title: 'Break',
                desc: 'Challenge the status quo. Break apart old ideas and explore uncharted territory.',
              },
              {
                icon: '金',
                title: 'Fill with Gold',
                desc: 'Find beauty in imperfection. Turn failures into features and bugs into breakthroughs.',
              },
              {
                icon: '鍛',
                title: 'Reforge',
                desc: 'Rebuild stronger. Transform shattered concepts into polished, innovative solutions.',
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
