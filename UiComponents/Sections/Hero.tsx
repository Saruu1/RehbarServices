"use client";

import { Button } from "@/components/ui/button";

export default function Hero() {

  // function to open WhatsApp with a pre-filled message for consultation
    const handleConsultation = () => {
    const phone = "+917051181750"
    const message = `Hi, I need to get some information.`
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`
    window.open(url, "_blank")
  }
  return (
    <section className="container mx-auto px-4 pt-20 text-center">
      <h1 className="text-4xl text-[#0F3460] md:text-6xl font-bold tracking-tight">
        Building Scalable Software for Modern Businesses
      </h1>

      <p className="mt-6 text-lg max-w-2xl mx-auto text-[#64748B]">
        We design, develop, and deploy high-quality web and mobile applications
        tailored to your business goals.
      </p>

      <div className="mt-10 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
        <Button size="default" className="w-full sm:w-auto bg-[#CC5500] hover:bg-[#0F3460]" onClick={handleConsultation}>
          Get a Free Consultation
        </Button>

        <Button size="default" className="w-full sm:w-auto bg-[#CC5500] hover:bg-[#0F3460]">
          View Our Work
        </Button>
      </div>
    </section>
  );
}
