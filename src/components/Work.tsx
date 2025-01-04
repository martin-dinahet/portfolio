import { PORTFOLIO_DATA } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Work() {
  return (
    <section className="py-40">
      <div className="max-w-6xl mx-auto px-8">
        <div className="grid grid-cols-1 gap-20">
          {PORTFOLIO_DATA.works.map((work, i) => (
            <a
              key={i}
              href={work.url}
              className="group relative"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={cn(
                "flex items-baseline justify-between",
                "border-t border-neutral-800 pt-8",
                "transition-all duration-300",
                "group-hover:opacity-50"
              )}>
                <h2 className="text-4xl font-light">{work.title}</h2>
                <p className="text-sm text-neutral-400">{work.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}