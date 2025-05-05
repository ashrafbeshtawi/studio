import type React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { User } from "lucide-react";

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="section-padding bg-secondary">
      <div className="container mx-auto">
        <Card className="max-w-4xl mx-auto shadow-md">
           <CardHeader className="flex flex-row items-center gap-3">
             <User className="w-6 h-6 text-accent" />
             <CardTitle className="text-2xl">About Me</CardTitle>
           </CardHeader>
           <CardContent className="text-lg text-muted-foreground space-y-4">
             <p>
               I am a passionate backend developer with a strong interest in AI and Crypto.
             </p>
             <p>
               Based in the vibrant city of Berlin, I focus on crafting robust and scalable systems while continuously exploring the exciting frontiers of technology.
             </p>
             <p>
                Communication is key, and I'm fortunate to be fluent in German, English, and Arabic, allowing me to connect and collaborate across diverse environments.
             </p>
           </CardContent>
         </Card>
      </div>
    </section>
  );
};
