import { MapPin, CheckCircle2 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const ServiceArea = () => {
  const counties = [
    {
      name: 'Llano County',
      description: 'Serving all communities throughout Llano County',
    },
    {
      name: 'Burnet County',
      description: 'Complete coverage across Burnet County',
    },
  ];

  return (
    <div className="text-center">
      <div className="inline-flex items-center justify-center gap-2 mb-6">
        <MapPin className="h-8 w-8 text-primary" />
        <h2 className="text-3xl md:text-4xl font-bold">Our Service Area</h2>
      </div>
      
      <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
        We proudly serve residential and commercial clients throughout the Texas Hill Country. 
        Our professional cleaning services are available in the following counties:
      </p>

      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {counties.map((county) => (
          <Card key={county.name} className="border-2 border-primary/20 hover:border-primary/40 transition-colors">
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  <CheckCircle2 className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <Badge variant="default" className="mb-3 text-base px-3 py-1">
                    {county.name}
                  </Badge>
                  <p className="text-muted-foreground">
                    {county.description}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-10 p-6 bg-accent/10 rounded-lg max-w-2xl mx-auto">
        <p className="text-sm text-muted-foreground">
          <strong className="text-foreground">Local & Reliable:</strong> As a locally-operated business, 
          we understand the unique needs of our Hill Country communities and are committed to providing 
          exceptional service to every customer.
        </p>
      </div>
    </div>
  );
};

export default ServiceArea;
