import React from 'react';
import ServicePoints from './ServicePoint';

const Services = () => {
  return (
    <section className="h-screen bg-geko-bg rounded-lg p-8 grid grid-cols-2 items-center">
      <div className="text-left text-4xl text-geko-blue mb-4">
        <h1 className="mb-4 text-2xl sm:text-5xl lg:text-6xl lg:leading-normal font-light">We offer expert assistance in</h1>
      </div>
      <div>
        <ServicePoints />
      </div>
    </section>
  );
};

export default Services;
