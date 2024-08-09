"use client";

import { Button } from "@/components/ui/button";
import { atomGetPlanThesisIdea } from "@/planThesisCreator/store/thesisPlanIdea";
import { useAtom } from "jotai";
import { Joke, streamObjectActionThesisPlan } from "../actions/action";
import { useState } from "react";
import { readStreamableValue } from "ai/rsc";
import { atomGetConsult, atomSetConsult } from "../store/consult";

import { useChat } from "ai/react";

const ConsultButton = () => {
  const [planThesisIdea] = useAtom(atomGetPlanThesisIdea);
  const [consult] = useAtom(atomGetConsult);
  const [, setConsult] = useAtom(atomSetConsult);

  const { messages, input, handleInputChange, handleSubmit, isLoading, stop } =
    useChat({
      keepLastMessageOnError: true,
    });

  return (
    <div>
      <Button
        onClick={async () => {
          console.log("Generar");
          const result = await streamObjectActionThesisPlan({
            thesisIdea: planThesisIdea.ideaDescription,
          });
          for await (const delta of readStreamableValue(result))
            setConsult(delta);
        }}
        disabled={isLoading}
      >
        Generar
      </Button>

      <div>{JSON.stringify(consult, null, 2)}</div>
    </div>
  );
};

export default ConsultButton;
