import { Users } from "lucide-react";
import React from "react";

const AssignmentDraftReviewers = () => {
  return (
    <div className="grid grid-cols-[auto_1fr] items-start gap-6">
      <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-primary">
        <Users className="h-6 w-6 text-primary-foreground" />
      </div>
      <div className="grid gap-2">
        <h3 className="text-lg font-semibold">
          Asignación de dictaminadores de borrador de tesis
        </h3>
        <h4 className="text-sm font-semibold">60% Completado</h4>
        <p className="text-muted-foreground">
          Usualmente son los mismos docentes que fueron tus dictaminadores de
          plan de tesis y un tercer docente.
        </p>
      </div>
    </div>
  );
};

export default AssignmentDraftReviewers;
