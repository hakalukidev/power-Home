"use client"

import {
  useRef,
  type ComponentPropsWithoutRef,
  type FC,
  type ReactNode,
} from "react"
import { motion, MotionValue, useScroll, useTransform } from "motion/react"

import { cn } from "@/lib/utils"
import { useMediaQuery } from "@/hooks/useCoarsePointer"

export interface TextRevealProps extends ComponentPropsWithoutRef<"div"> {
  children: string
}

export const TextReveal: FC<TextRevealProps> = ({ children, className }) => {
  const sectionRef = useRef<HTMLDivElement | null>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
  })
  // The scroll-jacked pin (200vh wrapper + sticky child) fights mobile
  // browsers' dynamic viewport-height chrome, producing a jumpy scroll. Fall
  // back to a plain fade-in reveal on touch devices and narrow screens.
  const isCompact = useMediaQuery('(pointer: coarse), (max-width: 640px)')

  if (typeof children !== "string") {
    throw new Error("TextReveal: children must be a string")
  }

  const words = children.split(" ")

  if (isCompact) {
    return (
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={cn(
          "mx-auto max-w-4xl p-5 text-2xl font-bold text-brand-navy-950 md:p-8 md:text-3xl lg:p-10 lg:text-4xl xl:text-5xl dark:text-white",
          className
        )}
      >
        {children}
      </motion.p>
    )
  }

  return (
    <div ref={sectionRef} className="relative z-0 h-[200vh]">
      <div
        className={cn(
          "sticky top-0 mx-auto flex h-[50%] max-w-4xl items-center bg-transparent px-4 py-20",
          className
        )}
      >
        <span
          className={
            "flex flex-wrap p-5 text-2xl font-bold text-brand-navy-950/20 md:p-8 md:text-3xl lg:p-10 lg:text-4xl xl:text-5xl dark:text-white/20"
          }
        >
          {words.map((word, i) => {
            const start = i / words.length
            const end = start + 1 / words.length
            return (
              <Word key={i} progress={scrollYProgress} range={[start, end]}>
                {word}
              </Word>
            )
          })}
        </span>
      </div>
    </div>
  )
}

interface WordProps {
  children: ReactNode
  progress: MotionValue<number>
  range: [number, number]
}

const Word: FC<WordProps> = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1])
  return (
    <span className="xl:lg-3 relative mx-1 lg:mx-1.5">
      <span className="absolute opacity-30">{children}</span>
      <motion.span
        style={{ opacity: opacity }}
        className={"text-brand-navy-950 dark:text-white"}
      >
        {children}
      </motion.span>
    </span>
  )
}
