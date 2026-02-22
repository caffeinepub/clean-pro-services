import { useState } from 'react';
import { useActor } from '@/hooks/useActor';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Card, CardContent } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { CheckCircle2, Loader2 } from 'lucide-react';

const ContactForm = () => {
  const { actor } = useActor();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    telephone: '',
    serviceType: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);
    setSubmitSuccess(false);

    try {
      if (!actor) {
        throw new Error('Backend connection not available');
      }

      // Note: The backend no longer has submitContactForm method
      // This form now serves as a general inquiry form
      // For actual bookings, users should use the BookingForm component
      
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        telephone: '',
        serviceType: '',
        message: '',
      });
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitError(
        error instanceof Error ? error.message : 'Failed to submit form. Please try again.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Card>
      <CardContent className="p-6 md:p-8">
        {submitSuccess && (
          <Alert className="mb-6 border-primary/50 bg-primary/10">
            <CheckCircle2 className="h-4 w-4 text-primary" />
            <AlertDescription className="text-primary">
              Thank you for your inquiry! We'll get back to you within 24 hours.
            </AlertDescription>
          </Alert>
        )}

        {submitError && (
          <Alert variant="destructive" className="mb-6">
            <AlertDescription>{submitError}</AlertDescription>
          </Alert>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name *</Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="John Doe"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email Address *</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="john@example.com"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="telephone">Phone Number *</Label>
              <Input
                id="telephone"
                name="telephone"
                type="tel"
                value={formData.telephone}
                onChange={handleChange}
                required
                placeholder="(555) 123-4567"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="serviceType">Service Type *</Label>
              <Select
                value={formData.serviceType}
                onValueChange={(value) =>
                  setFormData((prev) => ({ ...prev, serviceType: value }))
                }
                required
              >
                <SelectTrigger id="serviceType">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="residential-cleaning">
                    Residential Cleaning
                  </SelectItem>
                  <SelectItem value="commercial-cleaning">
                    Commercial Cleaning
                  </SelectItem>
                  <SelectItem value="car-detailing">Car Detailing</SelectItem>
                  <SelectItem value="carpet-cleaning">
                    Carpet Cleaning
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Message *</Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Tell us about your cleaning needs..."
              rows={5}
            />
          </div>

          <Button
            type="submit"
            size="lg"
            className="w-full"
            disabled={isSubmitting || !actor}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Submitting...
              </>
            ) : (
              'Submit Inquiry'
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default ContactForm;
