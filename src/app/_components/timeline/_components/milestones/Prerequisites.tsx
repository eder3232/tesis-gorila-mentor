import { ListChecks } from "lucide-react";
import React from "react";

const Prerequisites = () => {
  return (
    <div className="grid grid-cols-[auto_1fr] items-start gap-6">
      <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-primary">
        <ListChecks className="h-6 w-6 text-primary-foreground" />
      </div>
      <div className="grid gap-2">
        <h3 className="text-lg font-semibold">Prerequisitos</h3>
        {/* <h4 className="text-sm font-semibold">
          Para comenzar a elaborar tu tesis debes tener el grado académico de
          bachiller.
        </h4> */}
        <p className="text-muted-foreground">
          Para comenzar a elaborar tu tesis debes tener el grado académico de
          bachiller.
        </p>
      </div>
    </div>
  );
};

export default Prerequisites;
