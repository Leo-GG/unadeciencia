import { Link } from "react-router-dom";

const EventHeader = () => {
  return (
    <section className="relative min-h-screen bg-gradient-hero flex items-center justify-center overflow-hidden">
      {/* Summer sun */}
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-yellow-200/40 blur-3xl animate-sun-pulse pointer-events-none"></div>
      <div className="absolute top-10 right-10 text-white/70 text-7xl animate-sun-pulse pointer-events-none">☀️</div>

      {/* Floating summer elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-[8%] text-white/70 text-4xl animate-float-up" style={{ animationDelay: '0s', animationDuration: '16s' }}>🌴</div>
        <div className="absolute bottom-0 left-[20%] text-white/60 text-3xl animate-float-up" style={{ animationDelay: '2.5s', animationDuration: '19s' }}>🐚</div>
        <div className="absolute bottom-0 left-[33%] text-white/75 text-5xl animate-float-up" style={{ animationDelay: '5s', animationDuration: '15s' }}>🌊</div>
        <div className="absolute bottom-0 left-[46%] text-white/65 text-3xl animate-float-up" style={{ animationDelay: '1.5s', animationDuration: '20s' }}>🍹</div>
        <div className="absolute bottom-0 left-[58%] text-white/70 text-4xl animate-float-up" style={{ animationDelay: '7s', animationDuration: '17s' }}>🕶️</div>
        <div className="absolute bottom-0 left-[70%] text-white/60 text-3xl animate-float-up" style={{ animationDelay: '3.5s', animationDuration: '18s' }}>🏖️</div>
        <div className="absolute bottom-0 left-[84%] text-white/75 text-4xl animate-float-up" style={{ animationDelay: '6s', animationDuration: '16s' }}>🍦</div>
        <div className="absolute bottom-0 left-[14%] text-white/55 text-3xl animate-float-up" style={{ animationDelay: '9s', animationDuration: '21s' }}>🌞</div>
        <div className="absolute bottom-0 left-[27%] text-white/70 text-4xl animate-float-up" style={{ animationDelay: '4.2s', animationDuration: '14s' }}>⛱️</div>
        <div className="absolute bottom-0 left-[52%] text-white/60 text-3xl animate-float-up" style={{ animationDelay: '8.5s', animationDuration: '19s' }}>🐠</div>
        <div className="absolute bottom-0 left-[64%] text-white/65 text-4xl animate-float-up" style={{ animationDelay: '10s', animationDuration: '17s' }}>🍉</div>
        <div className="absolute bottom-0 left-[92%] text-white/70 text-3xl animate-float-up" style={{ animationDelay: '2s', animationDuration: '20s' }}>🌺</div>

        <div className="absolute top-[18%] left-[6%] text-white/40 text-5xl animate-sway" style={{ animationDelay: '0s', animationDuration: '7s' }}>🌴</div>
        <div className="absolute top-[26%] right-[8%] text-white/40 text-5xl animate-sway" style={{ animationDelay: '1.5s', animationDuration: '8s' }}>🌴</div>
      </div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Main title with playful styling */}
          <div className="flex justify-center">
            <img 
              src="/lovable-uploads/1230c78b-a957-49a8-959b-7fdc9186fca8.png" 
              alt="Una de Ciencia, Por Favor - Logo del evento"
              className="max-w-xl md:max-w-3xl w-full h-auto"
            />
          </div>
          
          {/* Edition badge */}
          <div className="space-y-2">
            <div className="inline-block bg-white/30 backdrop-blur-sm rounded-full px-6 py-2">
              <span className="text-white font-bold text-lg">☀️ 3ª EDICIÓN ☀️</span>
            </div>
            <div className="flex justify-center items-center gap-3 text-sm">
              <span className="text-white/70">Ediciones anteriores:</span>
              <Link to="/edicion-2" className="text-white/90 hover:text-white underline transition-colors">
                2ª edición
              </Link>
              <span className="text-white/50">·</span>
              <Link to="/edicion-1" className="text-white/90 hover:text-white underline transition-colors">
                1ª edición
              </Link>
            </div>
          </div>
          
          {/* Event details */}
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 mx-auto max-w-2xl">
            <div className="grid md:grid-cols-2 gap-4 text-white">
              <div className="flex items-center justify-center space-x-2">
                <span className="text-2xl">📅</span>
                <div>
                  <p className="font-bold text-lg">17 de Septiembre de 2025</p>
                  <p className="text-sm opacity-90">Miércoles</p>
                </div>
              </div>
              
              <div className="flex items-center justify-center space-x-2">
                <span className="text-2xl">⏰</span>
                <div>
                  <p className="font-bold text-lg">19:00 - 21:00</p>
                  <p className="text-sm opacity-90">2 horas de ciencia</p>
                </div>
              </div>
            </div>
            
            <div className="mt-4 pt-4 border-t border-white/30">
              <div className="flex items-center justify-center space-x-2 text-white">
                <span className="text-2xl">📍</span>
                <div>
                  <a href="https://maps.app.goo.gl/ghGeLUkr5skfaWbE9" target="_blank" rel="noopener noreferrer" className="hover:underline">
                    <p className="font-bold text-lg">La Excéntrica</p>
                  </a>
                  <p className="text-sm opacity-90">Calle las Fuentes 10, Madrid</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Call to action */}
          <div className="space-y-4">
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Descubre el fascinante mundo de la ciencia de la mano de expertos investigadores en este evento gratuito de divulgación
            </p>
            <div className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
              <span className="text-white text-lg font-semibold">🎫 AFORO LIMITADO</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" className="w-full h-20 fill-background">
          <path d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default EventHeader;