import EmailSection from '@/app/components/EmailSection';
import Footer from '@/app/components/Footer';
import RecSolContent from '@/app/components/RecSolContent';
import RecSolPackages from '@/app/components/RecSolPackages';
import React from 'react';

export default function RecSol() {
    return (
      <main className="flex min-h-screen flex-col bg-[#121212]">
      <div className="container mt-24 mx-auto px-12 py-4">
        <RecSolContent />
        <RecSolPackages />
        <EmailSection />
      </div>
      <Footer />
      </main>
    );
}