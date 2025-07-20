import type { FC } from "react";

const HomePage: FC = () => {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="card card-border w-lg">
        <div className="card-body flex w-full flex-col gap-4">
          <div className="skeleton h-32 w-full"></div>
          <div className="skeleton h-4 w-28"></div>
          <div className="skeleton h-4 w-full"></div>
          <div className="skeleton h-4 w-full"></div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
