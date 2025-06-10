import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";

function Video() {
  return (
    <section className="container mx-auto px-4 py-12 flex flex-col md:flex-row gap-8 items-center">
      <div className="md:w-1/2">
        <div className="relative mx-auto max-w-md">
          <div className="absolute -z-10 w-full h-full blur-[50px] bg-green-500 rounded-full opacity-20 -left-10 -bottom-10"></div>
          <div className="bg-gray-900 p-2 rounded-lg">
            <Image
              src="/placeholder.svg?height=300&width=450"
              width={450}
              height={300}
              alt="Global+ Video"
              className="rounded"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-red-600 rounded-full p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-white"
                >
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="md:w-1/2">
        <h2 className="text-xl font-medium mb-4">
          O <strong>Global+</strong> é a solução definitiva para uma cobrança
          eficiente e estruturada.
        </h2>

        <p className="mb-6">
          Descubra todas as funcionalidades e benefícios que vão revolucionar
          sua gestão financeira!
        </p>

        <Button className="bg-blue-500 hover:bg-blue-600">
          AGENDE UMA DEMONSTRAÇÃO
        </Button>
      </div>

      <div className="md:w-1/2">
        <p className="mb-4">
          Somos a força que impulsiona o futuro das empresas, atuando de forma
          completa em todo o ciclo de
          <strong> relacionamento</strong> com o cliente. Combinamos soluções
          tecnológicas e tradicionais para ajudar empresas a vender mais,
          reduzir inadimplência, otimizar operações e criar experiências
          excepcionais para os clientes, de forma sustentável e com
          responsabilidade social.
        </p>

        <p className="mb-4">
          Estamos <span className="text-blue-400">"sempre à frente"</span> e{" "}
          <span className="text-green-400">"sempre digitais"</span> para ajudar
          a sua empresa na construção de um futuro mais eficiente.
        </p>
      </div>

      <div className="md:w-1/2">
        <div className="relative mx-auto max-w-md">
          <div className="absolute -z-10 w-full h-full blur-[50px] bg-blue-500 rounded-full opacity-30 -right-10 -bottom-10"></div>
          <Image
            src="/placeholder.svg?height=350&width=350"
            width={350}
            height={350}
            alt="Professional"
            className="mx-auto"
          />
        </div>
      </div>
    </section>
  );
}

export default Video;
