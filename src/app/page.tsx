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
import HeroSection from "./_components/hero-section";
import Importancia from "./_components/importancia";
import Docs from "./_components/docs";
import Footer from "./_components/footer";
import Contact from "./_components/contact";
import Faq from "./_components/faq/faq";
import ContactProvisional from "./_components/contact-provisional";
import Timeline from "./_components/timeline/timeline";

export default function Component() {
  return (
    <main className="space-y-16 bg-green-200 md:space-y-32">
      <HeroSection />
      <Importancia />
      <Timeline />
      <Faq />
      <Docs />
      {/* <Contact /> */}
      <ContactProvisional />
    </main>
  );
}
