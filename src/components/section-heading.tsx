"use client"

import type { ReactNode } from "react"

import { cn } from "cn"

export function SectionHeading({
  eyebrow,
  title,
  align = "left",
  className,
}: {
  eyebrow?: string
  title: ReactNode
  align?: "left" | "center"
  className?: string
}) {
  return (
    <div className={cn("flex flex-col", align === "center" && "items-center text-center", className)}>
      {eyebrow && (
        <div className={cn("flex items-center gap-2.5", align === "center" && "justify-center")}>
          <span
            aria-hidden
            className="size-2.5 shrink-0 bg-brand"
            style={{ clipPath: "polygon(25% 0, 100% 0, 75% 100%, 0 100%)" }}
          />
          <span className="font-mono text-xs font-semibold uppercase tracking-[0.32em] text-brand">
            {eyebrow}
          </span>
        </div>
      )}
      <h2 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
        {title}
      </h2>
    </div>
  )
}
