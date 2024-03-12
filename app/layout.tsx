import type { Metadata } from "next";
import { roboto_serif,inter,lusitana } from "./ui/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Botswana Central Medical Stores",
  description: "Botswana Central Medical Stores App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lusitana.className} antialiased`}>{children}</body>
    </html>
  );
}
