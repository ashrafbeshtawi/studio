import type React from "react";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin } from "lucide-react";
import Link from 'next/link';

export const ContactSection: React.FC = () => {
  const email = "ashraf.beshtawi@example.com"; // Replace with actual email
  const linkedinUrl = "https://www.linkedin.com/in/ashraf-beshtawi/"; // Replace with actual LinkedIn URL

  return (
    <section id="contact" className="section-padding"> {/* Removed bg-secondary */}
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 text-primary"> {/* Increased size */}
          Get In Touch
        </h2>
        <p className="text-xl text-muted-foreground mb-8 max-w-xl mx-auto"> {/* Increased size */}
          Feel free to reach out to me via email or connect with me on LinkedIn.
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
        </p>
        <div className="flex justify-center gap-4">
          <Button asChild variant="default" size="lg" className="transition-transform hover:scale-105 text-base">
            <a href={`mailto:${email}`} className="flex items-center">
              <Mail className="mr-2 h-5 w-5" /> Email Me
            </a>
          </Button>
          <Button asChild variant="outline" size="lg" className="transition-transform hover:scale-105 hover:bg-accent hover:text-accent-foreground text-base">
            <Link href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="flex items-center">
              <Linkedin className="mr-2 h-5 w-5" /> LinkedIn
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};