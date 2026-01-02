"use client"

import Gallery1 from "../../assets/gallery1.jpg"; 
import Gallery5 from "../../assets/gallery5.jpg";
import Gallery4 from "../../assets/gallery4.jpeg";
import Gallery3 from "../../assets/gallery3.jpg";
import Gallery2 from "../../assets/gallery2.png";
import Gallery7 from "../../assets/gallery7.png";

import { useTheme } from "next-themes";
import { useState, useEffect, useRef } from 'react';
import { AnimatedH2 } from "@/components/animatedText";

export default function WritingTalksSection() {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  const { theme, systemTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const isDark = currentTheme === "dark";

  const items = [
    {
      type: 'talk',
      title: 'Introduction to the Logos tech stack',
      venue: 'Logos circle premiere ilorin 2025',
      location: 'Ilorin, Nigeria',
      views: '30+',
      image: Gallery1.src,
      link: '#'
    },
    {
      type: 'article',
      title: 'Building an Internship Directory Using React Router and Google Sheets as a Database',
      publication: 'Hashnode',
      date: '2025',
      views: '100',
      image: Gallery2.src,
      link: '#'
    },
    {
      type: 'talk',
      title: 'NACOSS Techfest',
      venue: 'University of Ilorin',
      location: 'Ilorin, Nigeria',
      views: '500+',
      image: Gallery3.src,
      link: '#'
    },
    {
      type: 'article',
      title: 'Shazam clone with React and Node.js',
      publication: 'Hashnode',
      date: '2025',
      views: '100+',
      image: Gallery4.src,
      link: 'https://devdotun.hashnode.dev/i-tried-cloning-shazam-with-react-and-nodejs-heres-what-i-learned'
    },
    {
      type: 'talk',
      title: 'Hultprize OnCampus 2025',
      venue: 'Main Auditorium',
      location: 'University of Ilorin, Nigeria',
      views: '500+',
      image: Gallery5.src,
      link: '#'
    },
    {
      type: 'article',
      title: 'Building a Private, Decentralized Messaging Experience with Waku and React',
      publication: 'Dev.to',
      date: '2025',
      views: '50+',
      image: Gallery7.src,
      link: 'https://dev.to/laniyanabdulqawi/whisper-board-building-a-private-decentralized-messaging-experience-with-waku-2o79'
    },
  ];

  const duplicatedItems = [...items, ...items];

  // Auto-scroll effect
  useEffect(() => {
    const scrollContainer = scrollRef;
    
    if (!scrollContainer || isPaused) return;
    
    const scrollSpeed = 1; 
    let animationId: number ;

   const scroll = () => {
    const container = scrollContainer.current!;
    
    if (container.scrollLeft >= container.scrollWidth / 2) {
      container.scrollLeft = 0;
    } else {
      container.scrollLeft += scrollSpeed;
    }

    animationId = requestAnimationFrame(scroll);
  };

  animationId = requestAnimationFrame(scroll);

  return () => cancelAnimationFrame(animationId);
}, [isPaused]);

  return (
    <section className="min-h-screen bg-white flex flex-col justify-center py-20 overflow-hidden dark:bg-neutral-950 transition-colors duration-700">
      {/* Header */}
      <div className="px-6 mb-12 max-w-7xl mx-auto w-full">
        <div className="flex items-baseline justify-between">
          <div className="flex items-baseline gap-4">
            <AnimatedH2 delay={0.3} className="text-4xl md:text-5xl font-light text-neutral-900 dark:text-white">
              Writing & Talks
            </AnimatedH2>
            <span className="text-sm text-neutral-400 uppercase tracking-wider">
              Recent
            </span>
          </div>
          <button
            onClick={() => setIsPaused(!isPaused)}
            className="text-xs text-neutral-400 uppercase tracking-wider hover:text-neutral-900 transition-colors"
          >
            {isPaused ? 'Play' : 'Pause'}
          </button>
        </div>
      </div>

      {/* Carousel */}
      <div 
        ref={scrollRef}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        className="overflow-x-hidden overflow-y-hidden scrollbar-hide"
      >
        <div className="flex gap-6 px-6" style={{ width: 'max-content' }}>
          {duplicatedItems.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="group block shrink-0 relative overflow-hidden bg-neutral-100"
              style={{ width: '500px', height: '600px' }}
            >
              {/* Image */}
              <div className="absolute inset-0">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent" />
              </div>

              {/* Type Badge */}
              <div className="absolute top-6 left-6">
                <span className="px-3 py-1 bg-white/10 backdrop-blur-sm text-white text-xs uppercase tracking-wider border border-white/20">
                  {item.type}
                </span>
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <h3 className="text-3xl font-light leading-tight mb-4">
                  {item.title}
                </h3>

                <div className="space-y-2 text-sm text-white/80">
                  {item.type === 'talk' ? (
                    <>
                      <div className="flex justify-between">
                        <span>{item.venue}</span>
                        <span>{item.location}</span>
                      </div>
                      <div className="text-white/60">{item.views} views</div>
                    </>
                  ) : (
                    <>
                      <div className="flex justify-between">
                        <span>{item.publication}</span>
                        <span>{item.date}</span>
                      </div>
                      <div className="text-white/60">{item.views} reads</div>
                    </>
                  )}
                </div>

                {/* Arrow */}
                <div className="mt-6 pt-6 border-t border-white/20">
                  <span className="text-white group-hover:translate-x-1 inline-block transition-transform duration-200">
                    →
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Bottom hint */}
      <div className="px-6 mt-8 max-w-7xl mx-auto w-full flex flex-row justify-between items-center">
        <p className="text-xs text-neutral-400 uppercase tracking-wider">
          Hover to pause · {items.length} total
        </p>
        <p className="md:text-base text-neutral-400 uppercase tracking-wider hover:text-neutral-900">
          View <a href="https://www.linkedin.com/in/abdul-qawi-laniyan/"> all → </a> 
        </p>
      </div>
    </section>
  );
}