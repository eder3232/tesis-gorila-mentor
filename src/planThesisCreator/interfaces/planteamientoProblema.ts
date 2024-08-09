export interface IProblemaObjetivoHipotesisEspecifica {
  problemaEspecifico: string;
  objetivoEspecifico: string;
  hipotesisEspecifica: string;
}

export interface IPlanteamientoProblema {
  desarrolloProblematica: string;
  problemaGeneral: string;
  objetivoGeneral: string;
  hipotesisGeneral: string;
  POHE: IProblemaObjetivoHipotesisEspecifica[];
  // justificacion:string
}
