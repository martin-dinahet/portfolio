"use client";

import { cn } from "@/lib/utils";
import { MenuItem } from "@/lib/types";
import { buttonVariants } from "@/components/ui/button";
import { Terminal } from "lucide-react";
import { BurgerMenu } from "@/components/punpun/BurgerMenu";
import { Home } from "lucide-react";
import { FileUser } from "lucide-react";
import { Briefcase } from "lucide-react";
import { AppWindowMac } from "lucide-react";
import { ThemeSwitcher } from "@/components/punpun/ThemeSwitcher";

export const Header = (): React.JSX.Element => {
  const menuItems: Array<MenuItem> = [
    {
      icon: Home,
      label: "Home",
      href: "#",
    },
    {
      icon: FileUser,
      label: "About me",
      href: "#",
    },
    {
      icon: Briefcase,
      label: "My experience",
      href: "#",
    },
    {
      icon: AppWindowMac,
      label: "My projects",
      href: "#",
    },
  ];

  return (
    <div className={cn("flex w-full p-2 justify-between bg-background sticky top-0")}>
      <a href="#" className={cn(buttonVariants({ variant: "ghost" }))}>
        <Terminal />
        <span className={cn("text-xl")}>Martin Dinahet</span>
      </a>
      <div className={cn("flex")}>
        <nav className="hidden md:flex space-x-4">
          {menuItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className={cn(
                buttonVariants({ variant: "ghost" }),
                "flex items-center px-3 py-2 text-sm font-medium"
              )}>
              <item.icon className="w-4 h-4 mr-2" />
              {item.label}
            </a>
          ))}
        </nav>
        <ThemeSwitcher />

        <BurgerMenu items={menuItems} />
      </div>
    </div>
  );
};
