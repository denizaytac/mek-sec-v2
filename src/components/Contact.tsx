import { Mail, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-primary-beige/20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-primary">Kontaktieren Sie uns</h2>
            <p className="mb-8 text-primary/80">
              Wir sind jederzeit für Sie erreichbar und beraten Sie gerne zu allen Fragen rund um Ihre Sicherheit.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <MapPin className="w-6 h-6 mr-3 text-primary-gold" />
                <div>
                  <span className="block text-primary">MEK Security</span>
                  <span className="block text-primary/80">Grafestraße 19</span>
                  <span className="block text-primary/80">57072 Siegen</span>
                  <span className="block text-primary/80">Deutschland</span>
                </div>
              </div>
              <div className="flex items-center">
                <Mail className="w-6 h-6 mr-3 text-primary-gold" />
                <span className="text-primary">info@mek-security.de</span>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-xl p-8 border border-primary-beige/20">
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full px-4 py-3 rounded-lg bg-primary-beige/5 border border-primary-beige/20 focus:border-primary-gold focus:outline-none text-primary"
              />
              <input
                type="email"
                placeholder="E-Mail"
                className="w-full px-4 py-3 rounded-lg bg-primary-beige/5 border border-primary-beige/20 focus:border-primary-gold focus:outline-none text-primary"
              />
              <textarea
                placeholder="Ihre Nachricht"
                rows={4}
                className="w-full px-4 py-3 rounded-lg bg-primary-beige/5 border border-primary-beige/20 focus:border-primary-gold focus:outline-none text-primary"
              ></textarea>
              <button className="w-full bg-primary-gold hover:bg-primary text-white px-6 py-3 rounded-lg transition-colors font-semibold">
                Nachricht senden
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;