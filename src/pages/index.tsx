"use client";

import React from "react";

import { AboutMeCard } from "@/components/about-me-card";
import { ProjectsCard } from "@/components/projects-card";
import { MyExperienceCard } from "@/components/my-experience-card";

export const Index: React.FC = () => {
  return (
    <main className="w-full flex flex-col mx-auto gap-4 p-4 sm:p-6 md:p-8 max-w-4xl">
      <div className="flex flex-col md:flex-row gap-4">
        <AboutMeCard />
        <ProjectsCard />
      </div>
      <MyExperienceCard />
    </main>
  );
};
