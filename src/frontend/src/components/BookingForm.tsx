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
import { CheckCircle2, Loader2, Calendar } from 'lucide-react';
import { ServiceType } from '@/backend';

const BookingForm = () => {
  const { actor } = useActor();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [bookingId, setBookingId] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    customerName: '',
    email: '',
    phone: '',
    serviceType: '',
    date: '',
    time: '',
    serviceAddress: '',
  });

  // Map service types to backend ServiceType enum
  const serviceTypeMap: Record<string, ServiceType> = {
    'residential-cleaning': ServiceType.residentialCleaning,
    'commercial-cleaning': ServiceType.commercialCleaning,
    'car-detailing': ServiceType.carDetailing,
    'carpet-cleaning': ServiceType.carpetCleaning,
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);
    setSubmitSuccess(false);
    setBookingId(null);

    try {
      if (!actor) {
        throw new Error('Backend connection not available');
      }

      // Combine date and time into a Date object, then convert to nanoseconds
      const dateTimeString = `${formData.date}T${formData.time}`;
      const dateTime = new Date(dateTimeString);
      const preferredDate = BigInt(dateTime.getTime() * 1_000_000); // Convert milliseconds to nanoseconds

      const backendServiceType = serviceTypeMap[formData.serviceType];
      const contactInfo = `Email: ${formData.email}, Phone: ${formData.phone}`;

      const newBookingId = await actor.createBooking(
        formData.customerName,
        contactInfo,
        backendServiceType,
        preferredDate,
        formData.serviceAddress
      );

      setBookingId(newBookingId.toString());
      setSubmitSuccess(true);
      setFormData({
        customerName: '',
        email: '',
        phone: '',
        serviceType: '',
        date: '',
        time: '',
        serviceAddress: '',
      });
    } catch (error) {
      console.error('Booking submission error:', error);
      setSubmitError(
        error instanceof Error ? error.message : 'Failed to submit booking. Please try again.'
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

  // Get today's date in YYYY-MM-DD format for min date
  const today = new Date().toISOString().split('T')[0];

  return (
    <Card>
      <CardContent className="p-6 md:p-8">
        {submitSuccess && bookingId && (
          <Alert className="mb-6 border-primary/50 bg-primary/10">
            <CheckCircle2 className="h-4 w-4 text-primary" />
            <AlertDescription className="text-primary">
              <strong>Booking confirmed!</strong> Your booking ID is <strong>#{bookingId}</strong>. 
              We'll contact you shortly to confirm your appointment.
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
              <Label htmlFor="customerName">Full Name *</Label>
              <Input
                id="customerName"
                name="customerName"
                value={formData.customerName}
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
              <Label htmlFor="phone">Phone Number *</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
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

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="date" className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                Preferred Date *
              </Label>
              <Input
                id="date"
                name="date"
                type="date"
                value={formData.date}
                onChange={handleChange}
                required
                min={today}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="time">Preferred Time *</Label>
              <Input
                id="time"
                name="time"
                type="time"
                value={formData.time}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="serviceAddress">Service Address *</Label>
            <Textarea
              id="serviceAddress"
              name="serviceAddress"
              value={formData.serviceAddress}
              onChange={handleChange}
              required
              placeholder="Enter your complete address including street, city, state, and zip code..."
              rows={3}
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
                Submitting Booking...
              </>
            ) : (
              'Schedule Service'
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default BookingForm;
