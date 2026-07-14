import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { fadeSlideUp, fadeSlideLeft, staggerContainer } from '@/lib/motion'
import { Brain, Code2, Users } from 'lucide-react'

const HIGHLIGHTS = [
  {
    icon: <Brain size={22} />,
    title: 'Python & AI/ML',
    desc: 'Building intelligent applications with Python — from data analysis and machine learning models to deploying interactive Streamlit dashboards.',
  },
  {
    icon: <Code2 size={22} />,
    title: 'Java & C Programming',
    desc: 'Strong foundation in object-oriented programming with Java and systems-level programming with C — ready for core software engineering roles.',
  },
  {
    icon: <Users size={22} />,
    title: 'Placement Ready',
    desc: 'Actively preparing for campus placements with solid DSA skills, project experience, and hands-on exposure to industry-relevant technologies.',
  },
]

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref as React.RefObject<Element>, { once: true, margin: '-80px' })

  return (
    <section id="about" className="relative z-10 section-padding">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text */}
          <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={fadeSlideLeft}
          >
            <p className="section-label">About Me</p>
            <h2 className="section-heading mb-6">
              Code. Build. Ship.{' '}
              <span className="gradient-text italic">Repeat.</span>
            </h2>
            <div className="space-y-4 text-[var(--fg-muted)] leading-relaxed text-lg">
              <p>
                I'm Aaron Jacob, a Computer Engineering student with a passion for writing clean,
                efficient code across Python, Java, and C. I love turning complex problems into
                elegant solutions — whether that's a data pipeline, a Streamlit app, or a
                systems-level program.
              </p>
              <p>
                My Python journey has taken me into data science and AI/ML — building interactive
                dashboards with Streamlit, training models, and automating workflows. I pair this
                with strong fundamentals in Java (OOP, Spring basics) and C (pointers, memory
                management, algorithms).
              </p>
              <p>
                I'm placement-focused and actively honing my DSA skills, building real projects,
                and looking for opportunities where I can contribute, grow, and make an impact from
                day one.
              </p>
            </div>
          </motion.div>

          {/* Cards */}
          <motion.div
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={staggerContainer}
            className="grid gap-4"
          >
            {HIGHLIGHTS.map((h) => (
              <motion.div
                key={h.title}
                variants={fadeSlideUp}
                className="glass-hover rounded-xl p-5 flex gap-4 items-start"
              >
                <div className="shrink-0 w-10 h-10 rounded-lg bg-[var(--node)]/10 flex items-center 
                                justify-center text-[var(--node)]">
                  {h.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-[var(--fg)] mb-1">{h.title}</h3>
                  <p className="text-sm text-[var(--fg-muted)] leading-relaxed">{h.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
