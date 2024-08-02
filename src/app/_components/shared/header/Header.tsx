import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Roboto } from "next/font/google";
import { cn } from "@/lib/utils";
import MenuMobile from "./MenuMobile";

const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const Header = () => {
  return (
    <header className="fixed left-0 top-0 z-10 flex h-16 w-full items-center justify-between bg-primary">
      <div className="container flex h-full items-center justify-between">
        <Link
          href="#"
          className="flex items-center justify-center"
          prefetch={false}
        >
          <Image
            className="h-14 w-auto"
            src="/images/brand/logo2.png"
            width={448}
            height={256}
            alt="University Logo"
          />

          <span
            className={cn(
              "hidden text-xl font-bold text-primary-foreground md:block md:text-2xl",
              roboto.className,
            )}
          >
            Tesis Gorila Mentor
          </span>
        </Link>
        <MenuMobile />
        <nav className="hidden gap-4 sm:gap-6 lg:flex">
          <Link
            href="#hero"
            className="text-sm font-medium text-primary-foreground underline-offset-4 hover:underline"
            prefetch={false}
          >
            Inicio
          </Link>
          <Link
            href="#timeline"
            className="text-sm font-medium text-primary-foreground underline-offset-4 hover:underline"
            prefetch={false}
          >
            Pasos
          </Link>
          <Link
            href="#faq"
            className="text-sm font-medium text-primary-foreground underline-offset-4 hover:underline"
            prefetch={false}
          >
            Preguntas Frecuentes
          </Link>
          <Link
            href="#documents"
            className="text-sm font-medium text-primary-foreground underline-offset-4 hover:underline"
            prefetch={false}
          >
            Documentos
          </Link>
          <Link
            href="#contact"
            className="text-sm font-medium text-primary-foreground underline-offset-4 hover:underline"
            prefetch={false}
          >
            Contacto
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
