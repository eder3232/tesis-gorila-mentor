import { UserCheck } from "lucide-react";
import React from "react";

const AdvisorAssignment = () => {
  return (
    <div className="grid grid-cols-[auto_1fr] items-start gap-6">
      <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-primary">
        <UserCheck className="h-6 w-6 text-primary-foreground" />
      </div>
      <div className="grid gap-2">
        <h3 className="text-lg font-semibold">Asignación de asesor de tesis</h3>
        <h4 className="text-sm font-semibold">40% Completado</h4>
        <p className="text-muted-foreground">
          Se te asignará un asesor de tésis para que te guíe en el proceso de
          elaboración de tu tésis.
        </p>
      </div>
    </div>
  );
};

export default AdvisorAssignment;
