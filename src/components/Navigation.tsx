import { PORTFOLIO_DATA } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Navigation() {
  return (
    <nav className="fixed top-8 left-8 right-8 z-50 mix-blend-difference">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <span className="text-sm font-light">{PORTFOLIO_DATA.name}</span>
        <div className="flex gap-6">
          {PORTFOLIO_DATA.links.map((link) => (
            <a
              key={link.name}
              href={link.url}
              className={cn(
                "text-sm font-light hover:opacity-50 transition-opacity",
                "hover:underline underline-offset-4"
              )}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}