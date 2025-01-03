import { cn } from "@/lib/utils";

export const Link = ({ href, children, className = "", ...props }) => {
  return (
    <>
      <a
        href={href}
        {...props}
        className={cn("rounded-md bg-base hover:bg-mantle transition p-3", className)}>
        {children}
      </a>
    </>
  );
};
