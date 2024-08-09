"use client";

import { Button } from "@/components/ui/button";
import { IPlanThesisData } from "@/planThesisCreator/interfaces/planThesis";
import { atomGetDataThesisPlanCreator } from "../store/dataThesisPlanCreator";
import { useAtom } from "jotai";

const DownloadButton = () => {
  const [dataThesisPlanCreator] = useAtom(atomGetDataThesisPlanCreator);
  const handleDownload = async () => {
    try {
      // Realiza el fetch del archivo DOCX desde el endpoint
      const response = await fetch("/api/thesis-plan", {
        method: "POST",
        headers: {
          "Content-Type":
            "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        },
        body: JSON.stringify(dataThesisPlanCreator),
      });

      if (!response.ok) {
        throw new Error("Error al descargar el archivo");
      }

      // Convierte la respuesta en un Blob
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);

      // Crea un enlace de descarga
      const a = document.createElement("a");
      a.href = url;
      a.download = "nombre_del_archivo.docx";
      document.body.appendChild(a);
      a.click();

      // Limpia el enlace de descarga
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error al descargar el archivo:", error);
    }
  };
  return <Button onClick={handleDownload}>Descargar en formato WORD.</Button>;
};

export default DownloadButton;
