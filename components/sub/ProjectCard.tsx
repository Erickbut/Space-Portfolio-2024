"use client";

import Image from "next/image";
import React from "react";

type ProjectCardProps = {
  src: string;
  title: string;
  description: string;
  linkDemo: string;
  tags?: string[];
};

const ProjectCard = ({
  src,
  title,
  description,
  linkDemo,
  tags = [],
}: ProjectCardProps) => {
  return (
    <div className="group relative w-full rounded-2xl border border-[#7042f861] bg-[#0300145e] overflow-hidden transition-all duration-500 ease-out hover:scale-[1.04] hover:border-[#8b5cf6] hover:shadow-[0_0_40px_rgba(139,92,246,0.35)]">

      {/* Imagen */}
      <div className="relative w-full h-[230px] overflow-hidden">
        <Image
          src={src}
          alt={title}
          fill
          className="object-cover transition-all duration-500 group-hover:scale-[1.08]"
        />

        {/* Overlay glow */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#030014] via-transparent to-transparent opacity-80" />
      </div>

      {/* Contenido */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-300 transition">
          {title}
        </h3>

        <p className="text-gray-300 text-sm leading-relaxed mb-4">
          {description}
        </p>

        {/* Tags */}
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-5">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-xs text-gray-200 border border-[#7042f861] bg-[#03001480] px-3 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Botón */}
        <a
          href={linkDemo}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-5 py-2 rounded-lg text-sm font-medium text-white bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 transition-all duration-300 hover:shadow-[0_0_20px_rgba(139,92,246,0.5)]"
        >
          Ver proyecto
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;