'use client'

import React, { useEffect, useState } from 'react'
import { motion, useSpring, useMotionValue } from 'framer-motion'

export default function CustomCursor() {
    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)

    const springConfig = { damping: 25, stiffness: 200 }
    const springX = useSpring(mouseX, springConfig)
    const springY = useSpring(mouseY, springConfig)

    const [isHovering, setIsHovering] = useState(false)

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX)
            mouseY.set(e.clientY)
        }

        const handleMouseEnter = (e: MouseEvent) => {
            const target = e.target as HTMLElement
            if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.closest('a') || target.closest('button')) {
                setIsHovering(true)
            } else {
                setIsHovering(false)
            }
        }

        window.addEventListener('mousemove', handleMouseMove)
        window.addEventListener('mouseover', handleMouseEnter)

        return () => {
            window.removeEventListener('mousemove', handleMouseMove)
            window.removeEventListener('mouseover', handleMouseEnter)
        }
    }, [mouseX, mouseY])

    return (
        <>
            <motion.div
                className="fixed top-0 left-0 w-2 h-2 bg-[var(--sand)] rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2"
                style={{ x: mouseX, y: mouseY }}
                animate={{ width: isHovering ? 12 : 8, height: isHovering ? 12 : 8 }}
            />
            <motion.div
                className="fixed top-0 left-0 w-9 h-9 border-[1.5px] border-[rgba(232,213,176,0.5)] rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2"
                style={{ x: springX, y: springY }}
                animate={{ width: isHovering ? 56 : 36, height: isHovering ? 56 : 36 }}
            />
        </>
    )
}
