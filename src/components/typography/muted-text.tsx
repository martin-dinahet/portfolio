import type { FC, PropsWithChildren } from "react";

export const MutedText: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div>
      <p className="text-sm text-neutral-500">{children}</p>
    </div>
  );
};
