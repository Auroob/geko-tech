"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const DevShopPackages = () => {
  const recSolPackagesData = [
    [
      {
        title: "Standard",
        subtitle: "Precision Referrals",
        description: [
            "Customized technical questions for initial interviews.",
            "Video interview recording and delivery.",
            "Streamlined candidate assessment.",
        ],
        benefit:"Tailored candidate referrals ensuring a perfect match.",
      },
      {
        title: "Lean",
        subtitle: "Elevate Your First Round",
        description: [
            "Customized technical questions for initial interviews.",
            "Video interview recording and delivery.",
            "Streamlined candidate assessment.",
        ],
        benefit:"Enhanced first-round interview process for efficient selection."
      },
      {
        title: "Premium",
        subtitle: "Comprehensive Talent Acquisition",
        description: [
            "Customized technical questions for initial interviews.",
            "Video interview recording and delivery.",
            "Streamlined candidate assessment.",
        ],
        benefit:"All-inclusive recruitment solution from initial vetting to technical assessment."
      },
    ]
  ];
  return (
    <section className="lg:py-16">
        <div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }} >
            <div className="col-span-8 place-self-center text-center sm:text-left">
        <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl lg:leading-normal font-light">
            Packages </h1>
       </div>
        </motion.div>
        <div className="grid grid-cols-3 pt-20 sm:grid-cols-12 container mx-auto">
  {recSolPackagesData[0].map((item, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      className="col-span-3 sm:col-span-4 py-20 px-4 mx-4 rounded-2xl shadow-xl border border-geko-orange transform transition duration-500 hover:scale-105">
         <h1 className="text-geko-orange font-bold text-center my-4">
          {item.title}
        </h1>
        <h2 className="text-white text-center mb-4 sm:text-5xl lg:text-4xl lg:leading-normal font-light">{item.subtitle}</h2>
        <h5 className="text-lg px-4 text-center text-geko-grey font-regular leading-loose animated-paragraph">{item.benefit}</h5>
        <ul className="text-lg px-4 pt-8 text-left text-white font-light leading-loose animated-paragraph">
          {item.description.map((desc, descIndex) => (
            <li key={descIndex}>{desc}</li>
          ))}
        </ul>
    </motion.div>
  ))}
</div>
        </div>
    </section>
  );
};

export default DevShopPackages;





