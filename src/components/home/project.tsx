"use client";

import { projects } from "@/data/projects";
import { useState } from "react";
import { TbMichelinStar } from "react-icons/tb";
import { TfiAngleDown, TfiArrowTopRight } from "react-icons/tfi";

const Project = () => {
  const [activeCard, setActiveCard] = useState(Number);

  const handleCardClick = (index: number) => {
    setActiveCard(index);
  };

  return (
    <div className="w-full bg-black text-white px-10 pb-20">
      <div className="flex justify-between items-center gap-10 px-20 py-20 border-b-[0.5px] border-b-white">
        <div className="uppercase text-6xl font-bold w-1/2">
          {/* The Cool Stuff I’ve Built */}
          Discover the Cool Projects I&apos;ve Crafted
        </div>
        <div className="text-xl w-1/2 flex flex-col gap-5 h-full">
          <div>
            Are you interested in exploring the details of all the projects
            I&apos;ve worked on and discovering the various aspects of each one?
          </div>
          <div className="flex items-center text-2xl gap-4">
            <div className="border-b border-b-white">All Projects</div>
            <div className="rounded-full border border-white p-3 text-center">
              <TfiArrowTopRight className="pr-1 pt-1 text-2xl" />
            </div>
          </div>
        </div>
      </div>
      <div>
        {projects.map((project, index) => (
          <div
            key={index}
            onClick={() => handleCardClick(index)}
            className={`px-20 py-7 border-b-[0.5px] border-b-white flex flex-col ${
              activeCard === index ? "active" : ""
            }`}
          >
            <div className="flex items-center gap-5 justify-between">
              <div className="flex items-center gap-5">
                <TbMichelinStar className="text-3xl" />

                <div className="text-4xl">{project.name}</div>
              </div>
              <TfiAngleDown className="text-2xl" />
              {/* <TfiAngleUp /> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
