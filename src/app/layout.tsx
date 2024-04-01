import { Suspense } from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { Header } from "@/ui/organisms/Header";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Recruitment Task",
  description:
    "Tag browser provided by the Stack Overflow API  - solution of recruitment task to Mediporta Sp. z o.o.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    	<body className={inter.className}>
          <Header />
          <main>
              <Suspense fallback={<Loading />}>{children}</Suspense>      
          </main>
      </body>
    </html>
  );
}

function Loading() {
  return <h2 className="py-10 m-auto text-center">🌀 Loading...</h2>;
}
