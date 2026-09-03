import EventHeader from "@/components/EventHeader";
import SpeakerCard3 from "@/components/SpeakerCard3";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import luciaImage from "../img/lucia_2026.jpg";
import jaimeImage from "../img/jaime_2026.jpg";
import anabelImage from "../img/Anabel.jpg";
import carlosImage from "../img/Carlos.jpg";

const Index = () => {
  console.log("Index component is loading!");
  
  const speakers = [
    {
      name: "Lucía Garrido",
      title: "Vesículas extracelulares, el WhatsApp de nuestras células",
      description: "",
      expertise: "Vesículas Extracelulares",
      image: luciaImage
    },
    {
      name: "Jaime Franco-Mansilla",
      title: "Inmunotinder: el supermatch de los anticuerpos biespecíficos",
      description: "",
      expertise: "Inmunoterapia",
      image: jaimeImage
    },
    {
      name: "Juan Tasis",
      title: "Éxtasis de las profundidades. ¿Qué tiene que ver una borrachera y el buceo profundo?",
      description: "",
      expertise: "Fisiología del Buceo"
    }
  ];

  const presenters = [
    {
      name: "Anabel Sáez",
      title: "Presentadora del evento",
      description: "Experta en divulgación científica, guiará la velada con su pasión por hacer la ciencia accesible a todos.",
      expertise: "Divulgación Científica",
      image: anabelImage
    },
    {
      name: "Carlos Valdivia",
      title: "Presentador del evento",
      description: "Comunicador científico especializado en hacer comprensibles los avances más complejos de la investigación biomédica.",
      expertise: "Comunicación Científica",
      image: carlosImage
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
              Escucharemos los mensajes que se envían nuestras células, veremos cómo los anticuerpos
              encuentran su pareja perfecta y bajaremos a las profundidades del mar para descubrir
              qué tiene que ver el buceo con una borrachera. Una edición de verano para curiosos que
              quieren entender cómo funciona la vida desde dentro.
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
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {speakers.map((speaker, index) => (
              <SpeakerCard3 key={index} {...speaker} />
            ))}
          </div>
        </div>
      </section>

      {/* Presenters Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Presentadores
            </h2>
            <p className="text-lg text-muted-foreground">
              Los maestros de ceremonias que guiarán esta increíble velada científica
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {presenters.map((presenter, index) => (
              <SpeakerCard3 key={index} {...presenter} />
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
                    <a href="https://maps.app.goo.gl/ghGeLUkr5skfaWbE9" target="_blank" rel="noopener noreferrer" className="hover:underline">
                      <p className="text-lg font-semibold text-primary">La Excéntrica</p>
                    </a>
                    <p className="text-muted-foreground">Calle las Fuentes 10, Madrid</p>
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
                      Reserva tu entrada rellenando el formulario de inscripción
                    </p>
                    <a
                      href="https://forms.gle/KWz9grUwTXPQX7Q89"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block text-primary font-medium underline hover:no-underline"
                    >
                      Formulario de inscripción
                    </a>
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
            <a href="https://forms.gle/KWz9grUwTXPQX7Q89" target="_blank" rel="noopener noreferrer">
              <Button 
                size="lg" 
                className="bg-white text-secondary hover:bg-white/90 font-semibold px-8 py-3 text-lg shadow-lg"
              >
                Reservar Entrada
              </Button>
            </a>
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
                        Asociación de investigadores postdoctorales del Centro Nacional de Investigaciones Oncológicas
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
                      <p className="text-primary font-medium">unadeciencia@gmail.com</p>
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
            
            <div className="flex justify-center items-center space-x-2">
              <span className="text-sm opacity-75">Síguenos en:</span>
              <a 
                href="https://www.instagram.com/unadecienciaporfavor?igsh=ZW9hdG52cGNpc2lm" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 px-3 py-2 rounded-full transition-all duration-300 transform hover:scale-105"
              >
                <Instagram size={20} />
                <span className="text-sm font-medium">@unadecienciaporfavor</span>
              </a>
            </div>
            
            <p className="text-sm opacity-75">
              © 2025 CNIO-PDA. Una iniciativa para acercar la ciencia a todos.
            </p>

            <p className="text-sm opacity-75">
              Ediciones anteriores: {" "}
              <Link to="/edicion-2" className="underline hover:opacity-100">2ª edición</Link>
              {" · "}
              <Link to="/edicion-1" className="underline hover:opacity-100">1ª edición</Link>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;