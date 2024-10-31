import React from 'react';

const ClientLogos = () => {
  const logos = [
    {
      name: "Siegen Arkaden",
      url: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&q=80&w=200&h=100",
    },
    {
      name: "Industrie Park Süd",
      url: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=200&h=100",
    },
    {
      name: "Stadtwerke Siegen",
      url: "https://images.unsplash.com/photo-1554469384-e58fac16e23a?auto=format&fit=crop&q=80&w=200&h=100",
    },
    {
      name: "Kreis Siegen-Wittgenstein",
      url: "https://images.unsplash.com/photo-1577760258779-e787a1733016?auto=format&fit=crop&q=80&w=200&h=100",
    },
    {
      name: "Universität Siegen",
      url: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=200&h=100",
    },
    {
      name: "Siegerlandhalle",
      url: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=200&h=100",
    },
  ];

  return (
    <section className="py-16 bg-white border-t border-primary-beige/20">
      <div className="max-w-7xl mx-auto px-4">
        <h3 className="text-center text-lg font-medium text-primary/60 mb-12">
          Unseren Sicherheitsdienst vertrauen unter anderem
        </h3>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {logos.map((logo, index) => (
            <div 
              key={index} 
              className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all duration-300"
            >
              <img
                src={logo.url}
                alt={`${logo.name} Logo`}
                className="max-h-12 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;