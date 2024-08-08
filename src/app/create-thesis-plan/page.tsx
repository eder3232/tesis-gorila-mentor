"use client";

import { Button } from "@/components/ui/button";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { Packer } from "docx";
import { saveAs } from "file-saver";
import DownloadButton from "./_components/DownloadButton";

const Page = () => {
  return (
    <div>
      <h1>Descargar Plan de Tesis:</h1>

      <p>Esta vez tiene que funcionar</p>
      <DownloadButton />
    </div>
  );
};

export default Page;
