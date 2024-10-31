import React from 'react';
import { CheckCircle, Shield, Heart, Languages } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <CheckCircle className="w-12 h-12 text-primary-gold" />,
      title: "Erfahrung und Kompetenz",
      description: "Mit über 20 Jahren Berufserfahrung sind wir bestens gerüstet, um auf alle Situationen professionell zu reagieren. Unser Team arbeitet nach bewährten Lösungen und modernsten Standards."
    },
    {
      icon: <Shield className="w-12 h-12 text-primary-gold" />,
      title: "Flexibilität und Effizienz",
      description: "Wir reagieren flexibel und effizient auf ungeplante Situationen und stellen sicher, dass Ihre Veranstaltung reibungslos verläuft. Unser Ziel ist es, Ihnen und Ihren Gästen ein sicheres und angenehmes Erlebnis zu bieten."
    },
    {
      icon: <Heart className="w-12 h-12 text-primary-gold" />,
      title: "Serviceorientiertes Auftreten",
      description: "Unser Team ist nicht nur in Sicherheitsfragen geschult, sondern auch im Umgang mit Gästen. Wir agieren stets höflich und zuvorkommend."
    },
    {
      icon: <Languages className="w-12 h-12 text-primary-gold" />,
      title: "Sprachliche Vielfalt",
      description: "Unsere Mitarbeiter sprechen mehrere Sprachen, wodurch mögliche Sprachbarrieren kein Hindernis darstellen."
    }
  ];

  return (
    <section className="py-20 bg-primary text-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-primary-gold rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-gold rounded-full translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-6">Warum MEK Security?</h2>
          <p className="text-white/80 text-lg">
            Entdecken Sie die Vorteile einer Zusammenarbeit mit einem erfahrenen und zuverlässigen Sicherheitspartner
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 border border-white/10"
            >
              <div className="bg-primary-gold/10 rounded-xl p-4 inline-block mb-6">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-white/80 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a 
            href="#contact" 
            className="inline-block bg-primary-gold hover:bg-primary-beige text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
          >
            Jetzt Beratungsgespräch vereinbaren
          </a>
        </div>
      </div>
    </section>
  );
};

export default Features;