import { ArrowRight, ChevronDown, Linkedin, Youtube, Github } from "lucide-react";
import { Particles } from "@/components/ui/shadcn-io/particles";
import { LiquidButton } from "@/components/ui/shadcn-io/liquid-button";
import heroImage from '../../assets/hero.jpg';

const HeroSection = () => {
  return (
     <section className="relative min-h-screen flex items-center overflow-hidden bg-neutral-950 text-white">
      <Particles
        className="absolute inset-0"
        quantity={300}
        ease={20}
        staticity={1}
        color="#ffffff"
        size={2.0}
      />

      {/* Split Layout */}
      <div className="relative z-10 w-full min-h-screen flex flex-col md:flex-row">
        <div className="w-full md:w-3/5 flex items-center px-6 md:px-12 lg:px-16 py-6 md:py-0">
          <div className="max-w-2xl space-y-10">
            <div className="space-y-6">
              <h4 className="text-lg">
                Hey there 👋!
              </h4>
              <h1 className="text-4xl md:text-6xl font-light text-white">
                I'm Laniyan Abdul-Qawi
              </h1>
              <p className="text-base md:text-lg lg:text-xl text-white/70 font-light leading-relaxed">
                A software engineer and developer advocate specializing in building 
                exceptional digital experiences with a focus on performance and scalability.
              </p>
            </div>
            <div className="flex flex-wrap gap-6 lg:gap-8">
              <a
                href="https://github.com/oladotunlaniyan"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-white/60 hover:text-white transition-colors duration-200"
              >
                <Github className="w-5 h-5" />
                <span className="text-sm uppercase tracking-wider">GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/abdul-qawi-laniyan/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-white/60 hover:text-white transition-colors duration-200"
              >
                <Linkedin className="w-5 h-5" />
                <span className="text-sm uppercase tracking-wider">LinkedIn</span>
              </a>
              <a
                href="https://youtube.com/@laniyanabdulqawi"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-white/60 hover:text-white transition-colors duration-200"
              >
                <Youtube className="w-5 h-5" />
                <span className="text-sm uppercase tracking-wider">YouTube</span>
              </a>
            </div>
          {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#" 
                target="_blank"
                rel="noopener noreferrer"
              >
                <LiquidButton className="w-full sm:w-auto cursor-pointer border-2 border-white/20 hover:border-white/40 flex items-center justify-center gap-2 rounded-2xl px-6 py-3 transition-all duration-300">
                  <span>Explore My Work</span>
                  <ArrowRight className="h-4 w-4" />
                </LiquidButton>
              </a>
              <a href="#contact">
                <LiquidButton className="w-full sm:w-auto cursor-pointer border-2 border-white/20 hover:border-white/40 flex items-center justify-center gap-2 rounded-2xl px-6 py-3 transition-all duration-300">
                  <span>Get in Touch</span>
                  <ArrowRight className="h-4 w-4" />
                </LiquidButton>
              </a>
            </div>

            {/* Social Links */}
            
          </div>
        </div>

        <div className="w-full md:w-1/3 flex items-center justify-center p-6 md:p-0">
       <div className="relative w-full aspect-square rounded-3xl overflow-hidden shadow-xl">
       <img
        src= {heroImage.src}
        alt="Laniyan Abdul-Qawi"
        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
       />
       </div>
      </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-white/50 text-xs font-light uppercase tracking-wider">Scroll to explore</span>
        <ChevronDown className="w-5 h-5 text-white/50" />
      </div>
    </section>
  );
};

export default HeroSection;
