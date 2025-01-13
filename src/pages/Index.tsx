import { Header } from "@/components/personal/Header";
import { buttonVariants } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { CodeXml, FileUser, GithubIcon } from "lucide-react";
import { Container } from "lucide-react";
import { LaptopMinimal } from "lucide-react";

export default () => {
  const isMobile = useIsMobile();

  return (
    <>
      <div className="w-screen min-h-screen">
        <Header />
        {isMobile && (
          <>
            <section className="flex items-center justify-center px-8 my-10">
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
                <div className="flex flex-col items-center gap-4">
                  <a
                    href="https://github.com/martin-dinahet"
                    className={buttonVariants({ variant: "link" })}>
                    <GithubIcon />
                    Check out my Github
                  </a>
                  <a
                    href="public/resume.pdf"
                    download="resume.pdf"
                    className={buttonVariants({ variant: "outline" })}>
                    <FileUser /> Download my resume
                  </a>
                </div>
              </div>
            </section>
          </>
        )}
        {!isMobile && (
          <>
            <section>{/* todo: make the desktop version */}</section>
          </>
        )}
      </div>
    </>
  );
};
