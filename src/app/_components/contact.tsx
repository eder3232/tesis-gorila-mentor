import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import React from "react";

const Contact = () => {
  return (
    <section className="w-full bg-muted" id="contact">
      <div className="container px-4 md:px-6">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            Contáctanos
          </h2>
          <form className="mx-auto w-full max-w-md space-y-2">
            <Input
              type="text"
              placeholder="Nombre"
              className="max-w-lg flex-1"
            />
            <Input
              type="email"
              placeholder="Correo electrónico"
              className="max-w-lg flex-1"
            />
            <Textarea
              placeholder="Mensaje"
              className="max-w-lg flex-1"
              rows={4}
            />
            <Button type="submit">Enviar</Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
