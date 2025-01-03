import { Button } from "@headlessui/react";
import { Menu } from "lucide-react";
import { useState } from "react";
import { Link } from "./Link";
import { Briefcase } from "lucide-react";
import { User } from "lucide-react";
import { Mail } from "lucide-react";

export const BurgerMenu = ({ items }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="relative transition">
        <Button
          onClick={toggleMenu}
          className="p-3 transition rounded-md text-yellow hover:bg-mantle">
          <Menu />
        </Button>
        {isOpen && (
          <div className="absolute right-0 p-3 mt-2 border-2 rounded-md shadow-lg border-mantle w-fit bg-base">
            <Link href="#" className="flex gap-3 text-yellow text-nowrap">
              <Briefcase /> My Projects
            </Link>
            <Link href="#" className="flex gap-3 text-yellow text-nowrap">
              <User /> My Experience
            </Link>
            <Link href="#" className="flex gap-3 text-yellow text-nowrap">
              <Mail /> Contact Me
            </Link>
          </div>
        )}
      </div>
    </>
  );
};
