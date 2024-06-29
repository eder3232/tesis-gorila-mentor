import Link from "next/link";
import { SocialIcon } from "react-social-icons";

const Footer = () => {
  return (
    <footer className="border-t bg-muted">
      <div className="container flex w-full shrink-0 flex-col items-center gap-2 px-4 py-6 sm:flex-row md:px-6">
        <div className="flex flex-col gap-2 sm:flex-row sm:gap-4">
          <Link
            href="#"
            className="text-xs underline-offset-4 hover:underline"
            prefetch={false}
          >
            Inicio
          </Link>
          <Link
            href="#"
            className="text-xs underline-offset-4 hover:underline"
            prefetch={false}
          >
            Preguntas Frecuentes
          </Link>
          <Link
            href="#"
            className="text-xs underline-offset-4 hover:underline"
            prefetch={false}
          >
            Documentos
          </Link>
          <Link
            href="#"
            className="text-xs underline-offset-4 hover:underline"
            prefetch={false}
          >
            Contacto
          </Link>
        </div>
        <div className="flex gap-4 sm:ml-auto sm:gap-6">
          <Link
            href="#"
            className="text-xs underline-offset-4 hover:underline"
            prefetch={false}
            passHref
            legacyBehavior
          >
            <SocialIcon className="h-5 w-5" network="twitter" />
          </Link>
          <Link
            href="#"
            className="text-xs underline-offset-4 hover:underline"
            prefetch={false}
            passHref
            legacyBehavior
          >
            <SocialIcon className="h-5 w-5" network="instagram" />
          </Link>
          <Link
            href="#"
            className="text-xs underline-offset-4 hover:underline"
            prefetch={false}
            passHref
            legacyBehavior
          >
            <SocialIcon className="h-5 w-5" network="tiktok" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
