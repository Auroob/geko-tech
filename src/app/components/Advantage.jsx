"use client";
import React from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

export default function Advantage() {
  const advantageData = [
    [
      {
        title: "Innovation and Adaptability",
        description: "Emphasizing the importance of staying ahead in technology and being flexible to market changes.",
        imageUrl: "images/innovation.png",
      },
      {
        title: "Customer-Centric Approach",
        description: "Prioritizing customer needs and experiences in all aspects of business operations and service offerings.",
        imageUrl: "images/customer.png",
      },
    ],
    [
      {
        title: "Integrity and Transparency​",
        description: "Building trust with clients and stakeholders through honest and clear communication and business practices.",
        imageUrl: "images/trust.png",
      },
      {
        title: "Excellence in Execution",
        description: "Ensuring the highest quality in service delivery, project management, and talent acquisition, reflecting a commitment to outstanding results.",
        imageUrl: "images/execution.png",
      },
    ],
  ];
  
  return (
    <div className="pt-20 mb-24 sm:mb-18 xl:mb-16">
      <div className="container mx-auto">
      <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }} >
            <div className="col-span-8 place-self-center text-center sm:text-left">
        <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl lg:leading-normal font-light">
            Join Our Journey </h1>
        <h5 className="text-lg text-geko-grey font-light leading-loose animated-paragraph">
        Embark on a journey with us where expertise meets passion, and innovation drives results. At [Your Agency Name], we're more than a company; we're a catalyst for transformation in the tech world.
        </h5>
       </div>
        </motion.div>

        <div className="grid grid-cols-2 flex flex-col sm:flex-row">
          <div className="flex-col">
            {advantageData[0].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <div className="col-span-8 flex flex-row items-center p-6 my-6 mx-3 sm:my-7 sm:mx-3 xl:my-14 xl:mx-7 rounded-2xl shadow-xl border border-geko-grey transform transition duration-500 hover:scale-105">
                  <img src={item.imageUrl} alt="" width={100} height={50} />
                  <div className="flex-col pl-5">
                    <h3 className="text-white text-light">{item.title}</h3>
                    <p className="font-light text-gray-400">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="flex-col -mt-4 sm:mt-14">
            {advantageData[1].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <div className="col-span-8 flex flex-row items-center p-6 my-6 mx-3 sm:my-7 sm:mx-3 xl:my-14 xl:mx-7 rounded-2xl shadow-xl border border-geko-grey transform transition duration-500 hover:scale-105">
                  <img src={item.imageUrl} alt="" width={100} height={50} />
                  <div className="flex-col pl-5">
                    <h3 className="text-white text-light">{item.title}</h3>
                    <p className="font-light text-gray-400">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
