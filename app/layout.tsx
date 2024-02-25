import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Develop your skill",
  description: "sample website using Next JS 14 and TailwindCSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >{children}</body>
    </html>
  );
}
