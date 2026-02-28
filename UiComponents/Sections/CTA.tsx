"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function CTA() {
  return (
    <section className="relative overflow-hidden py-12 sm:py-32">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-linear-to-br from-[#CC5500] via-[#b34700] to-[#8a3200]" />
      {/* Animated floating shapes */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-white/10 blur-3xl"
      />
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-black/20 blur-3xl"
      />

      <div className="relative container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto max-w-4xl text-center"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
            Let’s Build Something
            <span className="block text-white/80">That Scales With You</span>
          </h2>

          <p className="text-lg sm:text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            From idea validation to production deployment, we design and
            engineer scalable digital products that move businesses forward.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }}>
              <Button
                asChild
                size="default"
                className="bg-white text-black px-6 py-3 text-base shadow-lg hover:bg-[#0c2a4d] hover:text-white"
              >
                <a
                  href="https://forms.gle/aNv2pFaXYTyiYrhz5"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Request a Demo
                </a>
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }}>
              <Button
                size="default"
                variant="outline"
                className="border-white/40 text-black px-6 py-3 text-base hover:bg-[#0F3460] hover:text-white"
              >
                Learn More
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
