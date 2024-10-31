import React from 'react';
import { Star } from 'lucide-react';

const Celebrities = () => {
  const celebrities = [
    {
      name: "David Beckham",
      event: "Charity Gala 2023",
      image: "https://images.unsplash.com/photo-1521119989659-a83eee488004?auto=format&fit=crop&q=80&w=400"
    },
    {
      name: "Angela Merkel",
      event: "Wirtschaftsforum Siegen",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400"
    },
    {
      name: "Till Lindemann",
      event: "Konzert Siegerlandhalle",
      image: "https://images.unsplash.com/photo-1509460913899-515f1df34fea?auto=format&fit=crop&q=80&w=400"
    },
    {
      name: "Helene Fischer",
      event: "Open Air 2023",
      image: "https://images.unsplash.com/photo-1502323777036-f29e3972d82f?auto=format&fit=crop&q=80&w=400"
    },
    {
      name: "Manuel Neuer",
      event: "Jugendcamp 2023",
      image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=400"
    },
    {
      name: "Barbara Schöneberger",
      event: "TV-Gala",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=400"
    },
    {
      name: "Jürgen Klopp",
      event: "Benefizspiel 2023",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400"
    },
    {
      name: "Heidi Klum",
      event: "Fashion Show",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400"
    },
    {
      name: "Thomas Gottschalk",
      event: "Literaturfestival",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400"
    },
    {
      name: "Sarah Connor",
      event: "Stadtfest 2023",
      image: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&q=80&w=400"
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
              className="group relative overflow-hidden rounded-xl aspect-[3/4]"
            >
              <img
                src={celebrity.image}
                alt={celebrity.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent opacity-90">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center mb-2">
                    <Star className="w-5 h-5 text-primary-gold fill-current" />
                    <h3 className="ml-2 font-semibold text-lg">{celebrity.name}</h3>
                  </div>
                  <p className="text-white/80 text-sm">{celebrity.event}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Celebrities;