"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const DevShopContent= () => {
    return (
        <section className="flex items-center justify-center pt-40">
          <div className="grid grid-cols-1 sm:grid-cols-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
            >
              <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl lg:leading-normal font-medium">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
                Geko Services{" "}
                </span>
                <br></br>
                <TypeAnimation
                  sequence={["Dev Shop"]}
                  wrapper="span"
                  speed={50}
                />
              </h1>
              <p className="text-geko-grey text-base sm:text-lg mb-6 mt-10 lg:text-xl font-light">
              Revolutionize your talent acquisition with our tailored Recruitment Services, designed for precision, efficiency, and comprehensive coverage.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="col-span-4 place-self-center mt-4 lg:mt-0"
            >
            <Image src="/images/dev.gif" width={400} height={500} />
            </motion.div>
          </div>
        </section>
      );
    };

export default DevShopContent;
