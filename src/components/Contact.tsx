import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section className="py-20 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">Kontaktieren Sie uns</h2>
            <p className="mb-8 text-white/80">Wir sind jederzeit für Sie erreichbar und beraten Sie gerne zu allen Fragen rund um Ihre Sicherheit.</p>
            <div className="space-y-4">
              <div className="flex items-center">
                <MapPin className="w-6 h-6 mr-3 text-primary-gold" />
                <div>
                  <span className="block">MEK Security</span>
                  <span className="block text-white/80">Grafestraße 19</span>
                  <span className="block text-white/80">57072 Siegen</span>
                  <span className="block text-white/80">Deutschland</span>
                </div>
              </div>
              <div className="flex items-center">
                <Mail className="w-6 h-6 mr-3 text-primary-gold" />
                <span>info@mek-security.de</span>
              </div>
            </div>
          </div>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full px-4 py-2 rounded bg-white/10 border border-white/20 focus:border-primary-gold focus:outline-none"
            />
            <input
              type="email"
              placeholder="E-Mail"
              className="w-full px-4 py-2 rounded bg-white/10 border border-white/20 focus:border-primary-gold focus:outline-none"
            />
            <textarea
              placeholder="Ihre Nachricht"
              rows={4}
              className="w-full px-4 py-2 rounded bg-white/10 border border-white/20 focus:border-primary-gold focus:outline-none"
            ></textarea>
            <button className="bg-primary-gold hover:bg-primary-beige text-white px-6 py-2 rounded transition-colors">
              Nachricht senden
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;