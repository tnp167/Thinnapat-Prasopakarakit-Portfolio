import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "../ui/badge";
import { MapPin, Building } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
const experience = {
  title: "My Experience",
  items: [
    {
      company: "Hybytes LTD",
      position: "Front-End Developer Intern",
      duration: "October 2024 - April 2025",
      description: [
        "Developed a web application using Next.js as the main framework.",
        "Collaborated closely with the UX/UI team via Figma to translate designs into functional user interfaces",
        "Gained hands-on experience with HTML, CSS, and React.js for responsive, user-friendly design",
        "Learned and applied AWS fundamentals to understand cloud deployment and scalability principles",
      ],
      location: "London, UK",
    },
  ],
};

const Experience = () => {
  return (
    <>
      <div className="flex flex-col gap-[30px] text-center xl:text-left">
        <h3 className="text-3xl font-bold mb-7">{experience.title}</h3>
      </div>
      <ScrollArea className="h-[500px]">
        <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
          {experience.items.map((item, index) => (
            <Card
              key={index}
              className="min-h-[200px] py-6 px-10 flex flex-col justify-center items-center lg:items-start gap-1 text-white rounded-xl"
            >
              <CardHeader className="p-0">
                <Badge className="w-fit bg-primary text-primary-foreground">
                  {item.duration}
                </Badge>
                <CardTitle className="text-xl max-w-[300px] min-h-[60px] text-center lg:text-left">
                  {item.position}
                </CardTitle>{" "}
              </CardHeader>
              <CardContent className="p-0 mb-7">
                <CardDescription className="text-white/60">
                  {item.description.map((description, index) => (
                    <div key={index} className="relative pl-4">
                      <span className="absolute left-0 top-2 size-[6px] rounded-full bg-primary"></span>
                      <p className="text-sm leading-relaxed">{description}</p>
                    </div>
                  ))}
                </CardDescription>
              </CardContent>
              <CardFooter className="p-0">
                <div className="flex items-center gap-3">
                  <Building className="text-white/80" />
                  <p className="text-white/60">{item.company}</p>
                  <MapPin className="text-white/80" />
                  <p className="text-white/60">{item.location}</p>
                </div>
              </CardFooter>
            </Card>
          ))}
        </ul>
      </ScrollArea>
    </>
  );
};

export default Experience;
