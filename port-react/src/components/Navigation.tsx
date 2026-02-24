'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

export default function Navigation() {
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 40)
        }
        window.addEventListener('scroll', handleScroll, { passive: true })
        handleScroll()
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-[200] px-14 h-[68px] flex items-center justify-between transition-all duration-400",
                isScrolled ? "bg-[rgba(13,27,42,0.96)] backdrop-blur-[16px] border-b border-[rgba(255,255,255,0.08)]" : "bg-transparent"
            )}
        >
            <Link href="/" className="font-serif text-[22px] text-white no-underline tracking-tight leading-none group">
                Ajay<em className="italic text-[var(--sand)]">.</em>
            </Link>

            <div className="flex items-center gap-9">
                <Link href="#work" className="font-body text-[13px] font-medium text-[rgba(255,255,255,0.65)] hover:text-white transition-colors duration-200">
                    Work
                </Link>
                <Link href="#approach" className="font-body text-[13px] font-medium text-[rgba(255,255,255,0.65)] hover:text-white transition-colors duration-200">
                    Approach
                </Link>
                <Link href="#about" className="font-body text-[13px] font-medium text-[rgba(255,255,255,0.65)] hover:text-white transition-colors duration-200">
                    About
                </Link>
                <Link href="#contact" className="bg-[var(--sand)] text-[var(--navy)] px-[22px] py-[9px] rounded-[3px] font-semibold text-[13px] tracking-wide hover:bg-[var(--sand2)] transition-all duration-200 hover:-translate-y-[1px]">
                    Hire me
                </Link>
            </div>
        </nav>
    )
}
