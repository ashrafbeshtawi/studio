import type React from "react";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-6">
      <div className="container mx-auto text-center text-sm">
        <p>&copy; {currentYear} Ashraf Beshtawi. All rights reserved.</p>
        <p>Built with Next.js and Tailwind CSS in Berlin.</p>
      </div>
    </footer>
  );
};
