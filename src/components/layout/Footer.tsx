import type React from "react";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/50 py-8 mt-16">
      <div className="container mx-auto text-center text-sm text-muted-foreground">
        <p>&copy; {currentYear} Ashraf Beshtawi. All rights reserved.</p>
      </div>
    </footer>
  );
};
