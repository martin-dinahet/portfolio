"use client";

import React from "react";

import { Card } from "@/components/ui/card";
import { CardContent } from "@/components/ui/card";
import { CardDescription } from "@/components/ui/card";
import { CardHeader } from "@/components/ui/card";
import { CardTitle } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import { AvatarImage } from "@/components/ui/avatar";
import { AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { GithubIcon, Newspaper } from "lucide-react";
import { LinkedinIcon } from "lucide-react";
import { Mail } from "lucide-react";

export const AboutMeCard: React.FC = () => {
  return (
    <>
      <Card className="w-full" id="about-me">
        <CardHeader className="flex flex-col items-center space-y-6 px-4 sm-px-6 md-px-8">
          <Avatar className="h-20 w-20 sm:h-24 sm:w-24 md:h-32 md:w-32">
            <AvatarImage src="/martin.jpg" />
            <AvatarFallback>MD</AvatarFallback>
          </Avatar>
          <div className="text-center space-y-2">
            <CardTitle className="text-2xl sm:text-3xl md:text-4xl font-bold">
              Martin Dinahet
            </CardTitle>
            <CardDescription className="text-sm sm:text-base">
              Junior Full Stack Web Developer
            </CardDescription>
          </div>
          <div className="flex gap-2 flex-wrap justify-center">
            <Badge variant="secondary">HTML</Badge>
            <Badge variant="secondary">TypeScript</Badge>
            <Badge variant="secondary">React</Badge>
            <Badge variant="secondary">Tailwind CSS</Badge>
            <Badge variant="secondary">Node</Badge>
            <Badge variant="secondary">Next</Badge>
            <Badge variant="secondary">PHP</Badge>
            <Badge variant="secondary">SQL</Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-6 px-4 sm:px-6 md:px-8">
          <div className="space-y-4 px-2">
            <p className="text-sm sm:text-base leading-relaxed">
              I'm a junior full-stack web developer with experience in building responsive,
              user-friendly applications. I specialize in JavaScript, React, and Node.js, with a
              focus on clean, maintainable code and efficient problem-solving.
            </p>
            <p className="text-sm sm:text-base leading-relaxed">
              I build clean, efficient web applications with a focus on simplicity, performance, and
              maintainable code. My approach prioritizes minimalism, ensuring seamless user
              experiences without unnecessary complexity.
            </p>
          </div>
          <Separator />
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <Button variant="secondary" className="w-full sm:w-auto" asChild>
              <a
                href="https://www.github.com/martin-dinahet/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GithubIcon className="mr-2 h-4 w-4" />
                GitHub
              </a>
            </Button>
            <Button variant="secondary" className="w-full sm:w-auto" asChild>
              <a
                href="https://www.linkedin.com/in/martin-dinahet-bb4895295/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedinIcon className="mr-2 h-4 w-4" />
                LinkedIn
              </a>
            </Button>
            <Button variant="secondary" className="w-full sm:w-auto" asChild>
              <a href="/cv.pdf">
                <Newspaper />
                Get my Resume
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </>
  );
};
