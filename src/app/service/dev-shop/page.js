import DevShopContent from '@/app/components/DevShopContent';
import DevShopPackages from '@/app/components/DevShopPackages';
import EmailSection from '@/app/components/EmailSection';
import Footer from '@/app/components/Footer';
import React from 'react';

const DevShop = () => {
  return (
    <section className="flex min-h-screen flex-col bg-[#121212]">
      <div className="container mt-24 mx-auto px-12 py-4">
      <DevShopContent />
      <DevShopPackages />
      <EmailSection />
    </div>
    <Footer />
    </section>
);
};

export default DevShop;
