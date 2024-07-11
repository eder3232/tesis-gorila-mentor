import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const HeroSection = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32" id="hero">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col justify-between md:flex-row">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Crea un plan de tesis exitoso
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Si eres estudiantes de ingeniería civil de la UCSM, sigue estos
                pasos para elaborar un plan de tesis que te ayude a culminar tu
                proyecto de grado.
              </p>
            </div>
            <div className="flex flex-col justify-center gap-2 min-[400px]:flex-row md:justify-start">
              <Link href="#faq" passHref legacyBehavior>
                <Button size={"lg"}>
                  <span className="text-xl">Empezar</span>
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative flex h-64 w-64 w-full justify-center md:h-96 md:w-96">
            <Image
              src="/images/brand/gorila3.png"
              alt="Thesis Plan"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
