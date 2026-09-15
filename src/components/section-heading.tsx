"use client"

import type { ReactNode } from "react"

import { cn } from "cn"

export function SectionHeading({
  eyebrow,
  title,
  align = "left",
  tone = "dark",
  className,
}: {
  eyebrow?: string
  title: ReactNode
  align?: "left" | "center"
  tone?: "dark" | "light"
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
          <span
            className={cn(
              "font-mono text-xs font-semibold uppercase tracking-[0.32em]",
              tone === "light" ? "text-ink/60" : "text-brand"
            )}
          >
            {eyebrow}
          </span>
        </div>
      )}
      <h2
        className={cn(
          "mt-4 text-4xl font-bold tracking-tight sm:text-5xl",
          tone === "light" ? "text-ink" : "text-white"
        )}
      >
        {title}
      </h2>
    </div>
  )
}
