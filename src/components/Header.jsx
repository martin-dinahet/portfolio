import { Link } from "@/components/Link";
import { Terminal } from "lucide-react";
import { Mail } from "lucide-react";
import { User } from "lucide-react";
import { Briefcase } from "lucide-react";
import { BurgerMenu } from "./BurgerMenu";

const links = [
  {
    href: "#",
    className: "flex gap-3 text-yellow",
    icon: Briefcase,
    text: "My Projects",
  },
  {
    href: "#",
    className: "flex gap-3 text-yellow",
    icon: User,
    text: "My Experience",
  },
  {
    href: "#",
    className: "flex gap-3 text-yellow",
    icon: Mail,
    text: "Contact Me",
  },
];

export const Header = () => {
  return (
    <>
      {/* Desktop Version */}
      <header className="sticky top-0 items-center justify-between hidden w-full gap-3 p-3 md:flex bg-base h-fit">
        <Link href="#" className="flex gap-3 text-xl font-semibold text-blue">
          <Terminal /> martin-dinahet
        </Link>
        <div className="flex gap-3">
          <Link href="#" className="flex gap-3 text-yellow">
            <Briefcase /> My Projects
          </Link>
          <Link href="#" className="flex gap-3 text-yellow">
            <User /> My Experience
          </Link>
          <Link href="#" className="flex gap-3 text-yellow">
            <Mail /> Contact Me
          </Link>
        </div>
      </header>
      {/* Mobile version */}
      <header className="sticky top-0 flex items-center justify-between w-full gap-3 p-3 md:hidden bg-base h-fit">
        <Link href="#" className="flex gap-3 text-xl font-semibold text-blue">
          <Terminal /> martin-dinahet
        </Link>
        <BurgerMenu items={links} />
      </header>
    </>
  );
};
