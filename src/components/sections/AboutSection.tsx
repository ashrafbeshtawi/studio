import type React from "react";
import { MapPin, Coffee, Zap, Globe } from "lucide-react";

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">
            About Me
          </h2>
        </div>

        <div className="glass rounded-2xl p-8 sm:p-10 space-y-6">
          <p className="text-lg text-muted-foreground leading-relaxed">
            I&apos;m a backend developer passionate about building scalable systems
            and exploring emerging technologies. Based in Berlin, I focus on
            crafting robust architectures while staying curious about what&apos;s next.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Communication is key — I&apos;m fluent in German, English, and Arabic,
            which allows me to collaborate across diverse teams and environments.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
            <div className="flex items-center gap-3 text-muted-foreground">
              <div className="p-2 rounded-lg bg-accent/10 text-accent">
                <MapPin className="w-4 h-4" />
              </div>
              <span className="text-sm">Berlin, Germany</span>
            </div>
            <div className="flex items-center gap-3 text-muted-foreground">
              <div className="p-2 rounded-lg bg-accent/10 text-accent">
                <Coffee className="w-4 h-4" />
              </div>
              <span className="text-sm">Backend-focused</span>
            </div>
            <div className="flex items-center gap-3 text-muted-foreground">
              <div className="p-2 rounded-lg bg-accent/10 text-accent">
                <Zap className="w-4 h-4" />
              </div>
              <span className="text-sm">Always learning</span>
            </div>
            <div className="flex items-center gap-3 text-muted-foreground">
              <div className="p-2 rounded-lg bg-accent/10 text-accent">
                <Globe className="w-4 h-4" />
              </div>
              <span className="text-sm">German, English, Arabic</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
