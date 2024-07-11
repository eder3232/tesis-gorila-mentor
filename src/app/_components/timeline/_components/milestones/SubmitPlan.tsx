import { CloudUpload } from "lucide-react";
import React from "react";

const SubmitPlan = () => {
  return (
    <div className="grid grid-cols-[auto_1fr] items-start gap-6">
      <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-primary">
        <CloudUpload className="h-6 w-6 text-primary-foreground" />
      </div>
      <div className="grid gap-2">
        <h3 className="text-lg font-semibold">Presentar tú plan de tesis</h3>
        <h4 className="text-sm font-semibold">10% Completado</h4>
        <p className="text-muted-foreground">
          Una vez hayas terminado de elaborar tu plan de tesis, debes subirlo al
          sistema.
        </p>
      </div>
    </div>
  );
};

export default SubmitPlan;
