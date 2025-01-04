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
      <div className="max-w-4xl mx-auto px-4 flex justify-between items-center">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} {PORTFOLIO_DATA.name}
        </p>
        <div className="flex gap-4">
          {PORTFOLIO_DATA.socials.map((social) => {
            const Icon = iconMap[social.name as keyof typeof iconMap];
            return (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Icon className="h-5 w-5" />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}