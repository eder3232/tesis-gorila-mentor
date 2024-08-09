"use server";

import { DeepPartial, streamObject } from "ai";
import { openai } from "@ai-sdk/openai";
import { createStreamableValue } from "ai/rsc";
import { z } from "zod";
import { tesisPlanPrompt } from "./prompt";

const problemaObjetivoHipotesisGeneral = z.object({
  problema: z.string().describe("Problema general"),
  objetivo: z.string().describe("Objetivo general"),
  hipotesis: z.string().describe("Hipótesis general"),
});

const problemaObjetivoHipotesisEspecifica = z.object({
  problema: z.string().describe("Problema específico"),
  objetivo: z.string().describe("Objetivo específico"),
  hipotesis: z.string().describe("Hipótesis específica"),
});

const planThesisSchema = z
  .object({
    title: z.string().describe("Título de la tesis"),
    desarrolloProblema: z.string().describe("Desarrollo del problema"),
    problemaObjetivoHipotesisGeneral: problemaObjetivoHipotesisGeneral,
    problemaObjetivoHipotesisEspecifica: z
      .array(problemaObjetivoHipotesisEspecifica)
      .describe("Problemas, objetivos e hipótesis específicas"),
  })
  .optional();

const querySchema = z.object({
  isValidThesisIdea: z.boolean().describe("Es una idea de tesis válida"),
  comment: z.string().describe("Comentario sobre la idea de tesis"),
  planThesisSchema: planThesisSchema,
});

export type Joke = DeepPartial<typeof querySchema>;

export const streamObjectActionThesisPlan = async ({
  thesisIdea,
}: {
  thesisIdea: string;
}) => {
  const result = await streamObject({
    model: openai("gpt-4o"),
    temperature: 0.5,
    prompt: tesisPlanPrompt({ thesisIdea }),
    schema: querySchema,
  });
  return createStreamableValue(result.partialObjectStream).value;
};
