import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PORTFOLIO_DATA } from "@/lib/constants";

export function About() {
  return (
    <section className="py-20 px-4 bg-muted/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">About Me</h2>
        <Card className="mb-8">
          <CardContent className="pt-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              {PORTFOLIO_DATA.about}
            </p>
          </CardContent>
        </Card>
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-4">Technologies I Work With</h3>
          <div className="flex flex-wrap justify-center gap-2">
            {PORTFOLIO_DATA.skills.map((skill, index) => (
              <Badge key={index} variant="outline" className="text-sm">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}