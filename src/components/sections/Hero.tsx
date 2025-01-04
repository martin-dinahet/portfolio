import { Button } from "@/components/ui/button";
import { ArrowDownIcon } from "lucide-react";

export function Hero() {
  return (
    <section className="min-h-[90vh] flex flex-col justify-center items-center text-center px-4">
      <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-pink-600 to-blue-600 bg-clip-text text-transparent">
        Full-Stack Developer
      </h1>
      <p className="text-lg md:text-xl text-muted-foreground max-w-[600px] mb-8">
        Building exceptional digital experiences with modern web technologies.
      </p>
      <Button
        variant="outline"
        size="lg"
        onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
      >
        View My Work <ArrowDownIcon className="ml-2 h-4 w-4" />
      </Button>
    </section>
  );
}