import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { LogOut, Menu, Settings } from "lucide-react";
import Image from "next/image";

const MenuMobile = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="sm:hidden">
          <Menu />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="sm:hidden">
        <div className="grid gap-4 p-4">
          <Link
            href="#"
            className="flex flex-col items-center gap-2 text-lg font-medium"
            prefetch={false}
          >
            <div className="min-h-32 min-w-32">
              <div className="relative h-32 w-32">
                <Image
                  src="/images/brand/logo3.png"
                  alt="logo"
                  layout="fill"
                  style={{ objectFit: "contain" }}
                />
              </div>
            </div>

            <span>Tesis Gorila Mentor</span>
          </Link>
          <nav className="grid gap-2">
            <Link
              href="#hero"
              className="text-sm font-medium text-primary-foreground underline-offset-4 hover:underline"
              prefetch={false}
            >
              Inicio
            </Link>
            <Link
              href="#timeline"
              className="text-sm font-medium underline-offset-4 hover:underline"
              prefetch={false}
            >
              Pasos
            </Link>
            <Link
              href="#faq"
              className="text-sm font-medium underline-offset-4 hover:underline"
              prefetch={false}
            >
              Preguntas Frecuentes
            </Link>
            <Link
              href="#documents"
              className="text-sm font-medium underline-offset-4 hover:underline"
              prefetch={false}
            >
              Documentos
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium underline-offset-4 hover:underline"
              prefetch={false}
            >
              Contacto
            </Link>
          </nav>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MenuMobile;
