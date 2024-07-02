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

const During = () => {
  return (
    <div>
      <CompFaqDiv>
        <CompFaqImage
          src="/images/brand/gorilas-faq/gorila-presente-plan.png"
          alt="Gorila mentor"
        />
        <CompFaqContent>
          <CompFaqTittle>Ya presente mi plan, ¿Qué hago ahora?</CompFaqTittle>

          <CompFaqQuestionsList>
            <CompFaqQuestionContainer>
              <CompFaqQuestion>
                ¿Qué hacer despues de haber presentado el plan?
              </CompFaqQuestion>
              <CompFaqAnswer>
                Debes esperar a que te asignen tus dos dictaminadores de plan de
                tesis, esto usualmente demora como máximo una semana.
              </CompFaqAnswer>
            </CompFaqQuestionContainer>

            <CompFaqQuestionContainer>
              <CompFaqQuestion>
                ¿Qué hacer si no me asignan dictaminadores?
              </CompFaqQuestion>
              <CompFaqAnswer>
                Puedes ir a la escuela para que te asignen tus dictaminadores.
              </CompFaqAnswer>
            </CompFaqQuestionContainer>

            <CompFaqQuestionContainer>
              <CompFaqQuestion>
                Ya me asignaron mis dictaminadores, ¿Qué hago luego?
              </CompFaqQuestion>
              <CompFaqAnswer>
                Debes esperar que suban sus observaciones a tu plan de tesis.
              </CompFaqAnswer>
            </CompFaqQuestionContainer>

            <CompFaqQuestionContainer>
              <CompFaqQuestion>
                Subí mi plan hace mas de una semana y no me suben ninguna
                observación, ¿Qué puedo hacer?
              </CompFaqQuestion>

              <CompFaqAnswer>
                Por reglamento de la universidad no deberian pasar mas de 7 dias
                para que te suban observaciones. Pero los ingenieros de nuestra
                escuela son personas muy ocupadas y usualmente demoran mucho mas
                en subir observaciones(Esto depende del docente, algunos si
                cumplen el plazo establecido, y otros no.). Si ya paso mucho
                tiempo sin que te suban observaciones, se recomienda que te
                acerques con tu dictaminador para que te suba las observaciones.
              </CompFaqAnswer>
            </CompFaqQuestionContainer>

            <CompFaqQuestionContainer>
              <CompFaqQuestion>
                Hable con mi dictaminador repetidas veces y no me sube
                observaciones, ¿Qué puedo hacer?
              </CompFaqQuestion>

              <CompFaqAnswer>
                Si ese es el caso puedes ir a con el director de escuela para
                ver este asunto, eventualmente procurará acelerar el proceso o
                en todo caso es posible que te cambien de dictaminador de plan.
              </CompFaqAnswer>
            </CompFaqQuestionContainer>
          </CompFaqQuestionsList>

          <CompFaqRecomendation>
            Recuerda que los docentes no trabajan ni suben observaciones durante
            las vacaciones. asi que cuida tus fechas donde presentas tu plan o
            esperas la aprobación de tu plan.
          </CompFaqRecomendation>
        </CompFaqContent>
      </CompFaqDiv>
    </div>
  );
};

export default During;
