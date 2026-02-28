"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    title: "Web Development",
    desc: "High-performance websites using Next.js, React, and modern stacks.",
    image: "/Services/web-dev.jpg",
  },
  {
    title: "Mobile Applications",
    desc: "Cross-platform mobile apps with smooth UX and long-term scalability.",
    image: "/Services/mobile-apps.jpg",
  },
  {
    title: "UI / UX Design",
    desc: "Clean, user-centered interfaces designed to convert and retain users.",
    image: "/Services/ui-ux.jpg",
  },
  {
    title: "Custom Software",
    desc: "Tailored software solutions to automate and scale your business.",
    image: "/Services/custom-software.jpg",
  },
];

const stats = [
  { label: "Projects Delivered", value: "50+" },
  { label: "Client Satisfaction", value: "98%" },
  { label: "Years of Experience", value: "5+" },
  { label: "Support & Maintenance", value: "24/7" },
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

export default function Services() {
  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4 ">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1A2E4A] mb-4">
            Services Designed to Scale Your Business
          </h2>
          <p className="text-muted-foreground text-lg">
            We combine strategy, design, and engineering to build digital
            products that grow with you.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch"
        >
          {services.map((service) => (
            <motion.div key={service.title} variants={item}>
              <Card className="group relative h-full flex flex-col overflow-hidden border transition-all duration-300 hover:shadow-2xl">
                {/* Animated background layer */}
                <div className="absolute inset-0 bg-[#CC5500] origin-left scale-x-0 transition-transform duration-1000 ease-out group-hover:scale-x-100 z-0" />

                {/* Image */}
                <div className="relative h-44 bg-muted overflow-hidden z-10">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Title */}
                <CardHeader className="relative z-10">
                  <CardTitle className="text-lg text-center text-[#1A2E4A] transition-colors duration-300 group-hover:text-white">
                    {service.title}
                  </CardTitle>
                </CardHeader>

                {/* Description */}
                <CardContent className="relative z-10 text-center text-muted-foreground flex-1 transition-colors duration-300 group-hover:text-white">
                  {service.desc}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-8 text-center"
        >
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="text-3xl font-bold text-[#0F3460]">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Processes */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-24 max-w-4xl mx-auto text-center"
        >
          <h3 className="text-2xl font-semibold text-[#1A2E4A] mb-8">
            Our Simple, Transparent Process
          </h3>

          <div className="grid sm:grid-cols-3 gap-6 pt-10">
            {/* Card 1 */}
            <Card className="group relative overflow-hidden border transition-all duration-300 hover:shadow-2xl">
              {/* Animated background */}
              <div className="absolute inset-0 bg-[#CC5500] origin-left scale-x-0 transition-transform duration-1000 ease-out group-hover:scale-x-100 z-0" />

              <CardHeader className="relative z-10 pb-2">
                <span className="font-semibold text-[#0F3460] transition-colors duration-300 group-hover:text-white">
                  01. Discover
                </span>
              </CardHeader>

              <CardContent className="relative z-10 text-muted-foreground transition-colors duration-300 group-hover:text-white">
                We understand your goals, users, and constraints.
              </CardContent>
            </Card>

            {/* Card 2 */}
            <Card className="group relative overflow-hidden border transition-all duration-300 hover:shadow-2xl">
              <div className="absolute inset-0 bg-[#CC5500] origin-left scale-x-0 transition-transform duration-1000 ease-out group-hover:scale-x-100 z-0" />

              <CardHeader className="relative z-10 pb-2">
                <span className="font-semibold text-[#0F3460] transition-colors duration-300 group-hover:text-white">
                  02. Build
                </span>
              </CardHeader>

              <CardContent className="relative z-10 text-muted-foreground transition-colors duration-300 group-hover:text-white">
                We design, develop, and iterate with full transparency.
              </CardContent>
            </Card>

            {/* Card 3 */}
            <Card className="group relative overflow-hidden border transition-all duration-300 hover:shadow-2xl">
              <div className="absolute inset-0 bg-[#CC5500] origin-left scale-x-0 transition-transform duration-1000 ease-out group-hover:scale-x-100 z-0" />

              <CardHeader className="relative z-10 pb-2">
                <span className="font-semibold text-[#0F3460] transition-colors duration-300 group-hover:text-white">
                  03. Scale
                </span>
              </CardHeader>

              <CardContent className="relative z-10 text-muted-foreground transition-colors duration-300 group-hover:text-white">
                We optimize, support, and help you grow long-term.
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
