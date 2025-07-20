import type { FC, PropsWithChildren } from "react";

export const Section: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div>
      <section className="mx-auto max-w-4xl px-4 py-16">{children}</section>
    </div>
  );
};
