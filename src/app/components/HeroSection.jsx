"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="flex items-center justify-center py-40">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl lg:leading-normal font-medium">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
            Welcome to Geko-Technologies -{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Unleasing Potential",
                1000,
                "Engineering Success",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <p className="text-white text-base sm:text-lg mb-6 lg:text-xl font-light">
          Your Hub for Premier Talent Acquisition, Augmented Staffing, and Collaborative Tech Development
          </p>
          <div>
            <Link
              href="/#contact"
              className="px-6 inline-block py-3 w-50 sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white"
            >
              Contact
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
