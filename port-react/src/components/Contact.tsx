'use client'

import { motion } from 'framer-motion'

export default function Contact() {
    return (
        <section
            id="contact"
            className="bg-[var(--navy)] px-14 py-[120px] grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative overflow-hidden"
        >
            {/* Radial gradient background accent */}
            <div
                className="absolute pointer-events-none"
                style={{
                    left: '-200px', bottom: '-200px',
                    width: '600px', height: '600px', borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(30,58,95,0.8) 0%, transparent 70%)',
                }}
            />

            {/* Left — heading */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                className="relative z-10"
            >
                <span className="text-[12px] font-semibold tracking-[0.14em] uppercase text-[var(--sand)] opacity-60 mb-6 block">Get in touch</span>
                <h2
                    className="font-serif font-normal tracking-[-0.04em] leading-[0.9] text-white"
                    style={{ fontSize: 'clamp(48px, 7vw, 96px)' }}
                >
                    Let&apos;s build<br /><em className="italic text-[var(--sand)] block">something great.</em>
                </h2>
            </motion.div>

            {/* Right — contact details */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
                className="relative z-10"
            >
                {/* Availability dot */}
                <div className="flex items-center gap-2.5 mb-8">
                    <span className="w-2 h-2 bg-[#4ade80] rounded-full flex-shrink-0" style={{ animation: 'pulse 2.5s infinite' }} />
                    <span className="text-[12px] font-semibold tracking-[0.08em] uppercase text-[rgba(255,255,255,0.45)]">Open to full-time PM roles - Munich and remote</span>
                </div>

                {/* Email */}
                <a
                    href="mailto:hello@ajayvaidhyanathan.com"
                    className="block font-serif text-[clamp(22px,2.8vw,34px)] font-normal tracking-[-0.02em] text-white border-b border-[rgba(255,255,255,0.12)] pb-5 mb-7 transition-colors hover:text-[var(--sand)] hover:border-[rgba(232,213,176,0.35)]"
                >
                    hello@ajayvaidhyanathan.com
                </a>

                {/* Note */}
                <p className="text-[14px] leading-[1.75] text-[rgba(255,255,255,0.4)] font-light mb-9">
                    I read every message personally and reply within a day. If you&apos;re building something interesting in Europe and need a PM who can think like a founder - let&apos;s talk.
                </p>

                {/* CTA */}
                <a
                    href="mailto:hello@ajayvaidhyanathan.com"
                    className="inline-flex items-center gap-3 font-body text-[13px] font-semibold tracking-[0.06em] uppercase bg-[var(--sand)] text-[var(--navy)] px-8 py-[15px] rounded-[3px] transition-all hover:bg-[var(--sand2)] hover:-translate-y-0.5 mb-6 block w-fit"
                >
                    Send a message →
                </a>

                {/* Social links */}
                <div className="flex gap-7 mt-6">
                    {['LinkedIn', 'Twitter', 'Read.cv', 'Resume'].map(link => (
                        <a
                            key={link}
                            href="#"
                            className="text-[12px] font-medium tracking-[0.06em] uppercase text-[rgba(255,255,255,0.35)] hover:text-[var(--sand)] transition-colors"
                        >
                            {link}
                        </a>
                    ))}
                </div>
            </motion.div>

            <style>{`
                @keyframes pulse {
                    0%, 100% { box-shadow: 0 0 0 0 rgba(74,222,128,0.4); }
                    50% { box-shadow: 0 0 0 8px rgba(74,222,128,0); }
                }
            `}</style>
        </section>
    )
}
