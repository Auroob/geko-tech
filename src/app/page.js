import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import AchievementsSection from "./components/AchievementsSection";
import Introduction from "./components/Introduction";
import Services from "./components/Services";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <Introduction />
        <AboutSection />
        <Services />
        <ProjectsSection />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}
