"use client";
import React, { Component } from "react";

import { saveAs } from "file-saver";
import { Packer } from "docx";
import { experiences, education, skills, achievements } from "./cv-data";
import { DocumentCreator } from "./cv-generator";
import { Button } from "@/components/ui/button";

const Page = () => {
  const handleClick = () => {
    const documentCreator = new DocumentCreator();

    const doc = documentCreator.create();

    Packer.toBlob(doc).then((blob) => {
      console.log(blob);
      saveAs(blob, "cv.docx");
      console.log("Document created successfully");
    });
  };
  return (
    <div>
      <Button className="" onClick={() => handleClick()}>
        descargar!
      </Button>
    </div>
  );
};

export default Page;
