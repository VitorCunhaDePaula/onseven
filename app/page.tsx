import Header from "@/components/header";
import Hero from "@/components/hero";
import Section from "@/components/section";
import Video from "@/components/video";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#474794] to-[#181833] text-white">
      <Header />
      <Hero />
      <Section />
      <Video />
      <footer className="py-4 text-center bg-[#030B1F]">
        <img src="/Logo.png" className="h-16 w-36 object-contain mx-auto" />
      </footer>
    </div>
  );
}
