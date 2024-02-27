"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const AboutLanding = () => {
  return (
    <section className="flex items-center justify-center pt-40 pb-20">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl lg:leading-normal font-medium">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
            Introducing Geko Technologies{" "}
            </span>
            <br></br>
            <TypeAnimation
                sequence={["Where Innovation Meets Expertise"]}
                wrapper="span"
                speed={50}
                cursor={true}
            />
          </h1>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutLanding;
