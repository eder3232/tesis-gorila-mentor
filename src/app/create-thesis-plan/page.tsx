"use client";

import { Button } from "@/components/ui/button";

const Page = () => {
  const handleDownload = async () => {
    const response = await fetch("/api/create-thesis-plan");
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "ThesisPlan.docx";
    document.body.appendChild(a);
    a.click();
    a.remove();
  };

  return (
    <div>
      <h1>Descargar Plan de Tesis:</h1>
      <Button onClick={handleDownload}>Descargar</Button>
    </div>
  );
};

export default Page;
