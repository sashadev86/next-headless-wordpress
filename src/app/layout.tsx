import type { Metadata } from "next";
import "./globals.scss";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Next Headless Wordpress",
  description: "next-headless-wordpress",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={"bg-slate-900 text-white"}>
        <Header/>
        {children}
      </body>
    </html>
  );
}
