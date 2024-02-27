import EmailSection from '@/app/components/EmailSection';
import Footer from '@/app/components/Footer';
import StaffAugContent from '@/app/components/StaffAugContent';
import StaffAugPackages from '@/app/components/StaffAugPackages';
import React from 'react';

const StaffAug = () => {
  return (
      <section className="flex min-h-screen flex-col bg-[#121212]">
        <div className="container mt-24 mx-auto px-12 py-4">
        <StaffAugContent />
        <StaffAugPackages />
        <EmailSection />
      </div>
      <Footer />
      </section>
  );
};

export default StaffAug;
