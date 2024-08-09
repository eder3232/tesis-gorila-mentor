import type { Metadata } from "next";
import Header from "./_components/shared/Header";
import Footer from "./_components/footer";

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
    <div>
      <div className="pb-64">
        <Header />
        <div className="container mb-16 flex justify-center pt-16">
          {children}
        </div>
      </div>
      <Footer />
    </div>
  );
}
