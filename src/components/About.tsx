import aboutImage from "@/assets/about-workspace.jpg";
export const About = () => {
  return <section id="about" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />
      
      <div className="container relative mx-auto px-4">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div className="order-2 md:order-1">
            <div className="mb-4 inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm font-semibold text-primary">
              About Us
            </div>
            <h2 className="mb-6 text-4xl font-extrabold text-foreground md:text-5xl">
              Passion for Print, <span className="gradient-primary bg-clip-text text-transparent text-5xl">Pride in Quality</span>
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                At <span className="font-bold text-foreground">Pat Press</span>, we're more than just a printing company. We're your creative partner in bringing bold ideas to life. From custom T-shirts to eye-catching car decals, every project gets our full attention to detail.
              </p>
              <p>
                As a proud local business, we believe in quality craftsmanship, fast turnaround times, and personal service that makes you feel like family. Whether you're an individual with a unique vision or a small business building your brand, we're here to help you make an impact.
              </p>
              <p className="font-semibold text-foreground">
                Your vision. Our expertise. Unforgettable results.
              </p>
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <div className="group relative overflow-hidden rounded-2xl shadow-2xl">
              <img src={aboutImage} alt="Pat Press modern printing workspace" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>
          </div>
        </div>
      </div>
    </section>;
};