import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Trophy, Medal, Star, Users, Code2, Brain, Linkedin } from 'lucide-react'
import { staggerContainer, fadeSlideUp } from '@/lib/motion'
import SectionTitle from '@/components/ui/SectionTitle'

interface Achievement {
  icon: React.ReactNode
  title: string
  org: string
  desc: string
  badge: string
  badgeColor: string
  glow: string
}

const ACHIEVEMENTS: Achievement[] = [
  {
    icon: <Trophy size={28} />,
    title: '🥇 Best Project Award',
    org: 'Dept. Tech Exhibition — College of Engineering',
    desc: '1st place among 45 teams for the COVID-19 Streamlit Dashboard. Recognised by faculty panel & industry judges for real-time forecasting and clean UX.',
    badge: '1st Place',
    badgeColor: 'text-yellow-400 border-yellow-400/40 bg-yellow-400/10',
    glow: 'hover:shadow-[0_0_30px_rgba(250,204,21,0.15)]',
  },
  {
    icon: <Medal size={28} />,
    title: '🏅 State-Level Coding Olympiad Finalist',
    org: 'Maharashtra Coding Council',
    desc: 'Top 15% of 800+ participants. Solved 4/5 problems under time pressure using C & Java — demonstrating strong DSA and algorithmic thinking.',
    badge: 'Top 15%',
    badgeColor: 'text-[var(--node)] border-[var(--node)]/40 bg-[var(--node)]/10',
    glow: 'hover:shadow-[0_0_30px_rgba(0,229,255,0.12)]',
  },
  {
    icon: <Brain size={28} />,
    title: '🤖 AIDL Technical Coordinator',
    org: 'Artificial Intelligence & Deep Learning Club',
    desc: 'Leading technical workshops, AI/ML coding sessions, and mentoring 100+ members on Python, Streamlit, and machine learning fundamentals.',
    badge: 'Active Role',
    badgeColor: 'text-purple-400 border-purple-400/40 bg-purple-400/10',
    glow: 'hover:shadow-[0_0_30px_rgba(192,132,252,0.15)]',
  },
  {
    icon: <Users size={28} />,
    title: '👨‍💼 Python & Data Science Intern',
    org: 'TechSpark Solutions, Bangalore',
    desc: 'Built 3 Streamlit dashboards for real clients. Automated ETL pipelines cutting report generation from 4 hours → 12 minutes.',
    badge: 'Industry',
    badgeColor: 'text-[var(--synapse)] border-[var(--synapse)]/40 bg-[var(--synapse)]/10',
    glow: 'hover:shadow-[0_0_30px_rgba(184,255,87,0.1)]',
  },
  {
    icon: <Code2 size={28} />,
    title: '📚 Teaching Assistant — C Programming',
    org: 'College of Engineering — CS Department',
    desc: 'Mentored 60 first-year students through weekly labs. Student lab scores improved by 30% over the semester.',
    badge: 'Mentor',
    badgeColor: 'text-orange-400 border-orange-400/40 bg-orange-400/10',
    glow: 'hover:shadow-[0_0_30px_rgba(251,146,60,0.1)]',
  },
  {
    icon: <Star size={28} />,
    title: '🎯 Placement Preparation Lead',
    org: 'College Placement Cell — Student Volunteer',
    desc: 'Running weekly mock interviews, aptitude sessions & DSA workshops. Helping 50+ peers crack campus placements in Java & Python.',
    badge: 'Leadership',
    badgeColor: 'text-pink-400 border-pink-400/40 bg-pink-400/10',
    glow: 'hover:shadow-[0_0_30px_rgba(244,114,182,0.1)]',
  },
]

const STATS = [
  { value: '6+', label: 'Roles & Achievements' },
  { value: '100+', label: 'Students Mentored' },
  { value: '4', label: 'Projects Shipped' },
  { value: 'Top 15%', label: 'Coding Olympiad' },
]

export default function Achievements() {
  const ref = useRef(null)
  const statsRef = useRef(null)
  const inView = useInView(ref as React.RefObject<Element>, { once: true, margin: '-60px' })
  const statsInView = useInView(statsRef as React.RefObject<Element>, { once: true, margin: '-40px' })

  return (
    <section id="achievements" className="relative z-10 section-padding">
      <div className="section-container">
        <SectionTitle
          label="// achievements"
          title="Wins & Milestones"
          subtitle="A snapshot of the roles, recognitions, and impact I've made during my engineering journey."
        />

        {/* Stats row */}
        <motion.div
          ref={statsRef}
          initial="hidden"
          animate={statsInView ? 'visible' : 'hidden'}
          variants={staggerContainer}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-14"
        >
          {STATS.map((stat) => (
            <motion.div
              key={stat.label}
              variants={fadeSlideUp}
              className="glass rounded-2xl p-5 text-center group hover:border-[var(--node)] transition-all duration-300"
            >
              <p className="font-serif text-3xl md:text-4xl font-black gradient-text mb-1">{stat.value}</p>
              <p className="font-mono text-xs text-[var(--fg-muted)] leading-snug">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Achievement cards grid */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={staggerContainer}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {ACHIEVEMENTS.map((a) => (
            <motion.div
              key={a.title}
              variants={fadeSlideUp}
              className={`glass-hover rounded-2xl p-6 flex flex-col gap-4 transition-all duration-300 ${a.glow}`}
            >
              {/* Icon + badge */}
              <div className="flex items-start justify-between gap-2">
                <div className="w-12 h-12 rounded-xl bg-[var(--bg-2)] flex items-center justify-center text-[var(--node)] shrink-0">
                  {a.icon}
                </div>
                <span className={`inline-flex items-center text-xs font-mono px-2.5 py-1 rounded-full border ${a.badgeColor}`}>
                  {a.badge}
                </span>
              </div>

              {/* Text */}
              <div className="flex-1">
                <h3 className="font-serif text-base font-bold text-[var(--fg)] leading-snug mb-1">
                  {a.title}
                </h3>
                <p className="font-mono text-xs text-[var(--node)] mb-3">{a.org}</p>
                <p className="text-sm text-[var(--fg-muted)] leading-relaxed">{a.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* LinkedIn CTA banner */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-12 glass rounded-2xl p-6 md:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 
                     border-[var(--node)]/30 hover:border-[var(--node)]/60 transition-colors duration-300"
        >
          <div>
            <p className="section-label">Let's connect</p>
            <h3 className="font-serif text-2xl font-bold text-[var(--fg)] mb-1">Aaron Jacob on LinkedIn</h3>
            <p className="text-sm text-[var(--fg-muted)]">
              View my full professional profile, endorsements, and certifications.
            </p>
          </div>
          <a
            href="https://www.linkedin.com/in/aaron-j-jacob-444ba6417"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary shrink-0 text-sm"
            aria-label="Visit Aaron Jacob's LinkedIn profile"
          >
            <Linkedin size={18} />
            Connect on LinkedIn
          </a>
        </motion.div>
      </div>
    </section>
  )
}
