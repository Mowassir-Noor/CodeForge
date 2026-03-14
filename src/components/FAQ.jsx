import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useRef, useState } from 'react'
import { HiPlus, HiMinus } from 'react-icons/hi'

const faqs = [
  {
    q: 'Who can participate in CodeForge?',
    a: 'Anyone 18 or older with a passion for technology! Whether you\'re a student, professional, or hobbyist — all skill levels are welcome. We especially encourage first-time hackers to join.',
  },
  {
    q: 'How much does it cost to participate?',
    a: 'CodeForge is completely free! Registration, meals, swag, and workspace are all provided at no cost. We believe in removing barriers to innovation.',
  },
  {
    q: 'Do I need a team to register?',
    a: 'You can register  with a team of up to 3 members.',
  },
  {
    q: 'What should I bring?',
    a: 'Bring your laptop, charger, any hardware you plan to use, and your creativity! We provide Wi-Fi, power strips, snacks, meals, and a comfortable hacking environment.',
  },
  {
    q: 'Is it in-person or virtual?',
    a: 'CodeForge is an In-Person event. You can participate in-person at our venue in Ankara, Turkey.',
  },
  {
    q: 'What are the judging criteria?',
    a: 'Projects are evaluated on Innovation (30%), Technical Complexity (25%), Design & UX (20%), Impact & Feasibility (15%), and Presentation (10%). Judges value creative problem-solving and the Kintsugi spirit of transforming challenges.',
  },
  {
    q: 'Can I start working on my project before the hackathon?',
    a: 'You may brainstorm and research ideas beforehand, but all code, designs, and implementations must be created during the 48-hour hacking period. Pre-existing libraries and frameworks are allowed.',
  },
  {
    q: 'Will there be food and drinks?',
    a: 'Yes! We provide all meals (breakfast, lunch, dinner), snacks, coffee, energy drinks, and late-night fuel. We accommodate dietary restrictions — just let us know during registration.',
  },
]

function FAQItem({ faq, index, isInView }) {
  const [open, setOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      className="card-gold-border bg-charcoal-800/30 rounded-xl overflow-hidden"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-charcoal-700/20 transition-colors duration-300"
        aria-expanded={open}
      >
        <span className="font-medium text-lg text-white pr-4">{faq.q}</span>
        <span className="text-kintsugi-gold shrink-0">
          {open ? <HiMinus className="text-xl" /> : <HiPlus className="text-xl" />}
        </span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-8 pb-6 text-gray-400 text-base leading-relaxed border-t border-kintsugi-gold/10 pt-5">
              {faq.a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQ() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="faq" className="relative section-spacing bg-charcoal-900">
      <div className="kintsugi-divider mb-16 md:mb-20" />

      <div className="section-container max-w-4xl w-full mx-auto" ref={ref}>
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="section-label text-kintsugi-gold font-mono text-sm tracking-[0.2em] uppercase mb-4">
            Got Questions?
          </p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            <span className="text-kintsugi-gold gold-glow">FAQ</span>
          </h2>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <FAQItem key={i} faq={faq} index={i} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  )
}
