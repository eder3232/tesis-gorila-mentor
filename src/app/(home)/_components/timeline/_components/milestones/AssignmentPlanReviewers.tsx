import { Users } from "lucide-react";
import React from "react";

const AssignmentPlanReviewers = () => {
  return (
    <div className="grid grid-cols-[auto_1fr] items-start gap-6">
      <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-primary">
        <Users className="h-6 w-6 text-primary-foreground" />
      </div>
      <div className="grid gap-2">
        <h3 className="text-lg font-semibold">
          Asignación de dictaminadores de plan de tesis
        </h3>
        <h4 className="text-sm font-semibold">20% Completado</h4>
        <p className="text-muted-foreground">
          Te asignaran dos docentes de tu línea de investigación para que
          revisen tu plan de tesis.
        </p>
      </div>
    </div>
  );
};

export default AssignmentPlanReviewers;
