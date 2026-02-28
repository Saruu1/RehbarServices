import CTA from "@/UiComponents/Sections/CTA";
import FAQ from "@/UiComponents/Sections/FAQ";
import Hero from "@/UiComponents/Sections/Hero";
import HeroVisual from "@/UiComponents/Sections/HeroVisual";
import Services from "@/UiComponents/Sections/Services";
import Testimonials from "@/UiComponents/Sections/Testimonials";
import WhyUs from "@/UiComponents/Sections/WhyUs";

export default function Home() {
  return (
    <main className="flex flex-col gap-24">
      <section className="relative overflow-hidden">
        {/* Shared background for BOTH left & right */}
        <div className="absolute inset-0 -z-10 bg-linear-to-r from-[#FEF3E8] via-[#F8FAFC] to-[#EEF4FB]" />

        {/* Soft decorative bg gradient (global) */}
        <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-[#CC5500]/20 blur-3xl" />
        <div className="absolute top-20 -right-40 h-96 w-96 rounded-full bg-[#0F3460]/20 blur-3xl" />
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <Hero />
          <HeroVisual />
        </div>
      </section>
      <CTA />
      <section id="services" className="scroll-mt-20">
        <Services />
      </section>
      <section id="whyUs" className="scroll-mt-20">
        <WhyUs />
      </section>
      <section id="testimonials" className="scroll-mt-20">
        <Testimonials />
      </section>
      <section id="faqs" className="scroll-mt-20">
        <FAQ />
      </section>
    </main>
  );
}
