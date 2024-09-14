"use client";
import { FaGraduationCap } from "react-icons/fa";
import React from "react";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "../ui/badge";
import { Separator } from "@/components/ui/separator";

const education = {
  icon: <FaGraduationCap />,
  title: "My education",
  items: [
    {
      institution: "Brainstation",
      degree: "Diploma in Software Engineering",
      duration: "January 2024 - April 2024",
      logo: "/assets/logos/Brainstation.png",
    },
    {
      institution: "University of Nottingham",
      degree: "Bachelors in Electronic and Computer Engineering",
      honours: "First Class Honours",
      duration: "September 2021 - June 2023",
      logo: "/assets/logos/UoN.jpeg",
    },
    {
      institution: "Thammasat University",
      degree: "Bachelors in Electrical Engineering",
      duration: "August 2019 - June 2021",
      logo: "/assets/logos/Thammasat.png",
    },
  ],
};
const Education = () => {
  return (
    <div className="flex flex-col gap-[30px] text-center xl:text-left">
      <h1 className="text-3xl font-bold mb-7 flex items-center gap-6 ">
        {education.title} <span className="text-3xl">{education.icon}</span>
      </h1>
      {education.items.map((item, index) => {
        return (
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="flex flex-col md:flex-row md:justify-between md:items-center gap-8 md:gap-0">
                  <div className="flex flex-col items-center md:flex-row gap-3 md:gap-[40px]">
                    <Image
                      src={item.logo}
                      width={60}
                      height={60}
                      alt={item.institution}
                    />
                    <h1 className="text-lg md:text-xl">{item.institution}</h1>
                  </div>
                  <p className="text-primary">{item.duration}</p>
                </CardTitle>
              </CardHeader>
              <Separator />

              <CardContent className="py-7 md:py-5 md:my-5 xl:text-center">
                <p className="text-md md:text-lg">
                  {item.degree}
                  <span className="ml-4">
                    {item.honours && (
                      <Badge className="text-md md:text-base text-[#0019A8] bg-[#FFD700] hover:bg-[#FFE140]">
                        {item.honours}
                      </Badge>
                    )}
                  </span>
                </p>
              </CardContent>
            </Card>
          </div>
        );
      })}
    </div>
  );
};

export default Education;
