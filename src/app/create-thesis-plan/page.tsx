"use client";

import { Button } from "@/components/ui/button";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

const Page = () => {
  return (
    <div>
      <h1>Descargar Plan de Tesis:</h1>

      <Link
        className={buttonVariants({ variant: "default" })}
        href="/api/thesis-plan"
      >
        Click here
      </Link>
    </div>
  );
};

export default Page;
