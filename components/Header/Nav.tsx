"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { ModeToggle } from "./Theme";

type linkProps = {
  name: string;
  path: string;
};

const Nav = ({ links }: { links: linkProps[] }) => {
  const pathName = usePathname();
  return (
    <nav className="flex gap-6 ">
      {links?.map((link, index) => {
        return (
          <Link
            href={link.path}
            key={index}
            className={`${
              link.path === pathName && "text-primary border-b-2 border-primary"
            }  font-medium hover:text-accent transition-all
            `}
          >
            {link.name}
          </Link>
        );
      })}
      <ModeToggle />
    </nav>
  );
};

export default Nav;
