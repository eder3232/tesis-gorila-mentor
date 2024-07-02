import Image from "next/image";
import React from "react";

const Importancia = () => {
  return (
    <section className="w-full bg-muted py-12 md:py-24 lg:py-32">
      <div className="container flex flex-col justify-between gap-4 px-4 md:flex-row md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="flex">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Importancia de un buen plan de tesis
              </h2>
              <div className="relative h-12"></div>
            </div>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Elaborar un plan de tesis te ayudará a organizar tus ideas,
              establecer objetivos claros y mantener el enfoque de tu proyecto
              de grado. Esto aumentará tus posibilidades de éxito y te permitirá
              culminar tu tesis de manera eficiente.
            </p>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="relative h-72 w-72">
            <Image
              src="/images/brand/gorila7.png"
              alt="gorila"
              layout="fill"
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Importancia;
