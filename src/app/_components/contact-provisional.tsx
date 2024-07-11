import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import React from "react";
import { SocialIcon } from "react-social-icons";

const ContactProvisional = () => {
  return (
    <section className="w-full bg-muted py-12 lg:py-32" id="contact">
      <div className="container flex flex-col px-4 md:flex-row md:px-6">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            ¿Necesitas mas ayuda?
          </h2>

          <div className="space-y-4 text-xl">
            <p>Si quieres obtener:</p>
            <ul className="space-y-1">
              <li>
                <strong>Plantillas de Planes de Tesis</strong>
              </li>
              <li>
                <strong>Matrices de Consistencia</strong>
              </li>
              <li>
                <strong>Solicitudes para uso de Laboratorios</strong>
              </li>
              <li>
                <strong>Asesoría personalizada</strong>
              </li>
              <li>
                <strong>Asesores y Dictaminadores</strong>
              </li>
            </ul>
            <p>
              Para la correcta elaboración y aprobación de tu Plan de Tesis.
            </p>
            <div className="flex flex-col gap-4 text-xl">
              <span className="text-2xl font-bold">
                Escribenos, estamos para ayudarte.
              </span>
              <div className="flex items-center gap-4">
                <SocialIcon
                  network="whatsapp"
                  style={{ height: 36, width: 36 }}
                />
                <span> Arturo: 925487845</span>
              </div>
              <div className="flex items-center gap-4">
                <SocialIcon
                  network="whatsapp"
                  style={{ height: 36, width: 36 }}
                />
                <span> Eder: 973617833</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="relative h-96 w-96">
            <Image
              src="/images/brand/gorilaConfundido.png"
              alt="gorila"
              layout="fill"
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactProvisional;
