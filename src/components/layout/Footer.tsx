import type React from "react";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground py-6 mt-16"> {/* Use secondary background, added margin-top */}
      <div className="container mx-auto text-center text-base"> {/* Increased size */}
        <p>&copy; {currentYear} Ashraf Beshtawi. All rights reserved.</p>
        {/* Removed the build text */}
      </div>
    </footer>
  );
};
