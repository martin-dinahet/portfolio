"use client";

import { cn } from "@/lib/utils";
import { buttonVariants } from "../ui/button";
import SparklesText from "../ui/sparkles-text";

const HeroSection = (): React.JSX.Element => {
  return (
    <div className="flex flex-col md:flex-row p-6 mt-[8rem]">
      {/* Mobile: Stacked Vertical Layout */}
      <div className="md:hidden text-center w-full">
        <SparklesText
          className="text-4xl font-bold mb-4"
          text="Transforming Ideas into Digital Experiences"
        />
        <p className="text-xl text-gray-600 mb-8">
          Full-stack developer turning complex challenges into intuitive solutions
        </p>

        <div className="w-full flex justify-center mb-8">
          <img
            src="/pfp.jpg"
            alt="profile picture"
            className="w-64 h-64 object-cover rounded-full hidden"
          />
        </div>

        <ul className={cn("flex space-x-2 mt-4 justify-center")}>
          <li>
            <a href="" className={cn(buttonVariants({ variant: "default" }))}>
              See my profile
            </a>
          </li>
          <li>
            <a href="" className={cn(buttonVariants({ variant: "secondary" }))}>
              Github
            </a>
          </li>
          <li>
            <a href="" className={cn(buttonVariants({ variant: "secondary" }))}>
              LinkedIn
            </a>
          </li>
        </ul>
      </div>

      {/* Desktop: Side-by-Side Layout */}
      <div className="hidden md:flex w-full items-center">
        <div className="w-2/3 pr-12">
          <SparklesText
            className="text-6xl font-bold mb-6"
            text="Transforming Ideas into Digital Experiences"
          />
          <p className="text-2xl text-gray-600">
            Full-stack developer turning complex challenges into intuitive solutions
          </p>
          <ul className={cn("flex space-x-2 mt-[5rem]")}>
            <li>
              <a href="" className={cn(buttonVariants({ variant: "default" }))}>
                See my profile
              </a>
            </li>
            <li>
              <a href="" className={cn(buttonVariants({ variant: "secondary" }))}>
                Github
              </a>
            </li>
            <li>
              <a href="" className={cn(buttonVariants({ variant: "secondary" }))}>
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
        <div className="w-1/3">
          <img
            src="/pfp.jpg"
            alt="profile picture"
            className="w-full rounded-full shadow-2xl hidden"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
