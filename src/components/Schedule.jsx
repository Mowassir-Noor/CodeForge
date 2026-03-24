import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { useTranslation } from 'react-i18next'

const scheduleData = [
  {
    day: 'Day 1 — May 8 (Friday)',
    events: [
      {
        time: '17:30 - 19:00',
        title: 'Registration & Check-in',
        desc: 'Accreditation and QR registration process.',
      },
      {
        time: '19:00 - 20:00',
        title: 'Opening Dinner & Networking',
        desc: 'Meet and connect with participants.',
      },
      {
        time: '20:00 - 21:00',
        title: 'CodeForge Presentation',
        desc: 'Vision presentation and technical briefing.',
      },
      {
        time: '21:00 - 21:30',
        title: 'Hackathon Kickoff',
        desc: 'Start of vulnerability analysis and hacking.',
      },
      {
        time: '21:30 - 22:30',
        title: 'Mentor Matching',
        desc: 'Initial round of mentor-table visits.',
      },
      {
        time: '01:00 - 01:30',
        title: 'Late Night Snacks',
        desc: 'Refreshments and continued hacking.',
      },
    ],
  },
  {
    day: 'Day 2 — May 9 (Saturday)',
    events: [
      {
        time: '09:00 - 10:00',
        title: 'Breakfast',
        desc: 'Start your day with breakfast.',
      },
      {
        time: '11:00 - 13:00',
        title: 'Mentorship Session I',
        desc: 'Architecture and improvement strategies.',
      },
      {
        time: '13:00 - 14:00',
        title: 'Lunch Break',
        desc: 'Food and rest.',
      },
      {
        time: '15:00 - 18:00',
        title: 'Mentorship Session II',
        desc: 'Refactoring and development process.',
      },
      {
        time: '18:30 - 20:00',
        title: 'Dinner',
        desc: 'Evening meal and networking.',
      },
      {
        time: '01:00 - 01:30',
        title: 'Late Night Snacks & Networking',
        desc: 'Midnight refreshments and social time.',
      },
    ],
  },
  {
    day: 'Day 3 — May 10 (Sunday)',
    events: [
      {
        time: '09:00 - 10:00',
        title: 'Breakfast',
        desc: 'Start your day.',
      },
      {
        time: '10:00 - 12:30',
        title: 'Mentorship Session III',
        desc: 'Final checks and stabilization.',
      },
      {
        time: '12:30 - 13:30',
        title: 'Lunch Break',
        desc: 'Food and rest.',
      },
      {
        time: '14:00 - 14:30',
        title: 'Code Freeze',
        desc: 'Final submission and system lock.',
      },
      {
        time: '14:30 - 18:00',
        title: 'Judging & Demos',
        desc: '“Before & After” project presentations.',
      },
      {
        time: '18:00 - 19:00',
        title: 'Awards Ceremony',
        desc: 'Closing ceremony and prize distribution.',
      },
    ],
  },
]

export default function Schedule() {
  const { t } = useTranslation();
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const scheduleData = [
    {
      day: t('schedule.day1'),
      events: [
        { time: '17:30 - 19:00', title: t('schedule.reg'), desc: t('schedule.regDesc') },
        { time: '19:00 - 20:00', title: t('schedule.dinner'), desc: t('schedule.dinnerDesc') },
        { time: '20:00 - 21:00', title: t('schedule.pres'), desc: t('schedule.presDesc') },
        { time: '21:00 - 21:30', title: t('schedule.kickoff'), desc: t('schedule.kickoffDesc') },
        { time: '21:30 - 22:30', title: t('schedule.mentor1'), desc: t('schedule.mentor1Desc') },
        { time: '01:00 - 01:30', title: t('schedule.snacks'), desc: t('schedule.snacksDesc') },
      ],
    },
    {
      day: t('schedule.day2'),
      events: [
        { time: '09:00 - 10:00', title: t('schedule.bfast'), desc: t('schedule.bfastDesc') },
        { time: '11:00 - 13:00', title: t('schedule.ms1'), desc: t('schedule.ms1Desc') },
        { time: '13:00 - 14:00', title: t('schedule.lunch'), desc: t('schedule.lunchDesc') },
        { time: '15:00 - 18:00', title: t('schedule.ms2'), desc: t('schedule.ms2Desc') },
        { time: '18:30 - 20:00', title: t('schedule.dinner2'), desc: t('schedule.dinner2Desc') },
        { time: '01:00 - 01:30', title: t('schedule.snacks2'), desc: t('schedule.snacks2Desc') },
      ],
    },
    {
      day: t('schedule.day3'),
      events: [
        { time: '09:00 - 10:00', title: t('schedule.bfast3'), desc: t('schedule.bfast3Desc') },
        { time: '10:00 - 12:30', title: t('schedule.ms3'), desc: t('schedule.ms3Desc') },
        { time: '12:30 - 13:30', title: t('schedule.lunch'), desc: t('schedule.lunchDesc') },
        { time: '14:00 - 14:30', title: t('schedule.freeze'), desc: t('schedule.freezeDesc') },
        { time: '14:30 - 18:00', title: t('schedule.demo'), desc: t('schedule.demoDesc') },
        { time: '18:00 - 19:00', title: t('schedule.ceremony'), desc: t('schedule.ceremonyDesc') },
      ],
    },
  ]

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
            {t('schedule.label')}
          </p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            {t('schedule.title1')}<span className="text-kintsugi-gold gold-glow">{t('schedule.title2')}</span>
          </h2>
          <p className="section-desc text-gray-400 text-base">
            {t('schedule.desc')}
          </p>
        </motion.div>

        <div className="space-y-12 max-w-5xl mx-auto w-full " >
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

              <div className="relative ml-4 " >
                {/* Timeline line */}
                <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-kintsugi-gold/40 via-kintsugi-gold/20 to-transparent" />

                <div className="space-y-1 " >
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
