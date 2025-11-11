"use client";

import { useEffect, useRef } from "react";
import { FaReact } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { BiLogoMongodb } from "react-icons/bi";
import { SiExpress } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiMui } from "react-icons/si";
import { SiAntdesign } from "react-icons/si";
import { SiOracle } from "react-icons/si";
import { FaAws } from "react-icons/fa6";
import { SiTailwindcss } from "react-icons/si";
import { SiReactbootstrap } from "react-icons/si";
import { SiHtml5 } from "react-icons/si";
import { TbBrandNodejs } from "react-icons/tb";
import { TbBrandTypescript } from "react-icons/tb";
import { SiPython } from "react-icons/si";


const techItems = [
  { name: "React", icon: (<FaReact className="text-3xl" />) },
  { name: "Node.js", icon: (<TbBrandNodejs className="text-3xl" />) },
  { name: "Express", icon: (<SiExpress className="text-3xl" />) },
  { name: "MongoDB", icon: (<BiLogoMongodb className="text-3xl" />) },
  { name: "PostgreSQL", icon: (<BiLogoPostgresql className="text-3xl" />) },
  { name: "Next.js", icon: (<TbBrandNextjs className="text-3xl" />) },
  { name: "TypeScript", icon: (<TbBrandTypescript className="text-3xl" />) },
  { name: "Material UI", icon: (<SiMui className="text-3xl" />) },
  { name: "Ant Design", icon: (<SiAntdesign className="text-3xl" />) },
  { name: "Python", icon: (<SiPython className="text-3xl" />) },
  { name: "HTML5", icon: (<SiHtml5 className="text-3xl" />) },
  { name: "Bootstrap", icon: (<SiReactbootstrap className="text-3xl" />) },
  { name: "Bootstrap", icon: (<SiOracle className="text-3xl" />) },
  { name: "Tailwind", icon: (<SiTailwindcss className="text-3xl" />) },
  { name: "AWS", icon: (<FaAws />) },
];

export default function TechStackMarquee() {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (marqueeRef.current) {
      const track = marqueeRef.current.querySelector(".marquee-track");
      if (track && marqueeRef.current.children.length === 1) {
        const clone = track.cloneNode(true);
        marqueeRef.current.appendChild(clone);
      }
    }
  }, []);

  return (
    <div className="w-full overflow-hidden py-6">
      <h1 className="heading-text text-center block mx-auto">My Tech Stack</h1>
      <div className="pause-marquee">
        <div
          ref={marqueeRef}
          className="flex py-10 animate-marquee gap-10 whitespace-nowrap"
        >
          <div className="marquee-track flex gap-10 items-center">
            {techItems.map((item, i) => (
              <div
                key={i}
                className="text-white/50 hover:!text-purple-600 transition-all duration-300 ease-linear flex items-center gap-2 font-semibold min-w-max"
              >
                {item.icon}
                <span className="text-3xl">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
        <div
          ref={marqueeRef}
          className="flex py-10 animate-marquee-reverse gap-10 whitespace-nowrap"
        >
          <div className="marquee-track flex gap-10 items-center">
            {techItems.map((item, i) => (
              <div
                key={i}
                className="text-white/50 hover:!text-purple-600 transition-all duration-300 ease-linear flex items-center gap-2 font-semibold min-w-max"
              >
                {item.icon}
                <span className="text-3xl">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
