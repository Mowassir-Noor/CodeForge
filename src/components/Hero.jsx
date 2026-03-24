import { motion } from 'framer-motion'
import { Suspense, lazy } from 'react'
import { useTranslation } from 'react-i18next'
import Countdown from './Countdown'

const KintsugiScene = lazy(() => import('./KintsugiScene'))

function CrackSVG() {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none z-[1]"
      viewBox="0 0 1920 1080"
      fill="none"
      preserveAspectRatio="xMidYMid slice"
    >
      {/* Main central crack */}
      <motion.path
        d="M0 540 L120 520 L240 560 L360 500 L480 545 L600 490 L720 530 L840 480 L960 540 L1080 500 L1200 555 L1320 495 L1440 535 L1560 510 L1680 550 L1800 505 L1920 540"
        stroke="url(#goldGradient)"
        strokeWidth="3"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 3, ease: 'easeInOut' }}
        filter="url(#glow)"
      />
      {/* Branching cracks */}
      <motion.path
        d="M480 545 L450 620 L430 700 L460 780"
        stroke="url(#goldGradient)"
        strokeWidth="2"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.7 }}
        transition={{ duration: 2, delay: 1.5, ease: 'easeInOut' }}
        filter="url(#glow)"
      />
      <motion.path
        d="M720 530 L750 430 L780 350 L760 280"
        stroke="url(#goldGradient)"
        strokeWidth="2"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.7 }}
        transition={{ duration: 2, delay: 1.8, ease: 'easeInOut' }}
        filter="url(#glow)"
      />
      <motion.path
        d="M1200 555 L1230 650 L1250 730 L1220 810"
        stroke="url(#goldGradient)"
        strokeWidth="2"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.6 }}
        transition={{ duration: 2, delay: 2, ease: 'easeInOut' }}
        filter="url(#glow)"
      />
      <motion.path
        d="M960 540 L940 440 L970 360 L950 270 L980 200"
        stroke="url(#goldGradient)"
        strokeWidth="2.5"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.8 }}
        transition={{ duration: 2.5, delay: 1.2, ease: 'easeInOut' }}
        filter="url(#glow)"
      />
      <motion.path
        d="M960 540 L980 640 L960 740 L990 830 L970 900"
        stroke="url(#goldGradient)"
        strokeWidth="2.5"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.8 }}
        transition={{ duration: 2.5, delay: 1.4, ease: 'easeInOut' }}
        filter="url(#glow)"
      />
      {/* Fine hairline cracks */}
      <motion.path
        d="M360 500 L340 420 L320 350"
        stroke="#D4A843"
        strokeWidth="1"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.4 }}
        transition={{ duration: 1.5, delay: 2.5 }}
        filter="url(#glow)"
      />
      <motion.path
        d="M1440 535 L1460 450 L1490 380"
        stroke="#D4A843"
        strokeWidth="1"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.4 }}
        transition={{ duration: 1.5, delay: 2.8 }}
        filter="url(#glow)"
      />
      <motion.path
        d="M600 490 L570 400 L590 320 L560 250"
        stroke="#D4A843"
        strokeWidth="1.5"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.5 }}
        transition={{ duration: 2, delay: 2.2 }}
        filter="url(#glow)"
      />
      <motion.path
        d="M1320 495 L1350 400 L1330 310"
        stroke="#D4A843"
        strokeWidth="1.5"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.5 }}
        transition={{ duration: 2, delay: 2.4 }}
        filter="url(#glow)"
      />
      <defs>
        <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#8B7335" />
          <stop offset="30%" stopColor="#D4A843" />
          <stop offset="50%" stopColor="#FFD700" />
          <stop offset="70%" stopColor="#D4A843" />
          <stop offset="100%" stopColor="#8B7335" />
        </linearGradient>
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="4" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
    </svg>
  )
}

function GoldParticles2D() {
  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    delay: Math.random() * 8,
    duration: 6 + Math.random() * 8,
    size: 1 + Math.random() * 3,
    opacity: 0.2 + Math.random() * 0.5
  }))

  return (
    <div className="absolute inset-0 pointer-events-none z-[1]">
      {particles.map(p => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: `${p.x}%`,
            bottom: '-5%',
            width: p.size,
            height: p.size,
            background: `radial-gradient(circle, #FFD700, #D4A843)`,
            boxShadow: `0 0 ${p.size * 2}px rgba(212,168,67,0.6)`,
          }}
          animate={{
            y: [0, -window.innerHeight * 1.2],
            x: [0, (Math.random() - 0.5) * 100],
            opacity: [0, p.opacity, p.opacity, 0],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      ))}
    </div>
  )
}

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-charcoal-900">
      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal-900 via-charcoal-900/95 to-charcoal-900 z-[2] pointer-events-none" />

      {/* Radial glow behind center */}
      <div className="absolute inset-0 z-[1]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-kintsugi-gold/5 blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-kintsugi-glow/8 blur-[80px]" />
      </div>

      {/* 3D Scene */}
      <Suspense fallback={null}>
        <KintsugiScene />
      </Suspense>

      {/* SVG Crack overlay */}
      <CrackSVG />

      {/* 2D gold particles */}
      <GoldParticles2D />

      {/* Content */}
      <div className="relative z-10 text-center section-container max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <motion.p
            className="text-kintsugi-gold/80 font-mono text-sm md:text-base tracking-[0.3em] uppercase mb-6"
            initial={{ opacity: 0, letterSpacing: '0.5em' }}
            animate={{ opacity: 1, letterSpacing: '0.3em' }}
            transition={{ duration: 1.5, delay: 0.8 }}
            style={{ marginBottom: "0.5rem" }} >
            {t('hero.date')}
          </motion.p>
        </motion.div>

        <motion.h1
          className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight mb-4"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <span className="text-white">Code</span>
          <span className="text-kintsugi-gold gold-glow">Forge</span>
        </motion.h1>

        <motion.h2
className="font-heading text-xl sm:text-2xl md:text-3xl text-white/90 mt-6 mb-8 tracking-wider"          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.1 }}
          style={{ marginBottom: "2rem",marginTop:"1rem",fontSize:"1rem" }}>
          {/* {t('hero.hackathon')} */}
          {t('hero.tagline1')}<span className="text-kintsugi-gold">{t('hero.tagline2')}</span>{t('hero.tagline3')}
         
        </motion.h2>

        <motion.p
          className="font-heading text-xl sm:text-2xl md:text-3xl text-white/90 mt-6 mb-8 tracking-wider"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
          style={{ marginBottom: "0.5rem" }}>
          {/* {t('hero.tagline1')}<span className="text-kintsugi-gold">{t('hero.tagline2')}</span>{t('hero.tagline3')} */}
         <Countdown targetDate="2026-05-01"  />
        </motion.p>

        <motion.p
          className="text-gray-400 text-base md:text-lg prose-width mx-auto mb-12 leading-[1.8] text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.7 }}
          style={{ marginBottom: "2" }}>
       {t('hero.desc1')}
<span className="text-kintsugi-gold font-medium">{t('hero.imperfection')}</span>{t('hero.desc2')}
        </motion.p>

        {/* <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2 }}
        >
          <a
            href="#register"
            className="w-40 h-10  px-8 py-4 bg-gradient-to-r from-kintsugi-dark via-kintsugi-gold to-kintsugi-dark text-charcoal-900 font-heading font-bold text-sm tracking-wider rounded-lg hover:shadow-[0_0_30px_rgba(212,168,67,0.4)] transition-all duration-500 hover:scale-105 "
          >
            {t('hero.registerNow')}
          </a>
          <a
            href="#about"
            className="px-8 py-4 border border-kintsugi-gold/30 text-kintsugi-gold font-heading font-bold text-sm tracking-wider rounded-lg hover:bg-kintsugi-gold/10 hover:border-kintsugi-gold/50 transition-all duration-500 hover:shadow-[0_0_20px_rgba(212,168,67,0.15)]"
          >
            {t('hero.learnMore')}
          </a>
        </motion.div> */}

        <motion.div className="flex flex-col sm:flex-row gap-4 justify-center items-center" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 2 }} style={{ marginTop: "1rem" }} > 
          <a href="#register" className="w-44  h-10 px-8 py-4 flex items-center justify-center bg-gradient-to-r from-kintsugi-dark via-kintsugi-gold to-kintsugi-dark text-charcoal-900 font-heading font-bold text-sm tracking-wider rounded-lg hover:shadow-[0_0_30px_rgba(212,168,67,0.4)] transition-all duration-500 hover:scale-105" >
            {t('hero.registerNow')} </a>
          <a href="#about" className="w-44 h-10 px-8 py-4 flex items-center justify-center border border-kintsugi-gold/30 text-kintsugi-gold font-heading font-bold text-sm tracking-wider rounded-lg hover:bg-kintsugi-gold/10 hover:border-kintsugi-gold/50 transition-all duration-500 hover:shadow-[0_0_20px_rgba(212,168,67,0.15)]" > 
          {t('hero.learnMore')} </a> </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-kintsugi-gold/40 rounded-full flex justify-center">
          <motion.div
            className="w-1.5 h-3 bg-kintsugi-gold/60 rounded-full mt-2"
            animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  )
}
