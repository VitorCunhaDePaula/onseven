import { Button } from "./ui/button";

import React from "react";

export default function Section() {
  return (
    <section className="mx-auto px-4 py-12 text-center bg-[#181833]">
      <p className="mb-4 font-2xl font-semibold">
        Com o <strong>Global+</strong>, sua gestão fica muito mais eficiente!
      </p>
      <p className="mb-6 font-semibold">Confira algumas funcionalidades:</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-lg mx-auto container ">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 bg-blue-500 rounded-sm flex-shrink-0"></div>
          <span>Cobrança automatizada</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 bg-blue-500 rounded-sm flex-shrink-0"></div>
          <span>Disparo de ações em massa</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 bg-blue-500 rounded-sm flex-shrink-0"></div>
          <span>Relatórios detalhados</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 bg-blue-500 rounded-sm flex-shrink-0"></div>
          <span>Chatbot IA de atendimento</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 bg-blue-500 rounded-sm flex-shrink-0"></div>
          <span>Portal de Negociação</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 bg-blue-500 rounded-sm flex-shrink-0"></div>
          <span>Integração com os principais ERPs</span>
        </div>
      </div>

      <p className="mt-2 font-medium">e muito mais!</p>
      <div className="relative mx-auto max-w-2xl my-8">
        <div className="absolute -z-10 w-full h-full blur-[50px] bg-blue-500 rounded-full opacity-30 -right-10 -bottom-10"></div>
        <img
          src="https://d335luupugsy2.cloudfront.net/cms/files/84734/1742904825/$si1x00xnnp"
          alt="Global+ Dashboard"
          className="mx-auto"
        />
        <p className="text-xl font-medium my-4">
          O futuro da <strong>gestão de cobrança</strong> está aqui!
        </p>

        <Button className="bg-blue-500 hover:bg-blue-600 mx-auto">
          CONHEÇA O GLOBAL+
        </Button>
      </div>
      {/* <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="text-center">
          <div className="bg-purple-900 p-4 rounded-lg w-20 h-20 mx-auto mb-4 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-white"
            >
              <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
              <polyline points="14 2 14 8 20 8" />
              <path d="M8 13h2" />
              <path d="M8 17h2" />
              <path d="M14 13h2" />
              <path d="M14 17h2" />
            </svg>
          </div>
          <h3 className="font-bold mb-2">Gestão de tarefas</h3>
          <p className="text-sm">
            Otimize a operação permitindo que os colaboradores priorizem
            atividades e estabeleça cronogramas de prazos, melhorando a
            comunicação e o clima organizacional.
          </p>
        </div>

        <div className="text-center">
          <div className="bg-purple-900 p-4 rounded-lg w-20 h-20 mx-auto mb-4 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-white"
            >
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
          </div>
          <h3 className="font-bold mb-2">Contatos</h3>
          <p className="text-sm">
            Conte com uma ferramenta de registro e gestão de contatos,
            informações e ações, possibilitando a identificação e criação de
            relacionamento sólido.
          </p>
        </div>

        <div className="text-center">
          <div className="bg-purple-900 p-4 rounded-lg w-20 h-20 mx-auto mb-4 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-white"
            >
              <path d="M3 3v18h18" />
              <path d="M18 9l-6-6-6 6" />
              <path d="M6 9v8" />
              <path d="M12 3v14" />
              <path d="M18 17v-8" />
            </svg>
          </div>
          <h3 className="font-bold mb-2">Indicadores</h3>
          <p className="text-sm">
            Indicadores são informações essenciais para a tomada de decisões. E
            com os detalhes de cada indicador, você pode melhorar ainda mais a
            sua operação e seus resultados.
          </p>
        </div>

        <div className="text-center">
          <div className="bg-purple-900 p-4 rounded-lg w-20 h-20 mx-auto mb-4 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-white"
            >
              <rect width="20" height="14" x="2" y="3" rx="2" />
              <line x1="8" x2="16" y1="21" y2="21" />
              <line x1="12" x2="12" y1="17" y2="21" />
              <path d="M2 7h20" />
              <path d="M16 14V8" />
              <path d="M12 14V8" />
              <path d="M8 14V8" />
            </svg>
          </div>
          <h3 className="font-bold mb-2">Meios de pagamentos</h3>
          <p className="text-sm">
            Cobrar com boleto ou cartão de crédito? Ambos! Facilite a cobrança e
            faça emissão de boleto para o melhor formato de recuperação de
            dívidas.
          </p>
        </div>
      </div> */}
    </section>
  );
}
