// components/sections/FAQ.tsx
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

export default function FAQ() {
  return (
    <section className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <div className="flex justify-center mb-3">
            <HelpCircle className="w-8 h-8 text-[#0F3460]" />
          </div>
          <h2 className="text-3xl font-bold text-[#1A2E4A]">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-[#64748B]">
            Clear answers to common questions before we get started.
          </p>
        </div>

        {/* FAQ Card */}
        <div className="rounded-2xl border bg-white shadow-sm">
          <Accordion type="single" collapsible className="divide-y">
            <AccordionItem value="item-1" className="px-6">
              <AccordionTrigger className="text-left font-medium text-[#1A2E4A] hover:no-underline transition">
                How long does a project take?
              </AccordionTrigger>
              <AccordionContent className="text-[#64748B] leading-relaxed">
                Most projects take between 4–12 weeks depending on scope,
                complexity, and feedback cycles.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="px-6">
              <AccordionTrigger className="text-left font-medium text-[#1A2E4A] hover:no-underline">
                Do you offer maintenance?
              </AccordionTrigger>
              <AccordionContent className="text-[#64748B] leading-relaxed">
                Yes. We provide ongoing maintenance, performance monitoring, and
                feature enhancements after launch.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="px-6">
              <AccordionTrigger className="text-left font-medium text-[#1A2E4A] hover:no-underline">
                What technologies do you use?
              </AccordionTrigger>
              <AccordionContent className="text-[#64748B] leading-relaxed">
                We work with Next.js, React, Node.js, Tailwind CSS, cloud-native
                platforms, and modern scalable tooling.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="px-6">
              <AccordionTrigger className="text-left font-medium text-[#1A2E4A] hover:no-underline">
                Will I be involved during the development process?
              </AccordionTrigger>
              <AccordionContent className="text-[#64748B] leading-relaxed">
                Absolutely. We keep you involved through regular updates, demos,
                and feedback checkpoints to ensure everything aligns with your
                vision.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="px-6">
              <AccordionTrigger className="text-left font-medium text-[#1A2E4A] hover:no-underline">
                Can you scale or improve an existing product?
              </AccordionTrigger>
              <AccordionContent className="text-[#64748B] leading-relaxed">
                Yes. We frequently work with existing products to improve
                performance, user experience, scalability, and add new features
                without disruption.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
}
