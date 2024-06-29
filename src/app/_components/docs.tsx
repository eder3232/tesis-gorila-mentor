import Link from "next/link";
import React from "react";

const documentos = [
  {
    titulo: "Esquema de proyecto de tesis - referencial",
    descripcion:
      "Descarga nuestra plantilla de plan de tesis para guiarte en la elaboración de tu proyecto.",
    link: "/docs/EsquemaProyectoTesisReferencial.DOCX",
  },
  {
    titulo: "Manual de tesis del alumno",
    descripcion:
      "Consulta nuestra guía completa sobre los pasos para elaborar una tesis exitosa.",
    link: "/docs/ManualTesisAlumno.pdf",
  },

  {
    titulo: "Nuevo reglamento de grados y títulos de la FAICA",
    descripcion: "Consulta el nuevo reg",
    link: "/docs/NuevoReglamentoGradosTitulos.pdf",
  },
  {
    titulo:
      "Proceso administrativo para la colación profesional después de la sustentación",
    descripcion: "Consulta el proceso administrativo",
    link: "/docs/ProcesoAdministrativoParaColacionProfesionalDespues.pdf",
  },
];

const Docs = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32" id="documents">
      <div className="container px-4 md:px-6">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            Documentos de Apoyo Oficiales Brindados por la EPIC - UCSM
          </h2>
          <div className="grid gap-6">
            {documentos.map((doc, index) => (
              <div key={index}>
                <h3 className="text-xl font-bold">{doc.titulo}</h3>
                <p className="text-muted-foreground">{doc.descripcion}</p>
                <div className="flex justify-end">
                  <Link
                    href={doc.link}
                    className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Descargar
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Docs;
