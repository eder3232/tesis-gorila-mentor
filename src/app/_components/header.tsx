import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="flex items-center justify-between bg-primary">
      <div className="container flex h-20 items-center justify-between px-4 lg:px-6">
        <Link
          href="#"
          className="flex items-center justify-center"
          prefetch={false}
        >
          <Image
            className="h-14 w-auto"
            src="/images/brand/logo.jpg"
            width={448}
            height={256}
            alt="University Logo"
          />
        </Link>
        <nav className="hidden gap-4 sm:gap-6 lg:flex">
          <Link
            href="#"
            className="text-sm font-medium text-primary-foreground underline-offset-4 hover:underline"
            prefetch={false}
          >
            Inicio
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
