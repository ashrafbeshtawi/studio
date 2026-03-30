"use client";

import type React from "react";
import Image from "next/image";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const HeroSection: React.FC = () => {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center justify-center section-padding overflow-hidden">
      {/* Decorative orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl animate-float pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float pointer-events-none" style={{ animationDelay: "3s" }} />

      <div className="container mx-auto flex flex-col items-center text-center relative z-10">
        <div className="relative mb-8">
          <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-accent via-primary to-accent opacity-75 blur-sm" />
          <Image
            src="/img/me.jpeg"
            alt="Ashraf Beshtawi"
            width={140}
            height={140}
            className="relative rounded-full object-cover w-[140px] h-[140px] ring-2 ring-background"
            priority
          />
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-4 tracking-tight animate-fade-in-up">
          Hi, I&apos;m{" "}
          <span className="gradient-text">Ashraf Beshtawi</span>
        </h1>

        <p className="text-xl sm:text-2xl text-muted-foreground mb-6 max-w-2xl animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          Software Developer based in Berlin
        </p>

        <p className="text-base sm:text-lg text-muted-foreground/80 mb-10 max-w-xl animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          Building robust backend systems while exploring the frontiers of AI and Web3.
          Passionate about clean architecture and innovative solutions.
        </p>

        <div className="flex gap-3 mb-12 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
          <Button asChild variant="default" size="lg" className="rounded-full bg-accent hover:bg-accent/90 text-accent-foreground">
            <a href="mailto:beshtawi.ashraf@gmail.com">
              <Mail className="mr-2 h-4 w-4" /> Get in Touch
            </a>
          </Button>
          <Button asChild variant="outline" size="lg" className="rounded-full">
            <Link href="https://github.com/ashrafbeshtawi" target="_blank">
              <Github className="mr-2 h-4 w-4" /> GitHub
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="rounded-full">
            <Link href="https://www.linkedin.com/in/ashraf-beshtawi-1308a11a8/" target="_blank">
              <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
            </Link>
          </Button>
        </div>

        <button
          onClick={() => document.querySelector("#skills")?.scrollIntoView({ behavior: "smooth" })}
          className="animate-bounce text-muted-foreground/50 hover:text-accent transition-colors"
        >
          <ArrowDown className="h-6 w-6" />
        </button>
      </div>
    </section>
  );
};
