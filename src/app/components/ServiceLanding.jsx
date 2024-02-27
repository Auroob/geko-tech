"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const ServiceLanding = () => {
  return (
    <section className="flex items-left justify-start py-20">
        <div className="grid grid-cols-1 grid-rows-2 gap-4">
        <div>
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl lg:leading-normal font-medium">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
            Geko Services {" "}
            </span>
            <br></br>
          </h1>
      </div>
      <div>
      <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl lg:leading-normal font-medium">
          <TypeAnimation
              sequence={[
                "Recruitment Solutions",
                1000,
                "Staff Augmentation",
                1000,
                "Dev shop for Tech Projects",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
      </div>
      <h5 className="text-geko-grey font-light mt-20">Each package across the different service verticals is tailored to offer varying levels of involvement and support, allowing clients to choose the option that best suits their needs. From strategic consultation in Staff Augmentation to full-scale project execution in Dev Shop, each service is designed to provide distinct value and cater to specific requirements. The matrix offers a clear comparison, helping clients understand the unique features and benefits at each tier. By structuring the services this way, your company can effectively communicate the scope and depth of its offerings, ensuring that clients can easily identify the solution that aligns with their needs, whether it's in recruitment, staff augmentation, or tech project development. This approach emphasizes your expertise in each area while providing flexibility and tailored solutions to your clients.</h5>
        </div>
    </section>
  );
};

export default ServiceLanding;
