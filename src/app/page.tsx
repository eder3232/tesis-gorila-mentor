/**
 * v0 by Vercel.
 * @see https://v0.dev/t/fFz81IYDokn
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Header from "./_components/header";
import HeroSection from "./_components/hero-section";
import Importancia from "./_components/importancia";
import Docs from "./_components/docs";
import Footer from "./_components/footer";
import Contact from "./_components/contact";
import Faq from "./_components/faq";
import ContactProvisional from "./_components/contact-provisional";

export default function Component() {
  return (
    <div className="flex min-h-[100dvh] flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <Importancia />
        <Faq />
        <Docs />
        {/* <Contact /> */}
        <ContactProvisional />
      </main>
      <Footer />
    </div>
  );
}
