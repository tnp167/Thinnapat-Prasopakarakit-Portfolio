import Photo from "@/components/Home/Photo";
import { Socials } from "@/components/Home/Socials";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export default function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xL:order-1">
            <h1 className="text-[48px] xl:text-[80px] leading-[1.1] font-semibold text-primary mb-6">
              Thinnapat Prasopakarakit
            </h1>
            <p className="max-w-[500px] mb-9 text-white">
              Electronic and Computer Engineering graduate transitioning into
              web development. Passionate about building responsive,
              user-friendly web applications
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-6">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
              >
                <span>Download CV</span>
                <Download />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Socials />
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-2 mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
    </section>
  );
}
