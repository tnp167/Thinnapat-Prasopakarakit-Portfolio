"use client";

import React from "react";
import { easeIn, motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="w-full h-full relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.25, duration: 0.3, ease: easeIn }}
      >
        <motion.div className="w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] mix-blend-lighten absolute">
          <Image
            src="/assets/photo.jpeg"
            priority
            quality={100}
            fill
            alt="photo"
            className="object-contain"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Photo;
