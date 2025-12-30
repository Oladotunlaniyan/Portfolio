import HeroSection from "@/pages/homepage/hero";
import RecentProjects from "@/pages/homepage/projects";
import AboutSection from "@/pages/homepage/about";
import Newsletter from "@/pages/homepage/newsletter";
import GallerySection from "@/pages/homepage/gallery";
import Footer from "@/pages/homepage/footer";

export default function Home() {
  return (
    <>
    <HeroSection />
    <AboutSection />
    <GallerySection />
    <RecentProjects/>
    <Newsletter />
    <Footer />
    </>
  );
}
