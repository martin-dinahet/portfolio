import type { FC, PropsWithChildren } from "react";

export const Title: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div>
      <h1 className="mb-6 text-4xl font-bold tracking-tight">{children}</h1>
    </div>
  );
};
