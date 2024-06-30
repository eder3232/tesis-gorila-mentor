import Link from "next/link";
import React from "react";

const documentos = [
  {
    titulo: "Esquema de proyecto de tesis - referencial",
    descripcion:
      "Accede a una guía estructurada para planificar y desarrollar tu proyecto de tesis. Este documento incluye todos los lineamientos necesarios para organizar tu investigación de manera efectiva.",
    link: "/docs/EsquemaProyectoTesisReferencial.DOCX",
  },
  {
    titulo: "Manual de tesis del alumno",
    descripcion:
      "Obtén una guía completa y detallada para realizar tu tesis. Este manual incluye todos los pasos y requisitos necesarios para facilitar tu proceso.",
    link: "/docs/ManualTesisAlumno.pdf",
  },

  {
    titulo: "Nuevo reglamento de grados y títulos de la FAICA",
    descripcion:
      "Mantente informado sobre las últimas regulaciones para obtener tus grados y títulos. Este PDF incluye toda la información actualizada que necesitas.",
    link: "/docs/NuevoReglamentoGradosTitulos.pdf",
  },
  {
    titulo:
      "Proceso administrativo para la colación profesional después de la sustentación",
    descripcion:
      "Conoce todos los pasos y requisitos necesarios para completar tu colación profesional después de la sustentación. Este PDF te proporciona una guía clara y detallada.",
    link: "/docs/ProcesoAdministrativoParaColacionProfesionalDespues.pdf",
  },
  {
    titulo: "Requisitos para obtener el título profesional - EPIC",
    descripcion:
      "Descubre todos los requisitos necesarios para obtener tu título profesional en un solo documento. Este PDF incluye información detallada sobre los cursos, créditos, documentos y procedimientos necesarios.",
    link: "/docs/RequisitosTituloProfesionalEpic.pdf",
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
