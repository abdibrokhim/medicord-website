import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CoMed Inc. - A software development company.",
  description: "CoMed, Inc. (the company) is a software development company dedicated to creating innovative solutions that address critical needs within the healthcare industry. Our focus lies in developing advanced software that designed to seamlessly integrate into the workflows of hospitals and clinics, enhancing the accuracy of diagnoses while fostering a supportive community among healthcare professionals and patients all over the globe.",
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
