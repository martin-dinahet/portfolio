import { Header } from "@/components/personal/Header";
import { CodeXml, Container, LaptopMinimal } from "lucide-react";

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
            <div className="flex justify-center w-full gap-4 text-neutral-400">
              <LaptopMinimal />
              <Container />
              <CodeXml />
            </div>
          </div>
        </section>
        <section className="flex items-center justify-center"></section>
      </div>
    </>
  );
};
