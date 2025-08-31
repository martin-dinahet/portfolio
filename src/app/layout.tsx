import type { Metadata } from "next";
import type { FC, PropsWithChildren } from "react";

import "@/tailwind.css";

export const metadata: Metadata = {
  title: {
    default: "Martin Dinahet - Développeur Web Fullstack",
    template: "%s - Martin Dinahet",
  },
  description:
    "Site portfolio de Martin Dinahet, développeur web fullstack spécialisé en React, NextJS et TypeScript.",
  keywords: [
    "Martin Dinahet",
    "développeur web fullstack",
    "développeur web",
    "React",
    "NodeJS",
    "NextJS",
    "TypeScript",
    "portfolio",
  ],
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    other: [{ rel: "mask-icon", url: "/safari-pinned-tab.svg", color: "#5bdad5" }],
  },
  authors: [{ name: "Martin Dinahet" }],
  creator: "Martin Dinahet",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Martin Dinahet - Développeur web fullstack",
    description: "Découvrez mon portfolio: React, NextJS et les technologies du web modernes.",
    url: "/",
    siteName: "Martin Dinahet - Portfolio",
    images: [],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Martin Dinahet - Développeur Web Fullstack",
    description: "Explorez mon portfolio et mes projets.",
    images: [],
  },
  verification: {
    google: "",
    other: {
      me: ["mailto:martin.dinahet@proton.me"],
    },
  },
  alternates: {
    canonical: "/",
    languages: { "fr-FR": "/" },
    types: { "application/rss+xml": "/feed.xml" },
  },
  manifest: "/site.webmanifest",
};

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="en">
      <body className="min-h-screen w-screen antialiased">
        <main>{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
