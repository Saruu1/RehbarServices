"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface PricingCardProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
}

export function PricingCard({
  title,
  price,
  description,
  features,
  highlighted = false,
}: PricingCardProps) {
  // handle WhatsApp click
  const handleWhatsappClick = () => {
    const phone = "+917051181750";
    const message = `Hi, I'm interested in the ${title} plan.`;
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };
  return (
    <Card
      className={`
        relative h-full transition-all duration-300
        hover:-translate-y-2 hover:shadow-xl
        ${highlighted ? "border-orange-500 shadow-lg" : "border-slate-200"}
      `}
    >
      {/* Glow effect (desktop only) */}
      {highlighted && (
        <div className="pointer-events-none absolute -inset-1 -z-10 hidden lg:block rounded-xl bg-orange-400/30 blur-xl" />
      )}

      <CardHeader className="space-y-2">
        {highlighted && (
          <Badge className="w-fit bg-orange-500 text-white">Most Popular</Badge>
        )}

        <CardTitle className="text-xl sm:text-2xl">{title}</CardTitle>

        <p className="text-sm text-muted-foreground">{description}</p>
      </CardHeader>

      <CardContent className="flex flex-col">
        {/* Price */}
        <div className="mb-6">
          <span className="text-3xl sm:text-4xl font-bold text-slate-900">
            {price}
          </span>
        </div>

        {/* Features */}
        <ul className="mb-8 space-y-3 text-sm sm:text-base">
          {features.map((feature) => (
            <li key={feature} className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-orange-500" />
              {feature}
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Button
          onClick={handleWhatsappClick}
          className={`mt-auto w-full ${
            highlighted ? "bg-orange-500 hover:bg-orange-600" : ""
          }`}
        >
          Get Started
        </Button>
      </CardContent>
    </Card>
  );
}
