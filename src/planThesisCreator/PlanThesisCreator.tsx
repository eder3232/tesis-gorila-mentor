"use client";

import ConsultButton from "./components/ConsultButton";
import DownloadButton from "./components/DownloadButton";
import FormPlanThesis from "./components/FormPlanThesis";

const PlanThesisCreator = () => {
  return (
    <div className="space-y-4">
      <h1>Elabora tu esqueleto de plan de tesis:</h1>

      <FormPlanThesis />

      <ConsultButton />

      <DownloadButton />
    </div>
  );
};

export default PlanThesisCreator;
