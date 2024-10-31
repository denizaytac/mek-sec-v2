const ClientLogos = () => {
  const logos = [
    {
      name: "Accenta",
      url: "/images/references/accenta.png"
    },
    {
      name: "Edermühle",
      url: "/images/references/edermühle.png"
    },
    {
      name: "EEW Group",
      url: "/images/references/eew-group.png"
    },
    {
      name: "Kulturpur 23",
      url: "/images/references/kulturpur_23.png"
    },
    {
      name: "Livemodus",
      url: "/images/references/livemodus.png"
    },
    {
      name: "Lyz",
      url: "/images/references/lyz.png"
    },
    {
      name: "Netphen",
      url: "/images/references/netphen.jpeg"
    },
    {
      name: "Push",
      url: "/images/references/push.jpeg"
    },
    {
      name: "Siegerlandhalle",
      url: "/images/references/siegerlandhalle.jpeg"
    },
    {
      name: "Stadt Siegen",
      url: "/images/references/stadtsiegen.jpeg"
    },
    {
      name: "Trial GP",
      url: "/images/references/trial-gp.jpeg"
    }
  ];

  return (
    <section className="py-24 bg-white border-t border-primary-beige/20">
      <div className="max-w-7xl mx-auto px-4">
        <h3 className="text-center text-2xl font-semibold text-primary mb-16">
          Unseren Sicherheitsdienst vertrauen unter anderem
        </h3>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 items-center">
          {logos.map((logo, index) => (
            <div 
              key={index} 
              className="flex items-center justify-center p-6 grayscale hover:grayscale-0 transition-all duration-300"
            >
              <img
                src={logo.url}
                alt={`${logo.name} Logo`}
                className="max-h-20 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;