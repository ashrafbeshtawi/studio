import type React from "react";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github } from "lucide-react";
import Link from "next/link";

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto max-w-2xl text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
          Let&apos;s Connect
        </h2>
        <p className="text-lg text-muted-foreground mb-10 max-w-lg mx-auto">
          Open to discussing new projects, creative ideas, or opportunities.
          Feel free to reach out.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button asChild size="lg" className="rounded-full bg-accent hover:bg-accent/90 text-accent-foreground">
            <a href="mailto:beshtawi.ashraf@gmail.com">
              <Mail className="mr-2 h-4 w-4" /> Email Me
            </a>
          </Button>
          <Button asChild variant="outline" size="lg" className="rounded-full hover:bg-accent/10 hover:border-accent/30">
            <Link href="https://www.linkedin.com/in/ashraf-beshtawi-1308a11a8/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="rounded-full hover:bg-accent/10 hover:border-accent/30">
            <Link href="https://github.com/ashrafbeshtawi" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" /> GitHub
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
