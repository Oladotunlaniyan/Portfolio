"use client";
import { useState } from "react";
import { useTheme } from "next-themes";
import { AnimatedDiv } from "@/components/animatedText";

export default function AboutSection() {
  const { theme, systemTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
const isDark = currentTheme === "dark";

  return (
 <section className="min-h-screen flex items-center justify-center px-6 py-8 bg-linear-to-br from-blue-50 via-white to-purple-50 text-white dark:bg-neutral-950 dark:text-white transition-colors duration-700 leading-tight">
  <div className="max-w-3xl w-full">
    <div className="space-y-16">
      <div className="space-y-6">
        <h1 className="text-5xl md:text-7xl font-light text-neutral-900 dark:text-black">
          I build tools & applications people love, then teach them why.
        </h1>
      </div>

      <AnimatedDiv className="space-y-4 text-lg md:text-xl text-neutral-600 dark:text-black leading-relaxed font-light">
        <p>
          I've spent 4 years at the intersection of code and community. I've worked on 
          systems that serve thousands and written documentation that actually 
          gets read.
        </p>
        <p>
          The work splits naturally. Both require the same rigor, one in programming languages, 
          the other in clarity.
        </p>
        <p>
          I've spoken at conferences across sub-saharan countries, contributed to 
          open source projects used by a lot of people, and mentored teams through 
          technical pivots.
        </p>
      </AnimatedDiv>

      <AnimatedDiv className="pt-3 border-t border-neutral-200 dark:border-neutral-700">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-sm text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">
          <div>
            <div className="font-medium text-neutral-900 dark:text-black mb-1">Stack</div>
            <div>Cracked</div>
          </div>
          <div>
            <div className="font-medium text-neutral-900 dark:text-black mb-1">Speaking</div>
            <div>40+ Events</div>
          </div>
          <div>
            <div className="font-medium text-neutral-900 dark:text-black mb-1">Writing</div>
            <div>Bi-Weekly</div>
          </div>
          <div>
            <div className="font-medium text-neutral-900 dark:text-black mb-1">Content</div>
            <div>Weekly</div>
          </div>
        </div>
      </AnimatedDiv>

      <AnimatedDiv delay={0.7} className="pt-6 space-y-4">
        <blockquote className="text-2xl md:text-3xl font-light text-neutral-900 dark:text-black leading-relaxed italic">
          "The best user experience is invisible. You only notice it 
          when it's absent."
        </blockquote>
      </AnimatedDiv>
    </div>

    <div className="mt-28 pt-4 border-t border-neutral-200 dark:border-neutral-700 text-sm text-neutral-400 dark:text-neutral-500 text-center">
      Currently exploring the future of AI-assisted development · Open to developer and advocacy roles
    </div>
  </div>
</section>

  );
}