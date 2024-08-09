import { MicVocal } from "lucide-react";
import React from "react";

const SupportingThesis = () => {
  return (
    <div className="grid grid-cols-[auto_1fr] items-start gap-6">
      <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-primary">
        <MicVocal className="h-6 w-6 text-primary-foreground" />
      </div>
      <div className="grid gap-2">
        <h3 className="text-lg font-semibold">
          Asignación de jurados y sustentación de tesis
        </h3>
        <h4 className="text-sm font-semibold">80% Completado</h4>
        <p className="text-muted-foreground">
          Este es el día más importante de tu vida universitaria, la
          sustentación de tu tesis.
        </p>
      </div>
    </div>
  );
};

export default SupportingThesis;
