"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const AboutDetails = () => {
  return (
    <section className="flex items-center justify-center pt-20">
      <div className="grid grid-cols-3 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 px-10 place-self-center text-center sm:text-left justify-self-center"
        >
          <Image src="/images/about-details-2.png" width={400} height={150} />
        </motion.div>
        <div className="col-span-4 px-10 place-self-center text-center sm:text-left justify-self-center">
          <Image src="/images/about-details.png" width={600} height={250} />
        </div>
        <div className="col-span-4 px-10 place-self-center text-center sm:text-left justify-self-center">
          <Image src="/images/about-details-3.png" width={600} height={250} />
        </div>
      </div>
    </section>
  );
};

export default AboutDetails;
