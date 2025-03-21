import React from "react";

import { Card } from "@/components/ui/card";
import { CardHeader } from "@/components/ui/card";
import { CardTitle } from "@/components/ui/card";
import { CardDescription } from "@/components/ui/card";
import { CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Globe, Code } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export const ProjectsCard: React.FC = () => {
  return (
    <>
      <Card className="w-full min-w-[20rem]" id="projects">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Featured Projects</CardTitle>
          <CardDescription>Recent work and contributions</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold">LiteScript</h3>
                <div className="gap-2">
                  <Button variant="ghost" size="icon">
                    <a
                      href="https://www.github.com/martin-dinahet/litescript/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Code />
                    </a>
                  </Button>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                A simple JavaScript-like toy programming language featuring a lexer, and AST and a
                transpiler. Built with TypeScript and Deno.
              </p>
              <div className="flex gap-2 flex-wrap">
                <Badge variant="secondary">TypeScript</Badge>
                <Badge variant="secondary">JavaScript</Badge>
                <Badge variant="secondary">Deno</Badge>
              </div>
            </div>

            <Separator />

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold">Snippet Manager</h3>
                <div className="flex gap-2">
                  <Button variant="ghost" size="icon">
                    <a
                      href="https://www.github.com/martin-dinahet/snippet-manager/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Code />
                    </a>
                  </Button>
                  <Button variant="ghost" size="icon">
                    <a
                      href="https://www.martin-dinahet-snippet-manager.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Globe />
                    </a>
                  </Button>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                An app for storing an managing code snippets. Built using Vite, React, and Tailwind.
              </p>
              <div className="flex gap-2 flex-wrap">
                <Badge variant="secondary">TypeScript</Badge>
                <Badge variant="secondary">Vite JS</Badge>
                <Badge variant="secondary">React JS</Badge>
                <Badge variant="secondary">Tailwind CSS</Badge>
              </div>
            </div>

            <Separator />

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold">Pre-flight Checklist</h3>
                <div className="flex gap-2">
                  <Button variant="ghost" size="icon">
                    <a
                      href="https://www.github.com/martin-dinahet/pre-flight-checklist/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Code />
                    </a>
                  </Button>
                  <Button variant="ghost" size="icon">
                    <a
                      href="https://www.martin-dinahet-pre-flight-checklist.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Globe />
                    </a>
                  </Button>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                A front-end for interacting with a checklist API. Made with Next JS, shadcn/ui and
                Tailwind.
              </p>
              <div className="flex gap-2 flex-wrap">
                <Badge variant="secondary">TypeScript</Badge>
                <Badge variant="secondary">Next JS</Badge>
                <Badge variant="secondary">React JS</Badge>
                <Badge variant="secondary">Tailwind CSS</Badge>
                <Badge variant="secondary">shadcn/ui</Badge>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
};
