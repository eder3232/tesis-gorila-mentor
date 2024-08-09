import { GraduationCap } from "lucide-react";
import React from "react";

const CompletedThesis = () => {
  return (
    <div className="grid grid-cols-[auto_1fr] items-start gap-6">
      <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-primary">
        <GraduationCap className="h-6 w-6 text-primary-foreground" />
      </div>
      <div className="grid gap-2">
        <h3 className="text-lg font-semibold">Tesis completada</h3>
        <h4 className="text-sm font-semibold">100% Completado</h4>
        <p className="text-muted-foreground">
          Felidades, terminaste tu tesis, prepara tu mejor traje para la
          ceremonia de graduación!
        </p>
      </div>
    </div>
  );
};

export default CompletedThesis;
