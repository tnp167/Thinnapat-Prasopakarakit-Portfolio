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
    title: "Mind the Map",
    description:
      "Mind the Map is your travel companion for London! Whether you're a visitor or resident, easily plan the route, find nearby restaurants and toilets. Plus, stay updated on tube and national rail statuses for smooth travels.",
    stack: [
      { name: "React.js" },
      { name: "Express.js" },
      { name: "JavaScript" },
    ],
    image: "/assets/projects/project01.png",
    live: "https://www.mind-the-map.london/",
    github: "https://github.com/tnp167/mind-the-map",
  },
  {
    num: "02",
    title: "Sprout Scribble",
    description:
      "An e-commerce webiste. Users can browse products, add items to their cart, and complete purchases through a secure payment gateway. The platform also includes an admin dashboard where administrators can view detailed analytics, manage inventory, and oversee product listings",
    stack: [
      { name: "Next.js" },
      { name: "Tailwind CSS" },
      { name: "TypeScript" },
    ],
    image: "/assets/projects/project02.png",
    live: "https://www.sprout-scribble-tutorial.store/",
    github: "https://github.com/tnp167/sprout-scribble-tutorial",
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
              {/* Project title */}
              <h2 className="text-[40px] font-bold text-white leading-none group-hover:text-primary transition-all duration-500 capitalize">
                {project.title}
              </h2>
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
