import { Card, CardContent } from '@/components/ui/card';
import { Home, Building2, Car, Layers } from 'lucide-react';

const ServiceGrid = () => {
  const services = [
    {
      id: 'residential',
      title: 'Residential Cleaning',
      description: 'Keep your home spotless with our comprehensive residential cleaning services.',
      icon: '/assets/generated/residential-icon.dim_128x128.png',
      IconComponent: Home,
    },
    {
      id: 'commercial',
      title: 'Commercial Cleaning',
      description: 'Professional cleaning solutions for offices, retail spaces, and more.',
      icon: '/assets/generated/commercial-icon.dim_128x128.png',
      IconComponent: Building2,
    },
    {
      id: 'car-detailing',
      title: 'Car Detailing',
      description: 'Premium car detailing services to make your vehicle shine like new.',
      icon: '/assets/generated/car-detailing-icon.dim_128x128.png',
      IconComponent: Car,
    },
    {
      id: 'carpet-cleaning',
      title: 'Carpet Cleaning',
      description: 'Deep carpet cleaning that removes stains, allergens, and odors.',
      icon: '/assets/generated/carpet-icon.dim_128x128.png',
      IconComponent: Layers,
    },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {services.map((service) => (
        <Card
          key={service.id}
          className="cursor-pointer hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
          onClick={() => scrollToSection(service.id)}
        >
          <CardContent className="p-6 text-center">
            <div className="mb-4 flex justify-center">
              <div className="relative w-24 h-24">
                <img
                  src={service.icon}
                  alt={service.title}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
              {service.title}
            </h3>
            <p className="text-sm text-muted-foreground">{service.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ServiceGrid;
