"use client";

import { Socials } from "@/constants";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastY = useRef(0);

  const navLinks = [
    { name: "Acerca de mí", href: "#about-me" },
    { name: "Habilidades", href: "#skills" },
    { name: "Proyectos", href: "#projects" },
  ];

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    lastY.current = window.scrollY;

    const onScroll = () => {
      const y = window.scrollY;

      if (y < 80) {
        setIsVisible(true);
        lastY.current = y;
        return;
      }

      if (isOpen) {
        setIsVisible(true);
        lastY.current = y;
        return;
      }

      const diff = y - lastY.current;
      if (Math.abs(diff) < 6) return;

      setIsVisible(diff < 0);
      lastY.current = y;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) setIsVisible(true);
  }, [isOpen]);

  return (
    <>
      {/* NAVBAR */}
      <header
        className={[
          "w-full h-[65px] fixed top-0 z-50 px-4 sm:px-6 md:px-10",
          "shadow-lg shadow-[#2A0E61]/50 bg-[#030014CC] backdrop-blur-md",
          "transition-transform duration-300 ease-out",
          isVisible ? "translate-y-0" : "-translate-y-full",
        ].join(" ")}
      >
        <div className="w-full h-full flex items-center justify-between relative">

          {/* LEFT: logo */}
          <a href="#hero" className="flex items-center h-full gap-2 min-w-0">
            <div className="relative w-[52px] h-[52px] md:w-[60px] md:h-[60px] shrink-0">
              <Image
                src="/NavLogo.png"
                alt="logo"
                fill
                className="object-contain cursor-pointer hover:animate-slowspin"
                priority
              />
            </div>

            <span className="font-bold text-gray-300 text-sm sm:text-base truncate">
              Desarrollo Web
            </span>
          </a>

          {/* CENTER: links */}
          <nav className="
            hidden md:flex
            absolute left-1/2 -translate-x-1/2
            items-center gap-6
            border border-[#7042f861]
            bg-[#0300145e]
            px-6 py-2
            rounded-full
            text-gray-200
          ">
            {navLinks.map((l) => (
              <a
                key={l.name}
                href={l.href}
                className="cursor-pointer hover:text-purple-400 transition"
              >
                {l.name}
              </a>
            ))}
          </nav>

          {/* RIGHT: socials */}
          <div className="hidden md:flex gap-5 items-center ml-auto">
            {Socials.map((social) => (
              <a
                key={social.name}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition duration-200 hover:drop-shadow-[0_0_12px_rgba(168,85,247,0.65)]"
              >
                <Image
                  src={social.src}
                  alt={social.name}
                  width={24}
                  height={24}
                  className="cursor-pointer hover:brightness-125"
                />
              </a>
            ))}
          </div>

          {/* MOBILE: hamburger */}
          <button
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((v) => !v)}
            className="md:hidden flex flex-col gap-[5px] p-2 ml-auto"
          >
            <span
              className={`block w-6 h-[2px] bg-white transition-all duration-300 ${isOpen ? "rotate-45 translate-y-[7px]" : ""
                }`}
            />
            <span
              className={`block w-6 h-[2px] bg-white transition-all duration-300 ${isOpen ? "opacity-0" : ""
                }`}
            />
            <span
              className={`block w-6 h-[2px] bg-white transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-[7px]" : ""
                }`}
            />
          </button>

        </div>
      </header>

      {/* MOBILE MENU OVERLAY */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-300 ${isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
          }`}
      >
        <div
          onClick={() => setIsOpen(false)}
          className="absolute inset-0 bg-black/40"
        />

        <div
          className={`absolute top-[65px] right-0 w-full bg-[#030014f0] backdrop-blur-lg border-t border-white/10 transition-all duration-300 ${isOpen ? "translate-y-0" : "-translate-y-2"
            }`}
        >
          <div className="flex flex-col items-center gap-6 py-8">

            {navLinks.map((l) => (
              <a
                key={l.name}
                href={l.href}
                onClick={() => setIsOpen(false)}
                className="text-gray-300 text-lg hover:text-purple-400 transition"
              >
                {l.name}
              </a>
            ))}

            <div className="flex gap-6 pt-2">
              {Socials.map((social) => (
                <a
                  key={social.name}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="hover:scale-110 transition duration-200 hover:drop-shadow-[0_0_12px_rgba(168,85,247,0.65)]"
                >
                  <Image
                    src={social.src}
                    alt={social.name}
                    width={26}
                    height={26}
                    className="hover:brightness-125"
                  />
                </a>
              ))}
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;