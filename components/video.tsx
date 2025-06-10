import { Button } from "./ui/button";

function Video() {
  return (
    <div className="bg-gradient-to-b from-[#474794] to-[#181833] text-white">
      {/* Seção do Vídeo */}
      <section className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-2">
          {/* Container do Vídeo */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative w-full max-w-md lg:max-w-lg">
              <div className="absolute -z-10 w-full h-full blur-[50px] bg-green-500 rounded-full opacity-20 -left-4 -bottom-4 lg:-left-10 lg:-bottom-10"></div>

              <div className="relative bg-gray-900 rounded-lg w-full aspect-video flex items-center justify-center overflow-hidden">
                {/* Botão de Play */}
                <button className="bg-red-600 hover:bg-red-700 transition-colors rounded-full p-4 lg:p-6 shadow-lg">
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
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Conteúdo de Texto */}
          <div className="w-full lg:w-1/2 max-w-2xl text-center lg:text-left space-y-6">
            <h2 className="text-xl lg:text-2xl font-medium leading-tight">
              O <strong>Global+</strong> é a solução definitiva para uma
              cobrança eficiente e estruturada.
            </h2>

            <p className="text-base lg:text-lg leading-relaxed opacity-90">
              Descubra todas as funcionalidades e benefícios que vão
              revolucionar sua gestão financeira!
            </p>

            <Button className="bg-[#80B4F7] hover:bg-[#5F86B8] transition-colors cursor-pointer w-full sm:w-auto sm:min-w-[300px] py-3 px-6 text-base font-medium">
              AGENDE UMA DEMONSTRAÇÃO
            </Button>
          </div>
        </div>
      </section>

      {/* Seção Sobre a Empresa */}
      <section className="py-12 lg:py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Conteúdo de Texto - Aparece primeiro no mobile */}
            <div className="space-y-6 order-2 lg:order-1">
              <div className="space-y-4">
                <p className="text-base lg:text-lg leading-relaxed text-white">
                  Somos a força que impulsiona o futuro das empresas, atuando de
                  forma completa em todo o ciclo de{" "}
                  <strong className="text-white">relacionamento</strong> com o
                  cliente. Combinamos soluções tecnológicas e tradicionais para
                  ajudar empresas a vender mais, reduzir inadimplência, otimizar
                  operações e criar experiências excepcionais para os clientes,
                  de forma sustentável e com responsabilidade social.
                </p>

                <p className="text-base lg:text-lg leading-relaxed text-white">
                  Estamos{" "}
                  <span className="font-semibold text-blue-400 bg-blue-900/30 px-2 py-1 rounded">
                    "sempre à frente"
                  </span>{" "}
                  e{" "}
                  <span className="font-semibold text-green-400 bg-green-900/30 px-2 py-1 rounded">
                    "sempre digitais"
                  </span>{" "}
                  para ajudar a sua empresa na construção de um futuro mais
                  eficiente.
                </p>
              </div>

              {/* Grid de Características */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#7A7AFF] rounded-full flex-shrink-0"></div>
                  <span className="text-sm lg:text-base font-medium text-white">
                    Soluções Tecnológicas
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#5F86B8] rounded-full flex-shrink-0"></div>
                  <span className="text-sm lg:text-base font-medium text-white">
                    Responsabilidade Social
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#168C53] rounded-full flex-shrink-0"></div>
                  <span className="text-sm lg:text-base font-medium text-white">
                    Experiência do Cliente
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#FFFFFF] rounded-full flex-shrink-0"></div>
                  <span className="text-sm lg:text-base font-medium text-white">
                    Otimização de Operações
                  </span>
                </div>
              </div>
            </div>

            {/* Imagem - Aparece primeiro no desktop */}
            <div className="flex justify-center lg:justify-end order-1 lg:order-2">
              <div className="relative w-full max-w-sm lg:max-w-md">
                {/* Efeito de blur de fundo */}
                <div className="absolute -z-10 w-full h-full blur-[60px] bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-20 -right-4 -bottom-4 lg:-right-8 lg:-bottom-8"></div>

                {/* Container da imagem */}
                <div className="relative rounded-2xl p-2 lg:p-4">
                  <img
                    src="https://d335luupugsy2.cloudfront.net/cms/files/84734/1739808086/$nosfb2sdb7j"
                    alt="Representação visual das soluções tecnológicas da empresa"
                    className="w-full h-auto rounded-xl shadow-lg"
                  />
                </div>

                {/* Elementos decorativos */}
                <div className="absolute -top-2 -left-2 lg:-top-4 lg:-left-4 w-6 h-6 lg:w-8 lg:h-8 bg-[#D2F4FF] rounded-full opacity-60"></div>
                <div className="absolute -bottom-1 -right-1 lg:-bottom-2 lg:-right-2 w-4 h-4 lg:w-6 lg:h-6 bg-[#168C53] rounded-full opacity-60"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Video;
