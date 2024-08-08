import { IPlanThesisData } from "@/docx/interfaces/planThesis";

const data: IPlanThesisData = {
  title: "nanotubos de carbono",
  students: ["eddy", "sucacahua"],
};

const DownloadButton = () => {
  const handleDownload = async () => {
    try {
      // Realiza el fetch del archivo DOCX desde el endpoint
      const response = await fetch("/api/thesis-plan", {
        method: "POST",
        headers: {
          "Content-Type":
            "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        },
        body: JSON.stringify(data),
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
  return <button onClick={handleDownload}>Descargar DOCX</button>;
};

export default DownloadButton;
