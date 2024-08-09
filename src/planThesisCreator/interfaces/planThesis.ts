import { IPlanteamientoProblema } from "./planteamientoProblema";

export interface IPlanThesisData {
  title: string;
  students: string[];
}
export interface IThesisPlanCreator {
  planThesisData: IPlanThesisData;
  problemStatementData: IPlanteamientoProblema;
}
