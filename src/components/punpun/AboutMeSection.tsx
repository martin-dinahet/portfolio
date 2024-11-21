import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";

export const AboutMeSection = () => {
  return (
    <>
      <div className={cn("w-full p-6 mt-[5rem]")}>
        <div className={cn("w-full flex justify-center")}>
          <h2 className={cn("text-3xl font-bold")}>About me</h2>
        </div>
        <Card></Card>
      </div>
    </>
  );
};
