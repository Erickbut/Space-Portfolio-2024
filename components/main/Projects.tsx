import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center py-16 scroll-mt-16"
    >
      <h2 className="text-[40px] md:text-[48px] font-semibold leading-[1.15] pt-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-12">
        Mis Proyectos
      </h2>

      <div className="w-full max-w-[1300px] px-6 md:px-10 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Proyecto Anakena */}
        <ProjectCard
          src="/anakena.jpeg"
          title="Hotel & Restaurante Borde Loa - Calama, Chile."
          description="Plataforma web real desarrollada con Next.js y React para gestión digital y presencia online del hotel."
          linkDemo="https://anakena-hoteles.cl"
          tags={["Next.js", "React", "Tailwind", "Producción"]}
        />

        {/* Proyecto Real Estate */}
        <ProjectCard
          src="/Pokemon.png"
          title="Sistema Real Estate — Gestión Comercial"
          description="Aplicación web orientada a gestión de clientes, seguimiento comercial y organización de leads. Implementa lógica CRUD y arquitectura frontend moderna."
          linkDemo="https://TU-LINK-DEMO-AQUI.com"
          tags={["React", "JavaScript", "CRUD", "Frontend"]}
        />

        {/* Proyecto PokeAPI */}
        <ProjectCard
          src="/Pokemon.png"
          title="PokeAPI Explorer — Consumo de API"
          description="Aplicación que consume la API pública de Pokémon, permitiendo búsqueda dinámica, visualización detallada y manejo de estados asíncronos."
          linkDemo="https://TU-LINK-DEMO-AQUI.com"
          tags={["React", "API", "Fetch", "Async"]}
        />

      </div>
    </section>
  );
};

export default Projects;