"use client";

import { cn } from "@/lib/utils";
import React, { useState } from "react";
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
} from "react-icons/si";
const skills = {
  title: "My skills",
  items: [
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
      icon: <SiReact />,
      name: "React.js",
      color: "group-hover:text-[#61DAFB]",
      bg: "group-hover:bg-[#61DAFB]",
    },
    {
      icon: <SiTypescript />,
      name: "Typescript",
      color: "group-hover:text-[#3178C6]",
      bg: "group-hover:bg-[#3178C6]",
    },
    {
      icon: <SiPostgresql />,
      name: "PostgreSQL",
      color: "group-hover:text-[#4169E1]",
      bg: "group-hover:bg-[#4169E1]",
    },
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
    {
      icon: <SiKnexdotjs />,
      name: "Knex.js",
      color: "group-hover:text-[#D26B38]",
      bg: "group-hover:bg-[#D26B38]",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next.js",
      color: "group-hover:text-[#FFFFFF]",
      bg: "group-hover:bg-[#FFFFFF]",
    },
  ],
  frontend: [
    {
      icon: <SiHtml5 />,
      name: "HTML 5",
      color: "#E34F26",
    },
    {
      icon: <SiCss3 />,
      name: "CSS 3",
      color: "#1572B6",
    },
    {
      icon: <SiJavascript />,
      name: "Javascript",
      color: "#F7DF1E",
    },
    {
      icon: <SiTypescript />,
      name: "Typescript",
      color: "#3178C6",
    },
    {
      icon: <SiReact />,
      name: "React.js",
      color: "#61DAFB",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind CSS",
      color: "#06B6D4",
    },
    {
      icon: <SiSass />,
      name: "Sass",
      color: "#CC6699",
    },
  ],
  backend: [
    {
      icon: <SiNodedotjs />,
      name: "Node.js",
      color: "#5FA04E",
    },
    {
      icon: <SiExpress />,
      name: "Express",
      color: "#000000",
    },
    {
      icon: <SiKnexdotjs />,
      name: "Knex.js",
      color: "#D26B38",
    },
    {
      icon: <SiDrizzle />,
      name: "Drizzle ORM",
      color: "#C5F74F",
    },
  ],
  fullstack: [
    {
      icon: <SiNextdotjs />,
      name: "Next.js",
      color: "#000000",
    },
  ],
};
const Skills = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const handleFlip = (index: number): void => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-col gap-[30px] text-center xl:text-left">
        <h3 className="text-4xl font-bold">{skills.title}</h3>

        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[20px]">
          {skills.items.map((skill, index) => {
            return (
              <li key={index} className="relative w-full h-[150px] group">
                <div
                  className={`absolute inset-0 blur rounded-lg transition-colors duration-300 ${skill.bg}`}
                ></div>
                <div
                  style={{
                    transformStyle: "preserve-3d",
                    transition: "transform 0.5s",
                  }}
                  onClick={() => handleFlip(index)}
                  className={cn(
                    "relative bg-black w-full h-full rounded-xl flex justify-center items-center transition-transform",
                    activeIndex === index ? "[transform:rotateY(180deg)]" : ""
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
                    className={`absolute inset-0 flex justify-center items-center text-xl [transform:rotateY(180deg)] backface-hidden ${skill.color} transition-all duration-300`}
                  >
                    {skill.name}
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Skills;
