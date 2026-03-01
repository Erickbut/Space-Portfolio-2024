"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col lg:flex-row items-center justify-center px-6 md:px-20 mt-28 md:mt-40 w-full z-[20] gap-10"
    >
      {/* LEFT SIDE */}
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        {/* BADGE */}
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[10px] border border-[#7042f88b] opacity-[0.95] w-fit"
        >
          <div className="flex flex-row items-center">
            <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
            <h1 className="Welcome-text text-[13px]">
              Disponible para roles Junior · Programación / TI / Diseño / Bases
              de Datos
            </h1>
          </div>
        </motion.div>

        {/* TITLE */}
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-4 mt-6 font-bold text-white max-w-[720px] w-auto h-auto"
        >
          <span className="text-5xl md:text-6xl leading-tight">
            Erick{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              Butrón
            </span>
          </span>

          <span className="text-xl md:text-2xl text-gray-200 font-semibold">
            Full Stack Web Developer · JavaScript · React · Next.js
          </span>

          <span className="text-base md:text-lg text-gray-300 font-medium">
            Desarrollo de soluciones web y optimización de procesos funcionales.
          </span>
        </motion.div>

        {/* DESCRIPTION */}
        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[650px]"
        >
          Experiencia desarrollando plataformas reales, arquitectura frontend,
          lógica de negocio, diagramas de bases de datos y consumo de
          API&apos;s. Interés en desarrollo de software, ingeniería de datos y
          tecnologías modernas.
        </motion.p>

        {/* CTA BUTTONS */}
        <motion.div variants={slideInFromLeft(1)} className="flex flex-wrap gap-4">
          <motion.a
            variants={slideInFromLeft(1)}
            href="#projects"
            className="py-2 px-5 button-primary text-center text-white cursor-pointer rounded-lg"
          >
            Ver proyectos
          </motion.a>

          <motion.a
            variants={slideInFromLeft(1)}
            href="/ATS_CV_ES.pdf"
            download
            className="py-2 px-5 border border-purple-500 text-white rounded-lg hover:bg-purple-600/20 transition cursor-pointer"
          >
            Descargar CV (ES)
          </motion.a>

          <motion.a
            variants={slideInFromLeft(1)}
            href="/ATS_CV_ENG.pdf"
            download
            className="py-2 px-5 border border-cyan-500 text-white rounded-lg hover:bg-cyan-600/20 transition cursor-pointer"
          >
            Download CV (EN)
          </motion.a>

          <motion.a
            variants={slideInFromLeft(1)}
            href="https://github.com/Erickbut"
            target="_blank"
            rel="noopener noreferrer"
            className="py-2 px-5 border border-white/20 text-white rounded-lg hover:bg-white/10 transition cursor-pointer"
          >
            GitHub
          </motion.a>
        </motion.div>

        {/* LOCATION */}
        <motion.div
          variants={slideInFromLeft(1.1)}
          className="text-sm text-gray-500 mt-2"
        >
          Iquique, Chile · Disponible remoto / híbrido / presencial
        </motion.div>
      </div>

      {/* RIGHT SIDE IMAGE */}
      <motion.div
        variants={slideInFromRight(0.8)}
        className="hidden md:flex w-full justify-center items-center shrink-0 md:w-[420px] lg:w-[650px]"
      >
        <Image
          src="/mainIconsdark.svg"
          alt="tech stack"
          height={650}
          width={650}
          priority
          className="w-full h-auto"
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;