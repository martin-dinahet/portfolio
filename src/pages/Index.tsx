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
            <section className="flex-grow flex items-center justify-between px-16 h-[calc(100vh-4rem)]">
              <div className="max-w-2xl space-y-8">
                <h1 className="font-light leading-tight text-7xl">
                  Crafting digital experiences through code
                </h1>
                <p className="text-xl text-neutral-400">
                  Full-stack developer with a passion for minimal design and clean code.
                </p>
                <div className="flex gap-6 text-neutral-400">
                  <LaptopMinimal size={32} />
                  <Container size={32} />
                  <CodeXml size={32} />
                </div>
                <div className="flex items-center gap-6">
                  <a
                    href="https://github.com/martin-dinahet"
                    className={buttonVariants({ variant: "default", size: "lg" })}>
                    <GithubIcon className="mr-2" />
                    Check out my Github
                  </a>
                  <a
                    href="public/resume.pdf"
                    download="resume.pdf"
                    className={buttonVariants({ variant: "outline", size: "lg" })}>
                    <FileUser className="mr-2" /> Download my resume
                  </a>
                </div>
              </div>
              <div className="flex items-center justify-center w-1/2">
                <div className="relative w-96 h-96">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 opacity-20 blur-3xl"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <CodeXml size={180} className="text-white" />
                  </div>
                </div>
              </div>
            </section>
          </>
        )}
      </div>
    </>
  );
};
