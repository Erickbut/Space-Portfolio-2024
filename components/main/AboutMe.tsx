"use client";

import React from "react";
import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <section
      id="about-me"
      className="flex items-center justify-center px-6 md:px-20 py-5 scroll-mt-24"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-[900px] w-full"
      >

        {/* TITLE */}
        <h2 className="text-[36px] md:text-[42px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-6">
          Acerca de mí
        </h2>

        {/* DESCRIPTION */}
        <div className="flex flex-col gap-4 text-gray-300 text-lg leading-relaxed">

          <p>
            Soy desarrollador Full Stack con experiencia construyendo aplicaciones web funcionales en entornos reales. He trabajado desarrollando plataformas internas, optimizando procesos operacionales e integrando soluciones digitales utilizando tecnologías modernas como JavaScript, React y Next.js.
          </p>

          <p>
            Mi enfoque está en crear software eficiente, mantenible y orientado a resolver problemas reales. Tengo experiencia trabajando con lógica de negocio, consumo de APIs, estructuras de datos y arquitectura frontend moderna.
          </p>

          <p>
            Actualmente estoy enfocado en crecer profesionalmente en el área de desarrollo de software, ingeniería de datos y tecnologías modernas, contribuyendo en proyectos que generen impacto real y valor técnico.
          </p>

        </div>

        {/* STATS */}
        <div className="flex flex-wrap gap-6 mt-8">

          <div className="border border-[#7042f861] rounded-lg px-5 py-3 bg-[#0300145e]">
            <p className="text-cyan-400 font-semibold text-xl">2+</p>
            <p className="text-gray-400 text-sm">años experiencia tecnológica</p>
          </div>

          <div className="border border-[#7042f861] rounded-lg px-5 py-3 bg-[#0300145e]">
            <p className="text-purple-400 font-semibold text-xl">5+</p>
            <p className="text-gray-400 text-sm">proyectos desarrollados</p>
          </div>

          <div className="border border-[#7042f861] rounded-lg px-5 py-3 bg-[#0300145e]">
            <p className="text-cyan-400 font-semibold text-xl">Full Stack</p>
            <p className="text-gray-400 text-sm">JavaScript · React · Next.js</p>
          </div>

        </div>

      </motion.div>
    </section>
  );
};

export default AboutMe;