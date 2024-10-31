import { Award, Users, Clock } from 'lucide-react';

const About = () => {
  return (
    <section className="py-20 bg-primary-beige/10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-primary">Über MEK Security</h2>
            <p className="text-primary/80 mb-6">
              Als führendes Sicherheitsunternehmen in Siegen und Umgebung steht MEK Security seit über zwei Jahrzehnten für höchste Qualität und Zuverlässigkeit im Sicherheitssektor. Unsere langjährige Erfahrung und das Know-how unserer qualifizierten Mitarbeiter machen uns zu Ihrem kompetenten Partner in allen Sicherheitsfragen.
            </p>
            <p className="text-primary/80 mb-8">
              Wir bieten maßgeschneiderte Sicherheitslösungen für Unternehmen, öffentliche Einrichtungen und Privatpersonen. Dabei setzen wir auf modernste Technik und kontinuierliche Weiterbildung unserer Mitarbeiter, um Ihnen stets den bestmöglichen Service zu garantieren.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex flex-col items-center text-center">
                <Award className="w-12 h-12 text-primary-gold mb-3" />
                <div>
                  <h4 className="text-lg font-semibold text-primary">20+ Jahre</h4>
                  <p className="text-sm text-primary/60">Erfahrung</p>
                </div>
              </div>
              <div className="flex flex-col items-center text-center">
                <Users className="w-12 h-12 text-primary-gold mb-3" />
                <div>
                  <h4 className="text-lg font-semibold text-primary">Qualifiziert</h4>
                  <p className="text-sm text-primary/60">Geschultes Personal</p>
                </div>
              </div>
              <div className="flex flex-col items-center text-center">
                <Clock className="w-12 h-12 text-primary-gold mb-3" />
                <div>
                  <h4 className="text-lg font-semibold text-primary">24/7 Service</h4>
                  <p className="text-sm text-primary/60">Immer für Sie da</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="/images/about_security.jpg"
              alt="MEK Security Team" 
              className="rounded-lg shadow-xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-primary-gold text-white p-6 rounded-lg shadow-lg">
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="text-sm">Kundenzufriedenheit</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;