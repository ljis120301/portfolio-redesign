import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeToggle } from "@/components/theme-toggle";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jason's Portfolio",
  description: "My personal portfolio website showcasing my projects and skills.a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-claude-beige dark:bg-gray-950 text-claude-text dark:text-white transition-colors duration-300`}
      >
        <ThemeProvider defaultTheme="system" storageKey="theme-preference">
          <ThemeToggle />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
