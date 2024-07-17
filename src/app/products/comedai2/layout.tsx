import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CoMed Inc. - CoMedAI 2.0",
  description: "CoMedAI 2.0: Building upon the foundation of CoMedAI, this upcoming version will incorporate automated image processing and feature extraction capabilities, further increasing efficiency and accessibility.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
