import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import React from "react";
import { Header } from "@/components/header";
import { ThemeProvider } from "@/providers/theme-provider";
import { Author } from "@/components/author";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Gee Chatbot",
  description: "Chatbot Assistant",
};

type PropsLayout = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Readonly<PropsLayout>) {
  return (
    <html lang="en">
      <body
        className={cn("!min-h-screen font-sans antialiased", inter.variable)}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
