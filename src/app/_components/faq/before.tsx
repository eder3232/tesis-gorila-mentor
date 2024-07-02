import React from "react";
import {
  CompFaqAnswer,
  CompFaqContent,
  CompFaqDiv,
  CompFaqImage,
  CompFaqQuestion,
  CompFaqQuestionContainer,
  CompFaqQuestionsList,
  CompFaqRecomendation,
  CompFaqTittle,
} from "./_components/comp-faq";

const Before = () => {
  return (
    <div>
      <CompFaqDiv>
        <CompFaqImage
          src="/images/brand/gorilas-faq/gorila-cumplo-requisitos.png"
          alt="Gorila mentor"
        />
        <CompFaqContent>
          <CompFaqTittle>
            Cumplo los requisitos, ¿Qué debo hacer para comenzar mi tesis?
          </CompFaqTittle>

          <CompFaqQuestionsList>
            <CompFaqQuestionContainer>
              <CompFaqQuestion>
                ¿Qué debo hacer para comenzar mi tesis?
              </CompFaqQuestion>
              <CompFaqAnswer>
                Debes buscar una idea de algún tema que te guste, esta idea{" "}
                <span className="font-semibold">NO DEBE SER APLICATIVA.</span>
              </CompFaqAnswer>
            </CompFaqQuestionContainer>

            <CompFaqQuestionContainer>
              <CompFaqQuestion>
                ¿Cómo se si mi idea es aplicativa?
              </CompFaqQuestion>
              <CompFaqAnswer>
                Si tu tesis consta de utilizar conocimientos adquiridos en la
                carrera, como por ejemplo elaborar el diseño estructural de un
                edificio aplicando la norma de concreto armado y
                sismorresistente, entonces tu tesis es aplicativa. Ya que no
                aporta conocimiento nuevo a la ciencia, solo aplica
                conocimientos ya existentes.
              </CompFaqAnswer>
            </CompFaqQuestionContainer>

            <CompFaqQuestionContainer>
              <CompFaqQuestion>
                ¿Puedo hacer tesis sobre BIM o LEAN?
              </CompFaqQuestion>
              <CompFaqAnswer>
                De preferencia no, los docente usualmente rechazan este tipo de
                temas.
              </CompFaqAnswer>
            </CompFaqQuestionContainer>

            <CompFaqQuestionContainer>
              <CompFaqQuestion>
                ¿Cómo saber si mi idea de tesis esta por buen camino?
              </CompFaqQuestion>

              <CompFaqAnswer>
                Se recomienda comentar tu tesis con un docente de la linea de
                investigación de tu tema antes de elaborar y presentar el plan
                de tesis, ya que podrias estar perdiendo el tiempo en un tema
                que no es viable o no es de interes para la universidad. Si el
                docente te da el visto bueno, entonces tu tesis esta por buen
                camino.
              </CompFaqAnswer>
            </CompFaqQuestionContainer>

            <CompFaqQuestionContainer>
              <CompFaqQuestion>
                Ya tengo una buena idea, ¿Qué debo hacer ahora?
              </CompFaqQuestion>
              <CompFaqAnswer>
                Debes elaborar un plan de tesis, de acuerdo a los lineamientos
                de la universidad.
              </CompFaqAnswer>
            </CompFaqQuestionContainer>
          </CompFaqQuestionsList>

          <CompFaqRecomendation>
            Si ya tienes pensado en un docente en particular para que sea tu
            asesor de tesis, es recomendable que te acerques con él, y si el te
            dice que si te asesora, entonces debes ir a la escuela antes de
            presentar tu plan de tesis, porque si te asignan a ese docente como
            tu dictaminador de plan, este no podrá ser tu asesor de tesis.
          </CompFaqRecomendation>
        </CompFaqContent>
      </CompFaqDiv>
    </div>
  );
};

export default Before;
