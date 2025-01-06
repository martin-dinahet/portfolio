import { BurgerMenu } from "@/components/personal/BurgerMenu";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { ThemeSwitcher } from "@/components/personal/ThemeSwitcher";

export const Header = () => {
  return (
    <>
      <header className="flex items-center justify-between w-full gap-3 p-3 h-fit">
        <a href="#" className={cn(buttonVariants({ variant: "ghost" }), "text-lg")}>
          Martin Dinahet
        </a>
        <div>
          <ThemeSwitcher />
          <BurgerMenu />
        </div>
      </header>
    </>
  );
};
