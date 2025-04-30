"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Image from "next/image";
import type { Swiper as SwiperType } from "swiper";
import WorksliderBtns from "@/components/Projects/WorkSliderBtns";
const projects = [
  {
    num: "01",
    title: "project1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
    stack: [{ name: "React.js" }, { name: "Express.js" }, { name: "SCSS" }],
    image: "/assets/projects/project1.png",
    live: "",
    github: "",
  },
  {
    num: "02",
    title: "project2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
    stack: [
      { name: "Next.js" },
      { name: "Tailwind CSS" },
      { name: "TypeScript" },
    ],
    image: "/assets/projects/project2.png",
    live: "",
    github: "",
  },
  {
    num: "03",
    title: "project3",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
    stack: [{ name: "React.js" }, { name: "Express.js" }, { name: "SCSS" }],
    image: "/assets/projects/project3.png",
    live: "",
    github: "",
  },
];
const Projects = () => {
  const [project, setProject] = useState(projects[0]);
  const handleSlideChange = (swiper: SwiperType) => {
    const currentIndex = swiper.realIndex;
    setProject(projects[currentIndex]);
  };
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.2 } }}
      className="min-h-[80vh] flex flex-col justify-center py-10 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[500px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* Project Number */}
              <div className="text-8xl leading-none font-extrabold text-white text-outline">
                {project.num}
              </div>
              {/* Project description */}
              <p className="text-white/60">{project.description}</p>
              {/* Stack */}
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-primary">
                      {item.name}
                      {index !== project.stack.length - 1 && ", "}
                    </li>
                  );
                })}
              </ul>
              {/* Border */}
              <div className="border border-white/20" />
              {/* buttons */}
              <div className="flex items-center gap-4">
                {/* Live project */}
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="size-[70px] rounded-full bg-white/10 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-primary" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* Github Repository */}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="size-[70px] rounded-full bg-white/10 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-primary" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github Repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>

            <div className="w-full xl:w-[50%]"></div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              loop={true}
              className="xl:h-[500px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[500px] relative group flex justify-center items-center bg-pink-50/20">
                      {/* Overlay */}
                      <div className="absolute top-0 bottom-0 size-full bg-black/10 z-10" />
                      {/* Image */}
                      <div className="relative w-full h-full inset-0">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/* Slider Buttons */}
              <WorksliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%-22px)] xl:bottom-0 z-10 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-primary hover:bg-primary-hover text-primary text-[20px] size-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
