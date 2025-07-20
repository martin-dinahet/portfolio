import type { FC, PropsWithChildren } from "react";

export const Subheading: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div>
      <h3 className="mb-2 text-lg font-medium text-neutral-600">{children}</h3>
    </div>
  );
};
