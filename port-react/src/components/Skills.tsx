'use client'

import { motion } from 'framer-motion'

const SKILLS = [
    { name: 'Product discovery and user research', pct: 100 },
    { name: 'Roadmapping and prioritisation', pct: 100 },
    { name: 'Agile delivery (CSPO certified)', pct: 100 },
    { name: 'Data analysis - SQL, Tableau, Power BI', pct: 85 },
    { name: 'A/B testing and experimentation', pct: 82 },
    { name: 'Figma and UX design', pct: 78 },
    { name: 'Python, R, ReactJS', pct: 70 },
    { name: 'Venture capital and due diligence', pct: 85 },
]

export default function Skills() {
    return (
        <section id="skills" className="bg-[var(--cream2)] px-14 py-24">
            {/* HTML source: sk-layout = grid 360px + 1fr, gap 100px */}
            <div className="grid items-start gap-24" style={{ gridTemplateColumns: '360px 1fr' }}>

                {/* Left */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                >
                    <div className="text-[12px] font-semibold tracking-[0.14em] uppercase text-[var(--ink3)] mb-4">Capabilities</div>
                    <h2 className="font-serif text-[clamp(36px,4vw,54px)] font-normal tracking-[-0.03em] leading-[0.95] text-[var(--ink)] mb-7">
                        What I&apos;m <em className="italic text-[var(--blue)]">good at</em>
                    </h2>
                    <p className="text-[14px] leading-[1.8] text-[var(--ink2)] font-light">
                        From SQL to Figma to stakeholder presentations - I cover more ground than a typical PM because I&apos;ve built, invested, and shipped. Broad enough to see the whole picture; deep enough to get things done.
                    </p>
                </motion.div>

                {/* Right — skill bars */}
                <div className="flex flex-col pt-2">
                    {SKILLS.map((skill, i) => (
                        <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, x: -12 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                            className="flex items-center py-5 border-b border-[var(--cream)] first:border-t first:border-[var(--cream)] hover:[&_.sk-name]:text-[var(--blue)] group"
                        >
                            <span className="sk-name flex-1 text-[14px] font-medium text-[var(--ink)] transition-colors duration-200">{skill.name}</span>
                            <div className="w-[200px] h-[3px] bg-[var(--cream)] rounded-full overflow-hidden flex-shrink-0">
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${skill.pct}%` }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1.1, delay: i * 0.06 + 0.3, ease: [0.16, 1, 0.3, 1] }}
                                    className="h-full rounded-full"
                                    style={{ background: 'linear-gradient(90deg, var(--blue), var(--sand2))' }}
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
