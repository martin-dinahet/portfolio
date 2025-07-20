import type { FC, PropsWithChildren } from "react";

export const Container: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div>
      <div className="mx-auto max-w-7xl px-6">{children}</div>
    </div>
  );
};
