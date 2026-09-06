"use client"

import { useState } from "react"
import { motion } from "framer-motion"

import { cn } from "cn"

const PROCESS = [
  {
    step: "01",
    title: "Concept Development",
    paragraphs: [
      "Before a single panel is touched, we define what \"done\" looks like — the finish, the level of correction, and the protection that matches how the car is actually driven. That keeps the plan grounded in a result that holds up, not just a car that looks good for a day.",
      "We walk the vehicle with you, log existing swirls, chips, and trouble spots, and talk through your priorities. That walkaround becomes the blueprint the rest of the job is measured against.",
    ],
  },
  {
    step: "02",
    title: "Pre-Visualization",
    paragraphs: [
      "We map out exactly how the paint, panels, and trim should look at handover, so the plan is judged against a clear picture instead of a guess.",
      "Reference photos of the car's current condition are laid out panel by panel, so every scratch, contamination, and low spot is accounted for before any product is opened.",
    ],
  },
  {
    step: "03",
    title: "Pre-Production Planning",
    paragraphs: [
      "We line up the right products, pads, and film cuts for this exact car before it comes in, so nothing gets decided on the fly once the clock starts.",
      "Paint-depth readings, panel measurements, and film templates are pulled together in advance — the kind of prep that keeps a full-day job from turning into two.",
    ],
  },
  {
    step: "04",
    title: "Core Production",
    paragraphs: [
      "This is where the hours go — hand correction, coating, or film application, done in a controlled bay where dust and rushed timelines aren't part of the process.",
      "Every stage is checked under raking light before moving to the next, so a missed swirl or a lifted edge gets caught here, not after the car leaves.",
    ],
  },
  {
    step: "05",
    title: "Post-Production & Editing",
    paragraphs: [
      "Once the main work is done, we go back over every panel, edge, and gap — the pass most shops skip — to catch anything the first round missed.",
      "Interior wipe-down, residue removal, and a final polish pass happen here, so the car leaves looking finished, not just \"worked on.\"",
    ],
  },
  {
    step: "06",
    title: "Delivery & Distribution",
    paragraphs: [
      "We walk the finished car with you, panel by panel, so you see exactly what changed and why — no surprises at pickup.",
      "You leave with care instructions matched to what was applied, so the finish holds up long after the car leaves our bay.",
    ],
  },
]

export function ProcessSteps() {
  const [active, setActive] = useState(0)

  return (
    <div className="mt-14 grid gap-10 lg:grid-cols-[240px_1fr] lg:gap-16">
      <div className="hidden lg:block">
        <div className="sticky top-32 flex flex-col gap-1">
          {PROCESS.map((item, index) => (
            <div
              key={item.step}
              className={cn(
                "flex items-center gap-3 rounded-xl px-3 py-2.5 transition-colors duration-300",
                active === index && "bg-brand/15"
              )}
            >
              <span
                className={cn(
                  "text-xs font-semibold tabular-nums transition-colors duration-300",
                  active === index ? "text-brand-foreground" : "text-ink/30"
                )}
              >
                {item.step}
              </span>
              <span
                className={cn(
                  "text-sm font-medium leading-snug transition-colors duration-300",
                  active === index ? "text-ink" : "text-ink/40"
                )}
              >
                {item.title}
              </span>
            </div>
          ))}

          <div className="mt-4 h-1 w-full overflow-hidden rounded-full bg-black/5">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-brand-foreground to-brand"
              animate={{ width: `${((active + 1) / PROCESS.length) * 100}%` }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-20 lg:gap-28">
        {PROCESS.map((item, index) => (
          <motion.div
            key={item.step}
            onViewportEnter={() => setActive(index)}
            viewport={{ margin: "-45% 0px -45% 0px" }}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative"
          >
            <span
              aria-hidden
              className="pointer-events-none absolute -left-2 -top-8 select-none text-7xl font-black text-ink/[0.045] sm:text-8xl lg:-left-6"
            >
              {item.step}
            </span>

            <div className="relative">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-foreground/50">
                Step {item.step}
              </span>
              <h3 className="mt-2 text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
                {item.title}
              </h3>
              <span
                aria-hidden
                className="mt-4 block h-1 w-12 rounded-full bg-gradient-to-r from-brand-foreground to-brand"
              />
              {item.paragraphs.map((paragraph, pIndex) => (
                <p
                  key={pIndex}
                  className="mt-4 max-w-2xl text-sm leading-6 text-ink/60 sm:text-base"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
