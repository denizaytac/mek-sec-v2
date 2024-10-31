const Footer = () => {
  const isImpressum = window.location.pathname === '/impressum';
  
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <a href="/">
                <img 
                  src="/images/mek-security-logo.png"
                  alt="MEK Security Logo"
                  className="h-12 w-auto"
                />
              </a>
            </div>
            <p className="text-sm text-white/80">
              Ihr zuverlässiger Partner für Sicherheitsdienstleistungen in Siegen und Umgebung.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Dienstleistungen</h3>
            <ul className="space-y-2">
              <li><a href={isImpressum ? "/#services" : "#services"} className="hover:text-primary-beige">Event-Sicherheit</a></li>
              <li><a href={isImpressum ? "/#services" : "#services"} className="hover:text-primary-beige">Objektschutz</a></li>
              <li><a href={isImpressum ? "/#services" : "#services"} className="hover:text-primary-beige">Personenschutz</a></li>
              <li><a href={isImpressum ? "/#services" : "#services"} className="hover:text-primary-beige">Private & Firmenevents</a></li>
              <li><a href={isImpressum ? "/#services" : "#services"} className="hover:text-primary-beige">Chauffeur-Service</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Unternehmen</h3>
            <ul className="space-y-2">
              <li><a href={isImpressum ? "/#about" : "#about"} className="hover:text-primary-beige">Über uns</a></li>
              <li><a href={isImpressum ? "/#contact" : "#contact"} className="hover:text-primary-beige">Kontakt</a></li>
              <li><a href="/impressum" className="hover:text-primary-beige">Impressum</a></li>
              <li><a href="/datenschutz" className="hover:text-primary-beige">Datenschutz</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Kontakt</h3>
            <address className="not-italic text-white/80">
              MEK Security<br />
              Grafestraße 19<br />
              57072 Siegen<br />
              Deutschland
            </address>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-8 pt-8 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} MEK Security. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;