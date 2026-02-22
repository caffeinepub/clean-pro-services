import { Card, CardContent } from '@/components/ui/card';
import { Check } from 'lucide-react';

const ResidentialService = () => {
  const features = [
    'Deep cleaning of all rooms',
    'Kitchen and bathroom sanitization',
    'Dusting and vacuuming',
    'Window and mirror cleaning',
    'Regular maintenance schedules',
    'Move-in/move-out cleaning',
    'Eco-friendly cleaning products',
    'Flexible scheduling options',
  ];

  const benefits = [
    'More time for what matters',
    'Healthier living environment',
    'Professional-grade results',
    'Trusted and insured cleaners',
  ];

  return (
    <div className="grid md:grid-cols-2 gap-8 items-center">
      <div>
        <div className="mb-6">
          <img
            src="/assets/generated/residential-icon.dim_128x128.png"
            alt="Residential Cleaning"
            className="w-20 h-20 mb-4"
          />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Residential Cleaning
          </h2>
          <p className="text-lg text-muted-foreground">
            Transform your home into a pristine sanctuary with our comprehensive residential 
            cleaning services. We handle everything from routine maintenance to deep cleaning, 
            ensuring every corner of your home sparkles.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Why Choose Us?</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-2">
                <div className="rounded-full bg-primary/10 p-1 mt-0.5">
                  <Check className="h-4 w-4 text-primary" />
                </div>
                <span className="text-sm">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Card>
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold mb-4">Our Services Include</h3>
          <ul className="space-y-3">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="rounded-full bg-primary/10 p-1 mt-0.5">
                  <Check className="h-4 w-4 text-primary" />
                </div>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default ResidentialService;
