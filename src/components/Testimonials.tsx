import React, { useState } from 'react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const testimonials = [
    {
      text: "Wir hatten eine sehr angenehme Zusammenarbeit mit Herrn Kartal und seinem Team. Besonders zum Ende unserer Veranstaltung, als einige Gäste nicht gehen wollten, war die Unterstützung von MEK Security eine echte Hilfe. Ihre Präsenz auf dem Festgelände und im Rathaus hat uns Mitarbeitenden ein sicheres Gefühl gegeben. Wir möchten uns herzlich für den hervorragenden Service bedanken und freuen uns auf eine zukünftige Zusammenarbeit.",
      author: "Leslie C. Schardt & Dr. Sabine Schutz",
      title: "Referat für Medien- und Öffentlichkeitsarbeit"
    },
    {
      text: "Wir haben bei KulturPur 2023 zum ersten Mal mit der Firma MEK Security zusammengearbeitet. KulturPur ist ein internationales Zeltfestival auf dem Giller bei Hilchenbach-Lützel, das sich durch sehr unterschiedliche Besuchergruppen auszeichnet. Von Familien mit Kindern, Jugendlichen, jungen Erwachsenen, Studierenden bis Senioren sind alle Altersgruppen vertreten. Die Mitarbeitenden von MEK Security waren sehr gut vorbereitet, sodass das gesamte Team stets höflich, geduldig und zuverlässig die Gäste kontrollieren, leiten und auch Grenzen setzen konnte.",
      author: "Jens von Heyden",
      title: "Festivalleiter und Leitung Kultur!Büro des Kreises Siegen-Wittgenstein"
    },
    {
      text: "Zum 20. Jubiläum des PUSH Festivals übernahm am 06.04.2024 die Sicherheitsfirma MEK Security die Betreuung. Bereits der Kontakt im Vorfeld fiel sehr positiv aus. Die Rückmeldungen, sowie ein Angebotsschreiben mit der Möglichkeit zu variieren, kamen schnell, höflich und freundlich. Das Auftreten des Security Personals war auffällig freundlich, besonnen und kompetent.",
      author: "Fabian J. Dicke",
      title: "PUSH Festival"
    },
    {
      text: "Wir danken Herrn Kartal und dem Team von MEK Security herzlich für ihren Einsatz bei unserem diesjährigen Jahresempfang am 21. Februar. Die zuverlässigen und kurzfristigen Rückmeldungen an Frau Humpert wurden besonders geschätzt.",
      author: "Klaus Gräbener",
      title: "Hauptgeschäftsführer IHK Siegen"
    },
    {
      text: "Wir möchten eine uneingeschränkte Empfehlung für den Chauffeurservice von MEK Security aussprechen. Unsere Erfahrung mit diesem Service ist durchweg positiv und professionell. Von der Buchung bis zur Ankunft am Zielort ist alles perfekt organisiert. Die Chauffeure von MEK Security sind nicht nur äußerst zuvorkommend und höflich, sondern zeichnen sich durch sicheres Auftreten und Zuverlässigkeit aus.",
      author: "Christoph Schorge",
      title: "Geschäftsführer EEW Group"
    },
    {
      text: "Ich habe mit MEK Security im Zeitraum Mai bis September 2023 im Bereich Veranstaltungssicherheit zusammengearbeitet und war stets angetan von ihrer Kompetenz und Professionalität. Ihre Erfahrung im Event- & Sicherheitsmanagement zeigte sich in der effektiven Planung, schnellen Reaktionen und dem souveränen Umgang mit Herausforderungen.",
      author: "Laura Stockbrink",
      title: "Act And Audience Veranstaltungsmanagement"
    },
    {
      text: "Wir sind nach einer nicht zufriedenstellenden Dienstleistung bei einer vergangenen Veranstaltung auf MEK Security aufmerksam gemacht worden. Während der Veranstaltung haben sich die Mitarbeiter von MEK Security absolut professionell gezeigt und somit massiv zum Gelingen der Veranstaltung beigetragen. Hierfür sind wir sehr dankbar und würden MEK Security jederzeit wieder buchen und weiterempfehlen.",
      author: "Sophia ter Jung",
      title: "PWS Offroad GmbH"
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-primary-beige/10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-primary">Das sagen unsere Kunden</h2>
          <p className="text-primary/60 max-w-2xl mx-auto">
            Erfahren Sie, warum unsere Kunden uns vertrauen und wie wir ihnen helfen, 
            ihre Sicherheitsziele zu erreichen.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white rounded-xl p-8 shadow-xl">
            <Quote className="w-12 h-12 text-primary-gold mb-6 mx-auto" />
            
            <div className="min-h-[200px]">
              <p className="text-primary/80 text-lg mb-8 leading-relaxed">
                {testimonials[currentIndex].text}
              </p>
              
              <div className="text-center">
                <p className="font-semibold text-primary text-lg">
                  {testimonials[currentIndex].author}
                </p>
                {testimonials[currentIndex].title && (
                  <p className="text-primary/60">
                    {testimonials[currentIndex].title}
                  </p>
                )}
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-8 gap-4">
            <button
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-primary-gold hover:bg-primary-beige text-white transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex 
                      ? 'bg-primary-gold w-4' 
                      : 'bg-primary-beige'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-primary-gold hover:bg-primary-beige text-white transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;