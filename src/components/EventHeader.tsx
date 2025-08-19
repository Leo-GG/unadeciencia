const EventHeader = () => {
  return (
    <section className="relative min-h-screen bg-gradient-hero flex items-center justify-center overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border-4 border-white rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-20 h-20 border-4 border-white rounded-full animate-bounce delay-300"></div>
        <div className="absolute bottom-32 left-1/4 w-16 h-16 border-4 border-white rounded-full animate-pulse delay-700"></div>
        <div className="absolute bottom-20 right-1/3 w-24 h-24 border-4 border-white rounded-full animate-bounce delay-1000"></div>
      </div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Main title with playful styling */}
          <div className="flex justify-center">
            <img 
              src="/lovable-uploads/93845d28-8782-41f6-8884-20a2aee0e1cb.png" 
              alt="Una de Ciencia, Por Favor - Logo del evento"
              className="max-w-xl md:max-w-3xl w-full h-auto"
            />
          </div>
          
          {/* Event details */}
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 mx-auto max-w-2xl">
            <div className="grid md:grid-cols-2 gap-4 text-white">
              <div className="flex items-center justify-center space-x-2">
                <span className="text-2xl">📅</span>
                <div>
                  <p className="font-bold text-lg">18 de Septiembre</p>
                  <p className="text-sm opacity-90">Martes</p>
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
                  <p className="font-bold text-lg">La Excéntrica</p>
                  <p className="text-sm opacity-90">Madrid</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Call to action */}
          <div className="space-y-4">
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Descubre el fascinante mundo de la ciencia de la mano de expertos investigadores
            </p>
            <div className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
              <span className="text-white font-semibold">🎫 AFORO LIMITADO</span>
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