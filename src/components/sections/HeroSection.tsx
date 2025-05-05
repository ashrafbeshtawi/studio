import type React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from 'next/image';

export const HeroSection: React.FC = () => {
  return (
    <section id="home" className="section-padding"> {/* Removed bg-secondary */}
      <div className="container mx-auto flex flex-col items-center text-center">
        <Avatar className="w-32 h-32 mb-6 shadow-lg ring-4 ring-accent ring-offset-4 ring-offset-background"> {/* Changed ring-offset-secondary to ring-offset-background */}
          <Image
             data-ai-hint="professional developer portrait"
             src="https://picsum.photos/128/128"
             alt="Ashraf Beshtawi"
             width={128}
             height={128}
             className="object-cover"
           />
          <AvatarFallback>AB</AvatarFallback>
        </Avatar>
        <h1 className="text-5xl font-bold mb-2 text-primary"> {/* Increased size */}
          Hi, I'm Ashraf Beshtawi 👋
        </h1>
        <p className="text-2xl text-foreground mb-4 max-w-3xl"> {/* Increased size */}
          Building the Future, One Byte at a Time!
        </p>
        <p className="text-xl text-muted-foreground max-w-2xl"> {/* Increased size */}
          Welcome to my digital playground, a glimpse into the mind of a backend
          developer who's as passionate about crafting robust systems as I am
          about exploring the exciting frontiers of AI and Crypto. I'm based in
          the vibrant city of Berlin, where I build software and dream in code!
        </p>
      </div>
    </section>
  );
};
