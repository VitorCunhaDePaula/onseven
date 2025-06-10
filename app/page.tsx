import Header from "@/components/header";
import Hero from "@/components/hero";
import Section from "@/components/section";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#474794] text-white">
      <Header />
      <Hero />
      <Section />

      <footer className="py-4 text-center bg-[#030B1F]">
        <img src="/Logo.png" className="h-16 w-36 object-contain mx-auto" />
      </footer>
    </div>
  );
}
