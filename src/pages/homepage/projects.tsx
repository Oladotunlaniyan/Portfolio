"use client";
import { Github } from 'lucide-react';
import Project1 from '../../assets/project1.png';
import Project2 from '../../assets/project2.png'; 
import Project3 from '../../assets/project3.png';
import Projeect4 from '../../assets/project4.png';
import Project5 from '../../assets/project5.png';
import Project6 from '../../assets/project6.png';
import { AnimatedDiv } from '@/components/animatedText';

export default function RecentProjects() {
  const projects = [
    {
      title: "GDGOC Unilorin resource-hub",
      description: "A resource hub and directory built for the GDGOC Unilorin community and techies",
      image: Project1.src,
      link: "https://github.com/Oladotunlaniyan/GDGOC-resource-hub"
    },
    {
      title: "Whisper Board",
      description: "An anonymous and deentralized message board application built with Next.js and Waku protocol, allowing users to share thoughts and ideas without revealing their identity.",
      image: Project2.src,
      link: "https://github.com/Oladotunlaniyan/whisper-waku-chat"
    },
    {
      title: "Open designers",
      description: "A community-driven platform for designers & developers to collaborate, share resources, and showcase their work openly to inspire creativity and innovation in design.",
      image: Project3.src,
      link: "https://open-designers.org/"
    },
    {
      title: "Zuri Corp.",
      description: "A full company website for Zuri Corp built with React and Tailwind CSS, showcasing their services, team, and projects in a modern and responsive design.",
      image: Projeect4.src,
      link: "https://zuri-landing-six.vercel.app/"
    },
    {
      title: "Rayo's Health Clinic",
      description: "A modern, responsive website for Rayo's Health Clinic built with Next.js and Tailwind CSS, providing information about services, appointments, and health resources.",
      image: Project5.src,
      link: "https://rayosclinic.vercel.app/"
    },
    {
      title: "Devfest Ilorin",
      description: "The official website for Devfest Ilorin, built with Next.js and Tailwind CSS, featuring event details, speakers, schedule, and registration information.",
      image: Project6.src,
      link: "https://devfestilorin.com/"
    }
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Recent Projects
          </h2>
          <p className="text-xl text-gray-600">
            A selection of my latest work and initiatives.
          </p>
        </div>

        {/* Projects Grid */}
        <AnimatedDiv delay={0.1} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              className="group block bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-gray-300 hover:shadow-xl transition-all duration-300"
            >
              {/* Project Image */}
              <div className="aspect-video overflow-hidden bg-gray-100">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors flex-1">
                    {project.title}
                  </h3>
                  <Github className="w-5 h-5 text-gray-400 group-hover:text-gray-900 transition-colors flex-shrink-0 ml-2" />
                </div>
                <p className="text-gray-600 leading-relaxed line-clamp-3">
                  {project.description}
                </p>
              </div>
            </a>
          ))}
        </AnimatedDiv>
      </div>
       <div className="px-6 mt-8 max-w-7xl mx-auto w-full justify-between items-center">
        <p className="text-neutral-400 uppercase tracking-wider hover:text-neutral-900">
          View all of my  <a href="https://github.com/Oladotunlaniyan">Projects → </a> 
        </p>
      </div>
    </section>
  );
}