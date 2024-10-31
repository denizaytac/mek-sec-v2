import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const Celebrities = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const celebrities = [
    {
      name: "Felix Sturm",
      image: "public/images/celebrities/felix_sturm.png"
    },
    {
      name: "Ralf Schmitz",
      image: "public/images/celebrities/ralf_schmitz.png"
    },
    {
      name: "Norman Langen",
      image: "public/images/celebrities/norman_langen.png"
    },  
    {
      name: "Serdar Karibik",
      image: "public/images/celebrities/serdar_karibik.jpeg"
    },
    {
      name: "Biyon Kattilathu",
      image: "public/images/celebrities/biyon_kattilathu.jpeg"
    },
    {
      name: "Monika Gruber",
      image: "public/images/celebrities/monika_gruber.jpeg"
    },
    {
      name: "Elton",
      image: "public/images/celebrities/elton.png"
    },
    {
      name: "Enissa Amani",
      image: "public/images/celebrities/enissa_amani.png"
    },
    {
      name: "Karolin Kebekus",
      image: "public/images/celebrities/karolin_kebekus.png"
    },
    {
      name: "Kaya Yanar",
      image: "public/images/celebrities/kaya_yanar.png"
    },
    {
      name: "Kool Savas",
      image: "public/images/celebrities/kool_savas.png"
    },
    {
      name: "Lukas Podolski",
      image: "public/images/celebrities/lukas_podolski.png"
    },
    {
      name: "Olaf Schubert",
      image: "public/images/celebrities/olaf_schubert.png"
    },
    {
      name: "Osan Yaran",
      image: "public/images/celebrities/osan_yaran.jpeg"
    },
    {
      name: "Özcan Cosar",
      image: "public/images/celebrities/özcan_cosar.jpeg"
    },
    {
      name: "Robert Lewandowski",
      image: "public/images/celebrities/robert_lewandowski.png"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === celebrities.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? celebrities.length - 1 : prevIndex - 1
    );
  };

  // Anzahl der sichtbaren Karten je nach Bildschirmgröße
  const visibleCards = {
    mobile: 1,    // Auf Mobilgeräten
    tablet: 2,    // Auf Tablets
    desktop: 4    // Auf Desktop
  };

  return (
    <section className="py-20 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Referenzen der Prominenz</h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            Vertrauen Sie auf unsere Erfahrung im VIP-Schutz und bei der Betreuung von hochkarätigen Veranstaltungen
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-300 ease-in-out"
              style={{ 
                transform: `translateX(-${currentIndex * (100 / visibleCards.mobile)}%)` 
              }}
            >
              {celebrities.map((celebrity, index) => (
                <div 
                  key={index}
                  className="w-full sm:w-1/2 lg:w-1/4 flex-shrink-0 px-3"
                >
                  <div className="bg-white/5 rounded-xl overflow-hidden hover:bg-white/10 transition-all duration-300">
                    <div className="aspect-[3/4] relative overflow-hidden">
                      <img
                        src={celebrity.image}
                        alt={celebrity.name}
                        className="absolute inset-0 w-full h-full object-cover object-top"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-semibold flex items-center gap-2">
                        {celebrity.name}
                        <Star className="w-4 h-4 text-primary-gold" />
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-primary-gold/80 hover:bg-primary-gold p-2 rounded-full text-white"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-primary-gold/80 hover:bg-primary-gold p-2 rounded-full text-white"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        <div className="flex justify-center mt-6 gap-2">
          {celebrities.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex 
                  ? 'bg-primary-gold w-4' 
                  : 'bg-white/20'
              }`}
              aria-label={`Gehe zu Slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Celebrities;