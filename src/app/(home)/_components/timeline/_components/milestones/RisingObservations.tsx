import { FilePenLine } from "lucide-react";
import React from "react";

const RisingObservations = () => {
  return (
    <div className="grid grid-cols-[auto_1fr] items-start gap-6">
      <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-primary">
        <FilePenLine className="h-6 w-6 text-primary-foreground" />
      </div>
      <div className="grid gap-2">
        <h3 className="text-lg font-semibold">
          Levantamiento de observaciones
        </h3>
        <h4 className="text-sm font-semibold">90% Completado</h4>
        <p className="text-muted-foreground">
          Solo te queda levantar las observaciones de tu tesis para terminar, o
          si no tuviste observaciones en tu sustentacion, ¡felicidades!
        </p>
      </div>
    </div>
  );
};

export default RisingObservations;
