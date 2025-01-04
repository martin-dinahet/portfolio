import { GithubIcon, LinkedinIcon, TwitterIcon } from "lucide-react";
import { PORTFOLIO_DATA } from "@/lib/constants";

const iconMap = {
  GitHub: GithubIcon,
  LinkedIn: LinkedinIcon,
  Twitter: TwitterIcon,
};

export function Footer() {
  return (
    <footer className="py-8 border-t">
      <div className="flex items-center justify-between max-w-4xl px-4 mx-auto">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} {PORTFOLIO_DATA.name}
        </p>
        <div className="flex gap-4">
          {PORTFOLIO_DATA.links.map((social) => {
            const Icon = iconMap[social.name as keyof typeof iconMap];
            return (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors text-muted-foreground hover:text-foreground">
                <Icon className="w-5 h-5" />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
