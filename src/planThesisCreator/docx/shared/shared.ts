import { HeadingLevel, Paragraph, TextRun } from "docx";

export const createHeading1 = (text: string) => {
  return new Paragraph({
    children: [
      new TextRun({
        text,
        bold: true,
        size: `${16}pt`,
        break: 2,
      }),
    ],
    heading: HeadingLevel.HEADING_1,
  });
};

export const createHeading2 = (text: string) => {
  return new Paragraph({
    children: [
      new TextRun({
        text,
        bold: true,
        size: `${14}pt`,
        break: 2,
      }),
    ],
    heading: HeadingLevel.HEADING_2,
  });
};

export const createText = (text: string) => {
  return new Paragraph({
    children: [
      new TextRun({
        text,
        size: `${12}pt`,
        break: 1,
      }),
    ],
  });
};
