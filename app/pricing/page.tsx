import { PricingCard } from "@/UiComponents/Sections/PricingCard";


export default function PricingPage() {
  return (
    <section className="relative pt-12 sm:py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900">
            Simple, Transparent Pricing
          </h1>
          <p className="mt-4 text-sm sm:text-base text-muted-foreground">
            Choose a plan that fits your business needs. No hidden fees.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <PricingCard
            title="Basic"
            price="25K"
            description="Perfect for small businesses"
            features={[
              "Landing Page",
              "Responsive Design",
              "SSL Security",
              "Ecommerce Functionality",
              "Free Domain and Hosting (1 Year)",
              "1 Month Support",
            ]}
          />

          <PricingCard
            title="Premium"
            price="35K"
            description="For growing teams"
            highlighted
            features={[
              "Everything in Starter",
              "Custom UI Design",
              "API Integration",
              "Ecommerce Functionality",
              "Priority Support",
              "Free Domain and Hosting (1 Year)",
               "6 Months Support",
            ]}
          />

          <PricingCard
            title="Enterprise"
            price="60K"
            description="Tailored for scale"
            features={[
              "Web App and Mobile App (Andriod)",
              "Advanced Security",
              "Performance Optimization",
              "Free Domain and Hosting (1 Year)",
              "Lifetime Dedicated Support",
              "Ecommerce Functionality",
            ]}
          />
        </div>
      </div>
    </section>
  )
}
