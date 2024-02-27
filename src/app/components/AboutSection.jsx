"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import AboutPoint from "./AboutPoints";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Node.js</li>
        <li>Express</li>
        <li>PostgreSQL</li>
        <li>Sequelize</li>
        <li>JavaScript</li>
        <li>React</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Fullstack Academy of Code</li>
        <li>University of California, Santa Cruz</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>AWS Cloud Practitioner</li>
        <li>Google Professional Cloud Developer</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white py-20" id="about">
  <div className="container mx-auto px-4">
    <h1 className="text-4xl sm:text-5xl lg:text-6xl lg:leading-normal font-light">
      Why Choose Us?
    </h1>
    <div className="md:grid md:grid-cols-2 gap-8 xl:gap-16">
      <div>
        <Image src="/images/about.gif" width={500} height={250} />
      </div>
      <div className="flex flex-col justify-center">
        <AboutPoint />
      </div>
    </div>
  </div>
</section>

  );
};

export default AboutSection;
