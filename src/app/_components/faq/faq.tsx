import Image from "next/image";
import React from "react";
import Previous from "./previous";
import Before from "./before";
import During from "./during";
import Submit from "./submit";

const Faq = () => {
  return (
    <section className="container py-12 md:py-24 lg:py-32" id="faq">
      {/* <div className="flex justify-center">
          <div className="relative h-96 w-96">
            <Image
              src="/images/brand/gorila1.png"
              alt="gorila"
              layout="fill"
              style={{ objectFit: "contain" }}
            />
          </div>
        </div> */}

      <div className="space-y-4">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
          ¿Cuál es el proceso de elaborar una tesis?
        </h2>
        <div className="flex flex-col">
          <Previous />
          <Before />
          <Submit />
          <During />
        </div>
      </div>
    </section>
  );
};

export default Faq;
