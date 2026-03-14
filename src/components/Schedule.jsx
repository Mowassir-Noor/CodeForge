import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const scheduleData = [
  {
    day: 'Day 1 — March 28',
    events: [
      { time: '09:00 AM', title: 'Registration & Check-in', desc: 'Get your badges, swag, and find your station.' },
      { time: '10:30 AM', title: 'Opening Ceremony', desc: 'Keynote speakers and track announcements.' },
      { time: '12:00 PM', title: 'Hacking Begins!', desc: 'Teams form and the 48-hour clock starts.' },
      { time: '02:00 PM', title: 'Workshop: AI/ML Foundations', desc: 'Hands-on session with industry experts.' },
      { time: '06:00 PM', title: 'Dinner & Networking', desc: 'Fuel up and connect with fellow hackers.' },
    ],
  },
  {
    day: 'Day 2 — March 29',
    events: [
      { time: '08:00 AM', title: 'Breakfast & Checkpoint', desc: 'Morning fuel and progress updates.' },
      { time: '10:00 AM', title: 'Mentor Office Hours', desc: 'One-on-one guidance from industry mentors.' },
      { time: '01:00 PM', title: 'Workshop: Pitch Perfect', desc: 'Learn to present your project like a pro.' },
      { time: '04:00 PM', title: 'Mini Demos', desc: 'Share early progress with other teams.' },
      { time: '09:00 PM', title: 'Late Night Hack Session', desc: 'Pizza, energy drinks, and peak creativity.' },
    ],
  },
  {
    day: 'Day 3 — March 30',
    events: [
      { time: '08:00 AM', title: 'Final Sprint', desc: 'Last hours to polish your project.' },
      { time: '12:00 PM', title: 'Hacking Ends', desc: 'Code freeze! Submit your projects.' },
      { time: '01:00 PM', title: 'Final Presentations', desc: 'Teams present to judges and attendees.' },
      { time: '04:00 PM', title: 'Awards Ceremony', desc: 'Winners announced and prizes awarded.' },
      { time: '05:30 PM', title: 'Closing & Celebration', desc: 'Final remarks and after-party begins!' },
    ],
  },
]

export default function Schedule() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="schedule" className="relative section-spacing bg-charcoal-900">
      <div className="kintsugi-divider mb-16 md:mb-20" />

      <div className="section-container" ref={ref}>
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="section-label text-kintsugi-gold font-mono text-sm tracking-[0.2em] uppercase mb-4">
            The Journey
          </p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            Event <span className="text-kintsugi-gold gold-glow">Schedule</span>
          </h2>
          <p className="section-desc text-gray-400 text-base">
            Three days of hacking, learning, and building. Here's what to expect.
          </p>
        </motion.div>

        <div className="space-y-12 max-w-5xl mx-auto w-full">
          {scheduleData.map((day, dayIdx) => (
            <motion.div
              key={day.day}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: dayIdx * 0.2 }}
            >
              <h3 className="font-heading text-xl md:text-2xl font-bold text-kintsugi-gold mb-8 pl-4 border-l-2 border-kintsugi-gold/50">
                {day.day}
              </h3>

              <div className="relative ml-4">
                {/* Timeline line */}
                <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-kintsugi-gold/40 via-kintsugi-gold/20 to-transparent" />

                <div className="space-y-1">
                  {day.events.map((event, i) => (
                    <motion.div
                      key={event.title}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: dayIdx * 0.2 + i * 0.08 }}
                      className="relative pl-8 py-4 group"
                    >
                      {/* Timeline dot */}
                      <div className="absolute left-0 top-6 -translate-x-[4.5px] w-[10px] h-[10px] rounded-full bg-charcoal-900 border-2 border-kintsugi-gold/50 group-hover:border-kintsugi-gold group-hover:shadow-[0_0_8px_rgba(212,168,67,0.5)] transition-all duration-300" />

                      <div className="card-gold-border bg-charcoal-800/30 rounded-lg p-6 md:p-8 hover:bg-charcoal-800/50 transition-colors duration-300">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
                          <span className="font-mono text-kintsugi-gold/80 text-base min-w-[100px]">
                            {event.time}
                          </span>
                          <div>
                            <h4 className="font-semibold text-lg text-white group-hover:text-kintsugi-gold transition-colors duration-300">
                              {event.title}
                            </h4>
                            <p className="text-gray-400 text-base mt-1.5">{event.desc}</p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
