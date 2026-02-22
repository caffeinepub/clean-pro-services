import { Card, CardContent } from '@/components/ui/card';
import { Check, Droplets, Wind, Zap } from 'lucide-react';

const CarpetCleaningService = () => {
  const methods = [
    {
      name: 'Steam Cleaning',
      icon: Droplets,
      description: 'Hot water extraction for deep cleaning and sanitization',
    },
    {
      name: 'Dry Cleaning',
      icon: Wind,
      description: 'Low-moisture cleaning for quick drying times',
    },
    {
      name: 'Hot Water Extraction',
      icon: Zap,
      description: 'Powerful deep cleaning that removes embedded dirt',
    },
  ];

  const benefits = [
    'Removes allergens and dust mites',
    'Eliminates tough stains and odors',
    'Extends carpet lifespan',
    'Improves indoor air quality',
    'Restores carpet appearance',
    'Safe for pets and children',
    'Fast drying times',
    'Eco-friendly solutions available',
  ];

  return (
    <div className="grid md:grid-cols-2 gap-8 items-center">
      <div>
        <div className="mb-6">
          <img
            src="/assets/generated/carpet-icon.dim_128x128.png"
            alt="Carpet Cleaning"
            className="w-20 h-20 mb-4"
          />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Carpet Cleaning
          </h2>
          <p className="text-lg text-muted-foreground mb-6">
            Revitalize your carpets with our professional cleaning services. Using advanced 
            techniques and eco-friendly solutions, we remove deep-seated dirt, stains, and 
            allergens to restore your carpets to like-new condition.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Our Cleaning Methods</h3>
          <div className="space-y-3">
            {methods.map((method, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-4 rounded-lg bg-muted/50"
              >
                <div className="rounded-full bg-primary/10 p-2">
                  <method.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">{method.name}</h4>
                  <p className="text-sm text-muted-foreground">
                    {method.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Card>
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold mb-4">Benefits of Professional Carpet Cleaning</h3>
          <ul className="space-y-3">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="rounded-full bg-primary/10 p-1 mt-0.5">
                  <Check className="h-4 w-4 text-primary" />
                </div>
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default CarpetCleaningService;
