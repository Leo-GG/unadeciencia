import { Card, CardContent } from "@/components/ui/card";

interface SpeakerCardProps {
  name: string;
  title: string;
  description: string;
  expertise: string;
  image?: string;
}

const SpeakerCard3 = ({ name, title, description, expertise, image }: SpeakerCardProps) => {
  return (
    <Card className="bg-gradient-card border-border/50 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <CardContent className="p-6">
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="relative">
            <div className="w-24 h-24 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg border-2 border-science-sun overflow-hidden">
              {image ? (
                <img
                  src={image}
                  alt={name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-gradient-hero flex items-center justify-center">
                  {name.split(' ').map(n => n[0]).join('')}
                </div>
              )}
            </div>
            <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-science-sun rounded-full flex items-center justify-center shadow">
              <span className="text-xs">☀️</span>
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="text-xl font-bold text-foreground">{name}</h3>
            <div className="inline-block px-3 py-1 bg-secondary/20 rounded-full">
              <span className="text-sm font-medium text-secondary">{expertise}</span>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="font-semibold text-primary text-base leading-tight">{title}</h4>
            {description && (
              <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SpeakerCard3;
