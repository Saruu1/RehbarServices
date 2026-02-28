"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail } from "lucide-react";
import Image from "next/image";

export default function ContactUsPage() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // auto-hide success message
  useEffect(() => {
    if (!success) return;
    const timer = setTimeout(() => setSuccess(false), 2000);
    return () => clearTimeout(timer);
  }, [success]);

  // AJAX form submission handler
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch(
        "https://formsubmit.co/ajax/support@rehbarpost.com",
        {
          method: "POST",
          body: formData,
        },
      );

      if (res.ok) {
        setSuccess(true);
        form.reset();
      }
    } catch (error) {
      console.error("Form submission error", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="bg-background text-[#1A2E4A] overflow-x-hidden">
      <div className="relative w-full overflow-hidden">
        {/* Decorative background shapes */}
        <div className="absolute -top-32 -left-32 w-125 h-125 bg-[#CC5500]/16 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -right-40 w-105 h-105 bg-[#1A2E4A]/5 rounded-full blur-3xl" />

        {/* Dotted pattern */}
        <svg
          className="absolute left-12 top-30 hidden md:block opacity-20"
          width="180"
          height="180"
          viewBox="0 0 180 180"
          fill="none"
        >
          {Array.from({ length: 36 }).map((_, i) => (
            <circle
              key={i}
              cx={(i % 6) * 30 + 10}
              cy={Math.floor(i / 6) * 30 + 10}
              r="3"
              fill="#CC5500"
            />
          ))}
        </svg>

        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative grid md:grid-cols-2 gap-12 items-center py-24 max-w-6xl mx-auto"
          >
            {/* TEXT */}
            <div className="text-center md:text-left relative z-10">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Get in Touch
              </h1>

              <p className="text-lg text-muted-foreground max-w-md">
                Have questions, ideas, or want to discuss a project? Fill out
                the form below and our team will respond as soon as possible.
              </p>
            </div>

            {/* IMAGE */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative w-full h-72 md:h-96 rounded-2xl overflow-hidden
             shadow-xl transition-all duration-500 ease-out
             hover:-translate-y-2 hover:shadow-2xl group"
            >
              {/* Accent border on hover */}
              <div
                className="pointer-events-none absolute inset-0 rounded-2xl
               ring-1 ring-transparent
               group-hover:ring-[#CC5500]/40
               transition-all duration-500"
              />

              {/* Diagonal accent */}
              <div
                className="absolute -top-10 -left-10 w-40 h-40 border-[3px]
                  border-[#CC5500]/20 rotate-12 rounded-2xl z-10
                  transition-transform duration-500
                  group-hover:rotate-18deg"
              />

              {/* Image */}
              <Image
                src="/Services/contact-hero.png"
                alt="Contact our team"
                fill
                className="object-cover transition-transform duration-700 ease-out
               group-hover:scale-110"
                priority
              />

              {/* Hover overlay */}
              <div
                className="absolute inset-0 bg-linear-to-tr
               from-black/30 via-transparent to-transparent
               opacity-30 group-hover:opacity-10
               transition-opacity duration-500"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 lg:flex lg:gap-12 lg:items-start mt-12">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2"
        >
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Send Us a Message</CardTitle>
              <CardDescription>
                We’ll get back to you within 1–2 business days.
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-6 py-6">
              {success && (
                <div className="rounded-lg bg-green-50 border border-green-200 p-4 text-sm text-green-700">
                  Your message has been sent successfully.
                </div>
              )}
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* FormSubmit config */}
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />

                <div>
                  <Label>Name</Label>
                  <Input name="name" placeholder="Your full name" required />
                </div>

                <div>
                  <Label>Email</Label>
                  <Input
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    required
                  />
                </div>

                <div>
                  <Label>Phone</Label>
                  <Input name="phone" type="tel" placeholder="+91 7051181750" />
                </div>

                <div>
                  <Label>Message</Label>
                  <Textarea
                    name="message"
                    rows={5}
                    placeholder="Your message…"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#CC5500] text-white hover:bg-[#0c2a4c]"
                >
                  {loading ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>

        {/* INFO */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:w-1/2 mt-12 lg:mt-0 space-y-8"
        >
          <div className="space-y-6 rounded-xl border p-6 bg-[#F9FAFB]">
            <div className="flex gap-3">
              <MapPin className="text-[#CC5500]" />
              <p>Satkreeri, Badampora, Ganderbal, J&K - 191131</p>
            </div>

            <div className="flex gap-3">
              <Phone className="text-[#CC5500]" />
              <p>+91 7051181750</p>
            </div>

            <div className="flex gap-3">
              <Mail className="text-[#CC5500]" />
              <p>support@rehbarpost.com</p>
            </div>
          </div>

          <div className="rounded-xl border p-6 bg-[#F9FAFB]">
            <h4 className="font-semibold mb-2">We’re Here to Help</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Reach out anytime — our team usually replies within 24 hours.
            </p>

            <div className="flex gap-3">
              <a href="tel:+917051181750">
                <Button
                  variant="outline"
                  className=" text-black hover:bg-[#CC5500] hover:text-white"
                >
                  Call Us
                </Button>
              </a>
              <a href="mailto:support@rehbarpost.com">
                <Button className="bg-[#CC5500] text-white hover:bg-[#0c2a4c]">
                  Email Support
                </Button>
              </a>
            </div>
          </div>

          <div className="mt-8 rounded-xl border p-6 bg-[#F9FAFB]">
            <h4 className="font-semibold mb-2">Business Hours</h4>
            <p className="text-sm text-muted-foreground">
              Monday – Saturday
              <br />
              9:30 AM – 5:00 PM (IST)
            </p>
          </div>
        </motion.div>
      </div>

      {/* MAP */}
      <div className="container mx-auto px-4 pb-20">
        <div className="rounded-xl border overflow-hidden">
          <iframe
            title="Office Location"
            src="https://www.google.com/maps?q=Satkreeri%20Badampora%20Ganderbal%20Jammu%20and%20Kashmir&output=embed"
            className="w-full h-80 border-0"
            loading="lazy"
          />
        </div>
      </div>
    </main>
  );
}
