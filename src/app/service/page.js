import React from 'react';
import Pricing from '../components/Pricing';
import EmailSection from '../components/EmailSection';
import ServiceLanding from '../components/ServiceLanding';
import Footer from '../components/Footer';
export default function Service() {
    return (
      <main className="flex min-h-screen flex-col bg-[#121212]">
      <div className="container mt-24 mx-auto px-12 py-4">
        <ServiceLanding />
        <Pricing />
        <EmailSection />
      </div>
      <Footer />
      </main>
    );
}