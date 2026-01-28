import { Card, CardContent } from "@/components/ui/card";
import sergiImageSrc from "../img/sergi.jpeg";
import luciaImageSrc from "../img/lucia.jpg";

interface SpeakerCardProps {
  name: string;
  title: string;
  description: string;
  expertise: string;
  image?: string;
}

const SpeakerCard1 = ({ name, title, description, expertise, image }: SpeakerCardProps) => {
  const getSpeakerImage = () => {
    if (name === "Sergi Roig") return sergiImageSrc;
    if (name === "Lucía Fernández") return luciaImageSrc;
    return image;
  };
  
  const speakerImage = getSpeakerImage();
  return (
    <Card className="bg-gradient-card border-border/50 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <CardContent className="p-6">
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="relative">
            <div className="w-24 h-24 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg border-2 border-orange-500 overflow-hidden">
              {speakerImage ? (
                <img 
                  src={speakerImage} 
                  alt={name}
                  className="w-full h-full object-cover" 
                />
              ) : (
                <div className="w-full h-full bg-gradient-edition1 flex items-center justify-center">
                  {name.split(' ').map(n => n[0]).join('')}
                </div>
              )}
            </div>
            <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
              <span className="text-xs">🧬</span>
            </div>
          </div>
          
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-foreground">{name}</h3>
            <div className="inline-block px-3 py-1 bg-orange-500/20 rounded-full">
              <span className="text-sm font-medium text-orange-600">{expertise}</span>
            </div>
          </div>
          
          <div className="space-y-3">
            <h4 className="font-semibold text-orange-600 text-base leading-tight">{title}</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SpeakerCard1;
