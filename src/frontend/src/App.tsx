import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import ServiceGrid from './components/ServiceGrid';
import ServiceArea from './components/ServiceArea';
import ResidentialService from './components/services/ResidentialService';
import CommercialService from './components/services/CommercialService';
import CarDetailingService from './components/services/CarDetailingService';
import CarpetCleaningService from './components/services/CarpetCleaningService';
import BookingForm from './components/BookingForm';
import ContactForm from './components/ContactForm';
import { Heart } from 'lucide-react';

function App() {
  const currentYear = new Date().getFullYear();
  const appIdentifier = encodeURIComponent(
    typeof window !== 'undefined' ? window.location.hostname : 'nikole-maligranda-attention-to-detail'
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        <HeroSection />
        
        <section id="service-area" className="py-16 bg-accent/10">
          <div className="container">
            <ServiceArea />
          </div>
        </section>
        
        <section className="py-16 bg-background">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Professional cleaning solutions tailored to your needs. From homes to businesses, 
                vehicles to carpets, we deliver exceptional results every time.
              </p>
            </div>
            <ServiceGrid />
          </div>
        </section>

        <section id="residential" className="py-20 bg-muted/30">
          <div className="container">
            <ResidentialService />
          </div>
        </section>

        <section id="commercial" className="py-20 bg-background">
          <div className="container">
            <CommercialService />
          </div>
        </section>

        <section id="car-detailing" className="py-20 bg-muted/30">
          <div className="container">
            <CarDetailingService />
          </div>
        </section>

        <section id="carpet-cleaning" className="py-20 bg-background">
          <div className="container">
            <CarpetCleaningService />
          </div>
        </section>

        <section id="booking" className="py-20 bg-muted/30">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Schedule Your Service</h2>
                <p className="text-lg text-muted-foreground">
                  Book your cleaning service online. Choose your preferred date and time, 
                  and we'll take care of the rest.
                </p>
              </div>
              <BookingForm />
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 bg-background">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
                <p className="text-lg text-muted-foreground">
                  Have questions or need more information? Fill out the form below and 
                  we'll get back to you within 24 hours.
                </p>
              </div>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-primary text-primary-foreground py-8 mt-auto">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold mb-2">Nikole Maligranda Attention to Detail</h3>
              <p className="text-sm opacity-90">
                Professional cleaning solutions for every need
              </p>
            </div>
            <div className="text-center md:text-right text-sm opacity-90">
              <p>© {currentYear} Nikole Maligranda Attention to Detail. All rights reserved.</p>
              <p className="mt-1">
                Built with <Heart className="inline h-4 w-4 text-accent fill-accent" /> using{' '}
                <a
                  href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appIdentifier}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-accent transition-colors"
                >
                  caffeine.ai
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
