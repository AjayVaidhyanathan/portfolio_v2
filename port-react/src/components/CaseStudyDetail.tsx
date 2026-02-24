'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

// ─── Inner block types (used inside sections) ───────────────────────────────
export type InnerBlock =
    | { type: 'text'; content: React.ReactNode }
    | { type: 'quote'; content: string }
    | { type: 'pain'; items: { value: string; label: string; desc: React.ReactNode }[] }
    | { type: 'steps'; items: { title: string; desc: React.ReactNode }[] }
    | { type: 'matrix'; cells: { label: string; items: { text: string; isNew?: boolean }[] }[] }
    | { type: 'evidence'; items: { value: string; label: string; desc: string }[] }
    | { type: 'products'; items: { phase: string; name: string; ing: string; desc: string }[] }
    | { type: 'ltv'; items: { value: string; label: string; desc: string }[] }
    | { type: 'gtm'; phases: { label: string; timeline: string; items: string[] }[] }
    | { type: 'reasons'; items: { number: string; title: string; desc: React.ReactNode }[] }
    | { type: 'modules'; items: { title: string; desc: string }[] }
    | { type: 'outcomes'; items: { value: string; label: string; desc: string }[] }
    | { type: 'ba'; before: string[]; after: string[] }
    | { type: 'table'; headers: string[]; rows: (string | React.ReactNode)[][] }
    | { type: 'arch'; layers: { label: string; items: React.ReactNode[] }[] }
    | { type: 'code'; code: React.ReactNode; caption?: string }

// ─── Section type ────────────────────────────────────────────────────────────
export interface Section {
    number: string
    label: string
    heading?: string // rendered as cs-h2 with em italic in blue
    blocks: InnerBlock[]
}

// ─── Props ───────────────────────────────────────────────────────────────────
interface CaseStudyDetailProps {
    number: string
    subtitle: string
    title: string // raw HTML string, supports <br/> and <em>
    tags?: string[]
    lead: React.ReactNode
    metrics: { value: string; label: string; highlight?: boolean }[]
    sections: Section[]
    reflection?: { number: string; content: React.ReactNode }[]
    nextProject?: { title: string; link: string }
}

// ─── Helpers ─────────────────────────────────────────────────────────────────
function SectionLabel({ number, label }: { number: string; label: string }) {
    return (
        <div className="text-[11px] font-bold tracking-[0.16em] uppercase text-[var(--ink3)] pt-[6px] sticky top-[88px]">
            <span className="block font-serif text-[32px] font-normal tracking-[-0.04em] text-[var(--cream2)] leading-none mb-2">{number}</span>
            {label}
        </div>
    )
}

function H2({ children }: { children: string }) {
    // Support inline <em> via dangerouslySetInnerHTML
    return (
        <h2
            className="font-serif text-[clamp(28px,3vw,42px)] font-normal tracking-[-0.03em] leading-[1.05] text-[var(--ink)] mb-6"
            dangerouslySetInnerHTML={{ __html: children }}
        />
    )
}

// ─── Inner block renderers ────────────────────────────────────────────────────
function renderBlock(block: InnerBlock, i: number) {
    switch (block.type) {

        case 'text':
            return (
                <div key={i} className="cs-text-block space-y-4 text-[15px] leading-[1.85] text-[var(--ink2)] font-light [&_strong]:text-[var(--ink)] [&_strong]:font-semibold [&_p]:mb-5 [&_p:last-child]:mb-0 [&_.cs-h2]:font-serif [&_.cs-h2]:text-[clamp(28px,3vw,42px)] [&_.cs-h2]:font-normal [&_.cs-h2]:tracking-[-0.03em] [&_.cs-h2]:leading-[1.05] [&_.cs-h2]:text-[var(--ink)] [&_.cs-h2]:mb-6 [&_.cs-h2_em]:italic [&_.cs-h2_em]:text-[var(--blue)] [&_.cs-h3]:font-serif [&_.cs-h3]:text-[clamp(20px,2vw,26px)] [&_.cs-h3]:font-normal [&_.cs-h3]:tracking-[-0.02em] [&_.cs-h3]:text-[var(--ink)] [&_.cs-h3]:mb-3 [&_.cs-h3]:mt-10">
                    {block.content}
                </div>
            )

        case 'quote':
            return (
                <div key={i} className="border-l-[3px] border-[var(--sand)] pl-6 pr-4 py-4 my-8 bg-[var(--cream2)] rounded-r-[4px]">
                    <p className="font-serif text-[clamp(18px,2vw,22px)] font-normal italic leading-[1.5] text-[var(--ink)]">
                        {block.content}
                    </p>
                </div>
            )

        case 'pain':
            return (
                <div key={i} className="grid grid-cols-1 md:grid-cols-2 gap-[2px] my-8">
                    {block.items.map((item, j) => (
                        <div key={j} className={cn("p-7", j % 2 === 0 ? "bg-[var(--navy2)]" : "bg-[var(--navy)]")}>
                            <span className="font-serif text-[36px] font-normal text-[var(--sand)] tracking-[-0.04em] leading-none block mb-1">{item.value}</span>
                            <span className="text-[11px] font-bold tracking-[0.12em] uppercase text-[rgba(255,255,255,0.35)] mb-3 block">{item.label}</span>
                            <div className="text-[13px] text-[rgba(255,255,255,0.55)] leading-[1.65] font-light [&_strong]:text-[rgba(255,255,255,0.85)] [&_strong]:font-medium">
                                {item.desc}
                            </div>
                        </div>
                    ))}
                </div>
            )

        case 'steps':
            return (
                <div key={i} className="flex flex-col gap-[2px] my-6">
                    {block.items.map((item, j) => (
                        <div key={j} className="grid grid-cols-[52px_1fr] gap-5 bg-[var(--cream2)] p-7 items-start hover:bg-[#e2ddd5] transition-colors">
                            <span className="font-serif text-[32px] font-normal text-[var(--cream)] tracking-[-0.04em] leading-none pt-[2px]">
                                {String(j + 1).padStart(2, '0')}
                            </span>
                            <div>
                                <div className="text-[14px] font-bold tracking-[0.01em] text-[var(--ink)] mb-2">{item.title}</div>
                                <div className="text-[13px] leading-[1.7] text-[var(--ink2)] font-light [&_strong]:text-[var(--ink)] [&_strong]:font-semibold">
                                    {item.desc}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )

        case 'matrix':
            return (
                <div key={i} className="grid grid-cols-2 gap-[2px] my-6 min-h-[320px]">
                    {block.cells.map((cell, j) => (
                        <div key={j} className={cn(
                            "p-7",
                            j === 0 ? "bg-[var(--cream2)]" :
                                j === 1 ? "bg-[var(--blue)]" :
                                    j === 2 ? "bg-[var(--cream2)]" : "bg-[var(--navy)]"
                        )}>
                            <span className={cn(
                                "text-[10px] font-bold tracking-[0.12em] uppercase mb-3 block",
                                j === 0 || j === 2 ? "text-[var(--ink3)]" : "text-[rgba(232,213,176,0.5)]"
                            )}>{cell.label}</span>
                            {cell.items.map((item, k) => (
                                <div key={k} className={cn(
                                    "text-[13px] font-light leading-[1.5] mb-1.5",
                                    j === 0 || j === 2 ? (item.isNew ? "font-semibold text-[var(--ink)]" : "text-[var(--ink2)]") :
                                        (item.isNew ? "font-semibold text-[var(--sand)]" : "text-[rgba(255,255,255,0.6)]")
                                )}>{item.text}</div>
                            ))}
                        </div>
                    ))}
                </div>
            )

        case 'evidence':
            return (
                <div key={i} className="grid grid-cols-1 md:grid-cols-3 gap-[2px] my-6">
                    {block.items.map((item, j) => (
                        <div key={j} className="bg-[var(--navy2)] p-8">
                            <span className="font-serif text-[clamp(36px,4vw,52px)] font-normal text-[var(--sand)] tracking-[-0.04em] leading-none block mb-2">{item.value}</span>
                            <span className="text-[11px] font-bold tracking-[0.12em] uppercase text-[rgba(232,213,176,0.4)] block mb-4">{item.label}</span>
                            <p className="text-[13px] text-[rgba(255,255,255,0.5)] leading-[1.65] font-light">{item.desc}</p>
                        </div>
                    ))}
                </div>
            )

        case 'products':
            return (
                <div key={i} className="grid grid-cols-1 md:grid-cols-3 gap-[2px] my-6">
                    {block.items.map((item, j) => (
                        <div key={j} className="bg-[var(--navy)] p-8 relative overflow-hidden">
                            <div className="absolute top-0 left-0 right-0 h-[3px] bg-[var(--sand)]" />
                            <span className="text-[10px] font-bold tracking-[0.14em] uppercase text-[rgba(232,213,176,0.45)] mb-4 block">{item.phase}</span>
                            <div className="font-serif text-[22px] font-normal text-white tracking-[-0.02em] mb-2 leading-[1.1]">{item.name}</div>
                            <div className="text-[12px] text-[var(--sand)] font-medium mb-4 leading-[1.5]">{item.ing}</div>
                            <p className="text-[13px] text-[rgba(255,255,255,0.45)] leading-[1.65] font-light">{item.desc}</p>
                        </div>
                    ))}
                </div>
            )

        case 'ltv':
            return (
                <div key={i} className="grid grid-cols-1 md:grid-cols-3 gap-[2px] my-6">
                    {block.items.map((item, j) => (
                        <div key={j} className="bg-[var(--blue)] p-8 text-center">
                            <span className="font-serif text-[clamp(36px,4vw,56px)] font-normal text-[var(--sand)] tracking-[-0.04em] leading-none block mb-2">{item.value}</span>
                            <span className="text-[11px] font-bold tracking-[0.12em] uppercase text-[rgba(232,213,176,0.4)] block mb-3">{item.label}</span>
                            <p className="text-[13px] text-[rgba(255,255,255,0.5)] leading-[1.6] font-light">{item.desc}</p>
                        </div>
                    ))}
                </div>
            )

        case 'gtm':
            return (
                <div key={i} className="grid grid-cols-1 md:grid-cols-3 gap-[2px] my-6">
                    {block.phases.map((phase, j) => (
                        <div key={j} className={cn(
                            "p-7",
                            j === 0 ? "bg-[var(--cream2)]" :
                                j === 1 ? "bg-[var(--navy2)]" : "bg-[var(--navy)]"
                        )}>
                            <span className={cn(
                                "text-[10px] font-bold tracking-[0.14em] uppercase mb-2 block",
                                j === 0 ? "text-[var(--ink3)]" : "text-[rgba(232,213,176,0.45)]"
                            )}>{phase.label}</span>
                            <span className={cn(
                                "font-serif text-[22px] font-normal tracking-[-0.02em] mb-4 block",
                                j === 0 ? "text-[var(--ink)]" : "text-white"
                            )}>{phase.timeline}</span>
                            {phase.items.map((item, k) => (
                                <div key={k} className={cn(
                                    "text-[13px] leading-[1.6] mb-2 font-light pl-[14px] relative",
                                    "before:content-['—'] before:absolute before:left-0 before:opacity-40",
                                    j === 0 ? "text-[var(--ink2)]" : "text-[rgba(255,255,255,0.5)]"
                                )}>{item}</div>
                            ))}
                        </div>
                    ))}
                </div>
            )

        case 'reasons':
            return (
                <div key={i} className="grid grid-cols-1 md:grid-cols-2 gap-[2px] my-6">
                    {block.items.map((item, j) => (
                        <div key={j} className="p-7 bg-[var(--cream2)] border-l-[3px] border-transparent hover:border-[var(--sand2)] hover:bg-[#e0dcd3] transition-all">
                            <span className="font-serif text-[40px] font-normal text-[var(--cream)] tracking-[-0.04em] leading-none block mb-3">{item.number}</span>
                            <div className="text-[14px] font-bold text-[var(--ink)] mb-2">{item.title}</div>
                            <div className="text-[13px] text-[var(--ink2)] leading-[1.65] font-light [&_strong]:text-[var(--ink)] [&_strong]:font-semibold">{item.desc}</div>
                        </div>
                    ))}
                </div>
            )

        case 'modules':
            const modColors = ['bg-[var(--navy)]', 'bg-[var(--blue)]', 'bg-[var(--navy2)]', 'bg-[var(--navy2)]', 'bg-[var(--navy)]']
            return (
                <div key={i} className="grid grid-cols-1 md:grid-cols-3 gap-[2px] my-6">
                    {block.items.map((item, j) => (
                        <div key={j} className={cn("p-7 relative overflow-hidden", modColors[j % modColors.length])}>
                            <span className="font-serif text-[48px] font-normal text-[rgba(232,213,176,0.1)] tracking-[-0.05em] leading-none block mb-4">
                                {String(j + 1).padStart(2, '0')}
                            </span>
                            <div className="text-[14px] font-bold text-white mb-2 tracking-[-0.01em]">{item.title}</div>
                            <p className="text-[13px] text-[rgba(255,255,255,0.45)] leading-[1.65] font-light">{item.desc}</p>
                        </div>
                    ))}
                </div>
            )

        case 'outcomes':
            return (
                <div key={i} className="grid grid-cols-1 md:grid-cols-3 gap-[2px] my-6">
                    {block.items.map((item, j) => (
                        <div key={j} className={cn("p-8", j % 2 === 0 ? "bg-[var(--navy)]" : "bg-[var(--blue)]")}>
                            <span className="font-serif text-[clamp(32px,4vw,52px)] font-normal text-[var(--sand)] tracking-[-0.04em] leading-none block mb-2">{item.value}</span>
                            <span className="text-[11px] font-bold tracking-[0.12em] uppercase text-[rgba(255,255,255,0.35)] block mb-3">{item.label}</span>
                            <p className="text-[13px] text-[rgba(255,255,255,0.5)] leading-[1.65] font-light">{item.desc}</p>
                        </div>
                    ))}
                </div>
            )

        case 'ba':
            return (
                <div key={i} className="grid grid-cols-1 md:grid-cols-2 gap-[2px] my-6">
                    <div className="bg-[var(--navy2)] p-7">
                        <span className="text-[11px] font-bold tracking-[0.14em] uppercase text-[rgba(232,213,176,0.4)] mb-5 block">Before</span>
                        {block.before.map((item, j) => (
                            <div key={j} className="flex items-start gap-3 mb-3 text-[13px] leading-[1.6] font-light text-[rgba(255,255,255,0.45)]">
                                <span className="w-[5px] h-[5px] rounded-full bg-[rgba(255,255,255,0.2)] flex-shrink-0 mt-[7px]" />
                                {item}
                            </div>
                        ))}
                    </div>
                    <div className="bg-[var(--blue)] p-7">
                        <span className="text-[11px] font-bold tracking-[0.14em] uppercase text-[var(--sand)] mb-5 block">After</span>
                        {block.after.map((item, j) => (
                            <div key={j} className="flex items-start gap-3 mb-3 text-[13px] leading-[1.6] font-light text-[rgba(255,255,255,0.75)]">
                                <span className="w-[5px] h-[5px] rounded-full bg-[var(--sand)] flex-shrink-0 mt-[7px]" />
                                {item}
                            </div>
                        ))}
                    </div>
                </div>
            )

        case 'table':
            return (
                <div key={i} className="overflow-x-auto my-6">
                    <table className="w-full border-collapse text-[13px]">
                        <thead>
                            <tr>
                                {block.headers.map((h, j) => (
                                    <th key={j} className="text-left text-[10px] font-bold tracking-[0.14em] uppercase text-[var(--ink3)] py-3 px-4 border-b-2 border-[var(--ink)]">{h}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {block.rows.map((row, j) => (
                                <tr key={j} className="hover:bg-[var(--cream2)] transition-colors">
                                    {row.map((cell, k) => (
                                        <td key={k} className={cn(
                                            "py-4 px-4 border-b border-[var(--cream2)] align-top leading-[1.6] font-light",
                                            k === 0 ? "font-semibold text-[var(--ink)] whitespace-nowrap" :
                                                k === 1 ? "text-[var(--blue)] font-medium text-[12px]" : "text-[var(--ink2)]"
                                        )}>{cell}</td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )

        case 'arch':
            const archColors = ['bg-[var(--cream2)]', 'bg-[var(--navy2)]', 'bg-[var(--blue)]', 'bg-[var(--navy)]']
            return (
                <div key={i} className="grid grid-cols-2 md:grid-cols-4 gap-[2px] my-6">
                    {block.layers.map((layer, j) => (
                        <div key={j} className={cn("p-6", archColors[j % archColors.length])}>
                            <span className={cn(
                                "text-[10px] font-bold tracking-[0.16em] uppercase mb-4 block",
                                j === 0 ? "text-[var(--ink3)]" : "text-[rgba(232,213,176,0.5)]"
                            )}>{layer.label}</span>
                            {layer.items.map((item, k) => (
                                <div key={k} className={cn(
                                    "text-[12px] leading-[1.6] mb-2 font-light",
                                    j === 0 ? "text-[var(--ink2)] [&_strong]:text-[var(--ink)] [&_strong]:font-semibold" :
                                        "text-[rgba(255,255,255,0.55)] [&_strong]:text-[rgba(255,255,255,0.9)] [&_strong]:font-semibold"
                                )}>{item}</div>
                            ))}
                        </div>
                    ))}
                </div>
            )

        case 'code':
            return (
                <div key={i} className="my-6">
                    <div className="bg-[var(--navy)] rounded-[4px] p-8 overflow-x-auto">
                        <pre className="font-mono text-[12px] leading-[1.75] text-[rgba(255,255,255,0.7)] whitespace-pre">
                            {block.code}
                        </pre>
                    </div>
                    {block.caption && <p className="text-[12px] italic text-[var(--ink3)] text-center mt-2">{block.caption}</p>}
                </div>
            )

        default:
            return null
    }
}

// ─── Main component ───────────────────────────────────────────────────────────
export default function CaseStudyDetail({
    number, subtitle, title, tags, lead, metrics, sections, reflection, nextProject
}: CaseStudyDetailProps) {
    return (
        <div className="bg-[var(--cream)] min-h-screen">

            {/* ── Hero ─────────────────────────────────────────────────────────── */}
            <div className="bg-[var(--navy)] px-14 pt-[120px] pb-20 relative overflow-hidden">
                <div className="absolute right-0 top-0 bottom-0 w-[38%] bg-[var(--blue)] opacity-50"
                    style={{ clipPath: 'polygon(20% 0,100% 0,100% 100%,0% 100%)' }} />
                <div className="absolute left-14 right-14 bottom-0 h-[1px] bg-[rgba(232,213,176,0.12)]" />

                <div className="max-w-[900px] relative z-10">
                    {/* Eyebrow */}
                    <motion.div
                        initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                        className="flex items-center gap-4 mb-10"
                    >
                        <span className="text-[11px] font-bold tracking-[0.14em] uppercase text-[var(--sand)] opacity-70">{subtitle}</span>
                        <span className="w-[1px] h-[14px] bg-[rgba(232,213,176,0.25)]" />
                        <span className="font-serif text-[13px] text-[rgba(232,213,176,0.4)]">Case {number}</span>
                        {tags && tags.length > 0 && (
                            <>
                                <span className="w-[1px] h-[14px] bg-[rgba(232,213,176,0.25)]" />
                                <div className="flex gap-2 flex-wrap">
                                    {tags.map((tag, i) => (
                                        <span key={i} className="text-[11px] font-bold tracking-[0.08em] uppercase text-[rgba(232,213,176,0.55)] border border-[rgba(232,213,176,0.18)] px-3 py-1 rounded-[2px]">{tag}</span>
                                    ))}
                                </div>
                            </>
                        )}
                    </motion.div>

                    {/* Title */}
                    <motion.h1
                        initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
                        className="font-serif text-[clamp(40px,6vw,84px)] font-normal leading-[0.93] tracking-[-0.035em] text-white mb-8 [&_em]:italic [&_em]:text-[var(--sand)]"
                        dangerouslySetInnerHTML={{ __html: title }}
                    />

                    {/* Lead */}
                    <motion.div
                        initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.42, ease: [0.16, 1, 0.3, 1] }}
                        className="text-[17px] leading-[1.75] text-[rgba(255,255,255,0.5)] max-w-[620px] font-light mb-14 [&_strong]:text-[rgba(255,255,255,0.82)] [&_strong]:font-medium"
                    >
                        {lead}
                    </motion.div>

                    {/* Metrics */}
                    <motion.div
                        initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        className="grid grid-cols-2 md:grid-cols-4 gap-[2px]"
                    >
                        {metrics.map((m, i) => (
                            <div key={i} className="bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.07)] px-6 py-7">
                                <span className={cn(
                                    "font-serif text-[clamp(28px,3.5vw,44px)] font-normal tracking-[-0.03em] leading-none block mb-2",
                                    m.highlight ? "text-[var(--sand)]" : "text-white"
                                )}>{m.value}</span>
                                <span className="text-[11px] font-semibold tracking-[0.12em] uppercase text-[rgba(255,255,255,0.3)]">{m.label}</span>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* ── Body sections ────────────────────────────────────────────────── */}
            <div className="max-w-[1280px] mx-auto px-14">
                {sections.map((section, si) => (
                    <motion.div
                        key={si}
                        initial={{ opacity: 0, y: 18 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '0px 0px -48px 0px' }}
                        transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                        className="py-20 border-b border-[var(--cream2)] last:border-b-0"
                    >
                        <div className="grid grid-cols-[240px_1fr] gap-16 items-start">
                            <SectionLabel number={section.number} label={section.label} />
                            <div>
                                {section.heading && <H2>{section.heading}</H2>}
                                {section.blocks.map((block, bi) => renderBlock(block, bi))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* ── Reflection ───────────────────────────────────────────────────── */}
            {reflection && reflection.length > 0 && (
                <motion.div
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '0px 0px -48px 0px' }}
                    transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                    className="bg-[var(--navy)] px-14 py-14 relative overflow-hidden"
                >
                    <div className="absolute top-[-40px] left-6 font-serif text-[240px] text-white opacity-[0.04] pointer-events-none leading-none select-none">&ldquo;</div>
                    <span className="text-[11px] font-bold tracking-[0.16em] uppercase text-[var(--sand)] opacity-55 mb-8 block relative z-10">What I learned</span>
                    <div className="relative z-10">
                        {reflection.map((item, i) => (
                            <div key={i} className="py-7 border-t border-[rgba(255,255,255,0.06)] first:border-t border-[rgba(255,255,255,0.06)]">
                                <span className="font-serif text-[13px] text-[rgba(232,213,176,0.3)] block mb-2">{item.number}</span>
                                <div className="text-[15px] leading-[1.8] text-[rgba(255,255,255,0.55)] font-light [&_strong]:text-white [&_strong]:font-medium">
                                    {item.content}
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            )}

            {/* ── Footer nav ───────────────────────────────────────────────────── */}
            <div className="bg-[var(--cream2)] px-14 py-16 flex justify-between items-center flex-wrap gap-8">
                <a href="/" className="flex items-center gap-2 text-[13px] font-medium text-[var(--ink3)] hover:text-[var(--ink)] transition-colors group">
                    <span className="group-hover:-translate-x-1 transition-transform">←</span>
                    Back to work
                </a>
                {nextProject && (
                    <a href={nextProject.link} className="flex items-center gap-2 text-right group hover:gap-4 transition-all">
                        <div>
                            <span className="text-[11px] font-bold tracking-[0.14em] uppercase text-[var(--ink3)] block mb-2">Next case</span>
                            <div className="font-serif text-[clamp(20px,2.5vw,30px)] font-normal tracking-[-0.02em] text-[var(--ink)] group-hover:text-[var(--blue)] transition-colors">
                                {nextProject.title}
                            </div>
                        </div>
                        <span className="font-serif text-[24px] text-[var(--ink3)]">→</span>
                    </a>
                )}
            </div>
        </div>
    )
}
