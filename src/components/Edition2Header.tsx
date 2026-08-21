const Edition2Header = () => {
  return (
    <section className="relative min-h-screen bg-gradient-edition2 flex items-center justify-center overflow-hidden">
      {/* Animated snowflake elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[5%] left-[10%] text-white/80 text-4xl animate-snowfall" style={{ animationDelay: '0s', animationDuration: '10s' }}>❄</div>
        <div className="absolute top-[10%] left-[25%] text-white/90 text-2xl animate-snowfall" style={{ animationDelay: '2s', animationDuration: '12s' }}>❄</div>
        <div className="absolute top-[3%] left-[40%] text-white/70 text-5xl animate-snowfall" style={{ animationDelay: '4s', animationDuration: '8s' }}>❄</div>
        <div className="absolute top-[8%] left-[55%] text-white/85 text-3xl animate-snowfall" style={{ animationDelay: '1s', animationDuration: '11s' }}>❄</div>
        <div className="absolute top-[2%] left-[70%] text-white/75 text-4xl animate-snowfall" style={{ animationDelay: '3s', animationDuration: '9s' }}>❄</div>
        <div className="absolute top-[6%] left-[85%] text-white/90 text-2xl animate-snowfall" style={{ animationDelay: '5s', animationDuration: '13s' }}>❄</div>
        <div className="absolute top-[4%] left-[15%] text-white/60 text-3xl animate-snowfall" style={{ animationDelay: '6s', animationDuration: '10s' }}>❄</div>
        <div className="absolute top-[7%] left-[60%] text-white/80 text-4xl animate-snowfall" style={{ animationDelay: '7s', animationDuration: '14s' }}>❄</div>
        <div className="absolute top-[1%] left-[35%] text-white/70 text-2xl animate-snowfall" style={{ animationDelay: '8s', animationDuration: '11s' }}>❄</div>
        <div className="absolute top-[9%] left-[80%] text-white/85 text-5xl animate-snowfall" style={{ animationDelay: '9s', animationDuration: '12s' }}>❄</div>
        <div className="absolute top-[5%] left-[50%] text-white/65 text-3xl animate-snowfall" style={{ animationDelay: '1.5s', animationDuration: '9s' }}>❄</div>
        <div className="absolute top-[3%] left-[95%] text-white/75 text-4xl animate-snowfall" style={{ animationDelay: '4.5s', animationDuration: '10s' }}>❄</div>
        <div className="absolute top-[6%] left-[5%] text-white/55 text-2xl animate-snowfall" style={{ animationDelay: '0.5s', animationDuration: '11s' }}>❄</div>
        <div className="absolute top-[2%] left-[18%] text-white/80 text-3xl animate-snowfall" style={{ animationDelay: '3.5s', animationDuration: '9s' }}>❄</div>
        <div className="absolute top-[8%] left-[32%] text-white/90 text-4xl animate-snowfall" style={{ animationDelay: '5.5s', animationDuration: '10s' }}>❄</div>
        <div className="absolute top-[4%] left-[45%] text-white/70 text-2xl animate-snowfall" style={{ animationDelay: '7.5s', animationDuration: '12s' }}>❄</div>
        <div className="absolute top-[1%] left-[58%] text-white/85 text-5xl animate-snowfall" style={{ animationDelay: '2.5s', animationDuration: '8s' }}>❄</div>
        <div className="absolute top-[7%] left-[72%] text-white/60 text-3xl animate-snowfall" style={{ animationDelay: '6.5s', animationDuration: '13s' }}>❄</div>
        <div className="absolute top-[3%] left-[88%] text-white/75 text-4xl animate-snowfall" style={{ animationDelay: '8.5s', animationDuration: '11s' }}>❄</div>
        <div className="absolute top-[9%] left-[22%] text-white/90 text-2xl animate-snowfall" style={{ animationDelay: '1.2s', animationDuration: '10s' }}>❄</div>
        <div className="absolute top-[5%] left-[65%] text-white/65 text-3xl animate-snowfall" style={{ animationDelay: '4.2s', animationDuration: '9s' }}>❄</div>
        <div className="absolute top-[2%] left-[78%] text-white/80 text-5xl animate-snowfall" style={{ animationDelay: '6.2s', animationDuration: '14s' }}>❄</div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Main title */}
          <div className="flex justify-center">
            <img
              src="/lovable-uploads/1230c78b-a957-49a8-959b-7fdc9186fca8.png"
              alt="Una de Ciencia, Por Favor - Logo del evento"
              className="max-w-xl md:max-w-3xl w-full h-auto"
            />
          </div>

          {/* Edition badge */}
          <div className="inline-block bg-white/30 backdrop-blur-sm rounded-full px-6 py-2">
            <span className="text-white font-bold text-lg">❄ 2ª EDICIÓN ❄</span>
          </div>

          {/* Event details */}
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 mx-auto max-w-2xl">
            <div className="grid md:grid-cols-2 gap-4 text-white">
              <div className="flex items-center justify-center space-x-2">
                <span className="text-2xl">📅</span>
                <div>
                  <p className="font-bold text-lg">5 de Febrero de 2026</p>
                  <p className="text-sm opacity-90">Jueves</p>
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

          {/* Status */}
          <div className="space-y-4">
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Descubre el fascinante mundo de la ciencia de la mano de expertos investigadores en este evento gratuito de divulgación
            </p>
            <div className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
              <span className="text-white font-semibold">✅ EVENTO FINALIZADO</span>
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

export default Edition2Header;
