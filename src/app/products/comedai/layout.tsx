import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CoMed Inc. - CoMedAI",
  description: "CoMedAI: Our flagship product, CoMedAI, is an AI-powered Brain MRI analysis software that enhances diagnostic accuracy and streamlines workflows for radiologists and healthcare providers.",
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
