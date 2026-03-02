"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const values = [
  {
    title: "Shipping Aggregation",
    desc: "Multiple courier partners integrated into one powerful shipping dashboard.",
    image: "/Services/logistics.jpg",
  },
  {
    title: "Real-Time Tracking",
    desc: "Live shipment tracking and customer communication in one place.",
    image: "/Services/tracking.jpg",
  },
  {
    title: "RTO Reduction",
    desc: "Smart delivery intelligence that significantly lowers RTO rates.",
    image: "/Services/mission.jpg",
  },
];

const stats = [
  { label: "Courier Partners", value: "10+" },
  { label: "RTO Reduction", value: "80%+" },
  { label: "Businesses Served", value: "500+" },
  { label: "Support Availability", value: "24/7" },
];

const directors = [
  {
    name: "Mr. Zeeshan Rashid",
    role: "Founder & CEO",
    message:
      "At Rehbar Services, our mission is to deliver structured, reliable, and growth-focused solutions for businesses. We address common challenges caused by fragmented logistics and digital systems through Rehbar Post and our Web Solutions division. Built on innovation and integrity, our platform empowers businesses to operate with clarity and confidence. We believe sustainable growth comes from trust, consistency, and meaningful impact, and we remain committed to strengthening our systems while upholding the highest standards of professionalism.",
    image: "/Services/zeeshanpic.jpeg",
  },
  {
    name: "Mr. Faisal Rasheed",
    role: "Co-Founder & COO",
    message:
      "Operational excellence defines Rehbar Services. Every system, partnership, and solution is built on structure, efficiency, and accountability. We ensure businesses gain clarity in processes, reliability in execution, and responsive support. Through streamlined logistics aggregation and robust digital development, we deliver measurable performance. Our focus is on building strong operational foundations that enable scalable growth without barriers. With disciplined execution and a forward-looking mindset, we continuously refine our services to meet evolving business needs.",
    image: "/Services/faisalpic.jpeg",
  },
];

export default function AboutPage() {
  // Handle "Get Started" button click to open WhatsApp chat
  const handleOrder = () => {
    const phone = "+917051181750";
    const message = `Hi, I want to get started with you.`;
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };
  return (
    <section className="bg-background">
      <div className="container mx-auto px-4 py-20 space-y-28">
        {/* HERO */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-2 gap-14 items-center"
        >
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold text-[#1A2E4A] mb-6">
              About Rehbar Services
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Rehbar Services is a growing multi-service platform built to make
              essential business services accessible, reliable, and
              growth-driven. We are more than a service provider—we partner with
              businesses to help them move forward with clarity, confidence, and
              efficiency.
              <br />
              By combining technology and logistics with the right strategy, we
              simplify complex processes and deliver structured solutions. Our
              focus is on supporting individuals, startups, and established
              businesses in building strong foundations and scaling smoothly
            </p>

            <Button
              size="lg"
              className="bg-[#CC5500] hover:bg-[#1A2E4A]"
              onClick={handleOrder}
            >
              Get Started
            </Button>
          </div>

          <div className="relative h-105 rounded-xl overflow-hidden">
            <Image
              src="/Services/hero.jpg"
              alt="Rehbar Post logistics operations"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>

        {/* MISSION */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          <div className="relative h-90 rounded-xl overflow-hidden">
            <Image
              src="/Services/our-mission.png"
              alt="Mission image"
              fill
              className="object-cover"
            />
          </div>

          <div>
            <h2 className="text-3xl font-semibold text-[#1A2E4A] mb-4">
              Our Mission
            </h2>
            <p className="text-muted-foreground text-lg">
              To deliver efficient logistic solutions through Rehbar Post
              aggregation platform and performance-driven web solutions that
              support business growth. We are committed to professionalism,
              transparency, and long-term partnerships, ensuring every client
              receives dependable support and measurable value.
            </p>
          </div>
        </motion.div>

        {/* VISION */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h2 className="text-3xl font-semibold text-[#1A2E4A] mb-4">
              Our Vision
            </h2>
            <p className="text-muted-foreground text-lg">
              To become a trusted and structured service platform that empowers
              businesses through reliable logistics and strong digital
              solutions. We envision building an ecosystem where operations are
              simplified, technology is accessible, and businesses can scale
              with confidence
            </p>
          </div>

          <div className="relative h-90 rounded-xl overflow-hidden">
            <Image
              src="/Services/our-vision.png"
              alt="Mission image"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>

        {/* REHBAR POST PLATFORM */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h2 className="text-2xl font-semibold text-[#1A2E4A] mb-4">
              Rehbar Post – Smart Logistics Aggregation Platform
            </h2>

            <p className="text-muted-foreground text-lg mb-6">
              One of our core verticals is Rehbar Post, a logistics aggregation
              platform designed to streamline shipping operations for businesses
              across regions. Instead of managing multiple courier accounts,
              rate negotiations, and tracking systems, clients get everything in
              one unified platform.
              <br /> <br /> Through Rehbar Post, we provide:
            </p>

            <ul className="space-y-3 text-muted-foreground text-base">
              <li>• Access to multiple courier partners under one platform</li>
              <li>
                • Competitive shipping rates for B2B, SME & e-commerce sellers
              </li>
              <li>• Centralized tracking & order management</li>
              <li>• Faster dispatch handling & operational support</li>
              <li>• Assistance with NDR & delivery challenge reduction</li>
            </ul>
          </div>

          <div className="relative h-90 rounded-xl overflow-hidden">
            <Image
              src="/Services/smart-logistics.jpg"
              alt="Rehbar Post platform"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>

        {/* WEB SOLUTIONS */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          <div className="relative h-90 rounded-xl overflow-hidden">
            <Image
              src="/Services/web-solutions.jpeg"
              alt="Web development services"
              fill
              className="object-cover"
            />
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#1A2E4A] mb-4">
              Web Solutions & Digital Development
            </h2>

            <p className="text-muted-foreground text-lg mb-6">
              In addition to logistics, Rehbar Services delivers comprehensive
              web solutions tailored to modern business needs. We understand
              that today&#39;s business presence begins online. <br /> <br />{" "}
              That&#39;s why we provide:
            </p>

            <ul className="space-y-3 text-muted-foreground text-base">
              <li>• Professional Website Development</li>
              <li>• Business & E-commerce Website Design</li>
              <li>• Custom Web Applications</li>
              <li>• Platform Integration Solutions</li>
              <li>• Technical Consultation & Ongoing Support</li>
            </ul>
          </div>
        </motion.div>

        {/* OUR APPROACH */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-2xl font-semibold text-[#1A2E4A] mb-6">
            Our Approach
          </h2>

          <p className="text-muted-foreground text-lg mb-6">
            What sets Rehbar Services apart is our client-centered approach. We
            prioritize transparency, communication, and long-term collaboration.
            We do not believe in one-size-fits-all services. Instead, we
            carefully understand each client’s operational needs and provide
            structured, reliable solutions that align with their goals. Our
            commitment is simple: Deliver quality. Maintain professionalism.
            Support growth. As we continue to expand, Rehbar Services remains
            dedicated to building trust, strengthening partnerships, and
            contributing meaningfully to the businesses we serve.
          </p>

          <p className="text-muted-foreground text-lg mb-8">
            Our commitment is simple:
            <br />
            <span className="font-semibold text-[#1A2E4A]">
              Deliver quality. Maintain professionalism. Support growth.
            </span>
          </p>

          <p className="text-sm text-muted-foreground">
            Rehbar Services — Guiding businesses forward with structure,
            technology, and trust.
          </p>
        </motion.div>

        {/* STATS */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center"
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
        <Separator />
        {/* DIRECTORS MESSAGE */}
        <div>
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl font-semibold text-[#1A2E4A] text-center mb-14"
          >
            Message from Our Directors
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            {directors.map((director, index) => (
              <motion.div
                key={director.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
              >
                <Card className="h-full max-w-lg mx-auto transition-all hover:shadow-xl">
                  <div className="relative aspect-square overflow-hidden rounded-t-lg">
                    <Image
                      src={director.image}
                      alt={director.name}
                      fill
                      className="object-cover object-[center_20%]"
                    />
                  </div>

                  <CardHeader className="text-center">
                    <CardTitle className="text-lg text-[#1A2E4A]">
                      {director.name}
                    </CardTitle>
                    <p className="text-sm text-muted-foreground">
                      {director.role}
                    </p>
                  </CardHeader>

                  <CardContent className="text-center text-muted-foreground text-sm px-6">
                    “{director.message}”
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
