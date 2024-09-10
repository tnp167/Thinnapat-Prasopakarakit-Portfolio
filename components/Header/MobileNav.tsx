"use client";

import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import Link from "next/link";

type linkProps = {
  name: string;
  path: string;
};
const MobileNav = ({ links }: { links: linkProps[] }) => {
  const pathName = usePathname();
  return (
    <Sheet>
      <SheetTrigger>
        <Menu size={32} className="text-primary" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <div className="my-40 text-center text-2xl">
          <Link href="/">
            <h1 className="text-3xl font-semibold">TNP</h1>
          </Link>
        </div>
        <nav className="flex flex-col items-center gap-6">
          {links?.map((link, index) => {
            return (
              <Link
                href={link.path}
                key={index}
                className={`${
                  link.path === pathName &&
                  "text-primary border-b-2 border-primary hover:text-primary transition-all"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
