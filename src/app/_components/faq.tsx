import React from 'react'

const Faq = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32" id="faq">
      <div className="container px-4 md:px-6">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            Preguntas Frecuentes
          </h2>
          <div className="grid gap-6">
            <div className="grid gap-1">
              <h3 className="text-xl font-bold">¿Qué es un plan de tesis?</h3>
              <p className="text-muted-foreground">
                Un plan de tesis es un documento que describe los pasos a seguir
                para desarrollar y completar tu proyecto de grado. Incluye la
                definición del tema, los objetivos, la metodología, el
                cronograma y los recursos necesarios.
              </p>
            </div>
            <div className="grid gap-1">
              <h3 className="text-xl font-bold">
                ¿Por qué es importante tener un plan de tesis?
              </h3>
              <p className="text-muted-foreground">
                Tener un plan de tesis te ayuda a mantener el enfoque, organizar
                tus ideas y establecer un cronograma realista. Esto aumenta tus
                posibilidades de completar tu tesis a tiempo y con éxito.
              </p>
            </div>
            <div className="grid gap-1">
              <h3 className="text-xl font-bold">
                ¿Qué elementos debe incluir un plan de tesis?
              </h3>
              <p className="text-muted-foreground">
                Un plan de tesis debe incluir: el título, los objetivos, la
                justificación, el marco teórico, la metodología, el cronograma y
                los recursos necesarios.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Faq
