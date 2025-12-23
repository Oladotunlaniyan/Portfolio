"use client"
import { motion } from 'motion/react';
import Gallery1 from '../assets/gallery1.jpg'
import Gallery2 from '../assets/gallery2.jpg'
import Gallery3 from '../assets/gallery3.jpg'
import Gallery4 from '../assets/gallery4.jpg'
import Gallery5 from '../assets/gallery5.jpg'

export interface Pictures{
  picture: string
  // text: string
  image?: string
}

export const works: Pictures[] = [
  {
    picture: "Logos circle ilorin premier pictures",
    image: Gallery1.src,
  },
  {
    picture: "Circle Discussions",
    image: Gallery2.src,
  },
  {
    picture: "Logos ilorin circle",
    image: Gallery3.src,
  },
  {
    picture: "Circle premier pictures",
    image: Gallery4.src,
  },
  {
    picture: "Logos ilorin circle",
    image: Gallery5.src,
  },
]

const AboutSection = () => {
  // Duplicate the works array to create seamless loop
  const duplicatedWorks = [...works, ...works, ...works];

  return (
    <section className="min-h-screen text-black py-20 px-4 overflow-hidden">
      <motion.div
        className="max-w-7xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        {/* Title Section */}
        <div className="mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured Gallery
          </h2>
          <p className="text-lg">Pictures from our circles so far</p>
        </div>

        {/* Continuous Scrolling Gallery */}
        <div className="relative">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-slate-900 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-slate-900 to-transparent z-10 pointer-events-none" />
          
          {/* Scrolling Container */}
          <div className="overflow-hidden">
            <motion.div 
              className="flex gap-6"
              animate={{
                x: [0, -((280 + 24) * works.length)], // 280px width + 24px gap
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 30,
                  ease: "linear",
                },
              }}
            >
              {duplicatedWorks.map((pictures, index) => (
                <div 
                  key={`${pictures.picture}-${index}`} 
                  className="shrink-0 group"
                >
                  <div className="relative overflow-hidden rounded-xl bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 transition-all duration-300 group-hover:border-blue-500/50 group-hover:shadow-2xl group-hover:shadow-blue-500/20 group-hover:-translate-y-2">
                    <img
                      src={pictures.image}
                      alt={`Photo by ${pictures.picture}`}
                      className="w-[280px] h-[380px] object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    
                    {/* Overlay on Hover */}
                    <div className="absolute inset-0  from-slate-900 via-slate-900/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                    
                    {/* Artist Name Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      <p className="text-white font-semibold text-lg">{pictures.picture}</p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Auto-scroll indicator */}
        <motion.div 
          className="text-center mt-8 text-slate-500 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <span className="inline-block animate-pulse">● Auto-scrolling gallery</span>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutSection;