import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

function Hero() {
  return (
    <section className="container mx-auto px-4 py-8 md:py-12 flex flex-col md:flex-row gap-2 items-center">
      <div className="md:w-1/2 text-center flex flex-col justify-end items-end">
        <div className="relative mx-auto md:mx-0 max-w-md my-8">
          <div className="absolute -z-10 w-full h-full blur-[50px] bg-blue-500 rounded-full opacity-30 -left-10 -bottom-10"></div>
          <div className="relative">
            <h1 className="text-3xl md:text-4xl font-semibold pt-4">
              CRM de Cobrança Global
            </h1>
            <img
              className="p-0 m-0 mx-auto"
              src={
                "https://d335luupugsy2.cloudfront.net/cms/files/84734/1742308565/$rmbuuyu5q9p"
              }
            />
            <h2 className="text-xl font-medium mb-4">
              Descubra como otimizar seu contas a receber com automação e
              análise estratégica!
            </h2>

            <p className="mb-4 text-sm">
              O <strong>Global+</strong> é um CRM desenvolvido exclusivamente
              para a gestão de contas a receber e da cobrança, ajudando sua
              empresa a reduzir a inadimplência, otimizar operações e ter maior
              controle e previsibilidade financeira.
            </p>

            <p className="text-sm">
              Gerencie todas as etapas de contas a receber e da cobrança de
              maneira simples, ágil e automatizada.
            </p>
          </div>
        </div>
      </div>

      <div className="w-[80%] md:w-1/2 md:max-w-md mx-auto ">
        <h1 className="text-2xl md:text-2xl font-semibold mb-4 text-center">
          Preencha os seus dados
        </h1>
        <div className="bg-gray-900 rounded-lg p-6 mb-20">
          <p className="text-xs text-gray-400 mb-4 text-center">
            Enviamos o seu material em instantes!
          </p>

          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="text-xs mb-1 block">
                Nome*
              </label>
              <Input id="name" className="bg-gray-800 border-gray-700" />
            </div>

            <div>
              <label htmlFor="email" className="text-xs mb-1 block">
                Email corporativo*
              </label>
              <Input id="email" className="bg-gray-800 border-gray-700" />
            </div>

            <div>
              <label htmlFor="cargo" className="text-xs mb-1 block">
                Cargo*
              </label>
              <Select>
                <SelectTrigger className="bg-gray-800 border-gray-700 w-full">
                  <SelectValue placeholder="Selecione" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="gerente">Gerente</SelectItem>
                  <SelectItem value="diretor">Diretor</SelectItem>
                  <SelectItem value="analista">Analista</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label htmlFor="cnpj" className="text-xs mb-1 block">
                CNPJ*
              </label>
              <Input id="cnpj" className="bg-gray-800 border-gray-700" />
            </div>

            <div>
              <label htmlFor="faturamento" className="text-xs mb-1 block">
                Faixa de Faturamento
              </label>
              <Select>
                <SelectTrigger className="bg-gray-800 border-gray-700 w-full">
                  <SelectValue placeholder="Selecione" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">Até R$ 100 mil</SelectItem>
                  <SelectItem value="2">R$ 100 mil a R$ 1 milhão</SelectItem>
                  <SelectItem value="3">Acima de R$ 1 milhão</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label htmlFor="phone" className="text-xs mb-1 block">
                DDD + Telefone
              </label>
              <Input id="phone" className="bg-gray-800 border-gray-700" />
            </div>

            <Button className="w-full bg-[#80B4F7] hover:bg-[#5F86B8] cursor-pointer">
              AGENDE UMA DEMONSTRAÇÃO
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Hero;
