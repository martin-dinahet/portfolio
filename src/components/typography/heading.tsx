import type { FC, PropsWithChildren } from "react";

export const Heading: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div>
      <h2 className="mb-4 text-2xl font-semibold tracking-tight">{children}</h2>
    </div>
  );
};
