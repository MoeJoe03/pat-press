import { ServiceCard } from "./ServiceCard";
import { Shirt, Palette, Sparkles, Car, Sticker, LayoutGrid } from "lucide-react";
export const Services = () => {
  const services = [{
    icon: Shirt,
    title: "T-Shirt & Workwear Printing",
    description: "Premium custom apparel printing for businesses, teams, and personal projects.",
    accent: "primary" as const
  }, {
    icon: Sparkles,
    title: "DTF Prints",
    description: "High-quality Direct-to-Film printing for vibrant, durable designs on any fabric.",
    accent: "accent" as const
  }, {
    icon: Palette,
    title: "Vinyl & Heat Transfers",
    description: "Professional vinyl cutting and heat transfer services for lasting impressions.",
    accent: "yellow" as const
  }, {
    icon: Car,
    title: "Car Decals & Magnetic Ads",
    description: "Eye-catching vehicle branding, from permanent decals to removable magnetic signs.",
    accent: "primary" as const
  }, {
    icon: Sticker,
    title: "Stickers & Labels",
    description: "Custom stickers and labels in any size, shape, or finish for any purpose.",
    accent: "accent" as const
  }, {
    icon: LayoutGrid,
    title: "Signage Boards",
    description: "Professional signage solutions for businesses, events, and promotional displays.",
    accent: "yellow" as const
  }];
  return <section id="services" className="relative py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary/20" />
      
      <div className="container relative mx-auto px-4">
        <div className="mb-16 text-center">
          <div className="mb-4 inline-block rounded-lg bg-accent/10 px-3 py-1 text-sm font-semibold text-accent">
            Our Services
          </div>
          <h2 className="mb-4 text-4xl font-extrabold text-foreground md:text-5xl">
            What We <span className="gradient-accent bg-clip-text text-transparent text-5xl">Create</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            From apparel to signage, we bring your creative visions to life with precision and flair
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => <div key={service.title} className="animate-fade-in" style={{
          animationDelay: `${index * 100}ms`
        }}>
              <ServiceCard {...service} />
            </div>)}
        </div>
      </div>
    </section>;
};