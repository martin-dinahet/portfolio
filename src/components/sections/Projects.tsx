import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PORTFOLIO_DATA } from "@/lib/constants";

export function Projects() {
  return (
    <section id="projects" className="px-4 py-20">
      <h2 className="mb-12 text-3xl font-bold text-center">Featured Projects</h2>
      <div className="grid max-w-6xl grid-cols-1 gap-6 mx-auto md:grid-cols-2 lg:grid-cols-3">
        {PORTFOLIO_DATA.works.map((project, index) => (
          <Card key={index} className="transition-shadow hover:shadow-lg">
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  );
}
