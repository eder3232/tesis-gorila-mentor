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

import fs from "fs";
import { join } from "path";
import { createHeading1, createHeading2, createText } from "../shared/shared";
import { IPlanteamientoProblema } from "@/planThesisCreator/interfaces/planteamientoProblema";
import { create } from "domain";

export function createProblemStatement({
  desarrolloProblematica,
  problemaGeneral,
  objetivoGeneral,
  hipotesisGeneral,
  POHE,
}: IPlanteamientoProblema): Paragraph[] {
  return [
    createHeading1("Planteamiento del Problema"),

    createHeading2("Desarrollo del problema"),
    createText(desarrolloProblematica),

    createHeading2("Problema general"),
    createText(problemaGeneral),

    createHeading2("Problemas específicos"),
    ...POHE.map(
      (p) =>
        new Paragraph({
          children: [
            new TextRun({
              text: p.problemaEspecifico,
              size: `${12}pt`,
              break: 1,
            }),
          ],
        }),
    ),
    createHeading2("Objetivo general"),
    createText(objetivoGeneral),

    createHeading2("Objetivos específicos"),
    ...POHE.map((p) => createText(p.objetivoEspecifico)),

    createHeading2("Hipótesis general"),
    createText(hipotesisGeneral),

    createHeading2("Hipótesis específicas"),

    ...POHE.map((p) => createText(p.hipotesisEspecifica)),

    // createHeading2("Justificación"),
  ];
}
