const StructuredData = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SecurityService",
    "name": "MEK Security",
    "image": "https://meksecurity.de/images/mek-security-logo.png",
    "description": "Professioneller Sicherheitsdienst in Siegen und Umgebung. Spezialisiert auf Veranstaltungsschutz, Objektschutz und VIP-Security.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Grafestraße 19",
      "addressLocality": "Siegen",
      "postalCode": "57072",
      "addressCountry": "DE"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "50.8767",
      "longitude": "8.0173"
    },
    "url": "https://www.meksecurity.de",
    "telephone": "+491628069562",
    "areaServed": "Siegen und Umgebung",
    "priceRange": "€€"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
};

export default StructuredData; 