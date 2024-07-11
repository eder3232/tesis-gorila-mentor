import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Header from "./_components/shared/header/Header";
import Footer from "./_components/footer";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Tesis Gorilla Mentor",
  description: "Hacemos fácil tu tesis",
  icons: [{ url: "/images/brand/icon.ico", href: "/images/brand/icon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "relative min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <div className="pb-64">
          <Header />
          <div className="container mb-64 flex justify-center pt-16">
            {children}
          </div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
