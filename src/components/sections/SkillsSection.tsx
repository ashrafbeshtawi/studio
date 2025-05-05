import type React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Bitcoin, BrainCircuit, Languages, Briefcase } from "lucide-react";
import * as Icons from '@/components/icons';

interface Skill {
  name: string;
  icon: React.ElementType;
}

const techSkills: Skill[] = [
  { name: "PHP", icon: Icons.PhpIcon },
  { name: "Symfony", icon: Icons.SymfonyIcon },
  { name: "PostgreSQL", icon: Icons.PostgresqlIcon },
  { name: "RESTful API", icon: Icons.RestApiIcon },
  { name: "Docker", icon: Icons.DockerIcon },
  { name: "JSON Schema", icon: Icons.JsonSchemaIcon },
];

const explorationSkills: Skill[] = [
  { name: "Python", icon: Icons.PythonIcon },
  { name: "Solidity", icon: Icons.SolidityIcon },
  { name: "Next.js", icon: Icons.NextjsIcon },
];

const languages: Skill[] = [
  { name: "German", icon: Languages },
  { name: "English", icon: Languages },
  { name: "Arabic", icon: Languages },
];

const SkillCard: React.FC<{ title: string; icon: React.ElementType; skills: Skill[]; }> = ({ title, icon: TitleIcon, skills }) => (
  <Card className="hover:shadow-lg transition-shadow duration-300">
    <CardHeader className="flex flex-row items-center gap-3 pb-2">
       <TitleIcon className="w-6 h-6 text-accent" />
       <CardTitle className="text-xl">{title}</CardTitle>
     </CardHeader>
    <CardContent className="flex flex-wrap gap-2">
      {skills.map((skill) => (
        <Badge key={skill.name} variant="secondary" className="flex items-center gap-1 px-3 py-1 text-base transition-colors duration-200 hover:bg-accent hover:text-accent-foreground"> {/* Increased size */}
          <skill.icon className="w-4 h-4" />
          {skill.name}
        </Badge>
      ))}
    </CardContent>
  </Card>
);


export const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="section-padding"> {/* Removed bg-background */}
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-primary"> {/* Increased size */}
          My Tech Stack & Superpowers 🚀
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
           <SkillCard title="Backend Toolkit" icon={Briefcase} skills={techSkills} />
           <SkillCard title="AI & Crypto Adventures" icon={BrainCircuit} skills={explorationSkills} />
           <SkillCard title="Languages" icon={Languages} skills={languages} />
        </div>

      </div>
    </section>
  );
};
