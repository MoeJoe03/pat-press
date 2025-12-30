import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";
import { Card } from "@/components/ui/card";

const galleryImages = [
  { src: gallery1, alt: "Custom branded stress balls for eThekwini Municipality" },
  { src: gallery2, alt: "Custom printed signage boards - No Parking notices" },
  { src: gallery3, alt: "Branded jacket with Splash Express logo" },
  { src: gallery4, alt: "Custom printed jacket with Pat Press and Splash Express logos" },
  { src: gallery5, alt: "Display of Pat Press products - caps, mugs, tumblers and more" },
  { src: gallery6, alt: "Custom branded mugs with various company logos" },
];

export const Gallery = () => {
  return (
    <section id="gallery" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/20 via-background to-background" />
      
      <div className="container relative mx-auto px-4">
        <div className="mb-16 text-center">
          <div className="mb-4 inline-block rounded-lg bg-yellow/10 px-3 py-1 text-sm font-semibold text-yellow">
            Portfolio
          </div>
          <h2 className="mb-4 text-4xl font-extrabold text-foreground md:text-5xl">
            Our <span className="gradient-yellow text-5xl">Work</span> Speaks
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Check out some of our recent projects. From custom apparel to vibrant signage
          </p>
        </div>

        <div className="mx-auto max-w-6xl">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {galleryImages.map((image, index) => (
              <Card 
                key={index} 
                className="group relative overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative aspect-square overflow-hidden rounded-lg">
                  <img 
                    src={image.src} 
                    alt={image.alt} 
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {[
              { label: "Projects Completed", value: "500+" },
              { label: "Happy Clients", value: "200+" },
              { label: "Years Experience", value: "10+" },
            ].map((stat, index) => (
              <Card 
                key={stat.label} 
                className="border-border/50 bg-card/50 p-6 text-center backdrop-blur-sm animate-fade-in" 
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-2 text-4xl font-extrabold gradient-primary bg-clip-text text-transparent rounded-3xl">
                  {stat.value}
                </div>
                <div className="text-sm font-medium text-muted-foreground">{stat.label}</div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
