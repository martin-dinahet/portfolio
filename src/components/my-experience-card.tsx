import React from "react";

import { Card } from "@/components/ui/card";
import { CardHeader } from "@/components/ui/card";
import { CardTitle } from "@/components/ui/card";
import { CardDescription } from "@/components/ui/card";
import { CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building } from "lucide-react";
import { GraduationCap } from "lucide-react";
import { Separator } from "./ui/separator";

export const MyExperienceCard: React.FC = () => {
  return (
    <>
      <Card className="w-full min-w-[20rem]" id="my-experience">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">My Experience</CardTitle>
          <CardDescription>Education and Professional Journey</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-y-10">
          <div className="space-y-3 pr-6 md:w-1/2">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Building className="text-muted-foreground" />
                <div>
                  <h3 className="font-semibold">Internship</h3>
                  <p className="text-sm text-muted-foreground">Social Cloud Funding • 2024</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                During this 2-month internship, I built a backend API for managing products and
                catalogs. I learned about good cybersecurity practices, testing, CI/CD and Git, as
                well as ORM's and database communications.
              </p>
              <div className="flex gap-2 flex-wrap pt-2">
                <Badge variant="secondary">TypeScript</Badge>
                <Badge variant="secondary">Nest JS</Badge>
                <Badge variant="secondary">SQL</Badge>
                <Badge variant="secondary">TypeORM</Badge>
                <Badge variant="secondary">Cybersecurity</Badge>
                <Badge variant="secondary">CI/CD</Badge>
                <Badge variant="secondary">Git</Badge>
              </div>
            </div>
          </div>

          <div className="space-y-6 md:w-1/2">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <GraduationCap className="text-muted-foreground" />
                <div>
                  <h3 className="font-semibold">Bachelor Développeur Web Full-Stack</h3>
                  <p className="text-sm text-muted-foreground">Ecole Multimédia • 2023 - 2026</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                I'm currently in my second year of a 3-year cursus for a full-stack web developer
                bachelor at l'Ecole Multimédia
              </p>
              <div className="flex gap-2 flex-wrap pt-2">
                <Badge variant="secondary">Frontend</Badge>
                <Badge variant="secondary">Backend</Badge>
                <Badge variant="secondary">HTML</Badge>
                <Badge variant="secondary">CSS</Badge>
                <Badge variant="secondary">JavaScript</Badge>
                <Badge variant="secondary">React</Badge>
                <Badge variant="secondary">PHP</Badge>
                <Badge variant="secondary">Symfony</Badge>
                <Badge variant="secondary">SQL</Badge>
                <Badge variant="secondary">UI/UX</Badge>
              </div>
            </div>
          </div>

          <Separator />

          <div className="space-y-6 md:w-1/2">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Building className="text-muted-foreground" />
                <div>
                  <h3 className="font-semibold">Crew Member</h3>
                  <p className="text-sm text-muted-foreground">McDonalds • 2023 - Present</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                As a part-time job, working as a crew member at McDonald's has helped me develop
                strong customer service skills, teamwork, and the ability to thrive in a fast-paced
                environment.
              </p>
              <div className="flex gap-2 flex-wrap pt-2">
                <Badge variant="secondary">Customer Service</Badge>
                <Badge variant="secondary">Teamwork</Badge>
                <Badge variant="secondary">Communication</Badge>
                <Badge variant="secondary">Time Management</Badge>
                <Badge variant="secondary">Multitasking</Badge>
                <Badge variant="secondary">Food Preparation</Badge>
                <Badge variant="secondary">POS Operation</Badge>
                <Badge variant="secondary">Adaptability</Badge>
              </div>
            </div>
          </div>

          <div className="space-y-6 md:w-1/2 ">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <GraduationCap className="text-muted-foreground" />
                <div>
                  <h3 className="font-semibold">Combattant de l'Artillerie Parachutiste</h3>
                  <p className="text-sm text-muted-foreground">
                    Armée de Terre Française • 2021 - 2023
                  </p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Serving as a combattant de l'artillerie parachutiste has strengthened my discipline,
                resilience, and ability to perform under pressure in demanding environments.
              </p>
              <div className="flex gap-2 flex-wrap pt-2">
                <Badge variant="secondary">Physical and Mental Endurance</Badge>
                <Badge variant="secondary">Tactical decision-making</Badge>
                <Badge variant="secondary">Team coordination</Badge>
                <Badge variant="secondary">Leadership</Badge>
                <Badge variant="secondary">JavaScript</Badge>
                <Badge variant="secondary">Artillery</Badge>
                <Badge variant="secondary">Adaptability</Badge>
                <Badge variant="secondary">Discipline</Badge>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
};
