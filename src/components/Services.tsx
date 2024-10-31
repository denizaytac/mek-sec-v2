import React from 'react';
import { Calendar, Shield, UserCheck, PartyPopper, Car } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Calendar className="w-12 h-12 text-primary-gold" />,
      title: "Event-Sicherheit",
      description: "Unsere Sicherheitsdienste für Events sorgen für die Sicherheit und das Wohlbefinden aller Teilnehmer. Wir bieten Lösungen für Konzerte, Stadtfeste, Kulturveranstaltungen, Sportevents, Stadionveranstaltungen und Festzeltfeiern."
    },
    {
      icon: <Shield className="w-12 h-12 text-primary-gold" />,
      title: "Objektschutz",
      description: "Wir bieten umfassende Überwachungsdienste für Gebäude und Anlagen, um deren Sicherheit rund um die Uhr zu gewährleisten. Unser Objektschutz umfasst regelmäßige Patrouillen, Zutrittskontrollen und den Einsatz moderner Überwachungstechnologien."
    },
    {
      icon: <UserCheck className="w-12 h-12 text-primary-gold" />,
      title: "Personenschutz",
      description: "Unsere professionellen Personenschutzdienste umfassen sowohl Chauffeur-Services als auch den persönlichen Schutz von Einzelpersonen. Wir sorgen dafür, dass Sie sicher und komfortabel zu Ihren Zielen gelangen und währenddessen optimal geschützt sind."
    },
    {
      icon: <PartyPopper className="w-12 h-12 text-primary-gold" />,
      title: "Private und Firmenevents",
      description: "Für private und geschäftliche Veranstaltungen bieten wir maßgeschneiderte Sicherheitskonzepte. Ob Geburtstagsfeiern, Firmenfeiern oder andere private Anlässe – unser Team stellt sicher, dass Ihre Veranstaltung sicher und erfolgreich abläuft."
    },
    {
      icon: <Car className="w-12 h-12 text-primary-gold" />,
      title: "Chauffeur-Service",
      description: "Neben der Sicherung von Events bieten wir einen professionellen Chauffeur-Service für Privat- und Geschäftskunden an. Diesen passen wir immer individuell Ihren Vorstellungen und Wünschen an. Dabei liegt es uns besonders am Herzen, dass Sie sich in unseren Autos jederzeit sicher fühlen."
    }
  ];

  return (
    <section className="py-20 bg-primary-beige/10">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary">Unsere Dienstleistungen</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-4 text-primary">{service.title}</h3>
              <p className="text-primary/80 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;