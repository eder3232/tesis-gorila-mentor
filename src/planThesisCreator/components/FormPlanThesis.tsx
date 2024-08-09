"use client";
import { MuiTextArea } from "@/components/shared/utils/MuiTextArea";
import { Label } from "@/components/ui/label";
import {
  atomGetPlanThesisIdea,
  atomSetPlanThesisIdeaFieldString,
} from "@/planThesisCreator/store/thesisPlanIdea";
import { useAtom } from "jotai";
import React from "react";

const FormPlanThesis = () => {
  const [planThesisIdea] = useAtom(atomGetPlanThesisIdea);
  const [, setPlanThesisIdeaFieldString] = useAtom(
    atomSetPlanThesisIdeaFieldString,
  );

  return (
    <div>
      <div className="grid w-full gap-1.5">
        <Label htmlFor="thesisIdea">¿Cuál es tu idea de tesis?</Label>
        <MuiTextArea
          id="thesisIdea"
          minRows={2}
          className="resize-none"
          value={planThesisIdea.ideaDescription}
          onChange={(e) =>
            setPlanThesisIdeaFieldString({
              field: "ideaDescription",
              value: e.target.value,
            })
          }
        />
      </div>
    </div>
  );
};

export default FormPlanThesis;
