import { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  accent: "primary" | "accent" | "yellow";
}

export const ServiceCard = ({ icon: Icon, title, description, accent }: ServiceCardProps) => {
  const accentColors = {
    primary: "from-primary to-blue-400",
    accent: "from-accent to-purple-400",
    yellow: "from-yellow to-orange-400",
  };

  return (
    <Card className="group relative overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-primary/50 hover:shadow-glow">
      <div className={`absolute inset-0 bg-gradient-to-br ${accentColors[accent]} opacity-0 transition-opacity duration-300 group-hover:opacity-10`} />
      <div className="relative p-6">
        <div className={`mb-4 inline-flex rounded-xl bg-gradient-to-br ${accentColors[accent]} p-3 shadow-lg`}>
          <Icon className="h-6 w-6 text-primary-foreground" />
        </div>
        <h3 className="mb-2 text-xl font-bold text-foreground">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </Card>
  );
};
