"use client";

import type React from "react";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface Project {
  name: string;
  url: string;
}

interface ProjectGroup {
  section: string;
  image: string;
  projects: Project[];
}

const projectGroups: ProjectGroup[] = [
  {
    section: "Creative Web Experiences",
    image: "/img/frontend.png",
    projects: [
      { name: "Horus", url: "https://github.com/ashrafbeshtawi/Horus" },
      { name: "WinXp", url: "https://github.com/ashrafbeshtawi/WinXp" },
      { name: "Mocking-Bird", url: "https://github.com/ashrafbeshtawi/Mocking-Bird" },
    ],
  },
  {
    section: "AI & Smart Systems",
    image: "/img/ai.png",
    projects: [
      { name: "Context Paging", url: "https://github.com/ashrafbeshtawi/context-paging" },
      { name: "Auto-Trader", url: "https://github.com/ashrafbeshtawi/Auto-Trader" },
    ],
  },
  {
    section: "Web3, Blockchain & Mobile",
    image: "/img/web3.png",
    projects: [
      { name: "Landlord App", url: "https://landlord-liart.vercel.app/" },
      { name: "Landlord Code", url: "https://github.com/ashrafbeshtawi/Landlord" },
      { name: "Casually", url: "https://github.com/ashrafbeshtawi/Casually" },
    ],
  },
];

function useParallax(speed: number = 0.3) {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const elementCenter = rect.top + rect.height / 2;
      const distFromCenter = elementCenter - windowHeight / 2;
      setOffset(distFromCenter * speed);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [speed]);

  return { ref, offset };
}

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.unobserve(el);
  }, []);

  return { ref, isVisible };
}

const ProjectCard: React.FC<{ group: ProjectGroup; index: number }> = ({ group, index }) => {
  const isEven = index % 2 === 0;
  const { ref: parallaxRef, offset } = useParallax(0.08);
  const { ref: revealRef, isVisible } = useReveal();

  return (
    <div
      ref={revealRef}
      className={`grid md:grid-cols-2 gap-6 lg:gap-12 items-center transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
      }`}
    >
      {/* Parallax image */}
      <div
        ref={parallaxRef}
        className={`relative overflow-hidden rounded-2xl ${isEven ? "" : "md:order-2"}`}
      >
        <div
          className="relative w-full"
          style={{ height: "clamp(280px, 40vw, 420px)" }}
        >
          <div
            className="absolute inset-x-0 w-full"
            style={{
              top: "50%",
              transform: `translateY(calc(-50% + ${offset}px))`,
              height: "130%",
            }}
          >
            <Image
              src={group.image}
              alt={group.section}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              priority={index === 0}
            />
          </div>
          {/* Subtle vignette */}
          <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10 z-10 pointer-events-none" />
        </div>
      </div>

      {/* Content */}
      <div className={`space-y-5 ${isEven ? "" : "md:order-1"}`}>
        <div className="inline-block">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">
            0{index + 1}
          </span>
        </div>
        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground leading-tight">
          {group.section}
        </h3>
        <div className="space-y-2">
          {group.projects.map((project, pi) => (
            <Link
              key={project.name}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 rounded-xl glass hover:bg-accent/10 hover:border-accent/20 transition-all duration-300 group/link"
              style={{
                transitionDelay: isVisible ? `${pi * 80}ms` : "0ms",
              }}
            >
              <span className="font-medium text-foreground group-hover/link:text-accent transition-colors">
                {project.name}
              </span>
              <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover/link:text-accent group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-all duration-200" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-20">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">
            Projects & Work
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            A collection of things I&apos;ve built and explored
          </p>
        </div>
        <div className="space-y-28 lg:space-y-36">
          {projectGroups.map((group, i) => (
            <ProjectCard key={group.section} group={group} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};
