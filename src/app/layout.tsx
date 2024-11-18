import { cn } from "@/lib/utils";

import "./globals.css";

export const metadata = {
  title: "Martin Dinahet - Portfolio",
  description: "My Portfolio as a Full-Stack Web Developer",
};

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <html lang="en">
      <body className={cn("antialiased")}>{children}</body>
    </html>
  );
};

export default RootLayout;
