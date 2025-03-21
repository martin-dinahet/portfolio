import React from "react";

import { Card } from "@/components/ui/card";
import { CardHeader } from "@/components/ui/card";
import { CardTitle } from "@/components/ui/card";
import { CardDescription } from "@/components/ui/card";
import { CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building } from "lucide-react";

export const MyExperienceCard: React.FC = () => {
  return (
    <>
      <Card className="w-full min-w-[20rem]" id="my-experience">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">My Experience</CardTitle>
          <CardDescription>Education and Professional Journey</CardDescription>
        </CardHeader>
        <CardContent className="flex gap-6">
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Building className="text-muted-foreground" />
                <div>
                  <h3 className="font-semibold">Job Title</h3>
                  <p className="text-sm text-muted-foreground">Company name • Time Period</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut repudiandae inventore
                tempora accusantium, error iure beatae voluptatum eligendi nemo.
              </p>
              <div className="flex gap-2 flex-wrap pt-2">
                <Badge variant="secondary">Skill used</Badge>
                <Badge variant="secondary">Skill used</Badge>
                <Badge variant="secondary">Skill used</Badge>
                <Badge variant="secondary">Skill used</Badge>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Building className="text-muted-foreground" />
                <div>
                  <h3 className="font-semibold">Job Title</h3>
                  <p className="text-sm text-muted-foreground">Company name • Time Period</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut repudiandae inventore
                tempora accusantium, error iure beatae voluptatum eligendi nemo.
              </p>
              <div className="flex gap-2 flex-wrap pt-2">
                <Badge variant="secondary">Skill used</Badge>
                <Badge variant="secondary">Skill used</Badge>
                <Badge variant="secondary">Skill used</Badge>
                <Badge variant="secondary">Skill used</Badge>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
};
