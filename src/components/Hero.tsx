const Hero = () => {
  return (
    <div className="relative h-[600px]">
      <div className="absolute inset-0">
 
      </div>
      <div 
        className="absolute inset-0 bg-gradient-to-r from-primary-gold/80 via-primary/70 to-primary-gold/80"
        style={{
          backgroundSize: '200% 200%',
          animation: 'gradientAnimation 15s ease infinite'
        }}
      ></div>
      <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
        <div className="text-white">
          <h1 className="text-5xl font-bold mb-4">Sicherheit durch Vertrauen</h1>
          <p className="text-xl mb-8 max-w-2xl">
            Willkommen bei MEK Security – Ihr zuverlässiger Partner für professionelle Sicherheitslösungen in Siegen. Mit über 20 Jahren Erfahrung bieten wir maßgeschneiderte Sicherheitskonzepte für eine Vielzahl von Veranstaltungen und Objekten.
          </p>
          <button className="bg-primary-gold hover:bg-primary-beige text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors">
            Kontakt aufnehmen
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;