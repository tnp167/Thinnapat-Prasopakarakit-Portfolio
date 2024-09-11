"use client";

import Link from "next/link";
import React from "react";
import Nav from "./Nav";
import { Button } from "../ui/button";
import MobileNav from "./MobileNav";

const links = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Projects",
    path: "/projects",
  },

  {
    name: "CV",
    path: "/cv",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <h1 className="text-4xl font-semibold">TNP</h1>
        </Link>

        <div className="hidden xl:flex items-center gap-8">
          <Nav links={links} />
          <Link href="/contact">
            <Button>Hire me</Button>
          </Link>
        </div>

        <div className="xl:hidden">
          <MobileNav links={links} />
        </div>
      </div>
    </header>
  );
};

export default Header;
