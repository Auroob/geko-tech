import React from 'react';
import AboutLanding from '../components/AboutLanding';
import AboutDetails from '../components/AboutDetails';
import Footer from '../components/Footer';
import AboutContent from '../components/AboutContent';
import AboutStandOut from '../components/AboutStandOut';
import AboutSection from '../components/AboutSection';
import Advantage from '../components/Advantage';
import EmailSection from '../components/EmailSection';
export default function About() {
    return (
      <main className="flex min-h-screen flex-col bg-[#121212]">
      <div className="container mt-24 mx-auto px-12 py-4">
        <AboutLanding />
        <AboutContent />
        <Advantage />
        <EmailSection />
      </div>
      <Footer />
      </main>
    );
}