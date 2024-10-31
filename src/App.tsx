import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Features from './components/Features';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Celebrities from './components/Celebrities';
import ClientLogos from './components/ClientLogos';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import CookieBanner from './components/CookieBanner';
import Impressum from './components/Impressum';
import StructuredData from './components/StructuredData';

function App() {
  // Get the current path from window.location
  const path = window.location.pathname;

  // Render different content based on the path
  if (path === '/impressum') {
    return (
      <div className="min-h-screen bg-white pt-16">
        <Navbar />
        <Impressum />
        <Footer />
        <ScrollToTop />
      </div>
    );
  }

  // Main page content
  return (
    <div className="min-h-screen bg-white pt-16">
      <Navbar />
      <section id="home">
        <Hero />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="about">
        <About />
      </section>
      <Features />
      <Testimonials />
      <Celebrities />
      <ClientLogos />
      <FAQ />
      <section id="contact">
        <Contact />
      </section>
      <Footer />
      <ScrollToTop />
      <CookieBanner />
      <StructuredData />
    </div>
  );
}

export default App;