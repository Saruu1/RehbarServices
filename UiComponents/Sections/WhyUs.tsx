"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Rocket, Users } from "lucide-react";

const features = [
  {
    title: "Experienced Team",
    desc: "Senior engineers and designers with real-world product and startup experience.",
    icon: Users,
  },
  {
    title: "Agile & Transparent Process",
    desc: "Clear communication, weekly updates, and fast iterations — no surprises.",
    icon: Rocket,
  },
  {
    title: "Long-Term Partnership",
    desc: "We support, optimize, and scale your product even after launch.",
    icon: ShieldCheck,
  },
];

export default function WhyUs() {
  return (
    <section className="py-12 bg-muted">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1A2E4A] mb-4">
            Why Choose Us?
          </h2>
          <p className="text-lg text-[#64748B]">
            More than just developers — we’re your long-term technology partner.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.15 } },
          }}
          className="grid md:grid-cols-3 gap-8"
        >
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  show: { opacity: 1, y: 0 },
                }}
              >
                <div className="group relative h-full overflow-hidden rounded-xl bg-background p-8 shadow-sm transition-all duration-300 hover:shadow-xl">
                  {/* Hover background sweep */}
                  <div className="absolute inset-0 bg-[#CC5500] origin-left scale-x-0 transition-transform duration-1000 ease-out group-hover:scale-x-100 z-0" />

                  {/* Content */}
                  <div className="relative z-20">
                    <div className="w-12 h-12 rounded-lg bg-[#0F3460]/10 flex items-center justify-center mb-6 transition-colors duration-300 group-hover:bg-white/20">
                      <Icon className="w-6 h-6 text-[#0F3460] transition-colors duration-300 group-hover:text-white" />
                    </div>

                    <h3 className="text-xl font-semibold text-[#1A2E4A] mb-3 transition-colors duration-300 group-hover:text-white">
                      {feature.title}
                    </h3>

                    <p className="text-[#64748B] leading-relaxed transition-colors duration-300 group-hover:text-white">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom Trust Line */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-20 text-center text-sm text-muted-foreground"
        >
          Trusted by startups, founders, and growing businesses worldwide.
        </motion.div>
      </div>
    </section>
  );
}
