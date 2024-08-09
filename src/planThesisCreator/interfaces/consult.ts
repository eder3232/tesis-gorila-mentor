interface IPOH {
  problema: string;
  objetivo: string;
  hipotesis: string;
}

export interface IConsultResult {
  isValidThesisIdea: boolean;
  comment: string;
  planThesisSchema?: IPlanThesisSchema;
}
export interface IPlanThesisSchema {
  title: string;
  problemaObjetivoHipotesisGeneral: {
    problema: string;
    objetivo: string;
    hipotesis: string;
  };
  problemaObjetivoHipotesisEspecificas: IPOH[];
}
