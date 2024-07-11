import { CheckCheck } from "lucide-react";

const ApprovalThesisPlan = () => {
  return (
    <div className="grid grid-cols-[auto_1fr] items-start gap-6">
      <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-primary">
        <CheckCheck className="h-6 w-6 text-primary-foreground" />
      </div>
      <div className="grid gap-2">
        <h3 className="text-lg font-semibold">Aprobación del plan</h3>
        <h4 className="text-sm font-semibold">30% Completado</h4>
        <p className="text-muted-foreground">
          Felicidades, tu plan de tesis ha sido aprobado. Ahora puedes comenzar
          a trabajar en tu tesis.
        </p>
      </div>
    </div>
  );
};

export default ApprovalThesisPlan;
