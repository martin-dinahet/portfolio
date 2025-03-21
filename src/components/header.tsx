"use client";

import React from "react";

import { ThemeToggle } from "@/components/theme-toggle";
import { Sheet, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { SheetContent } from "@/components/ui/sheet";
import { NavLink } from "react-router-dom";
import { Briefcase, GraduationCap, Menu, User } from "lucide-react";

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  return (
    <>
      <header className="w-full sticky top-0 z-10 flex justify-between items-center px-3 py-2 bg-background">
        <NavLink to="/" end className="text-xl pl-2">
          martin-dinahet
        </NavLink>
        <div>
          <ThemeToggle />
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="p-4">
              <SheetHeader>
                <SheetTitle>Navigation Menu</SheetTitle>
              </SheetHeader>
              <nav>
                <Button
                  variant="ghost"
                  asChild
                  className="flex gap-3 justify-start"
                  onClick={() => setIsOpen(false)}
                >
                  <a href="#about-me">
                    <User />
                    About Me
                  </a>
                </Button>
                <Button
                  variant="ghost"
                  asChild
                  className="flex gap-3 justify-start"
                  onClick={() => setIsOpen(false)}
                >
                  <a href="#projects">
                    <Briefcase />
                    Featured projects
                  </a>
                </Button>
                <Button
                  variant="ghost"
                  asChild
                  className="flex gap-3 justify-start"
                  onClick={() => setIsOpen(false)}
                >
                  <a href="#my-experience">
                    <GraduationCap />
                    My Experience
                  </a>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>
    </>
  );
};
