import React from "react";
import {
  CompFaqAnswer,
  CompFaqContent,
  CompFaqDiv,
  CompFaqImage,
  CompFaqQuestion,
  CompFaqQuestionContainer,
  CompFaqQuestionsList,
  CompFaqTittle,
} from "./_components/comp-faq";

const Previous = () => {
  return (
    <div>
      <CompFaqDiv>
        <CompFaqImage
          src="/images/brand/gorilas-faq/gorila-requisitos.png"
          alt="Gorila mentor"
        />
        <CompFaqContent>
          <CompFaqTittle>
            ¿Cumplo los requisitos para comenzar a hacer mi tesis?
          </CompFaqTittle>

          <CompFaqQuestionsList>
            <CompFaqQuestionContainer>
              <CompFaqQuestion>
                ¿Qué necesito para comenzar a hacer mi tesis?
              </CompFaqQuestion>
              <CompFaqAnswer>
                Necesitas haber egresado, es decir haber cumplido con aprobar
                los 214 créditos de la carrera.
              </CompFaqAnswer>
            </CompFaqQuestionContainer>

            <CompFaqQuestionContainer>
              <CompFaqQuestion>
                Soy egresado, ¿qué debo hacer para comenzar mi tesis?
              </CompFaqQuestion>

              <CompFaqAnswer>
                Dependiendo de tu año de egreso deberas presentar una tesina o
                no antes de comenzar tu tesis. Si te graduaste con bachiller
                automático, no es necesario presentar tesina y no necesitas
                inglés, computación, ni otros requisitos para obtener tu título
                profesional, unicamente tu tesis.
              </CompFaqAnswer>
            </CompFaqQuestionContainer>
          </CompFaqQuestionsList>
        </CompFaqContent>
      </CompFaqDiv>
    </div>
  );
};

export default Previous;
