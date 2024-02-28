import type { Metadata } from "next";
import { raleway } from "./ui/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Panopto Transcriber",
  description:
    "A website that allows students to collaboratively transcribe Panopto videos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${raleway.className} antialiased`}>{children}</body>
    </html>
  );
}
