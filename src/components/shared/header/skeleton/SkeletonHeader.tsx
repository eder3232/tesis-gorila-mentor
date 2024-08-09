import { cn } from "@/lib/utils";
import { Roboto } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const SkeletonHeader = () => {
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
      </div>
    </header>
  );
};

export default SkeletonHeader;
