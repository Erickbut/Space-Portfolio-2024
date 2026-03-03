"use client";

import React from "react";
import SkillDataProvider from "../sub/SkillDataProvider";
import SkillText from "../sub/SkillText";
import {
  Frontend_skill,
  Backend_skill,
  Tools_skill,
} from "@/constants";

const Skills = () => {
  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden pb-20 py-20"
      style={{ transform: "scale(0.9)" }}
    >
      <SkillText />

      <div className="flex flex-col gap-10 w-full px-6 md:px-10">

        {/* FRONTEND */}
        <div>
          <h2 className="text-white text-2xl font-semibold text-center mb-6">
            Frontend
          </h2>
          <div className="flex flex-row justify-center flex-wrap gap-6 items-center">
            {Frontend_skill.map((image, index) => (
              <SkillDataProvider
                key={index}
                src={image.Image}
                width={image.width}
                height={image.height}
                index={index}
              />
            ))}
          </div>
        </div>

        {/* BACKEND */}
        <div>
          <h2 className="text-white text-2xl font-semibold text-center mb-6">
            Backend & Bases de Datos
          </h2>
          <div className="flex flex-row justify-center flex-wrap gap-6 items-center">
            {Backend_skill.map((image, index) => (
              <SkillDataProvider
                key={index}
                src={image.Image}
                width={image.width}
                height={image.height}
                index={index}
              />
            ))}
          </div>
        </div>

        {/* TOOLS */}
        <div>
          <h2 className="text-white text-2xl font-semibold text-center mb-6">
            Herramientas
          </h2>
          <div className="flex flex-row justify-center flex-wrap gap-6 items-center">
            {Tools_skill.map((image, index) => (
              <SkillDataProvider
                key={index}
                src={image.Image}
                width={image.width}
                height={image.height}
                index={index}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;