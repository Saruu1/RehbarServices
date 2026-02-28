"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Noor Modesty",
    role: "Founder, Modest Fashion Brand",
    quote:
      "RehbarPost perfectly captured the elegance and values of our abaya brand. From product presentation to brand storytelling, everything felt refined, modest, and premium — exactly what our customers expect.",
  },
  {
    name: "Afrooz Perfumes",
    role: "CTO",
    quote:
      "They understood the soul of our perfume brand — luxury, emotion, and detail. The branding and visuals elevated our fragrances and helped us connect deeply with our audience.",
  },
  {
    name: "Khursheed Lone",
    role: "Honey Brand",
    quote:
      "Rehbar Post presented our Kashmiri honey with authenticity, trust, and a compelling brand story. From visuals to messaging, everything felt natural and helped us connect better with our customers.",
  },
  {
    name: "Darul Kitab",
    role: "Islamic Book Store",
    quote:
      "Strategic, detail-oriented, and aligned with our values. They helped us communicate knowledge and purpose clearly, making our Islamic books reach the right audience with meaningful impact.",
  },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

export default function Testimonials() {
  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1A2E4A] mb-4">
            Trusted by Clients Worldwide
          </h2>
          <p className="text-lg text-muted-foreground">
            Real feedback from founders, executives, and business owners.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          {testimonials.map((t) => (
            <motion.div key={t.name} variants={item}>
              <Card className="h-full transition-all duration-300 hover:shadow-xl">
                <CardContent className="p-8 flex flex-col h-full">
                  {/* Quote Icon */}
                  <Quote className="w-8 h-8 text-[#CC5500] mb-4" />

                  {/* Quote */}
                  <p className="text-[#64748B] leading-relaxed flex-1">
                    “{t.quote}”
                  </p>

                  {/* Stars */}
                  <div className="flex gap-1 mt-6">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-[#CC5500] text-[#CC5500]"
                      />
                    ))}
                  </div>

                  {/* Author */}
                  <div className="mt-4">
                    <div className="font-semibold text-[#1A2E4A]">{t.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {t.role}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
