import React from 'react';

const Impressum = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8 text-primary">Impressum</h1>
        
        <div className="space-y-8">
          <div>
            <h2 className="text-xl font-semibold mb-4 text-primary">Angaben gemäß § 5 TMG</h2>
            <p className="text-primary/80">
              MEK Security<br />
              Grafestraße 19<br />
              57072 Siegen<br />
              Deutschland
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4 text-primary">Kontakt</h2>
            <p className="text-primary/80">
              E-Mail: info@mek-security.de
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4 text-primary">Umsatzsteuer-ID</h2>
            <p className="text-primary/80">
              Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
              DE XXX XXX XXX
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4 text-primary">Berufsbezeichnung und berufsrechtliche Regelungen</h2>
            <p className="text-primary/80">
              Berufsbezeichnung: Sicherheitsunternehmen<br />
              Zuständige Kammer: IHK Siegen<br />
              Verliehen durch: Bundesrepublik Deutschland
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4 text-primary">Streitschlichtung</h2>
            <p className="text-primary/80">
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
              <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-primary-gold hover:text-primary-beige ml-1">
                https://ec.europa.eu/consumers/odr/
              </a>
              <br /><br />
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4 text-primary">Haftung für Inhalte</h2>
            <p className="text-primary/80">
              Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4 text-primary">Urheberrecht</h2>
            <p className="text-primary/80">
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impressum;