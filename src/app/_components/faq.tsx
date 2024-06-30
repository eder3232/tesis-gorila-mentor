import Image from "next/image";
import React from "react";

const Faq = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32" id="faq">
      <div className="container flex flex-col-reverse gap-8 px-4 md:flex-row md:px-6">
        <div className="relative h-96 w-96">
          <Image
            src="/images/brand/gorila1.png"
            layout="fill"
            objectFit="contain"
            alt="Thesis Plan"
          />
        </div>
        <div className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            Preguntas Frecuentes
          </h2>
          <div className="grid gap-6">
            <div className="grid gap-1">
              <h3 className="text-xl font-bold">
                ¿Dónde subo mi plan de tesis?
              </h3>
              <p className="text-muted-foreground">
                La tesis la tienes que subir en el siguiente link:
              </p>
              <a
                href="https://apps.ucsm.edu.pe/UCSMERP/tramites.php"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://apps.ucsm.edu.pe/UCSMERP/tramites.php
              </a>
            </div>
            <div className="grid gap-1">
              <h3 className="text-xl font-bold">
                ¿Como subo mi plan de tesis si somos dos personas?
              </h3>
              <p className="text-muted-foreground">
                De igual manera, solo debes agregar el código de alumno de tu
                compañero de tesis.
              </p>
            </div>
            <div className="grid gap-1">
              <h3 className="text-xl font-bold">
                ¿Si somos dos personas debemos subir el plan de tesis ambos?
              </h3>
              <p className="text-muted-foreground">
                No, basta que una persona suba el plan de tesis, y que en el
                formulario de subida agregue el código de alumno de su compañero
                de tesis.
              </p>
            </div>
            <div className="grid gap-1">
              <h3 className="text-xl font-bold">
                ¿Como saber si se subió correctamente mi plan de tesis?
              </h3>
              <p className="text-muted-foreground">
                Puedes visualizar el título de tu tesis y descargar el documento
                para comprobar de que este correctamente subido.
              </p>
            </div>
            <div className="grid gap-1">
              <h3 className="text-xl font-bold">
                Actualice mi plan de tesis, pero al momento de descargar,
                descarga la versión anterior ¿Qué puedo hacer?
              </h3>
              <p className="text-muted-foreground">
              Es usual que ocurra esto, el sistema suele demorar en actualizar tu plan, si lo verificas al siguiente día deberías poder visualizar tu plan actualizado.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
