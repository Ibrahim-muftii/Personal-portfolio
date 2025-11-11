import React from "react";
import { FaReact, FaAws } from "react-icons/fa";
import {
  TbBrandNodejs,
  TbBrandNextjs,
  TbBrandTypescript,
} from "react-icons/tb";
import {
  SiExpress,
  SiMui,
  SiAntdesign,
  SiPython,
  SiHtml5,
  SiReactbootstrap,
  SiTailwindcss,
  SiOracle,
} from "react-icons/si";
import { BiLogoMongodb, BiLogoPostgresql } from "react-icons/bi";
import "./Home.css";

const techStack = [
  { name: "Node.js", icon: <TbBrandNodejs />, offset:-15 },
  { name: "Express", icon: <SiExpress className="stroke-2" />, offset: -15  },
  { name: "MongoDB", icon: <BiLogoMongodb />, offset: -15 },
  { name: "PostgreSQL", icon: <BiLogoPostgresql />, offset: -18 },
  { name: "Next.js", icon: <TbBrandNextjs />, offset: -15 },
  { name: "TypeScript", icon: <TbBrandTypescript />, offset: -15 },
  { name: "Material UI", icon: <SiMui />, offset: -5 },
  { name: "Ant Design", icon: <SiAntdesign />, offset: 0 },
  { name: "Python", icon: <SiPython />, offset: 15 },
  { name: "HTML5", icon: <SiHtml5 />, offset: 15 },
  { name: "Bootstrap", icon: <SiReactbootstrap />, offset: 15 },
  { name: "Oracle", icon: <SiOracle />, offset: 15 },
  { name: "Tailwind", icon: <SiTailwindcss />, offset: 5 },
  { name: "AWS", icon: <FaAws className="stroke-2" />, offset: 10 },
];

const TechOrbit: React.FC = () => {
  const ICON_OFFSET = 15; // pushes icons exactly onto ring edge

  const rings = [
    { radius: 120, duration: 28, direction: "normal" },
    { radius: 180, duration: 22, direction: "reverse" },
    { radius: 250, duration: 16, direction: "normal" },
  ];

  return (
    <div className="orbit-wrapper">
      <div className="react-center">
        <FaReact className="react-logo" />
      </div>

      {rings.map((ring, i) => (
        <div
          key={i}
          className={`orbit-ring ring-${i}`}
          style={{
            width: `${ring.radius * 2}px`,
            height: `${ring.radius * 2}px`,
          }}
        />
      ))}

      {rings.map((ring, ringIndex) => {
        const ringIcons = techStack.filter(
          (_, i) => i % rings.length === ringIndex
        );

        return (
          <div
            key={ringIndex}
            className={`orbit-container ${ring.direction} orbit-container-${ringIndex}`}
            style={{
              width: `${ring.radius * 2}px`,
              height: `${ring.radius * 2}px`,
              animationDuration: `${ring.duration}s`,
              transformOrigin: "center center",
            }}
          >
            {ringIcons.map((tech, i) => {
              const angle = (i / ringIcons.length) * 360;
              return (
                <div
                  title={tech.name}
                  key={tech.name}
                  className="orbit-item text-purple-500/50"
                  style={{
                    transform: `rotate(${angle}deg) translate(${ring.radius + tech.offset}px)`,
                  }}
                >
                  {tech.icon}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default TechOrbit;
