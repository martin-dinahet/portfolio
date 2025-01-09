import { buttonVariants } from "@/components/ui/button";
import { Sheet } from "@/components/ui/sheet";
import { SheetContent } from "@/components/ui/sheet";
import { SheetDescription } from "@/components/ui/sheet";
import { SheetHeader } from "@/components/ui/sheet";
import { SheetTitle } from "@/components/ui/sheet";
import { SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export const BurgerMenu = () => {
  return (
    <>
      <Sheet>
        <SheetTrigger className={buttonVariants({ variant: "ghost" })}>
          <Menu />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Menu</SheetTitle>
            <SheetDescription>Martin Dinahet</SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </>
  );
};
