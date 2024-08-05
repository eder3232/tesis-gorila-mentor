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

export function createCover({
  title,
  authors,
}: {
  title: string;
  authors: string[];
}): Paragraph[] {
  return [
    new Paragraph({
      children: [
        new TextRun({
          text: "Universidad Católica de Santa María",
          bold: true,
          size: `${16}pt`,
          break: 2,
        }),
        new TextRun({
          text: "Facultad de Arquitectura, Ingeniería Civil y del Ambiente",
          bold: true,
          size: `${16}pt`,
          break: 2,
        }),
        new TextRun({
          text: "Escuela Profesional de Ingeniería Civil",
          bold: true,
          size: `${16}pt`,
          break: 2,
        }),
        // new ImageRun({
        //   data: `data:image/png;base64,${ucsmLogo}`,
        //   transformation: {
        //     width: 200,
        //     height: 200,
        //   },
        // }),
        new TextRun({
          text: "",
          break: 1,
        }),
        new ImageRun({
          data: fs.readFileSync(
            join(process.cwd(), "/public/images/ucsm/Escudo-UCSM.png"),
          ),
          transformation: {
            width: 200,
            height: 200,
          },
        }),
        new TextRun({
          text: "Plan de Tesis",
          bold: true,
          size: 24,
          break: 2,
          allCaps: true,
        }),
      ],
      alignment: AlignmentType.CENTER,
    }),
    new Paragraph({
      children: [
        new TextRun({
          text: title,
          size: `${12}pt`,
          break: 2,
          allCaps: true,
        }),
      ],
      alignment: AlignmentType.JUSTIFIED,
    }),

    createAuthors(authors),

    new Paragraph({
      children: [
        new TextRun({
          text: "Arequipa - Perú",
          size: `${12}pt`,
          break: 2,
        }),
        new TextRun({
          text: new Date().getFullYear().toString(),
          size: `${12}pt`,
          break: 2,
        }),
      ],
      alignment: AlignmentType.CENTER,
    }),
  ];
}

const createAuthors = (authors: string[]): Paragraph => {
  let presentedByText: string;

  if (authors.length === 1) {
    presentedByText = "Presentado por el bachiller:";
  } else if (authors.length === 2) {
    presentedByText = "Presentado por los bachilleres:";
  } else {
    presentedByText = "";
  }

  const presentedBy = new TextRun({
    text: presentedByText,
    size: `${12}pt`,
    break: 2,
  });

  const authorsText = authors.map((author) => {
    return new TextRun({
      text: author,
      bold: true,
      size: `${12}pt`,
      break: 1,
    });
  });

  return new Paragraph({
    children: [
      presentedBy,
      ...authorsText,
      new TextRun({
        text: "Para obtener el Título Profesional de Ingeniero Civil",
        size: `${12}pt`,
        break: 3,
      }),
    ],
    alignment: AlignmentType.LEFT,
    indent: {
      left: (6 * 1440) / 2,
    },
  });
};
