"use client"

import { useRef } from "react"
import { motion, useMotionTemplate, useScroll, useTransform } from "framer-motion"

import { cn } from "cn"

type ScrollBulgeProps = {
  children: React.ReactNode
  className?: string
  /** How far the media scales/softens at the edges of the viewport. */
  intensity?: number
}

/**
 * Site-wide scroll effect for media: it bulges outward and softens as it
 * scrolls into view, settles flat once centered in the viewport, then
 * bulges again on its way out.
 */
export function ScrollBulge({ children, className, intensity = 0.14 }: ScrollBulgeProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1 + intensity, 1, 1 + intensity])
  const radius = useTransform(scrollYProgress, [0, 0.5, 1], ["24%", "0%", "24%"])
  const blurPx = useTransform(scrollYProgress, [0, 0.5, 1], [2.5, 0, 2.5])
  const filter = useMotionTemplate`blur(${blurPx}px)`

  return (
    <div ref={ref} className={cn("relative overflow-hidden", className)}>
      <motion.div style={{ scale, borderRadius: radius, filter }}>{children}</motion.div>
    </div>
  )
}
