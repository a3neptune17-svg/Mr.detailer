"use client"

import { motion } from "framer-motion"

const PROCESS = [
  {
    step: "01",
    title: "Concept Development",
    summary:
      "We define what \"done\" looks like — finish, correction level, and protection matched to how you actually drive — then walk the car with you to log every trouble spot.",
  },
  {
    step: "02",
    title: "Pre-Visualization",
    summary:
      "Paint, panels, and trim are mapped panel by panel against reference photos, so the plan is judged against a clear picture, not a guess.",
  },
  {
    step: "03",
    title: "Pre-Production Planning",
    summary:
      "Products, pads, and film cuts are lined up in advance with paint-depth readings and templates, so nothing is decided on the fly once the clock starts.",
  },
  {
    step: "04",
    title: "Core Production",
    summary:
      "Hand correction, coating, or film application happens in a controlled bay, with every stage checked under raking light before moving to the next.",
  },
  {
    step: "05",
    title: "Post-Production & Editing",
    summary:
      "A second pass over every panel and edge catches what the first round missed, finished with an interior wipe-down and a final polish.",
  },
  {
    step: "06",
    title: "Delivery & Distribution",
    summary:
      "We walk the finished car with you panel by panel, and send you off with care instructions matched to what was applied.",
  },
]

function ProcessCard({ item }: { item: (typeof PROCESS)[number] }) {
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-black/5 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-7">
      <span
        aria-hidden
        className="pointer-events-none absolute -right-2 -top-4 select-none text-7xl font-black text-ink/[0.05]"
      >
        {item.step}
      </span>

      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-foreground/50">
        Step {item.step}
      </span>
      <h3 className="relative mt-2 text-lg font-semibold text-ink">
        {item.title}
      </h3>
      <span
        aria-hidden
        className="mt-3 block h-1 w-10 rounded-full bg-gradient-to-r from-brand-foreground to-brand"
      />
      <p className="relative mt-4 text-sm leading-6 text-ink/60">
        {item.summary}
      </p>
    </div>
  )
}

export function ProcessSteps() {
  return (
    <div className="relative mt-14">
      <div
        aria-hidden
        className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-black/10 to-transparent lg:block"
      />

      <div className="flex flex-col gap-6 lg:gap-2">
        {PROCESS.map((item, index) => {
          const fromLeft = index % 2 === 0

          return (
            <div key={item.step} className="relative lg:grid lg:grid-cols-2 lg:items-center lg:gap-14">
              <span
                aria-hidden
                className="absolute left-1/2 top-1/2 z-10 hidden size-3 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-brand-foreground bg-background lg:block"
              />

              <motion.div
                initial={{ opacity: 0, x: fromLeft ? -70 : 70 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className={fromLeft ? "lg:col-start-1" : "lg:col-start-2"}
              >
                <ProcessCard item={item} />
              </motion.div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
