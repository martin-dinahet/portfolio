import React from "react";

import { ThemeToggle } from "@/components/theme-toggle";
import { Sheet, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { SheetContent } from "@/components/ui/sheet";
import { NavLink } from "react-router-dom";
import { Briefcase, House, Mail, Menu, User } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  return (
    <>
      <header className="flex justify-between items-center px-3 py-2">
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
                <NavLink
                  to="/"
                  className={cn(buttonVariants({ variant: "ghost" }), "flex gap-3 justify-start")}
                >
                  <House />
                  Home
                </NavLink>
                <NavLink
                  to="/about"
                  className={cn(buttonVariants({ variant: "ghost" }), "flex gap-3 justify-start")}
                >
                  <User />
                  About Me
                </NavLink>
                <NavLink
                  to="/services"
                  className={cn(buttonVariants({ variant: "ghost" }), "flex gap-3 justify-start")}
                >
                  <Briefcase />
                  Projects
                </NavLink>
                <NavLink
                  to="/contact"
                  className={cn(buttonVariants({ variant: "ghost" }), "flex gap-3 justify-start")}
                >
                  <Mail />
                  Contact
                </NavLink>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>
    </>
  );
};
