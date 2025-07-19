import type { FC } from "react";

export const IndexPage: FC = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="card card-border flex w-lg flex-col gap-4">
        <div className="card-body">
          <div className="skeleton h-32 w-full"></div>
          <div className="skeleton h-4 w-28"></div>
          <div className="skeleton h-4 w-full"></div>
          <div className="skeleton h-4 w-full"></div>
        </div>
      </div>
    </div>
  );
};
