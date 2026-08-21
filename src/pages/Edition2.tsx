import Edition2Header from "@/components/Edition2Header";
import SpeakerCard2 from "@/components/SpeakerCard2";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import blasImage from "../img/blas.jpeg";
import anabelenImage from "../img/anabelen.jpeg";
import davidImage from "../img/david.jpg";
import anabelImage from "../img/Anabel.jpg";
import carlosImage from "../img/Carlos.jpg";

const Edition2 = () => {
  const speakers = [
    {
      name: "Blas Chaves",
      title: "El código secreto del cáncer: La trama que ni Villarejo conoce",
      description: "",
      expertise: "Oncología Computacional",
      image: blasImage
    },
    {
      name: "Ana Belén Alonso",
      title: "¿Qué pasa con la grasa?",
      description: "",
      expertise: "Interacciones Metabólicas",
      image: anabelenImage
    },
    {
      name: "David Sánchez",
      title: "Del ADN a la proteína: Cómo me convertí en granjero de bacterias",
      description: "",
      expertise: "Producción de Proteínas",
      image: davidImage
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
      <Edition2Header />

      {/* Back to current edition */}
      <section className="py-8 px-4 bg-science-blue/10">
        <div className="container mx-auto text-center space-y-3">
          <Link to="/">
            <Button variant="outline" className="border-science-blue text-science-blue hover:bg-science-blue hover:text-white">
              ← Volver a la edición actual
            </Button>
          </Link>
          <div>
            <Link to="/edicion-1" className="text-sm text-muted-foreground underline hover:text-foreground transition-colors">
              Ver la 1ª edición
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center space-y-6">
            <h2 className="text-4xl font-bold text-foreground">
              Una noche de ciencia increíble
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Una velada extraordinaria donde tres brillantes investigadores compartieron sus
              descubrimientos más emocionantes en el mundo de la medicina y la biología.
              Desciframos el lenguaje oculto del cáncer, seguimos el viaje de las grasas por el cuerpo
              y nos colamos en las bacterias para ver cómo fabrican proteínas.
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
              <SpeakerCard2 key={index} {...speaker} />
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
              Los maestros de ceremonias que guiaron esta increíble velada científica
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {presenters.map((presenter, index) => (
              <SpeakerCard2 key={index} {...presenter} />
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
                  <div className="text-4xl mb-4">📅</div>
                  <h3 className="text-2xl font-bold text-foreground">Fecha</h3>
                  <div className="space-y-2">
                    <p className="text-lg font-semibold text-primary">5 de Febrero de 2026</p>
                    <p className="text-muted-foreground">19:00 - 21:00</p>
                    <p className="text-sm text-muted-foreground">
                      Este evento ya ha finalizado
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
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
                      <p className="text-sm text-muted-foreground">Para información:</p>
                      <p className="text-primary font-medium">unadeciencia@gmail.com</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
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
              © 2026 CNIO-PDA. Una iniciativa para acercar la ciencia a todos.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Edition2;
