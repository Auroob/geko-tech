import React from 'react';

const AboutStandOut = () => {
  const points = [
    {
      number: '01',
      title: 'Versatile Expertise',
      description:
        'From finding the perfect candidate to managing complete tech departments, our reach is as vast as it is precise. We don\'t just recruit; we create and innovate.',
    },
    {
      number: '02',
      title: 'Rapid, Reliable Results',
      description:
        'Efficiency is our mantra. Whether it\'s recruitment, augmenting staff, or tech project collaborations, expect swift, high-quality outcomes.',
    },
    {
      number: '03',
      title: 'Tailored Tech Solutions',
      description:
        'Our approach is bespoke. Powered by top-tier talent and industry veterans, we design solutions that fit your unique needs perfectly.',
    },
  ];

  return (
    <section className="my-10">
      {points.map((point) => (
        <div key={point.number} className="grid grid-cols-[auto_1fr] gap-4 mb-6 py-4">
          <div className="text-geko-orange font-bold text-lg">{point.number}</div>
          <div>
            <h3 className="font-light text-xl mb-2 pb-2">{point.title}</h3>
            <p>{point.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default AboutStandOut;

