import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CoMedAI: Our flagship product, CoMedAI, is an AI-powered Brain MRI analysis software that enhances diagnostic accuracy and streamlines workflows for radiologists and healthcare providers.",
  description: "Millions face challenges accessing quality healthcare, particularly when it comes to complex diagnoses like brain disorders. Lengthy wait times, potential for human error, and limited access to specialists hinder timely and accurate care. We're driven by a commitment to developing technological innovations that enhance the accuracy and efficiency of medical diagnostics, ultimately leading to improved patient care and outcomes. We envision a future where a supportive and interconnected healthcare community thrives, seamlessly connecting patients, medical professionals, and institutions to foster collaboration, knowledge sharing, and a patient-centric approach to healthcare.",
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
