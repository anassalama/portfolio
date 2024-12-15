"use client";

import { FaJs, FaReact, FaNodeJs, FaHtml5, FaCss3 } from "@/node_modules/react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiWordpress,
  SiDocker,
} from "react-icons/si";
import { motion } from "framer-motion";

// components
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

// about data
const about = {
  title: "About me",
  description:
    "Driven by curiosity and perseverance, I am passionate about developing intuitive software that brings value to the world. I believe in the power of technology to bridge gaps, spark positive change, and empower users to achieve their goals.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Anass Salama",
    },
    {
      fieldName: "Experience",
      fieldValue: "3+ Years",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+212) 642 745 672",
    },

    {
      fieldName: "Email",
      fieldValue: "anassalama10349@gmail.com",
    },
    {
      fieldName: "Location",
      fieldValue: "Rabat, Morocco",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, French",
    },
  ],
};

// skills data
const skills = {
  title: "My skills",
  description:
    "Adept in the JavaScript ecosystem, I work with modern frameworks and tools to build fast and visually engaging web applications that deliver seamless user experiences.",
  skillList: [
    {
      icon: <FaJs />,
      name: "JavaScript",
    },
    {
      icon: <FaReact />,
      name: "React.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "TailwindCSS",
    },
    {
      icon: <FaNodeJs />,
      name: "Node.js",
    },
    {
      icon: <FaHtml5 />,
      name: "Html5",
    },
    {
      icon: <FaCss3 />,
      name: "CSS3",
    },
    {
      icon: <SiWordpress />,
      name: "Wordpress",
    },
  ],
};

// experience data
const experience = {
  icon: "/assets/about/badge.svg",
  title: "My experience",
  description:
    "Proficient in frontend and backend technologies, working effectively with cross-functional teams and stakeholders.",
  items: [
    {
      position: "Built a full-stack web application.",
      duration: "2024",
      description: "Bootcamp Project",
    },
    {
      position: "Contributed to an open-source project.",
      duration: "2024",
      description: "Grammerhub",
    },
    {
      position: "Implemented a portfolio website.",
      duration: "2023",
      description: "Personal Project",
    },
    {
      position: "Developed a small business website.",
      duration: "2023",
      description: "Freelance",
    },
  ],
};

// education data
const education = {
  icon: "/assets/about/cap.svg",
  title: "My education",
  description:
    "Solid academic foundation in computer science, enhanced by specialized certifications.",
  items: [
    {
      institution: "Science University kénitra",
      degree: "Bachelor degree in Web and Mobile Development",
      duration: "2020",
    },
    {
      institution: "ISTA (Morocco)",
      degree: " IT Development Technician Diploma",
      duration: "2017 - 2019",
    },
  ],
};

const About = () => {
  return (
    <motion.div
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-6 xl:items-start"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="about"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="about">About</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="w-full min-h-[25vh]">
            {/* about */}
            <TabsContent value="about" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <div className="flex flex-col gap-4">
                  <h2 className="h2">{about.title}</h2>
                  <p className="p">{about.description}</p>
                </div>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-[30px]">
                    {about.info.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-secondary h-[100px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start"
                        >
                          <span className="text-accent uppercase">
                            {item.fieldName}
                          </span>
                          <h3 className="text-xl text-center lg:text-left">
                            {item.fieldValue}
                          </h3>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* skills */}
            <TabsContent value="skills" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <div className="flex flex-col gap-4">
                  <h2 className="h2">{skills.title}</h2>
                  <p className="p">{skills.description}</p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-secondary rounded-xl flex flex-col justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                              {/* Display the skill name directly on smaller screens */}
                              <p className="text-sm mt-2 xl:hidden group-hover:text-accent transition-all duration-300">
                                {skill.name}
                              </p>
                            </TooltipTrigger>
                            {/* Tooltip content only visible on xl screens and larger */}
                            <TooltipContent className="hidden xl:block">
                              <p>{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <div className="flex flex-col gap-4">
                  <h2 className="h2">{experience.title}</h2>
                  <p className="p">{experience.description}</p>
                </div>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-secondary h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.description}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <div className="flex flex-col gap-4">
                  <h2 className="h2">{education.title}</h2>
                  <p className="p">{education.description}</p>
                </div>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-secondary h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default About;
