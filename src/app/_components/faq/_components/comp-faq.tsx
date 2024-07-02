import { TriangleAlert } from "lucide-react";
import Image from "next/image";

interface ReactNodeOrString {
  children: React.ReactNode | string | null;
}

interface ReactNode {
  children: React.ReactNode | null;
}

const CompFaqDiv = ({ children }: ReactNodeOrString) => {
  return (
    <div className="flex flex-col items-center gap-4 md:flex-row">
      {children}
    </div>
  );
};

const CompFaqTittle = ({ children }: ReactNodeOrString) => {
  return <h3 className="text-xl font-bold">{children}</h3>;
};

const CompFaqQuestionsList = ({ children }: ReactNodeOrString) => {
  return <div className="mt-4">{children}</div>;
};

const CompFaqQuestionContainer = ({ children }: ReactNode) => {
  return <div className="flex flex-col">{children}</div>;
};

const CompFaqQuestion = ({ children }: ReactNodeOrString) => {
  return <p className="text-lg font-medium italic">{children}</p>;
};

const CompFaqAnswer = ({ children }: ReactNodeOrString) => {
  return <p className="text-muted-foreground">{children}</p>;
};

const CompFaqRecomendation = ({ children }: ReactNodeOrString) => {
  return (
    <div className="flex gap-4 border-green-400 text-green-700">
      <TriangleAlert className="h-12 w-12" />
      <span>{children}</span>
    </div>
  );
};

const CompFaqImage = ({ src, alt }: { src: string; alt: string }) => {
  return (
    <div className="min-h-64 min-w-64">
      <div className="relative h-64 w-64">
        <Image
          src={src}
          alt={alt}
          layout="fill"
          style={{ objectFit: "contain" }}
        />
      </div>
    </div>
  );
};

const CompFaqContent = ({ children }: ReactNode) => {
  return <div className="space-y-4">{children}</div>;
};

export {
  CompFaqImage,
  CompFaqTittle,
  CompFaqQuestion,
  CompFaqQuestionsList,
  CompFaqQuestionContainer,
  CompFaqDiv,
  CompFaqAnswer,
  CompFaqRecomendation,
  CompFaqContent,
};
