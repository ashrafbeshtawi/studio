"use client";

import type React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Code } from "lucide-react";
import { useState, useEffect } from 'react';

const navItems = [
  { name: "Home", href: "#home" },
  { name: "Skills", href: "#skills" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isClient, setIsClient] = useState(false);

   useEffect(() => {
    setIsClient(true); // Indicate component has mounted
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check scroll position on initial load

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isClient) {
     // Render nothing or a placeholder on the server/during hydration mismatch phase
     return null;
   }


  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${isScrolled ? 'bg-background/95 backdrop-blur-sm shadow-md' : 'bg-secondary'}`}>
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="#home" className="flex items-center gap-2 font-semibold text-lg text-primary hover:text-accent transition-colors">
          <Code className="h-6 w-6 text-accent" />
          Berlin Bytes
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-foreground hover:text-accent transition-colors"
              onClick={(e) => {
                 e.preventDefault();
                 const targetElement = document.querySelector(item.href);
                 if (targetElement) {
                   targetElement.scrollIntoView({ behavior: 'smooth' });
                 }
               }}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="grid gap-6 text-lg font-medium mt-8">
                {navItems.map((item) => (
                   <SheetTrigger key={item.name} asChild>
                      <Link
                         href={item.href}
                         className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                         onClick={(e) => {
                            e.preventDefault();
                            const targetElement = document.querySelector(item.href);
                            if (targetElement) {
                               targetElement.scrollIntoView({ behavior: 'smooth' });
                            }
                         }}
                       >
                         {item.name}
                       </Link>
                   </SheetTrigger>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};
