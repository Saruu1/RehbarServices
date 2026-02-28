"use client";

import { motion } from "framer-motion";
import { Code2, Users, Rocket, Heart } from "lucide-react";
import Link from "next/link";

const perks = [
  {
    title: "Challenging Projects",
    desc: "Build real-world products using modern stacks and best practices.",
    icon: Code2,
  },
  {
    title: "Collaborative Culture",
    desc: "Work with supportive teammates who value clarity and ownership.",
    icon: Users,
  },
  {
    title: "Career Growth",
    desc: "Mentorship, learning budget, and clear growth paths.",
    icon: Rocket,
  },
  {
    title: "People First",
    desc: "Flexible work, healthy pace, and respect for personal time.",
    icon: Heart,
  },
];

const positions = [
  "Frontend Developer (React / Next.js)",
  "Backend Developer (Node.js / APIs)",
  "Business Executive",
  "Marketing Executive",
];

const FORM_BASE_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSfQmp8KSdXTQgw__aGPNU1cP_9mgQtWYWU9ZRB-FQWzmJMHQg/viewform";

const POSITION_ENTRY_ID = "entry.1558087059";
// Function to generate the Google Form URL with the selected position pre-filled
const getApplyLink = (role: string) => {
  return `${FORM_BASE_URL}?usp=pp_url&${POSITION_ENTRY_ID}=${encodeURIComponent(
    role,
  )}`;
};

export default function CareersPage() {
  return (
    <section className="bg-background">
      <div className="container mx-auto px-4">
        {/* HERO */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center py-28"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-[#1A2E4A] mb-6">
            Careers at Our Company
          </h1>
          <p className="text-lg text-muted-foreground mb-10">
            Join a team where technology, creativity, and impact come together.
          </p>

          <Link
            href="#open-roles"
            className="inline-block bg-[#CC5500] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#0F3460] transition"
          >
            Explore Opportunities
          </Link>
        </motion.div>

        {/* WHY WORK WITH US */}
        <section className="py-24 bg-muted rounded-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl font-bold text-[#1A2E4A] mb-4">
              Why Work With Us?
            </h2>
            <p className="text-muted-foreground">
              We believe great software is built by happy, empowered people.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {perks.map((perk) => {
              const Icon = perk.icon;
              return (
                <motion.div
                  key={perk.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <div className="group relative h-full overflow-hidden rounded-xl bg-background p-6 shadow-sm transition-all duration-300 hover:shadow-xl">
                    {/* Hover bg sweep */}
                    <div className="absolute inset-0 bg-[#CC5500] origin-left scale-x-0 transition-transform duration-1000 ease-out group-hover:scale-x-100 z-0" />

                    <div className="relative z-10 text-center">
                      <div className="w-12 h-12 mx-auto rounded-lg bg-[#0F3460]/10 flex items-center justify-center mb-4 transition-colors duration-300 group-hover:bg-white/20">
                        <Icon className="w-6 h-6 text-[#0F3460] transition-colors duration-300 group-hover:text-white" />
                      </div>

                      <h3 className="font-semibold text-[#1A2E4A] mb-2 transition-colors duration-300 group-hover:text-white">
                        {perk.title}
                      </h3>

                      <p className="text-sm text-muted-foreground transition-colors duration-300 group-hover:text-white">
                        {perk.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* OPEN ROLES */}
        <section id="open-roles" className="py-28">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <h2 className="text-3xl font-bold text-[#1A2E4A] mb-4">
              Open Positions
            </h2>
            <p className="text-muted-foreground">
              Find a role that matches your skills and ambitions.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            {positions.map((role) => (
              <motion.div
                key={role}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-xl bg-muted p-6 flex items-center justify-between"
              >
                {/* Hover bg sweep */}
                <div className="absolute inset-0 bg-[#CC5500] origin-left scale-x-0 transition-transform duration-1000 ease-out group-hover:scale-x-100 z-0" />

                <span className="relative z-10 font-medium text-[#1A2E4A] transition-colors duration-300 group-hover:text-white">
                  {role}
                </span>

                <Link
                  href={getApplyLink(role)}
                  target="_blank"
                  className="relative z-10 font-medium text-[#0F3460] transition-colors duration-300 group-hover:text-white"
                >
                  Apply →
                </Link>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}
