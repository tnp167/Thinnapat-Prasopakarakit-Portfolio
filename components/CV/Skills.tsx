"use client";

import { cn } from "@/lib/utils";
import React, { useState } from "react";
import { FaJava } from "react-icons/fa";
import {
  SiTypescript,
  SiPostgresql,
  SiNodedotjs,
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiReact,
  SiExpress,
  SiTailwindcss,
  SiSass,
  SiKnexdotjs,
  SiNextdotjs,
  SiDrizzle,
  SiAdobephotoshop,
  SiCplusplus,
  SiPython,
  SiC,
} from "react-icons/si";
const skills = {
  title: "My skills",
  items: [
    {
      "front-end": [
        {
          icon: <SiHtml5 />,
          name: "HTML 5",
          color: "group-hover:text-[#E34F26]",
          bg: "group-hover:bg-[#E34F26]",
        },
        {
          icon: <SiCss3 />,
          name: "CSS 3",
          color: "group-hover:text-[#1572B6]",
          bg: "group-hover:bg-[#1572B6]",
        },
        {
          icon: <SiJavascript />,
          name: "Javascript",
          color: "group-hover:text-[#F7DF1E]",
          bg: "group-hover:bg-[#F7DF1E]",
        },
        {
          icon: <SiTypescript />,
          name: "Typescript",
          color: "group-hover:text-[#3178C6]",
          bg: "group-hover:bg-[#3178C6]",
        },
        {
          icon: <SiReact />,
          name: "React.js",
          color: "group-hover:text-[#61DAFB]",
          bg: "group-hover:bg-[#61DAFB]",
        },
        {
          icon: <SiTailwindcss />,
          name: "Tailwind CSS",
          color: "group-hover:text-[#06B6D4]",
          bg: "group-hover:bg-[#06B6D4]",
        },
        {
          icon: <SiSass />,
          name: "Sass",
          color: "group-hover:text-[#CC6699]",
          bg: "group-hover:bg-[#CC6699]",
        },
      ],
    },
    {
      "back-end": [
        {
          icon: <SiNodedotjs />,
          name: "Node.js",
          color: "group-hover:text-[#5FA04E]",
          bg: "group-hover:bg-[#5FA04E]",
        },
        {
          icon: <SiExpress />,
          name: "Express",
          color: "group-hover:text-[#FFFFFF]",
          bg: "group-hover:bg-[#FFFFFF]",
        },
        {
          icon: <SiPostgresql />,
          name: "PostgreSQL",
          color: "group-hover:text-[#31A8FF]",
          bg: "group-hover:bg-[#31A8FF]",
        },
        {
          icon: <SiKnexdotjs />,
          name: "Knex.js",
          color: "group-hover:text-[#D26B38]",
          bg: "group-hover:bg-[#D26B38]",
        },
        {
          icon: <SiDrizzle />,
          name: "Drizzle ORM",
          color: "group-hover:text-[#C5F74F]",
          bg: "group-hover:bg-[#C5F74F]",
        },
      ],
    },
    {
      "full stack": [
        {
          icon: <SiNextdotjs />,
          name: "Next.js",
          color: "group-hover:text-[#FFFFFF]",
          bg: "group-hover:bg-[#FFFFFF]",
        },
      ],
    },
    {
      "programming languages": [
        {
          icon: <SiC />,
          name: "C",
          color: "group-hover:text-[#A8B9CC]",
          bg: "group-hover:bg-[#A8B9CC]",
        },
        {
          icon: <SiCplusplus />,
          name: "C++",
          color: "group-hover:text-[#00599C]",
          bg: "group-hover:bg-[#00599C]",
        },
        {
          icon: <FaJava />,
          name: "Java",
          color: "group-hover:text-[#f89820]",
          bg: "group-hover:bg-[#f89820]",
        },
        {
          icon: <SiPython />,
          name: "Python",
          color: "group-hover:text-[#3776AB]",
          bg: "group-hover:bg-[#3776AB]",
        },
      ],
    },
    {
      design: [
        {
          icon: <SiAdobephotoshop />,
          name: "Adobe Photoshop",
          color: "group-hover:text-[#31A8FF]",
          bg: "group-hover:bg-[#31A8FF]",
        },
      ],
    },
  ],
};
const Skills = () => {
  const [activeIndices, setActiveIndices] = useState({
    "front-end": null,
    "back-end": null,
    "full stack": null,
    design: null,
    "programming languages": null,
  });
  const handleFlip = (category: keyof typeof activeIndices, index: number) => {
    setActiveIndices((prevIndices) => ({
      ...prevIndices,
      [category]: prevIndices[category] === index ? null : index,
    }));
  };
  return (
    <div className="flex flex-col gap-10">
      {skills.items.map((category, categoryIndex) => {
        const categoryName = Object.keys(category)[0] as keyof typeof category;
        const categorySkills = category[categoryName];

        return (
          <div
            key={categoryIndex}
            className="flex flex-col gap-2 text-center xl:text-left"
          >
            <h3 className="text-3xl font-bold capitalize mb-3 text-primary">
              {categoryName}
            </h3>
            <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[20px]">
              {categorySkills!.map((skill, index) => {
                return (
                  <li key={index} className="relative w-full h-[150px] group">
                    <div
                      className={`absolute inset-0 blur rounded-lg transition-colors duration-300 ${skill.bg}`}
                    ></div>

                    <div
                      style={{
                        transformStyle: "preserve-3d",
                        transition: "transform 0.6s",
                      }}
                      onClick={() => handleFlip(categoryName, index)}
                      className={cn(
                        "relative bg-black w-full h-full rounded-xl flex justify-center items-center transition-transform",
                        activeIndices[categoryName] === index
                          ? "[transform:rotateY(180deg)]"
                          : ""
                      )}
                    >
                      <div
                        style={{ backfaceVisibility: "hidden" }}
                        className={` absolute inset-0 flex justify-center items-center text-6xl backface-hidden transition-all duration-300 ${skill.color}`}
                      >
                        {skill.icon}
                      </div>

                      <div
                        style={{
                          backfaceVisibility: "hidden",
                        }}
                        className={`absolute inset-0 flex justify-center items-center text-2xl text-center [transform:rotateY(180deg)] backface-hidden ${skill.color} transition-all duration-300`}
                      >
                        {skill.name}
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default Skills;
