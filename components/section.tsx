import {
  BarChart3,
  Bot,
  Cable,
  CheckCircle,
  Handshake,
  Send,
} from "lucide-react";
import { Button } from "./ui/button";

export default function Section() {
  return (
    <section className="mx-auto px-4 py-12 text-center bg-[#181833] text-white">
      <p className="mb-4 text-2xl font-semibold">
        Com o <strong>Global+</strong>, sua gestão fica muito mais eficiente!
      </p>
      <p className="mb-6 font-semibold">Confira algumas funcionalidades:</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-lg mx-auto container">
        <div className="flex items-center gap-2">
          <CheckCircle className="w-5 h-5 text-[#168C53] flex-shrink-0" />
          <span>Cobrança automatizada</span>
        </div>
        <div className="flex items-center gap-2">
          <Send className="w-5 h-5 text-[#168C53] flex-shrink-0" />
          <span>Disparo de ações em massa</span>
        </div>
        <div className="flex items-center gap-2">
          <BarChart3 className="w-5 h-5 text-[#168C53] flex-shrink-0" />
          <span>Relatórios detalhados</span>
        </div>
        <div className="flex items-center gap-2">
          <Bot className="w-5 h-5 text-[#168C53] flex-shrink-0" />
          <span>Chatbot IA de atendimento</span>
        </div>
        <div className="flex items-center gap-2">
          <Handshake className="w-5 h-5 text-[#168C53] flex-shrink-0" />
          <span>Portal de Negociação</span>
        </div>
        <div className="flex items-center gap-2">
          <Cable className="w-5 h-5 text-[#168C53] flex-shrink-0" />
          <span>Integração com ERPs</span>
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

        <Button className="bg-[#80B4F7] hover:bg-[#5F86B8] mx-auto mb-4 cursor-pointer">
          CONHEÇA O GLOBAL+
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 container mx-auto max-w-4xl">
        <div className="text-center px-4">
          <div className="p-4 rounded-lg w-20 h-20 mx-auto mb-4 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="42"
              height="42"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-[#168C53]"
            >
              <rect width="7" height="7" x="3" y="3" rx="1" />
              <rect width="7" height="7" x="3" y="14" rx="1" />
              <path d="M14 4h7" />
              <path d="M14 9h7" />
              <path d="M14 15h7" />
              <path d="M14 20h7" />
            </svg>
          </div>
          <h3 className="font-bold mb-2 text-2xl">Gestão de tarefas</h3>
          <p className="text-md max-w-[300px] text-center mx-auto">
            Otimize a operação permitindo que os colaboradores priorizem
            atividades e estabeleça cronogramas de prazos, melhorando a
            comunicação e o clima organizacional.
          </p>
        </div>

        <div className="text-center px-4">
          <div className="p-4 rounded-lg w-20 h-20 mx-auto mb-4 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="42"
              height="42"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-[#168C53]"
            >
              <path d="M3 3v16a2 2 0 0 0 2 2h16" />
              <path d="m19 9-5 5-4-4-3 3" />
            </svg>
          </div>
          <h3 className="font-bold mb-2 text-2xl">Indicadores</h3>
          <p className="text-md max-w-[300px] text-center mx-auto">
            Indicadores são informações essenciais para a tomada de decisões. E
            com os detalhes de cada indicador, você pode melhorar ainda mais a
            sua operação e seus resultados.
          </p>
        </div>

        <div className="text-center px-4">
          <div className="p-4 rounded-lg w-20 h-20 mx-auto mb-4 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="42"
              height="42"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-[#168C53]"
            >
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
          </div>
          <h3 className="font-bold mb-2 text-2xl">Contatos</h3>
          <p className="text-md max-w-[300px] text-center mx-auto">
            Conte com uma ferramenta de registro e gestão de contatos,
            informações e ações, possibilitando a identificação e criação de
            relacionamento sólido.
          </p>
        </div>

        <div className="text-center px-4">
          <div className="p-4 rounded-lg w-20 h-20 mx-auto mb-4 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="42"
              height="42"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-[#168C53]"
            >
              <path d="M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17" />
              <path d="m7 21 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9" />
              <path d="m2 16 6 6" />
              <circle cx="16" cy="9" r="2.9" />
              <circle cx="6" cy="5" r="3" />
            </svg>
          </div>
          <h3 className="font-bold mb-2 text-2xl">Meios de pagamentos</h3>
          <p className="text-md max-w-[300px] text-center mx-auto">
            Cobrar com boleto ou cartão de crédito? Ambos! Facilite a cobrança e
            faça emissão de boleto para o melhor formato de recuperação de
            dívidas.
          </p>
        </div>
      </div>
    </section>
  );
}
