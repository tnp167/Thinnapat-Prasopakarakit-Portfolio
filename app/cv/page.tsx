"use client";

import React from "react";
import {
  GraduationCap,
  Languages,
  Mail,
  MapPin,
  Phone,
  User,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

const about = {
  title: "About me",
  description:
    "I have a background in Electronic and Computer Engineering with a solid foundation in C, C++, Java, and Python. I am currently transitioning my career into software engineering, with a focus on becoming a full-stack web developer",
  info: [
    {
      icon: <User />,
      fieldName: "Name",
      fieldValue: "Thinnapat Prasopakarakit",
    },
    {
      icon: <Phone />,
      fieldName: "Phone",
      fieldValue: "(+44) 7498555482",
    },
    {
      icon: <Mail />,
      fieldName: "Email",
      fieldValue: "tnp_167@outlook.com",
    },
    {
      icon: <MapPin />,
      fieldName: "Location",
      fieldValue: "London, United Kingdom",
    },
    {
      icon: <Languages />,
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
import Skills from "@/components/CV/Skills";

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
          defaultValue="about"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[400px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="about">About me</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
          </TabsList>

          <div className="min-h-[70vh] w-full">
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[700px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 xl:gap-x-2 max-w-[700px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <div className="flex gap-2 items-center">
                          <span className="w-6 h-6 inline-flex items-center justify-center text-white/60">
                            {item.icon}
                          </span>
                          <span className="text-white/60 ">
                            {item.fieldName}:
                          </span>
                        </div>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
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
                        className="bg-[#232329] h-[300px] lg:h-[400px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                      >
                        <span className="text-left text-primary text-[22px]">
                          {item.date}
                        </span>
                        <div className="flex flex-row lg:flex-col items-start justify-between w-full my-4">
                          <h3 className="text-xl max-w-[300px] lg:h-[60px] text-left order-2 lg:order-1">
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
            <TabsContent value="skills" className="w-full mb-5">
              <Skills />
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default cv;
