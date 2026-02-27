'use client'

import { motion } from 'framer-motion'

export default function About() {
    return (
        <section id="about" className="bg-[var(--cream)]">
            <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Left panel — navy dark */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className="bg-[var(--navy)] px-16 py-24 relative overflow-hidden"
                >
                    {/* "AJ" watermark */}
                    <div
                        aria-hidden="true"
                        className="absolute bottom-[-40px] left-[-20px] font-serif font-normal leading-[0.8] pointer-events-none select-none text-white"
                        style={{ fontSize: 'clamp(200px, 24vw, 320px)', opacity: 0.03, letterSpacing: '-0.06em' }}
                    >
                        AJ
                    </div>

                    <span className="text-[12px] font-semibold tracking-[0.14em] uppercase text-[var(--sand)] opacity-60 mb-6 block relative z-10">About</span>

                    <h2 className="font-serif text-[clamp(36px,4vw,54px)] font-normal tracking-[-0.03em] leading-[1.05] text-white mb-9 relative z-10">
                        Engineer.<br />Founder.<br /><em className="italic text-[var(--sand)]">Product manager.</em>
                    </h2>

                    <p className="text-[15px] leading-[1.85] text-[rgba(255,255,255,0.55)] font-light mb-10 relative z-10">
                        I&apos;m Ajay Vaidhyanathan Swaminathan — most people call me AJ. I started as an engineer, founded a mobile product studio in Chennai, moved into venture capital in Munich, and landed firmly in product.
                        <br /><br />
                        Most recently at <strong className="text-[rgba(255,255,255,0.85)] font-medium">DreamDriven</strong> (B2C venture builder), with prior experience at <strong className="text-[rgba(255,255,255,0.85)] font-medium">Mountain Alliance</strong> (PE/VC) and <strong className="text-[rgba(255,255,255,0.85)] font-medium">Colayer.</strong> Before that I founded <strong className="text-[rgba(255,255,255,0.85)] font-medium">Fluxdart Technology,</strong> owning the full product lifecycle for 5+ mobile apps. Based in Munich - open to hybrid or remote roles across Europe.
                    </p>

                    <div className="flex gap-6 relative z-10">
                        <a
                            href="/cv-en.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 font-body text-[12px] font-semibold tracking-[0.1em] uppercase text-[var(--sand)] border-b border-[rgba(232,213,176,0.2)] pb-1.5 transition-all hover:border-[var(--sand)] hover:gap-4"
                        >
                            Resume (EN) →
                        </a>
                        <a
                            href="/cv-de.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 font-body text-[12px] font-semibold tracking-[0.1em] uppercase text-[var(--sand)] border-b border-[rgba(232,213,176,0.2)] pb-1.5 transition-all hover:border-[var(--sand)] hover:gap-4"
                        >
                            Lebenslauf (DE) →
                        </a>
                    </div>
                </motion.div>

                {/* Right panel — cream */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.7, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
                    className="bg-[var(--cream)] px-16 py-24"
                >
                    {[
                        {
                            n: '01',
                            title: "I've been the founder.",
                            desc: "I know what it feels like to own the whole product - discovery, trade-offs, and shipping under pressure. I bring that ownership into every PM role.",
                        },
                        {
                            n: '02',
                            title: "I've evaluated investments.",
                            desc: "Time at Mountain Alliance means I think in unit economics, market sizing, and competitive dynamics - not just user stories.",
                        },
                        {
                            n: '03',
                            title: "I build and I analyse.",
                            desc: "SQL, Python, Figma, ReactJS - I can work directly with data and design, not just manage people who do.",
                        },
                        {
                            n: '04',
                            title: "I work in two languages.",
                            desc: "English and German (B2) - comfortable in international and European teams.",
                        },
                    ].map((trait, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-40px' }}
                            transition={{ duration: 0.5, delay: i * 0.09, ease: [0.16, 1, 0.3, 1] }}
                            className="py-7 border-b border-[var(--cream2)] first:border-t first:border-[var(--cream2)] grid grid-cols-[48px_1fr] gap-5"
                        >
                            <span className="font-serif text-[28px] font-normal text-[var(--cream2)] tracking-[-0.03em] leading-none pt-[2px]">
                                {trait.n}
                            </span>
                            <div>
                                <div className="text-[14px] font-semibold text-[var(--ink)] mb-1.5 tracking-[-0.01em]">{trait.title}</div>
                                <p className="text-[13px] text-[var(--ink2)] leading-[1.7] font-light">{trait.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
