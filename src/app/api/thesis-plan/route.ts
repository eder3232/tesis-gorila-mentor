import { Document, Packer, Paragraph, TextRun, ImageRun } from "docx";
import { type NextResponse, type NextRequest } from "next/server";
import * as XLSX from "xlsx";
// import { saveAs } from 'file-saver'

import { promises as fs } from "fs";
import { join } from "path";
import { planThesisData, ThesisPlanCreator } from "@/docx/thesisPlan";

export async function GET(request: NextRequest, res: NextResponse) {
  // Crear un nuevo documento
  const doc = new ThesisPlanCreator().create(planThesisData);

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
