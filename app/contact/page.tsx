"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "+44 7498555482",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "tnp_167@outlook.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Islington, London, UK",
  },
];

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* Form */}
          <Card className="xl:w-[50%] order-2 xl:order-none ">
            <form className="flex flex-col gap-6 p-10 bg-cardrounded-xl">
              <h3 className="text-4xl text-primary">Contact me</h3>
              {/* Input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="firstname" placeholder="First Name" />
                <Input type="lastname" placeholder="Last Name" />
                <Input type="email" placeholder="Email" />
                <Input type="phone" placeholder="Phone Number" />
              </div>
              {/* Textarea */}
              <Textarea className="h-[200px]" placeholder="Message" />
              {/* Button */}
              <Button size="md" className="max-w-40">
                Send Message
              </Button>
            </form>
          </Card>
          {/* Info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="size-[52px] xl:size-[72px] bg-card text-primary rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
