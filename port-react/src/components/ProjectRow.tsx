'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Project } from '@/data/projects'
import { cn } from '@/lib/utils'

interface ProjectRowProps {
    project: Project;
    index: number;
}

export default function ProjectRow({ project, index }: ProjectRowProps) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div
            className="group relative grid grid-cols-[80px_1fr_160px] gap-x-10 items-start py-9 border-b border-[var(--cream2)] cursor-none hover:bg-transparent transition-colors duration-200"
            onClick={() => setIsOpen(!isOpen)}
        >
            {/* Navy Hover Background */}
            <div className="absolute inset-x-[-56px] inset-y-0 bg-[var(--navy)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-0" />

            <div className="relative z-[1] font-serif text-[56px] text-[var(--cream2)] group-hover:text-[rgba(232,213,176,0.4)] leading-none -tracking-widest pt-1 transition-colors duration-300">
                {project.number}
            </div>

            <div className="relative z-[1] flex flex-col">
                <span className="text-[11px] font-semibold tracking-widest uppercase text-[var(--ink3)] group-hover:text-[rgba(232,213,176,0.5)] mb-3 transition-colors duration-300">
                    {project.type}
                </span>
                <h3 className="font-serif text-[clamp(20px,2.2vw,28px)] text-[var(--ink)] group-hover:text-white leading-[1.2] -tracking-[0.02em] mb-3 transition-colors duration-300">
                    {project.title}
                </h3>
                <p className="text-[14px] leading-[1.7] text-[var(--ink2)] group-hover:text-[rgba(255,255,255,0.55)] font-light mb-4 transition-colors duration-300">
                    {project.summary}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tags.map(tag => (
                        <span key={tag} className="text-[11px] font-medium tracking-wider text-[var(--ink3)] border border-[var(--cream2)] px-[10px] py-[3px] rounded-[2px] group-hover:border-[rgba(255,255,255,0.15)] group-hover:text-[rgba(255,255,255,0.45)] transition-all duration-300">
                            {tag}
                        </span>
                    ))}
                </div>

                <button
                    className="flex items-center gap-1.5 text-[11px] font-semibold tracking-widest uppercase text-[var(--ink3)] group-hover:text-[rgba(232,213,176,0.7)] hover:!text-[var(--ink)] group-hover:hover:!text-white transition-colors duration-200"
                    onClick={(e) => { e.stopPropagation(); setIsOpen(!isOpen); }}
                >
                    Details
                    <motion.span
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        className="inline-block"
                    >
                        ↓
                    </motion.span>
                </button>

                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                            className="overflow-hidden col-span-2"
                        >
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-0.5 mt-6 mb-2">
                                <DetailCell label="The problem" content={project.details.problem} />
                                <DetailCell label="My approach" content={project.details.approach} />
                                <DetailCell label="Outcomes" content={project.details.outcomes} />
                                <DetailCell label="Methods" content={project.details.methods} />
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            <div className="relative z-[1] flex flex-col items-end gap-4 pt-1 h-full">
                <span className="font-serif text-[44px] text-[var(--blue)] group-hover:text-[var(--sand)] leading-none -tracking-widest transition-colors duration-300">
                    {project.metrics.value}
                </span>
                <span className="text-[11px] font-semibold tracking-widest uppercase text-[var(--ink3)] group-hover:text-[rgba(232,213,176,0.45)] transition-colors duration-300">
                    {project.metrics.label}
                </span>
                <a href={project.link} className="mt-auto flex items-center gap-2 text-[12px] font-semibold tracking-widest uppercase text-[var(--ink)] group-hover:text-[var(--sand)] transition-colors duration-300 group-hover:translate-x-1">
                    Full case →
                </a>
            </div>
        </div>
    )
}

function DetailCell({ label, content }: { label: string; content: string }) {
    // Safely render content with <strong> tags without dangerouslySetInnerHTML
    const parts = content.split(/(<strong>[^<]*<\/strong>)/g)
    const rendered = parts.map((part, i) => {
        const match = part.match(/^<strong>([^<]*)<\/strong>$/)
        if (match) return <strong key={i} className="font-medium text-white group-[]:text-[var(--ink)]">{match[1]}</strong>
        return part
    })

    return (
        <div className="bg-[var(--navy)] group-hover:bg-[var(--navy)] group-[]:bg-[var(--cream2)] p-6 transition-colors duration-300">
            <div className="text-[10px] font-bold tracking-widest uppercase text-[var(--sand)] mb-[10px] opacity-70 group-[]:text-[var(--ink3)] group-hover:text-[var(--sand)]">
                {label}
            </div>
            <p className="text-[13px] leading-[1.65] text-[rgba(255,255,255,0.65)] font-light group-[]:text-[var(--ink2)] group-hover:text-[rgba(255,255,255,0.65)]">
                {rendered}
            </p>
        </div>
    )
}
