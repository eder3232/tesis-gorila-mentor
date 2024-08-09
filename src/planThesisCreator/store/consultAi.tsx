import { atom } from "jotai";
import { IConsultResult, IPlanThesisSchema } from "../interfaces/consult";

const atomConsult = atom<IConsultResult>({
  isValidThesisIdea: false,
  comment: "",
  planThesisSchema: {
    title: "",
    problemaObjetivoHipotesisGeneral: {
      problema: "",
      objetivo: "",
      hipotesis: "",
    },
    problemaObjetivoHipotesisEspecificas: [],
  },
});

export const atomGetConsult = atom((get) => get(atomConsult));

export const atomSetConsult = atom(
  null,
  (_get, set, payload: IConsultResult | undefined) => {
    if (payload === undefined) return;
    set(atomConsult, payload);
  },
);
