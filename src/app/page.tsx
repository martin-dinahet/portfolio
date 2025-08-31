import Link from "next/link";
import type { FC } from "react";

const HomePage: FC = () => {
  return (
    <div className="flex min-h-screen items-center justify-center px-4 sm:px-4">
      <div className="flex w-full flex-col items-center justify-center">
        <div className="mockup-window bg-base-200 mx-4 w-full max-w-xl border sm:mx-0">
          <div className="flex flex-col items-center justify-center px-4 py-8 sm:px-8 md:py-12">
            <h1 className="mb-2 text-center text-2xl font-bold sm:text-3xl md:text-4xl">
              Martin Dinahet
            </h1>
            <p className="text-base-content mb-4 text-center text-base sm:text-lg">
              Développeur Web Fullstack
            </p>
            <p className="text-base-content text-center text-sm sm:text-base">
              Mon truc, c'est de transformer des idées en applications web fonctionnelles.
            </p>
            <div className="mt-8 flex w-full flex-col items-stretch gap-4 sm:w-auto sm:flex-row sm:items-center">
              <Link
                href="https://github.com/martin-dinahet"
                className="btn btn-primary w-full sm:w-auto"
              >
                Voir mes projets
              </Link>
              <Link href="/cv.pdf" className="btn btn-primary w-full sm:w-auto">
                Voir mon CV
              </Link>
              <Link
                href="mailto:martin.dinahet@proton.me"
                className="btn btn-outline w-full sm:w-auto"
              >
                Me contacter
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
