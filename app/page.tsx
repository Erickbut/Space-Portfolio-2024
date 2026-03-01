import AboutMe from "@/components/main/AboutMe";
import Encryption from "@/components/main/Encryption";
import Hero from "@/components/main/Hero";
import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";
import Image from "next/image";

//37.20
export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-10">
        <Hero />
        <AboutMe/>
        <Skills />
        <Encryption />
        <Projects />
      </div>
    </main>
  );
}
