import { Globe } from "lucide-react";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Particles } from "./ui/shadcn-io/particles";
import { LiquidButton } from "./ui/shadcn-io/liquid-button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black text-white">
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center animate-fade-in">

        <div className="inline-flex items-center space-x-2  border border-slate-600 rounded-full px-4 py-2 mb-8">
              <Globe className="w-4 h-4 text-slate-400" />
              <span className="text-sm text-slate-300">Pioneering Digital Freedom in Ilorin</span>
            </div>

        <h1 className="text-5xl md:text-7xl font-serif text-hero-text mb-6 leading-tight">
          Logos circle ilorin
        </h1>
        <p className="text-lg md:text-xl text-hero-text/90 max-w-3xl mx-auto mb-8 font-light">
          A community-driven movement empowering individuals through trustless, censorship-resistant technology and collective innovations
        </p>
        
        <div className="flex flex-row items-center justify-center gap-4">
          <a href="https://logos.co/" target="_blank">
          <LiquidButton
            className=" cursor-pointer border-2 flex rounded-2xl text-center p-3"
          >
            Learn More
            <ArrowRight className="h-4 w-4" />
          </LiquidButton>
          </a>
          <LiquidButton
            className="cursor-pointer border-2 flex rounded-2xl text-center p-3"
          >
            Join the Movement
            <ArrowRight className="h-4 w-4" />
          </LiquidButton>
        </div>
    </div>

    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-hero-text/70 text-sm font-medium">Scroll to explore</span>
        <ChevronDown className="w-6 h-6 text-hero-text/70" />
      </div>

   <Particles
    className="absolute inset-0"
    quantity={200}
    ease={20}
    staticity={1}
    color="#ffffff"
    size={1.5}
    />
    </section>
  );
};

export default HeroSection;
