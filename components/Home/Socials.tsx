"use client";

import { SiGithub, SiLinkedin } from "react-icons/si";
import React from "react";
import Link from "next/link";

const socials = [
  { icon: <SiGithub />, path: "", name: "github" },
  { icon: <SiLinkedin />, path: "", name: "linkedin" },
];
export const Socials = () => {
  return (
    <div className="flex gap-6">
      {socials.map((social, index) => {
        return (
          <Link
            key={index}
            href={social.path}
            className="w-9 h-9 border border-primary rounded-full flex 
            justify-center items-center text-primary text-md 
            hover:bg-primary hover:text-foreground hover:transition-all duration-500"
          >
            {social.icon}
          </Link>
        );
      })}
    </div>
  );
};
