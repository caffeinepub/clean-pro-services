import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check } from 'lucide-react';

const CarDetailingService = () => {
  const packages = [
    {
      name: 'Basic Detail',
      price: 'Starting at $99',
      features: [
        'Exterior hand wash and dry',
        'Wheel and tire cleaning',
        'Interior vacuuming',
        'Window cleaning (inside & out)',
        'Dashboard and console wipe down',
      ],
    },
    {
      name: 'Premium Detail',
      price: 'Starting at $179',
      features: [
        'Everything in Basic Detail',
        'Clay bar treatment',
        'Paint sealant application',
        'Deep interior shampooing',
        'Leather conditioning',
        'Engine bay cleaning',
      ],
      popular: true,
    },
    {
      name: 'Deluxe Detail',
      price: 'Starting at $299',
      features: [
        'Everything in Premium Detail',
        'Paint correction and buffing',
        'Ceramic coating application',
        'Headlight restoration',
        'Pet hair removal',
        'Odor elimination treatment',
      ],
    },
  ];

  return (
    <div>
      <div className="text-center mb-12">
        <img
          src="/assets/generated/car-detailing-icon.dim_128x128.png"
          alt="Car Detailing"
          className="w-20 h-20 mx-auto mb-4"
        />
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Car Detailing</h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Give your vehicle the care it deserves with our professional car detailing services. 
          From basic washes to complete restoration, we'll make your car look showroom-ready.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {packages.map((pkg, index) => (
          <Card
            key={index}
            className={`relative ${
              pkg.popular ? 'border-primary shadow-lg scale-105' : ''
            }`}
          >
            {pkg.popular && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
                  MOST POPULAR
                </span>
              </div>
            )}
            <CardHeader>
              <CardTitle className="text-2xl">{pkg.name}</CardTitle>
              <p className="text-2xl font-bold text-primary">{pkg.price}</p>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <div className="rounded-full bg-primary/10 p-1 mt-0.5">
                      <Check className="h-3 w-3 text-primary" />
                    </div>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CarDetailingService;
