import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Brian Moses - Landing Page",
  description: "Welcome to Brian Moses' landing page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <div className="flex min-h-screen flex-col bg-[#0a0a0a]">
          <main className="flex-1">{children}</main>
        </div>
      </body>
    </html>
  );
}

