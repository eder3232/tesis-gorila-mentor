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
import { createCover } from "./sections/Cover";
import { IPlanThesisData } from "./interfaces/planThesis";

export const planThesisData: IPlanThesisData = {
  title:
    "Desarrollo de una Aplicación Web en React para el Análisis Estructural Utilizando el Método Matricial de Rigideces",
  students: ["Sucapuca Cruz, Eddy Eder", "Alumno 2"],
};

// type PlanThesisDataType = typeof planThesisData;

export class ThesisPlanCreator {
  //tslint:disable-next-line: typedef
  public create({ title, students }: IPlanThesisData): Document {
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
              title: title,
              authors: students,
            }),
            new Paragraph({
              children: [],
              pageBreakBefore: true,
            }),
          ],
        },
      ],
    });

    return document;
  }
}
