"use client";

import type React from "react";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Award, ExternalLink } from "lucide-react";
import * as Icons from "@/components/icons";
import Link from "next/link";

interface Skill {
  name: string;
  icon: React.ElementType;
}

interface Certification {
  name: string;
  url: string;
}

const toolkitSkills: Skill[] = [
  { name: "PHP", icon: Icons.PhpIcon },
  { name: "Symfony", icon: Icons.SymfonyIcon },
  { name: "PostgreSQL", icon: Icons.PostgresqlIcon },
  { name: "Docker", icon: Icons.DockerIcon },
  { name: "n8n", icon: Icons.N8nIcon },
  { name: "Git", icon: Icons.GitIcon },
  { name: "RESTful API", icon: Icons.RestApiIcon },
  { name: "Agentic AI", icon: Icons.AgenticAiIcon },
  { name: "Postman", icon: Icons.PostmanIcon },
  { name: "Next.js", icon: Icons.NextjsIcon },
  { name: "Three.js", icon: Icons.ThreejsIcon },
];

const certifications: Certification[] = [
  { name: "Symfony 7", url: "https://symfonycasts.com/certificates/35CD1309C158" },
  { name: "Cosmic Coding", url: "https://symfonycasts.com/certificates/2AA8BB96C155" },
  { name: "Claude Code", url: "https://verify.skilljar.com/c/da6mfrh4vqiz" },
];

const SkillBubble: React.FC<{ skill: Skill; index: number }> = ({ skill, index }) => {
  const Icon = skill.icon;
  return (
    <Badge
      variant="secondary"
      className="flex items-center gap-2 px-4 py-2.5 text-sm rounded-full bg-secondary/80 hover:bg-accent hover:text-accent-foreground hover:scale-110 hover:shadow-lg hover:shadow-accent/20 transition-all duration-300 cursor-default animate-fade-in-up"
      style={{ animationDelay: `${index * 0.05}s` }}
    >
      <Icon className="w-4 h-4" />
      {skill.name}
    </Badge>
  );
};

export const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="section-padding">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">
            Skills & Certifications
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            The tools I work with and the credentials I&apos;ve earned
          </p>
        </div>

        {/* Toolkit */}
        <div className="glass rounded-2xl p-8 mb-10 hover:shadow-xl hover:shadow-accent/5 transition-all duration-500 group">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2.5 rounded-xl bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300">
              <Briefcase className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-semibold text-foreground">Toolkit</h3>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {toolkitSkills.map((skill, index) => (
              <SkillBubble key={skill.name} skill={skill} index={index} />
            ))}
          </div>
        </div>

        {/* Certifications row */}
        <div className="glass rounded-2xl p-6 group hover:shadow-xl hover:shadow-accent/5 transition-all duration-500">
          <div className="flex items-center gap-3 mb-5">
            <div className="p-2.5 rounded-xl bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300">
              <Award className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-semibold text-foreground">Certifications</h3>
          </div>
          <div className="grid sm:grid-cols-3 gap-3">
            {certifications.map((cert) => (
              <Link
                key={cert.name}
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-xl bg-secondary/50 hover:bg-accent/10 hover:border-accent/30 border border-transparent transition-all duration-300 group/cert"
              >
                <span className="font-medium text-sm text-foreground group-hover/cert:text-accent transition-colors">
                  {cert.name}
                </span>
                <ExternalLink className="h-3.5 w-3.5 text-muted-foreground group-hover/cert:text-accent transition-colors" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
