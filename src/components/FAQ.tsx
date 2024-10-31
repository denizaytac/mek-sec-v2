import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Welche Arten von Veranstaltungen sichern Sie ab?",
      answer: "Wir bieten Sicherheitsdienste für eine Vielzahl von Veranstaltungen an, darunter Konzerte, Stadtfeste, Kulturveranstaltungen, Sportevents, Stadionveranstaltungen und Festzeltfeiern. Unser erfahrenes Team passt sich flexibel an die spezifischen Anforderungen jeder Veranstaltung an."
    },
    {
      question: "Wie viel Vorlaufzeit benötigen Sie für eine Buchung?",
      answer: "Die benötigte Vorlaufzeit hängt von der Größe und Komplexität der Veranstaltung ab. Für kleinere Events reichen oft wenige Wochen, während größere Veranstaltungen mehrere Monate Planungszeit erfordern können. Kontaktieren Sie uns frühzeitig, damit wir Ihnen ein maßgeschneidertes Angebot erstellen können."
    },
    {
      question: "Bieten Sie auch Personenschutz an?",
      answer: "Ja, wir bieten professionelle Personenschutzdienste an. Unser Service umfasst sowohl Chauffeur-Dienste als auch persönlichen Schutz für Einzelpersonen. Wir stellen sicher, dass Sie sicher und komfortabel zu Ihren Zielen gelangen und optimal geschützt sind."
    },
    {
      question: "Wie sind Ihre Mitarbeiter ausgebildet?",
      answer: "Unsere Mitarbeiter durchlaufen eine gründliche Ausbildung, die sowohl theoretische als auch praktische Elemente umfasst. Sie werden in Sicherheitstechniken, Konfliktmanagement, Erste Hilfe und kundenorientiertem Service geschult. Zudem halten wir uns stets auf dem neuesten Stand der Sicherheitsstandards und -technologien."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-primary-beige/10">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <HelpCircle className="w-12 h-12 text-primary-gold mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-primary mb-4">Häufig gestellte Fragen</h2>
          <p className="text-primary/60 max-w-2xl mx-auto">
            Hier finden Sie Antworten auf die häufigsten Fragen zu unseren Sicherheitsdienstleistungen
          </p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-primary-beige/10"
            >
              <button
                className={`w-full px-8 py-5 text-left flex justify-between items-center transition-colors ${
                  openIndex === index ? 'bg-primary-gold/5' : 'hover:bg-primary-beige/5'
                }`}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className={`font-semibold ${openIndex === index ? 'text-primary-gold' : 'text-primary'}`}>
                  {faq.question}
                </span>
                <div className={`ml-4 p-2 rounded-full transition-colors ${
                  openIndex === index ? 'bg-primary-gold text-white' : 'bg-primary-beige/10 text-primary'
                }`}>
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5" />
                  ) : (
                    <ChevronDown className="w-5 h-5" />
                  )}
                </div>
              </button>
              
              <div 
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                } overflow-hidden`}
              >
                <div className="px-8 py-6 bg-gradient-to-r from-primary-beige/5 to-transparent">
                  <p className="text-primary/80 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-primary/60 mb-4">Weitere Fragen?</p>
          <a 
            href="#contact" 
            className="inline-flex items-center text-primary-gold hover:text-primary-beige transition-colors font-semibold"
          >
            Kontaktieren Sie uns
            <ChevronDown className="w-4 h-4 ml-1" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;