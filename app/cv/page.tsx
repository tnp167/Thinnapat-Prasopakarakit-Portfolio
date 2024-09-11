"use client";

import React from "react";
import { GraduationCap } from "lucide-react";
import { FaCss3, FaHtml5, FaJs, FaReact } from "react-icons/fa";
import { Badge } from "@/components/ui/badge";

const about = {
  title: "About me",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi deleniti tempore distinctio autem inventore aliquid iure ipsam necessitatibus assumenda praesentium eos a, iusto reprehenderit vel minima sint perspiciatis sit quaerat?",

  info: [
    {
      fieldName: "Name",
      fieldValue: "Thinnapat Prasopakarakit",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+44) 7498555482",
    },
    {
      fieldName: "Email",
      fieldValue: "tnp_167@outlook.com",
    },
    {
      fieldName: "Location",
      fieldValue: "London, United Kingdom",
    },
    {
      fieldName: "Language",
      fieldValue: "English, Thai",
    },
  ],
};

const experience = {
  title: "My experience",
  items: [
    {
      event: "14th Thailand Olympiad in Informatics programming contest",
      role: "Participant",
      date: "June 2018",
      description: [
        "A national programming contest (C,C++)",
        "To be eligible for the contest, contestants had to successfully pass through the two-round selection camps",
        "Thrived in coding under pressure and develop a solid understanding of C and C++",
      ],
    },
    {
      event: "HackNotts 23",
      role: "Volunteer",
      date: "February 2023",
      description: [
        "An annual hackathon event held at University of Nottingham",
        "Collaborated with organizers to efficiently oversee and manage event operation.",
        "Contributed to a successful and well-executed event./",
      ],
    },
  ],
};

const education = {
  icon: <GraduationCap />,
  title: "My education",
  items: [
    {
      institution: "Brainstation",
      degree: "Diploma in Software Engineering",
      duration: "Jan 2024 - Apr 2024",
    },
    {
      institution: "University of Nottingham",
      degree: "Bachelors in Electronic and Computer Engineering",
      duration: "Sep 2021 - Jun 2023",
    },
    {
      institution: "Thammasat University",
      degree: "Bachelors in Electrical Engineering",
      duration: "Aug 2019 - Jun 2021",
    },
  ],
};

const skills = {
  icon: <GraduationCap />,
  title: "My skills",
  items: [
    {
      icon: <FaHtml5 />,
      name: "HTML 5",
    },
    {
      icon: <FaCss3 />,
      name: "CSS 3",
    },
    {
      icon: <FaJs />,
      name: "Javascript",
    },
    {
      icon: <FaReact />,
      name: "React.js",
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import { Description } from "@radix-ui/react-dialog";

const cv = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[400px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-2xl font-bold mb-7">{experience.title}</h3>
              </div>
              <ScrollArea className="h-[400px]">
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                  {experience.items.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="bg-[#232329] h-[400px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                      >
                        <span className="text-left text-primary text-[22px]">
                          {item.date}
                        </span>
                        <div className="flex flex-row lg:flex-col items-start justify-between w-full my-4">
                          <h3 className="text-xl max-w-[300px] h-[60px] text-left order-2 lg:order-1">
                            {item.event}
                          </h3>
                          <Badge
                            variant="default"
                            className="lg:mt-2 lg:mb-3 order-2 lg:order-1"
                          >
                            {item.role}
                          </Badge>
                        </div>

                        {item.description.map((detail, index) => {
                          return (
                            <div className="w-full flex items-start gap-3">
                              <span className="w-[6px] h-[6px] rounded-full bg-primary mt-2.5"></span>
                              <p className="text-white/60">{detail}</p>
                            </div>
                          );
                        })}
                      </li>
                    );
                  })}
                </ul>
              </ScrollArea>
            </TabsContent>
            <TabsContent value="education" className="w-full">
              education
            </TabsContent>
            <TabsContent value="skills" className="w-full">
              skills
            </TabsContent>
            <TabsContent value="about" className="w-full">
              about
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default cv;
