"use client";

import React from "react";
import {
  RxGithubLogo,
  RxLinkedinLogo,
  RxInstagramLogo,
} from "react-icons/rx";

const Footer = () => {
  return (
    <footer className="w-full bg-transparent text-gray-300 border-t border-[#7042f861] mt-20">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col items-center gap-6">

        {/* Name / Role */}
        <div className="text-center">
          <h2 className="text-xl font-semibold text-white">
            Erick Butrón
          </h2>
          <p className="text-sm text-gray-400 mt-1">
            Full Stack Developer · Next.js · React · Node.js
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-6 text-xl">
          <a
            href="https://github.com/Erickbut"
            target="_blank"
            className="hover:text-white transition duration-300 hover:scale-110"
          >
            <RxGithubLogo />
          </a>

          <a
            href="https://www.linkedin.com"
            target="_blank"
            className="hover:text-white transition duration-300 hover:scale-110"
          >
            <RxLinkedinLogo />
          </a>

          <a
            href="https://www.instagram.com/erick.but/"
            target="_blank"
            className="hover:text-white transition duration-300 hover:scale-110"
          >
            <RxInstagramLogo />
          </a>
        </div>

        {/* Email */}
        <div className="text-sm text-gray-400">
          erickbutron1@gmail.com
        </div>

        {/* Copyright */}
        <div className="text-xs text-gray-500 text-center pt-4 border-t border-[#7042f830] w-full">
          © {new Date().getFullYear()} Erick Butrón. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;