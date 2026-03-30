"use client";

import type React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Code, Sun, Moon } from "lucide-react";
import { useState, useEffect } from "react";
import { useTheme } from "@/components/ThemeProvider";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
  { name: "About", href: "#about" },
];

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    setIsClient(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isClient) return null;

  const scrollTo = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-500 ${
        isScrolled
          ? "glass shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link
          href="#home"
          className="flex items-center gap-2 font-bold text-lg text-foreground hover:text-accent transition-colors"
          onClick={(e) => scrollTo(e, "#home")}
        >
          <Code className="h-5 w-5 text-accent" />
          Ashraf Beshtawi
        </Link>

        <div className="flex items-center gap-2">
          <nav className="hidden md:flex gap-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent/10 rounded-lg transition-all duration-200"
                onClick={(e) => scrollTo(e, item.href)}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="rounded-full hover:bg-accent/10"
          >
            {theme === "dark" ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
          </Button>

          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="glass w-72">
                <nav className="grid gap-2 mt-8">
                  {navItems.map((item) => (
                    <SheetTrigger key={item.name} asChild>
                      <Link
                        href={item.href}
                        className="flex items-center px-4 py-3 text-lg text-muted-foreground hover:text-foreground hover:bg-accent/10 rounded-lg transition-all"
                        onClick={(e) => scrollTo(e, item.href)}
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
      </div>
    </header>
  );
};
