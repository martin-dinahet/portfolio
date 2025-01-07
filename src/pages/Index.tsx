import { Header } from "@/components/personal/Header";
import { LaptopMinimal } from "lucide-react";

export default () => {
  return (
    <>
      <div className="w-screen min-h-screen">
        <Header />
        <section className="flex items-center justify-center h-screen px-8">
          <div className="justify-center max-w-2xl mx-auto space-y-6 text-center">
            <h1 className="text-6xl font-light leading-tight">
              Crafting digital experiences through code
            </h1>
            <p className="text-neutral-400">
              Full-stack developer with a passion for minimal design and clean code.
            </p>
            <LaptopMinimal size={64} className="mx-auto text-neutral-400" />
          </div>
        </section>
        <section></section>
      </div>
    </>
  );
};
