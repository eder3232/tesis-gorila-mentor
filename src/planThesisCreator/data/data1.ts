import { IThesisPlanCreator } from "../interfaces/planThesis";

export const initialData: IThesisPlanCreator = {
  planThesisData: {
    title: "Titulo del plan de tesis",
    students: ["Alumno 1", "Alumno 2"],
  },
  problemStatementData: {
    desarrolloProblematica: "",
    problemaGeneral: "",
    objetivoGeneral: "",
    hipotesisGeneral: "",
    POHE: [],
  },
};
