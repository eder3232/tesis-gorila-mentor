import { Document, Packer, Paragraph, TextRun, ImageRun } from "docx";
import { type NextResponse, type NextRequest } from "next/server";
import * as XLSX from "xlsx";
// import { saveAs } from 'file-saver'

import { promises as fs } from "fs";
import { join } from "path";

export async function GET(request: NextRequest, res: NextResponse) {
  const imagePath = join(process.cwd(), "/public/images/brand/gorila3.png");

  // Leer la imagen y convertirla a base64
  const imageBuffer = await fs.readFile(imagePath);
  const imageBase64 = imageBuffer.toString("base64");

  // Crear un nuevo documento
  const doc = new Document({
    sections: [
      {
        children: [
          new Paragraph({
            children: [
              new TextRun("Hola, soy una imagen: "),
              new ImageRun({
                data: Uint8Array.from(atob(imageBase64), (c) =>
                  c.charCodeAt(0),
                ),
                transformation: {
                  width: 100,
                  height: 100,
                },
              }),
            ],
          }),
        ],
      },
    ],
  });

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
