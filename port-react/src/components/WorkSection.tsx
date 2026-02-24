'use client'

import React, { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Project } from '@/data/projects'
import ProjectRow from './ProjectRow'
import { cn } from '@/lib/utils'

interface WorkSectionProps {
    projects: Project[];
}

const FILTERS = ['all', 'product', 'business-case', 'growth', 'delivery', 'ideation']
const PER_PAGE = 4

export default function WorkSection({ projects }: WorkSectionProps) {
    const [activeFilter, setActiveFilter] = useState('all')
    const [currentPage, setCurrentPage] = useState(1)

    const filteredProjects = useMemo(() => {
        return projects.filter(p => activeFilter === 'all' || p.tags.some(t => t.toLowerCase().includes(activeFilter)) || p.type.toLowerCase().includes(activeFilter))
    }, [projects, activeFilter])

    const paginatedProjects = useMemo(() => {
        const start = (currentPage - 1) * PER_PAGE
        return filteredProjects.slice(start, start + PER_PAGE)
    }, [filteredProjects, currentPage])

    const totalPages = Math.ceil(filteredProjects.length / PER_PAGE)

    const handleFilterChange = (filter: string) => {
        setActiveFilter(filter)
        setCurrentPage(1)
    }

    return (
        <section id="work" className="bg-[var(--cream)] px-14 py-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end mb-[72px] pb-10 border-b-2 border-[var(--ink)]">
                <div>
                    <div className="text-[12px] font-semibold tracking-widest uppercase text-[var(--ink3)] mb-4">Selected work</div>
                    <h2 className="font-serif text-[clamp(40px,5vw,68px)] font-normal leading-[0.95] tracking-tight text-[var(--ink)]">
                        Case <em className="italic text-[var(--blue)] font-normal">studies</em>
                    </h2>
                </div>
                <div>
                    <p className="text-[15px] leading-[1.8] text-[var(--ink2)] max-w-[400px] font-light">
                        Eight projects across B2B SaaS, consumer, D2C, and industrial - covering discovery, strategy, delivery, and business cases.
                    </p>
                    <div className="flex flex-wrap gap-2 mt-6">
                        {FILTERS.map(f => (
                            <button
                                key={f}
                                onClick={() => handleFilterChange(f)}
                                className={cn(
                                    "font-body text-[11px] font-semibold tracking-widest uppercase px-4 py-[7px] border-[1.5px] rounded-[2px] transition-all duration-200 cursor-none",
                                    activeFilter === f
                                        ? "bg-[var(--navy)] text-[var(--sand)] border-[var(--navy)]"
                                        : "bg-transparent text-[var(--ink3)] border-[var(--cream2)] hover:border-[var(--ink2)] hover:text-[var(--ink)]"
                                )}
                            >
                                {f.replace('-', ' ')}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            <div className="flex flex-col min-h-[400px]">
                <AnimatePresence mode="wait">
                    {filteredProjects.length > 0 ? (
                        <motion.div
                            key={activeFilter + currentPage}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                        >
                            {paginatedProjects.map((project, idx) => (
                                <ProjectRow key={project.id} project={project} index={idx} />
                            ))}
                        </motion.div>
                    ) : (
                        <div className="py-16 text-center text-[14px] text-[var(--ink3)]">
                            No results - try a different filter.
                        </div>
                    )}
                </AnimatePresence>
            </div>

            {totalPages > 1 && (
                <div className="flex items-center gap-3 mt-12 pt-8 border-t border-[var(--cream2)]">
                    <button
                        disabled={currentPage === 1}
                        onClick={() => setCurrentPage(prev => prev - 1)}
                        className="font-body text-[12px] font-semibold tracking-widest uppercase border-[1.5px] border-[var(--cream2)] px-6 py-[10px] rounded-[2px] disabled:opacity-30 hover:not-disabled:border-[var(--navy)] transition-colors duration-200"
                    >
                        ← Prev
                    </button>

                    <div className="flex gap-1.5">
                        {Array.from({ length: totalPages }, (_, i) => (
                            <button
                                key={i + 1}
                                onClick={() => setCurrentPage(i + 1)}
                                className={cn(
                                    "w-9 h-9 flex items-center justify-center font-body text-[12px] font-semibold border-[1.5px] rounded-[2px] transition-all duration-200",
                                    currentPage === i + 1
                                        ? "bg-[var(--navy)] text-[var(--sand)] border-[var(--navy)]"
                                        : "bg-transparent text-[var(--ink3)] border-[var(--cream2)] hover:border-[var(--navy)] hover:text-[var(--navy)]"
                                )}
                            >
                                {i + 1}
                            </button>
                        ))}
                    </div>

                    <button
                        disabled={currentPage === totalPages}
                        onClick={() => setCurrentPage(prev => prev + 1)}
                        className="font-body text-[12px] font-semibold tracking-widest uppercase border-[1.5px] border-[var(--cream2)] px-6 py-[10px] rounded-[2px] disabled:opacity-30 hover:not-disabled:border-[var(--navy)] transition-colors duration-200"
                    >
                        Next →
                    </button>
                </div>
            )}
        </section>
    )
}
