"use client";

import { useRef, useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import Swal from "sweetalert2";

// components
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+212) 642 745 672",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "anassalama10349@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Location",
    description: "Rabat, Morocco",
  },
];

const Contact = () => {

  return (
    <motion.div
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:items-start"
    >
      <div className="container mx-auto">
        <div className="w-full flex flex-col xl:flex-row justify-between items-center gap-[30px]">
          {/* text */}
          <div className="w-full flex flex-col gap-6">
            {/* message */}
            <div className="flex flex-col justify-center items-center gap-2 rounded-xl p-[30px] border border-accent/10 border-dashed">
              <h3 className="h3 text-center w-full">Let's connect!</h3>
              <p className="p max-w-[336px] mx-auto text-center">
                Reach out to discuss opportunities, projects, or simply to start
                a conversation.
              </p>
            </div>
            {/* info */}
            <div className="flex flex-col items-center justify-center rounded-xl p-10 border border-accent/10 border-dashed">
              <ul className="flex flex-col gap-[34px]">
                {info.map((item, index) => {
                  return (
                    <li key={index} className="flex items-center gap-6">
                      <div className="w-[52px] h-[52px] xl:w-[70px] xl:h-[70px] bg-secondary text-accent rounded-md flex items-center justify-center">
                        <div className="text-[28px]">{item.icon}</div>
                      </div>
                      <div className="flex-1">
                        <p className="uppercase text-white">{item.title}</p>
                        <h3 className="font-secondary text-lg text-white/60">
                          {item.description}
                        </h3>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
