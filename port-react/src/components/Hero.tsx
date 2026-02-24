'use client'

import React from 'react'
import { motion, Variants } from 'framer-motion'

export default function Hero() {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15
            }
        }
    }

    const childVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1] as [number, number, number, number]
            }
        }
    }

    return (
        <section className="bg-[var(--navy)] min-h-screen px-14 grid grid-rows-[1fr_auto] relative overflow-hidden">
            {/* Geometric accent */}
            <div className="absolute right-0 top-0 bottom-0 w-[42%] bg-[var(--blue)] opacity-[0.55] z-0"
                style={{ clipPath: 'polygon(18% 0, 100% 0, 100% 100%, 0% 100%)' }} />

            {/* Sand horizontal line */}
            <div className="absolute left-14 right-14 bottom-[120px] h-[1px] bg-[rgba(232,213,176,0.15)] z-0" />

            <motion.div
                className="flex flex-col justify-end pt-[140px] pb-[72px] relative z-[1] max-w-[820px]"
                initial="hidden"
                animate="visible"
                variants={containerVariants}
            >
                <motion.div className="flex items-center gap-4 mb-9" variants={childVariants}>
                    <div className="w-10 h-[1px] bg-[var(--sand)] opacity-60" />
                    <span className="font-body text-[12px] font-medium tracking-[0.18em] uppercase text-[var(--sand)] opacity-80">
                        Product Manager - Munich, Germany
                    </span>
                </motion.div>

                <h1 className="font-serif text-[clamp(56px,7.8vw,118px)] font-normal mb-12 leading-[0.92] tracking-[-0.035em] text-white">
                    <span className="block overflow-hidden">
                        <motion.span
                            className="block"
                            initial={{ y: '100%' }}
                            animate={{ y: 0 }}
                            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
                        >
                            Founder-turned
                        </motion.span>
                    </span>
                    <span className="block overflow-hidden">
                        <motion.span
                            className="block"
                            initial={{ y: '100%' }}
                            animate={{ y: 0 }}
                            transition={{ duration: 1, delay: 0.34, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
                        >
                            PM who builds
                        </motion.span>
                    </span>
                    <span className="block overflow-hidden">
                        <motion.span
                            className="block"
                            initial={{ y: '100%' }}
                            animate={{ y: 0 }}
                            transition={{ duration: 1, delay: 0.48, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
                        >
                            with <em className="italic text-[var(--sand)] font-normal">instinct.</em>
                        </motion.span>
                    </span>
                </h1>

                <motion.p className="text-[17px] leading-[1.75] text-[rgba(255,255,255,0.55)] max-w-[520px] font-light" variants={childVariants}>
                    I work across <strong className="text-[rgba(255,255,255,0.85)] font-medium">discovery, strategy, and execution</strong> - with a background in founding, venture capital, and hands-on delivery. Based in Munich, open across Europe.
                </motion.p>
            </motion.div>

            <motion.div
                className="flex justify-between items-end py-8 pb-14 relative z-[1] border-t border-[rgba(255,255,255,0.08)]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.6 }}
            >
                <div className="flex gap-4 items-center">
                    <a href="#work" className="font-body text-[13px] font-semibold tracking-wider bg-[var(--sand)] text-[var(--navy)] px-7 py-[13px] rounded-[3px] flex items-center gap-[10px] hover:bg-[var(--sand2)] transition-all hover:-translate-y-0.5">
                        See my work
                    </a>
                    <a href="#contact" className="font-body text-[13px] font-medium text-[rgba(255,255,255,0.55)] hover:text-white transition-colors tracking-wider">
                        Get in touch →
                    </a>
                </div>

                <div className="flex gap-12">
                    <div className="text-right">
                        <span className="font-serif text-[36px] text-white tracking-tight leading-none block">5+</span>
                        <span className="text-[11px] font-medium tracking-[0.12em] uppercase text-[rgba(255,255,255,0.35)] mt-1 block">Products launched</span>
                    </div>
                    <div className="text-right">
                        <span className="font-serif text-[36px] text-white tracking-tight leading-none block">3</span>
                        <span className="text-[11px] font-medium tracking-[0.12em] uppercase text-[rgba(255,255,255,0.35)] mt-1 block">Industries</span>
                    </div>
                    <div className="text-right">
                        <span className="font-serif text-[36px] text-white tracking-tight leading-none block">TUM</span>
                        <span className="text-[11px] font-medium tracking-[0.12em] uppercase text-[rgba(255,255,255,0.35)] mt-1 block">Masters</span>
                    </div>
                </div>
            </motion.div>
        </section>
    )
}
