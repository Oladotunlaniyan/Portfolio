"use client";
import { useTheme } from "next-themes"



const Newsletter = () => {
const { theme, systemTheme } = useTheme();
const currentTheme = theme === "system" ? systemTheme : theme;
const isDark = currentTheme === "dark";

  return (
    <div className="py-20 px-6 bg-white text-center align-middle">
    <div className="max-w-4xl mx-auto text-center">
    {/* Section Header */}
    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
      Subscribe to my Newsletter
    </h2>
    <p className="text-lg text-gray-600 mb-8 leading-relaxed">
      I spend most of my time making content like blog posts, video tutorials, courses, speaking at conferences or delivering workshops. If you're interested in web development ecosystem work, or you just want to be up to date with my activities, subscribe here.
    </p>
    
    {/* Newsletter Embed */}
    <div className="justify-center align-middle text-center">
     <iframe src="https://laniyanabdulqawi.substack.com/embed" className="w-full h-full" ></iframe>
    </div>
  </div>
</div>
  )
}

export default Newsletter