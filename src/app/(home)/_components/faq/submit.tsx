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
import Link from "next/link";
import { Button } from "@/components/ui/button";
import ButtonUcsmERP from "./_components/ButtonUcsmERP";

const Submit = () => {
  return (
    <div>
      <CompFaqDiv>
        <CompFaqImage
          src="/images/brand/gorilas-faq/gorila-presento-plan.png"
          alt="Gorila mentor"
        />
        <CompFaqContent>
          <CompFaqTittle>
            Ya hice mi plan de tesis, ¿Cómo lo presento?
          </CompFaqTittle>

          <CompFaqQuestionsList>
            <CompFaqQuestionContainer>
              <CompFaqQuestion>
                ¿Cómo presento mi plan de tesis?
              </CompFaqQuestion>
              <CompFaqAnswer>
                <span>
                  Para presentar tu plan de tesis debe subir tu plan en PDF al
                  siguiente enlace.
                </span>
                {/* <a
                  href="https://apps.ucsm.edu.pe/UCSMERP/tramites.php"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline break-words"
                >
                  https://apps.ucsm.edu.pe/UCSMERP/tramites.php
                </a> */}

                <ButtonUcsmERP />
              </CompFaqAnswer>
            </CompFaqQuestionContainer>

            <CompFaqQuestionContainer>
              <CompFaqQuestion>
                ¿Si somos dos personas debemos subir el plan de tesis ambos?
              </CompFaqQuestion>
              <CompFaqAnswer>
                No, basta que una persona suba el plan de tesis, y que en el
                formulario de subida agregue el código de alumno de su compañero
                de tesis.
              </CompFaqAnswer>
            </CompFaqQuestionContainer>

            <CompFaqQuestionContainer>
              <CompFaqQuestion>
                ¿Como saber si se subió correctamente mi plan de tesis?
              </CompFaqQuestion>
              <CompFaqAnswer>
                Puedes visualizar el título de tu tesis y descargar el documento
                para comprobar de que este correctamente subido.
              </CompFaqAnswer>
            </CompFaqQuestionContainer>

            <CompFaqQuestionContainer>
              <CompFaqQuestion>
                Actualice mi plan de tesis, pero al momento de descargar,
                descarga la versión anterior ¿Qué puedo hacer?
              </CompFaqQuestion>

              <CompFaqAnswer>
                Es usual que ocurra esto, el sistema suele demorar en actualizar
                tu plan, si lo verificas al siguiente día deberías poder
                visualizar tu plan actualizado.
              </CompFaqAnswer>
            </CompFaqQuestionContainer>
          </CompFaqQuestionsList>
        </CompFaqContent>
      </CompFaqDiv>
    </div>
  );
};

export default Submit;
