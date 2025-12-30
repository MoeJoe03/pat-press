import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-printing.jpg";
export const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return <section className="relative min-h-screen overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img src={heroImage} alt="Professional printing services with vibrant CMYK colors" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-background/80" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-20 top-20 h-64 w-64 animate-float rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -right-20 top-40 h-80 w-80 animate-float rounded-full bg-accent/10 blur-3xl animation-delay-2000" />
        <div className="absolute bottom-20 left-1/2 h-72 w-72 animate-float rounded-full bg-yellow/10 blur-3xl animation-delay-4000" />
      </div>

      {/* Content */}
      <div className="relative flex min-h-screen items-center">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 backdrop-blur-sm">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-foreground">Premium Custom Printing Services</span>
            </div>
            
            <h1 className="mb-6 animate-fade-in text-5xl font-extrabold leading-tight text-foreground md:text-7xl lg:text-8xl">
              Print It. <span className="gradient-primary text-8xl">Wear It.</span>{" "}
              <span className="gradient-accent text-8xl">Stick It.</span>
            </h1>
            
            <p className="mb-8 animate-fade-in text-xl text-muted-foreground animation-delay-200 md:text-2xl">
              Custom prints and branding by <span className="font-bold text-foreground">Pat Press</span>. From T-shirts to car decals
            </p>
            
            <div className="flex flex-col items-center justify-center gap-4 animate-fade-in animation-delay-400 sm:flex-row">
              <Button onClick={scrollToContact} size="lg" className="group bg-gradient-to-r from-primary to-blue-500 text-lg font-bold shadow-glow hover:shadow-glow-accent transition-all duration-300 hover:scale-105">
                Get a Quote
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              
              <Button onClick={() => document.getElementById('services')?.scrollIntoView({
              behavior: 'smooth'
            })} size="lg" variant="outline" className="border-primary/50 bg-background/50 text-lg font-semibold backdrop-blur-sm hover:bg-primary/10 hover:border-primary">
                View Services
              </Button>
            </div>
          </div>
        </div>
      </div>

    </section>;
};