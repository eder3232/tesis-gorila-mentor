import { CircleCheck } from "lucide-react";
import React from "react";

const ApprovalThesisDraft = () => {
  return (
    <div className="grid grid-cols-[auto_1fr] items-start gap-6">
      <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-primary">
        <CircleCheck className="h-6 w-6 text-primary-foreground" />
      </div>
      <div className="grid gap-2">
        <h3 className="text-lg font-semibold">
          Aprobación del borrador de tesis
        </h3>
        <h4 className="text-sm font-semibold">50% Completado</h4>
        <p className="text-muted-foreground">
          Tu borrador de tesis ha sido aprobado. Ya estás muy cerca de terminar!
        </p>
      </div>
    </div>
  );
};

export default ApprovalThesisDraft;
