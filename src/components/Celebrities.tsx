import React from 'react';
import { Star } from 'lucide-react';

const Celebrities = () => {
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

  return (
    <section className="py-20 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Referenzen der Prominenz</h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            Vertrauen Sie auf unsere Erfahrung im VIP-Schutz und bei der Betreuung von hochkarätigen Veranstaltungen
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {celebrities.map((celebrity, index) => (
            <div 
              key={index}
              className="bg-white/5 rounded-xl overflow-hidden hover:bg-white/10 transition-all duration-300 group"
            >
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default Celebrities;