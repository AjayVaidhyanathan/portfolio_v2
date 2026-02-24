'use client'

import React from 'react'
import { motion } from 'framer-motion'

const items = [
    "Product Discovery", "Roadmapping", "Go-to-Market", "A/B Testing",
    "Market Sizing", "0 to 1 Delivery", "LTV Modeling", "Stakeholder Alignment",
    "CSPO Certified", "User Research"
]

export default function Ticker() {
    const duplicatedItems = [...items, ...items, ...items, ...items]

    return (
        <div className="bg-[var(--sand)] overflow-hidden py-[13px] relative z-10">
            <motion.div
                className="flex whitespace-nowrap"
                animate={{ x: "-50%" }}
                transition={{
                    duration: 30,
                    ease: "linear",
                    repeat: Infinity
                }}
            >
                {duplicatedItems.map((item, idx) => (
                    <span key={idx} className="font-body text-[12px] font-semibold tracking-[0.12em] uppercase text-[var(--navy)] px-8 flex items-center gap-4">
                        {item}
                        <span className="w-1 h-1 bg-[var(--navy)] rounded-full opacity-[0.35]" />
                    </span>
                ))}
            </motion.div>
        </div>
    )
}
