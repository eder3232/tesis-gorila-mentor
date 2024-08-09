import {
  AlignmentType,
  Document,
  HeadingLevel,
  ImageRun,
  Packer,
  Paragraph,
  TabStopPosition,
  TabStopType,
  TextRun,
} from "docx";
import { ucsmLogo } from "./imageUcsm";
import fs from "fs";
import { join } from "path";
import { createCover } from "./sections/cover";
import { IPlanThesisData, IThesisPlanCreator } from "../interfaces/planThesis";
import { createProblemStatement } from "./sections/problem";
import { IPlanteamientoProblema } from "../interfaces/planteamientoProblema";

export const planThesisData: IPlanThesisData = {
  title:
    "Desarrollo de una Aplicación Web en React para el Análisis Estructural Utilizando el Método Matricial de Rigideces",
  students: ["Alumno 1", "Alumno 2"],
};

// type PlanThesisDataType = typeof planThesisData;

export class ThesisPlanCreator {
  //tslint:disable-next-line: typedef
  public create({
    planThesisData,
    problemStatementData,
  }: IThesisPlanCreator): Document {
    const document = new Document({
      styles: {
        paragraphStyles: [
          {
            id: "Normal",
            name: "Normal",
            run: {
              font: "Times New Roman",
            },
            paragraph: {
              spacing: {
                line: 276,
              },
            },
          },
        ],
      },
      sections: [
        {
          children: [
            ...createCover({
              title: planThesisData.title,
              authors: planThesisData.students,
            }),
            new Paragraph({
              children: [],
              pageBreakBefore: true,
            }),
            ...createProblemStatement(problemStatementData),
          ],
        },
      ],
    });

    return document;
  }
}
