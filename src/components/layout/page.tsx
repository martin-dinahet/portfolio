import type { FC, PropsWithChildren } from "react";

export const Page: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div>
      <div className="flex min-h-screen flex-col">
        <main className="mx-auto w-full max-w-5xl flex-1 px-4 py-12">{children}</main>
      </div>
    </div>
  );
};
