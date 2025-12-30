import { TestimonialCard } from "./TestimonialCard";
export const Testimonials = () => {
  const testimonials = [{
    quote: "Pat Press transformed our company workwear with stunning custom prints. The quality is exceptional and the turnaround was incredibly fast. Highly recommend!",
    author: "Sarah Mitchell",
    business: "Mitchell Construction Ltd"
  }, {
    quote: "We needed car decals for our fleet and Pat Press delivered beyond expectations. Professional, creative, and the decals still look perfect after months of use.",
    author: "James Chen",
    business: "Chen's Catering Services"
  }, {
    quote: "From design to delivery, the team at Pat Press made our event signage absolutely pop! The colors were vibrant and the boards were perfect for our outdoor expo.",
    author: "Emma Rodriguez",
    business: "Rodriguez Events Co."
  }];
  return <section id="testimonials" className="relative py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary/30" />
      
      <div className="container relative mx-auto px-4">
        <div className="mb-16 text-center">
          <div className="mb-4 inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm font-semibold text-primary">
            Testimonials
          </div>
          <h2 className="mb-4 text-4xl font-extrabold text-foreground md:text-5xl">
            What Our <span className="gradient-primary bg-clip-text text-transparent text-5xl">Clients</span> Say
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Don't just take our word for it. Hear from businesses and individuals we've helped
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => <div key={testimonial.author} className="animate-fade-in" style={{
          animationDelay: `${index * 150}ms`
        }}>
              <TestimonialCard {...testimonial} />
            </div>)}
        </div>
      </div>
    </section>;
};