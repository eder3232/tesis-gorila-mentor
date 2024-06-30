import Link from "next/link";
import { SocialIcon } from "react-social-icons";

const Footer = () => {
  return (
    <footer className="border-t bg-muted">
      <div className="container flex w-full shrink-0 flex-col items-center gap-2 px-4 py-6 sm:flex-row md:px-6">
        <div className="flex flex-col gap-2 sm:flex-row sm:gap-4">
          <Link
            href="#hero"
            className="text-xs underline-offset-4 hover:underline"
            prefetch={false}
          >
            Inicio
          </Link>
          <Link
            href="#faq"
            className="text-xs underline-offset-4 hover:underline"
            prefetch={false}
          >
            Preguntas Frecuentes
          </Link>
          <Link
            href="#documents"
            className="text-xs underline-offset-4 hover:underline"
            prefetch={false}
          >
            Documentos
          </Link>
          <Link
            href="#contact"
            className="text-xs underline-offset-4 hover:underline"
            prefetch={false}
          >
            Contacto
          </Link>
        </div>
        <div className="flex gap-4 sm:ml-auto sm:gap-6">
          <Link
            href="https://www.linkedin.com/in/eddy-eder-sucapuca-cruz-44b2681a2/"
            className="text-xs underline-offset-4 hover:underline"
            prefetch={false}
            passHref
            legacyBehavior
            target="_blank"
            rel="noopener noreferrer"
          >
            <SocialIcon className="h-5 w-5" network="linkedin" />
          </Link>
          <Link
            href="https://www.instagram.com/vrtur__/"
            className="text-xs underline-offset-4 hover:underline"
            prefetch={false}
            passHref
            legacyBehavior
            target="_blank"
            rel="noopener noreferrer"
          >
            <SocialIcon className="h-5 w-5" network="instagram" />
          </Link>
          <Link
            href="https://www.tiktok.com/@arturo.canazas"
            className="text-xs underline-offset-4 hover:underline"
            prefetch={false}
            passHref
            legacyBehavior
            target="_blank"
            rel="noopener noreferrer"
          >
            <SocialIcon className="h-5 w-5" network="tiktok" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
