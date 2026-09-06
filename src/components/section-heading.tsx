"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"

import { cn } from "cn"

export function SectionHeading({
  eyebrow,
  title,
  align = "left",
  invert = false,
  className,
}: {
  eyebrow?: string
  title: ReactNode
  align?: "left" | "center"
  invert?: boolean
  className?: string
}) {
  return (
    <div className={cn("flex flex-col", align === "center" && "items-center text-center", className)}>
      {eyebrow && (
        <span
          className={cn(
            "text-sm font-semibold uppercase tracking-[0.2em]",
            invert ? "text-brand/80" : "text-brand-foreground/60"
          )}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          "relative mt-3 inline-block pb-4 text-3xl font-semibold tracking-tight sm:text-4xl",
          invert ? "text-white" : "text-ink"
        )}
      >
        {title}
        <span
          aria-hidden
          className={cn(
            "absolute bottom-0 h-1 w-14 rounded-full",
            invert ? "bg-white/15" : "bg-ink/10",
            align === "center" ? "left-1/2 -translate-x-1/2" : "left-0"
          )}
        />
        <motion.span
          aria-hidden
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className={cn(
            "absolute bottom-0 h-1 w-14 rounded-full",
            invert ? "bg-gradient-to-r from-brand to-brand/40" : "bg-gradient-to-r from-brand-foreground to-brand",
            align === "center" ? "left-1/2 origin-center -translate-x-1/2" : "left-0 origin-left"
          )}
        />
      </h2>
    </div>
  )
}
