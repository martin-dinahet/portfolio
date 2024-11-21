"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { MenuItem } from "@/lib/types";
import { BurgerMenuProps } from "@/lib/types";
import { Sheet } from "@/components/ui/sheet";
import { SheetTrigger } from "@/components/ui/sheet";
import { SheetContent } from "@/components/ui/sheet";
import { SheetHeader } from "@/components/ui/sheet";
import { SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

export const BurgerMenu = ({ items }: BurgerMenuProps): React.JSX.Element => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className={cn("md:hidden")}>
          <Menu />
          <span className={cn("sr-only")}>Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className={cn("w-[300px] sm:w-[400px]")}>
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>
        <div className={cn("flex flex-col h-full")}>
          <nav className="flex-1 overflow-y-auto">
            <ul className="pt-4 space-y-2">
              {items.map((item: MenuItem, key: number) => (
                <li key={key}>
                  <a
                    href={item.href}
                    className="flex items-center p-2 hover:bg-accent rounded-lg transition-colors duration-200"
                    onClick={() => setOpen(false)}>
                    <item.icon className={cn("mr-3 h-5 w-5")} />
                    <span>{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </SheetContent>
    </Sheet>
  );
};
