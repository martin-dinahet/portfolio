import type { FC, PropsWithChildren } from "react";

export const Paragraph: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div>
      <p className="mb-4 text-base leading-relaxed text-neutral-700">{children}</p>
    </div>
  );
};
