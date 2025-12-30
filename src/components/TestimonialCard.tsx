import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  author: string;
  business: string;
}

export const TestimonialCard = ({ quote, author, business }: TestimonialCardProps) => {
  return (
    <Card className="group relative overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-300 hover:border-accent/50">
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="relative p-6">
        <Quote className="mb-4 h-8 w-8 text-primary opacity-50" />
        <p className="mb-4 italic text-foreground">{quote}</p>
        <div>
          <p className="font-semibold text-foreground">{author}</p>
          <p className="text-sm text-muted-foreground">{business}</p>
        </div>
      </div>
    </Card>
  );
};
