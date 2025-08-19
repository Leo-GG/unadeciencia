import EventHeader from "@/components/EventHeader";
import SpeakerCard from "@/components/SpeakerCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  console.log("Index component is loading!");
  
  const speakers = [
    {
      name: "Oscar Llorca",
      title: "El arte de ver las máquinas moleculares de la vida",
      description: "Explora cómo las técnicas de imagen más avanzadas nos permiten visualizar y comprender las máquinas moleculares que hacen posible la vida.",
      expertise: "Biología Estructural"
    },
    {
      name: "Lucía Fernández",
      title: "Reprogramando el sistema inmune para curar el cáncer",
      description: "Descubre cómo la inmunoterapia está revolucionando el tratamiento del cáncer al entrenar nuestro propio sistema inmune para combatir la enfermedad.",
      expertise: "Inmunoterapia"
    },
    {
      name: "Sergi Roig",
      title: "¡BOOM! Tratando el cáncer cortando los cables adecuados",
      description: "Una fascinante introducción a cómo las terapias dirigidas pueden 'cortar los cables' que alimentan el crecimiento tumoral.",
      expertise: "Oncología Molecular"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <EventHeader />
      
      {/* About Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center space-y-6">
            <h2 className="text-4xl font-bold text-foreground">
              Una noche de ciencia increíble
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Únete a nosotros para una velada extraordinaria donde tres brillantes investigadores 
              compartirán sus descubrimientos más emocionantes en el mundo de la medicina y la biología. 
              Desde las máquinas moleculares que impulsan la vida hasta las terapias más innovadoras 
              contra el cáncer, prepárate para un viaje fascinante por los avances científicos 
              que están cambiando nuestro mundo.
            </p>
          </div>
        </div>
      </section>

      {/* Speakers Section */}
      <section className="py-16 px-4 bg-science-warm/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Nuestros Ponentes
            </h2>
            <p className="text-lg text-muted-foreground">
              Presentado por <strong>Anabel Sáez</strong> y <strong>Carlos Valdivia</strong>
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {speakers.map((speaker, index) => (
              <SpeakerCard key={index} {...speaker} />
            ))}
          </div>
        </div>
      </section>

      {/* Event Details */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center text-foreground mb-12">
            Detalles del Evento
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-gradient-card border-border/50">
              <CardContent className="p-8">
                <div className="text-center space-y-4">
                  <div className="text-4xl mb-4">📍</div>
                  <h3 className="text-2xl font-bold text-foreground">Ubicación</h3>
                  <div className="space-y-2">
                    <p className="text-lg font-semibold text-primary">La Excéntrica</p>
                    <p className="text-muted-foreground">Madrid</p>
                    <p className="text-sm text-muted-foreground">
                      Un espacio único dedicado a la divulgación científica y cultural
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-card border-border/50">
              <CardContent className="p-8">
                <div className="text-center space-y-4">
                  <div className="text-4xl mb-4">🎫</div>
                  <h3 className="text-2xl font-bold text-foreground">Reservas</h3>
                  <div className="space-y-2">
                    <p className="text-lg font-semibold text-destructive">Aforo Limitado</p>
                    <p className="text-muted-foreground">¡No te quedes sin tu plaza!</p>
                    <p className="text-sm text-muted-foreground">
                      Reserva tu entrada escaneando el código QR o contactando con nosotros
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-accent">
        <div className="container mx-auto max-w-2xl text-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-white">
              ¿Listo para una noche de ciencia increíble?
            </h2>
            <p className="text-lg text-white/90">
              Reserva tu plaza ahora y únete a nosotros para descubrir los secretos de la vida
            </p>
            <Button 
              size="lg" 
              className="bg-white text-secondary hover:bg-white/90 font-semibold px-8 py-3 text-lg shadow-lg"
            >
              Reservar Entrada
            </Button>
          </div>
        </div>
      </section>

      {/* Contact & Info Section */}
      <section className="py-16 px-4 bg-science-warm/20">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center space-y-8">
            <h2 className="text-3xl font-bold text-foreground">
              Información y Contacto
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-gradient-card border-border/50">
                <CardContent className="p-6">
                  <div className="text-center space-y-4">
                    <div className="text-3xl">🏢</div>
                    <h3 className="text-xl font-bold text-foreground">Organizado por</h3>
                    <div className="space-y-2">
                      <p className="text-lg font-semibold text-primary">CNIO-PDA</p>
                      <p className="text-sm text-muted-foreground">
                        Centro Nacional de Investigaciones Oncológicas
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-card border-border/50">
                <CardContent className="p-6">
                  <div className="text-center space-y-4">
                    <div className="text-3xl">📧</div>
                    <h3 className="text-xl font-bold text-foreground">Contacto</h3>
                    <div className="space-y-2">
                      <p className="text-sm text-muted-foreground">Para reservas e información:</p>
                      <p className="text-primary font-medium">eventos@cnio.es</p>
                      <p className="text-primary font-medium">+34 917 328 000</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="pt-8 border-t border-border/30">
              <p className="text-sm text-muted-foreground">
                ¿Tienes preguntas sobre el evento? No dudes en contactarnos. 
                Estaremos encantados de ayudarte a resolver cualquier duda sobre esta increíble noche de ciencia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-foreground text-white">
        <div className="container mx-auto text-center">
          <div className="space-y-4">
            <div className="flex justify-center items-center space-x-4">
              <span className="text-2xl">🧬</span>
              <p className="text-lg font-semibold">Una de Ciencia, Por Favor</p>
              <span className="text-2xl">🔬</span>
            </div>
            <p className="text-sm opacity-75">
              © 2024 CNIO-PDA. Una iniciativa para acercar la ciencia a todos.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;