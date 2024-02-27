"use client";
import React from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

const AboutContent = () => {
  const aboutContentData = [
    [
      {
        title: "Our Story",
        description: "We began as a passionate group of diverse, talented individuals, committed to redefining resource augmentation and recruitment. Today, we've evolved into a multi-dimensional tech partner, offering recruitment, staff augmentation, and tech project collaboration, backed by industry leaders from FAANG and Microsoft.",
        imageUrl: "/images/our-story.gif",
      },
      {
        title: "Our Evolution",
        description: "Our journey from specialized recruitment to a comprehensive tech solution provider is driven by our relentless pursuit of simplicity, efficiency, and innovation. Our unique approach to direct talent engagement and human-centric strategies has positioned us as pioneers in the tech world.",
        imageUrl: "/images/our-evolution.gif",
      },
      {
        title: "Our Mission",
        description: "To empower businesses and individuals alike with top-tier tech talent and innovative solutions. We're not just fulfilling roles; we're enabling growth, fostering partnerships, and driving technological progress.",
        imageUrl: "/images/our-mission.gif",
      },
    ]
  ];
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-3 sm:grid-cols-12 container mx-auto">
        {aboutContentData[0].map((item, index) => {
          const ref = React.useRef(null);
          const isInView = useInView(ref, { once: true });

          return (
            <motion.div
            ref={ref}
            key={index}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.1 * index }}
            className="col-span-3 sm:col-span-4 py-12 mx-4 rounded-2xl shadow-xl border border-geko-grey transform transition duration-500 hover:scale-105">
              <h1 className="text-white text-center mb-4 sm:text-5xl lg:text-4xl lg:leading-normal font-light">
                {item.title}
              </h1>
              <div className="flex justify-center">
                <Image src={item.imageUrl} width={200} height={200} />
              </div>
              <p className="text-lg pt-8 px-4 text-left text-geko-grey font-light leading-loose animated-paragraph">
                {item.description}
              </p>
          </motion.div> 
          );
        })}          
      </div>
    </section>
  );
};

export default AboutContent;





