import { atom } from "jotai";
import { IThesisPlanCreator } from "../interfaces/planThesis";
import { initialData } from "../data/data1";
import { atomGetConsult } from "./consult";
import { IProblemaObjetivoHipotesisEspecifica } from "../interfaces/planteamientoProblema";

const atomDataThesisPlanCreator = atom<IThesisPlanCreator>(initialData);

export const atomGetDataThesisPlanCreator = atom((get) => {
  const consult = get(atomGetConsult);
  const planThesis = consult.planThesisSchema;
  const oldState = get(atomDataThesisPlanCreator);

  const processedPOHE: IProblemaObjetivoHipotesisEspecifica[] =
    planThesis?.problemaObjetivoHipotesisEspecifica?.map((item) => ({
      problemaEspecifico: item?.problema || "",
      objetivoEspecifico: item?.objetivo || "",
      hipotesisEspecifica: item?.hipotesis || "",
    })) || [];

  oldState.problemStatementData = {
    desarrolloProblematica: planThesis?.desarrolloProblema || "",
    problemaGeneral:
      planThesis?.problemaObjetivoHipotesisGeneral?.problema || "",
    objetivoGeneral:
      planThesis?.problemaObjetivoHipotesisGeneral?.objetivo || "",
    hipotesisGeneral:
      planThesis?.problemaObjetivoHipotesisGeneral?.hipotesis || "",
    POHE: processedPOHE,
  };
  return oldState;
});
