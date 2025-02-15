import { Document, Packer, Paragraph, TextRun, ImageRun } from "docx";
import { type NextResponse, type NextRequest } from "next/server";

import {
  planThesisData,
  ThesisPlanCreator,
} from "@/planThesisCreator/docx/thesisPlan";
import { IThesisPlanCreator } from "@/planThesisCreator/interfaces/planThesis";

export async function POST(request: NextRequest, res: NextResponse) {
  const data: IThesisPlanCreator = await request.json();

  // Crear un nuevo documento
  const doc = new ThesisPlanCreator().create(data);

  // Generar el archivo
  const buffer = await Packer.toBuffer(doc);

  return new Response(buffer, {
    headers: {
      "Content-Disposition": "attachment; filename=example.docx",
      "Content-Type":
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    },
  });
}
