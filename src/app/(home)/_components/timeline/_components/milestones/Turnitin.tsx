import { Search } from "lucide-react";
import React from "react";

const Turnitin = () => {
  return (
    <div className="grid grid-cols-[auto_1fr] items-start gap-6">
      <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-primary">
        <Search className="h-6 w-6 text-primary-foreground" />
      </div>
      <div className="grid gap-2">
        <h3 className="text-lg font-semibold">Turnitin</h3>
        <h4 className="text-sm font-semibold">70% Completado</h4>
        <p className="text-muted-foreground">
          Se verificará la originalidad de tu tesis en Turnitin.
        </p>
      </div>
    </div>
  );
};

export default Turnitin;
