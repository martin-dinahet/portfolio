"use client";

import { cn } from "@/lib/utils";
import { Header } from "@/components/punpun/Header";
import { HeroSection } from "@/components/punpun/HeroSection";

export default (): React.JSX.Element => {
  return (
    <div className={cn("w-screen h-screen")}>
      <Header />
      <HeroSection />
    </div>
  );
};
