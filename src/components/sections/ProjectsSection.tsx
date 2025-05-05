import type React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Briefcase } from "lucide-react";
import Link from 'next/link';

interface Project {
  title: string;
  description: string;
  link?: string; // Optional link to the project
}

const projects: Project[] = [
  {
    title: "AmygdalaGPT",
    description: "A memory-augmented LLM system that enhances the natural language processing capabilities of large language models by integrating an external memory module. This project aims to make LLMs more dynamic and context-aware.",
    // link: "#" // Add link if available
  },
  {
    title: "Auto-Trader",
    description: "A sophisticated Bitcoin trading evolution simulator. This project simulates different trading strategies and market conditions to optimize trading performance over time.",
     // link: "#"
  },
  {
    title: "Landlord",
    description: "An innovative crypto token with a built-in profit distribution mechanism. This project explores the use of smart contracts to automate profit sharing among token holders.",
    // link: "#"
  },
];

export const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="section-padding"> {/* Removed bg-background */}
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-primary"> {/* Increased size */}
          Projects & Side Quests 🧠⛓️
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.title} className="flex flex-col hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-2xl">{project.title}</CardTitle> {/* Increased size */}
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription className="text-lg">{project.description}</CardDescription> {/* Increased size */}
              </CardContent>
              {project.link && (
                 <CardContent className="mt-auto pt-0">
                    <Button variant="outline" asChild className="group w-full sm:w-auto transition-colors duration-200 hover:bg-accent hover:text-accent-foreground text-base"> {/* Increased size */}
                       <Link href={project.link} target="_blank" rel="noopener noreferrer">
                         View Project
                         <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                       </Link>
                    </Button>
                 </CardContent>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
