// ServicePoints.jsx
import React from 'react';

const servicePoints = [
  {
    number: '01',
    iconCaption: 'Precision Recruitment',
    heading: 'Recruitment Solutions',
    subHeading: 'Brief Overview:',
    description:
      'At Geko Technology, we redefine recruitment. Our precision-driven approach connects you with top-tier talent across the U.S. We don\'t just find candidates; we discover future leaders who fit seamlessly into your vision. Click for a transformative recruitment journey.',
  },
  {
    number: '02',
    iconCaption: 'Global Staff Augmentation',
    heading: 'Staff Augmentation & Outsourcing',
    subHeading: 'Brief Overview:',
    description:
      'Expand your team\'s capabilities with our global staff augmentation and outsourcing services. Whether you need specific engineering expertise or a complete outsourced tech department, we tailor solutions to scale your team effectively. Dive in to explore our flexible, global talent solutions.',
  },
  {
    number: '03',
    iconCaption: 'Collaborative Tech Development',
    heading: 'Dev Shop for Tech Projects',
    description:
      'Partner with us for your tech projects and experience innovation at its best. Our Dev Shop brings together skilled engineers and industry experts to turn your tech constraints into successful projects. Click to discover how we can co-create your next big tech breakthrough.',
  },
];

const ServicePoints = () => {
  return (
    <section className="flex overflow-hidden">
      <div className="w-full snap-x snap-mandatory flex overflow-x-auto">
        {servicePoints.map((point, index) => (
          <div key={index} className="snap-center shrink-0 w-full flex p-8">
            <div className="w-1/4 text-center">
              <p className="text-geko-orange text-4xl font-bold">{point.number}</p>
            </div>
            <div className="text-black w-3/4 space-y-4">
              <div className="text-sm">{point.iconCaption}</div>
              <h3 className="text-xl font-bold">{point.heading}</h3>
              <p>{point.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicePoints;
