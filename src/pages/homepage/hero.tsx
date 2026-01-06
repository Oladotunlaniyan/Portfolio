"use client";

import { ArrowRight, ChevronDown, Linkedin, Youtube, Github } from "lucide-react";
import { Particles } from "@/components/ui/shadcn-io/particles";
import { LiquidButton } from "@/components/ui/shadcn-io/liquid-button";
import heroImage from '../../assets/hero.jpg';
import ThemeToggle from "@/components/themetoggle";
import { useTheme } from "next-themes";
import { AnimatedH1, AnimatedH4, AnimatedP, AnimatedLink, AnimatedButton } from "@/components/animatedText";

const HeroSection = () => {
  const { theme, systemTheme } = useTheme();

  const currentTheme = theme === "system" ? systemTheme : theme;
  
  const isDark = currentTheme === "dark";

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden transition-colors duration-700 dark:bg-black dark:text-white">
      {/* Particles background */}
      <Particles
        className="absolute inset-0 hidden lg:block"
        quantity={300}
        ease={20}
        staticity={1}
        color={isDark ? "#ffffff" : "#000000"}
        size={2.0}
      />

      {/* Theme toggle button */}
      <ThemeToggle />

      {/* Main split layout */}
      <div className="relative z-10 w-full min-h-screen flex flex-col md:flex-row">
        {/* Left / text content */}
        <div className="w-full md:w-3/5 flex items-center px-6 md:px-12 lg:px-16 py-6 md:py-0">
          <div className="max-w-2xl space-y-10">
            <div className="space-y-6">
              <AnimatedH4 delay={0} className="text-lg">
                Hey there 👋!
              </AnimatedH4>

              <AnimatedH1
                delay={0.2}
                className="text-4xl md:text-6xl font-light"
              >
                I'm Laniyan Abdul-Qawi
              </AnimatedH1>

              <AnimatedP
                delay={0.1}
                className={`text-base md:text-lg lg:text-xl font-light leading-relaxed ${
                  isDark ? "text-white/70" : "text-neutral-600"
                }`}
              >
                A software engineer and developer advocate specializing in building
                exceptional digital experiences with a focus on performance and scalability.
              </AnimatedP>
            </div>

            {/* Social links */}
            <div className="flex flex-wrap gap-6 lg:gap-8">
              <AnimatedLink
                delay={0.5}
                href="https://github.com/oladotunlaniyan"
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex items-center gap-2 transition-colors duration-200 ${
                  isDark ? "text-white/60 hover:text-white" : "text-neutral-500 hover:text-neutral-900"
                }`}
              >
                <Github className="w-5 h-5" />
                <span className="text-sm uppercase tracking-wider">GitHub</span>
              </AnimatedLink>

              <AnimatedLink
                delay={0.5}
                href="https://www.linkedin.com/in/abdul-qawi-laniyan/"
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex items-center gap-2 transition-colors duration-200 ${
                  isDark ? "text-white/60 hover:text-white" : "text-neutral-500 hover:text-neutral-900"
                }`}
              >
                <Linkedin className="w-5 h-5" />
                <span className="text-sm uppercase tracking-wider">LinkedIn</span>
              </AnimatedLink>

              <AnimatedLink
                delay={0.5}
                href="https://youtube.com/@laniyanabdulqawi"
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex items-center gap-2 transition-colors duration-200 ${
                  isDark ? "text-white/60 hover:text-white" : "text-neutral-500 hover:text-neutral-900"
                }`}
              >
                <Youtube className="w-5 h-5" />
                <span className="text-sm uppercase tracking-wider">YouTube</span>
              </AnimatedLink>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <AnimatedButton delay={0.7}>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <LiquidButton
                    className={`w-full sm:w-auto flex items-center justify-center gap-2 rounded-2xl px-6 py-3 border-2 cursor-pointer transition-all duration-300 ${
                      isDark
                        ? "border-white/20 hover:border-white/40"
                        : "border-neutral-300 hover:border-neutral-500"
                    }`}
                  >
                    <span>Explore My Work</span>
                    <ArrowRight className="h-4 w-4" />
                  </LiquidButton>
                </a>
              </AnimatedButton>

              <AnimatedButton delay={0.7}>
                <a href="#contact">
                  <LiquidButton
                    className={`w-full sm:w-auto flex items-center justify-center gap-2 rounded-2xl px-6 py-3 border-2 cursor-pointer transition-all duration-300 ${
                      isDark
                        ? "border-white/20 hover:border-white/40"
                        : "border-neutral-300 hover:border-neutral-500"
                    }`}
                  >
                    <span>Get in Touch</span>
                    <ArrowRight className="h-4 w-4" />
                  </LiquidButton>
                </a>
              </AnimatedButton>
            </div>
          </div>
        </div>

        {/* Right / hero image */}
        <div className="w-full md:w-1/3 flex items-center justify-center p-6 md:p-0">
          <div className="relative w-full aspect-square rounded-3xl overflow-hidden shadow-xl">
            <img
              src={heroImage.src}
              alt="Laniyan Abdul-Qawi"
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className={`${isDark ? "text-white/50" : "text-neutral-400"} text-xs font-light uppercase tracking-wider`}>
          Scroll to explore
        </span>
        <ChevronDown className={`w-5 h-5 ${isDark ? "text-white/50" : "text-neutral-400"}`} />
      </div>
    </section>
  );
};

export default HeroSection;
