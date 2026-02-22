import { Card, CardContent } from '@/components/ui/card';
import { Check, Building2, Store, Hospital, GraduationCap } from 'lucide-react';

const CommercialService = () => {
  const features = [
    'Daily, weekly, or monthly cleaning schedules',
    'Office and workspace sanitization',
    'Restroom deep cleaning',
    'Floor care and maintenance',
    'Trash removal and recycling',
    'Break room and kitchen cleaning',
    'After-hours service available',
    'Customized cleaning plans',
  ];

  const industries = [
    { name: 'Office Buildings', icon: Building2 },
    { name: 'Retail Spaces', icon: Store },
    { name: 'Medical Facilities', icon: Hospital },
    { name: 'Educational Institutions', icon: GraduationCap },
  ];

  return (
    <div className="grid md:grid-cols-2 gap-8 items-center">
      <Card>
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold mb-4">What We Offer</h3>
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

      <div>
        <div className="mb-6">
          <img
            src="/assets/generated/commercial-icon.dim_128x128.png"
            alt="Commercial Cleaning"
            className="w-20 h-20 mb-4"
          />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Commercial Cleaning
          </h2>
          <p className="text-lg text-muted-foreground mb-6">
            Create a clean, professional environment that impresses clients and boosts employee 
            morale. Our commercial cleaning services are tailored to meet the unique needs of 
            your business.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Industries We Serve</h3>
          <div className="grid grid-cols-2 gap-4">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
              >
                <industry.icon className="h-6 w-6 text-primary" />
                <span className="font-medium text-sm">{industry.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommercialService;
