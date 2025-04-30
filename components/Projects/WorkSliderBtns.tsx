"use client";

import { useSwiper } from "swiper/react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";
import React from "react";

interface WorksliderBtnsProps {
  containerStyles: string;
  btnStyles: string;
}
const WorksliderBtns = ({
  containerStyles,
  btnStyles,
}: WorksliderBtnsProps) => {
  const swiper = useSwiper();
  return (
    <div className={containerStyles}>
      <button className={btnStyles} onClick={() => swiper.slidePrev()}>
        <PiCaretLeftBold className="text-white text-xl" />
      </button>
      <button className={btnStyles} onClick={() => swiper.slideNext()}>
        <PiCaretRightBold className="text-white text-xl" />
      </button>
    </div>
  );
};

export default WorksliderBtns;
