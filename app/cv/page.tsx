"use client";

import React from "react";
import { Languages, Mail, MapPin, Phone, User } from "lucide-react";
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
  title: "My Experience",
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

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import Skills from "@/components/CV/Skills";
import Education from "@/components/CV/Education";
import Experience from "@/components/CV/Experience";
import Certificates from "@/components/CV/Certificates";

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
            <TabsTrigger value="certificates">Certificates</TabsTrigger>
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
              <Experience />
            </TabsContent>
            <TabsContent value="education" className="w-full">
              <Education />
            </TabsContent>
            <TabsContent value="skills" className="w-full mb-5">
              <Skills />
            </TabsContent>
            <TabsContent value="certificates" className="w-full">
              <Certificates />
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default cv;
