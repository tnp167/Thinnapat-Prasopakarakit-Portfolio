"use client";

import React from "react";
import Image from "next/image";
import CLF from "@/assets/badges/aws-clf.png";
import SAA from "@/assets/badges/aws-saa.png";
import DVA from "@/assets/badges/aws-dva.png";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";

const Certificates = () => {
  return (
    <TooltipProvider>
      <div className="relative h-[300px] w-full">
        {/* CLF Certificate */}
        <Tooltip>
          <div className="absolute left-1/2 -translate-x-1/2">
            <TooltipTrigger asChild>
              <Link
                href="https://www.credly.com/badges/233d8618-478d-4fbe-a1fd-d803559eaf10/public_url"
                target="_blank"
              >
                <Image
                  src={CLF}
                  alt="AWS Cloud Foundations Certificate"
                  width={225}
                  height={225}
                  className="cursor-pointer transition ease-in-out duration-300 hover:scale-110"
                />
              </Link>
            </TooltipTrigger>
            <TooltipContent
              side="top"
              align="center"
              className="bg-gray-900 text-white"
            >
              <p>View AWS Cloud Practioner Foundational Certificate</p>
            </TooltipContent>
          </div>
        </Tooltip>

        {/* SAA Certificate */}
        <Tooltip>
          <div className="absolute left-1/2 -translate-x-[100%] translate-y-[80%]">
            <TooltipTrigger asChild>
              <Link
                href="https://www.credly.com/badges/b8243123-1b92-4d09-8bb1-6c7822ed50f5/public_url"
                target="_blank"
              >
                <Image
                  src={SAA}
                  alt="AWS Solutions Architect Associate Certificate"
                  width={225}
                  height={225}
                  className="cursor-pointer transition ease-in-out duration-300 hover:scale-110"
                />
              </Link>
            </TooltipTrigger>
            <TooltipContent
              side="bottom"
              align="center"
              className="bg-blue-800 text-white"
            >
              <p>View AWS Solutions Architect Associate Certificate</p>
            </TooltipContent>
          </div>
        </Tooltip>

        {/* DVA Certificate */}
        <Tooltip>
          <div className="absolute left-1/2 translate-y-[80%]">
            <TooltipTrigger asChild>
              <Link
                href="https://www.credly.com/badges/b61595a3-d097-405f-9022-934d53a2a0ed/public_url"
                target="_blank"
              >
                <Image
                  src={DVA}
                  alt="AWS Developer Associate Certificate"
                  width={225}
                  height={225}
                  className="cursor-pointer transition ease-in-out duration-300 hover:scale-110"
                />
              </Link>
            </TooltipTrigger>
            <TooltipContent
              side="bottom"
              align="center"
              className="bg-blue-800 text-white"
            >
              <p>View AWS Developer Associate Certificate</p>
            </TooltipContent>
          </div>
        </Tooltip>
      </div>
    </TooltipProvider>
  );
};

export default Certificates;
