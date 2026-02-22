import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';
import type { Booking } from '@/backend';

export function useGetAllBookings() {
  const { actor, isFetching } = useActor();

  return useQuery<Booking[]>({
    queryKey: ['bookings'],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllBookings();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useGetBooking(bookingId: bigint | null) {
  const { actor, isFetching } = useActor();

  return useQuery<Booking>({
    queryKey: ['booking', bookingId?.toString()],
    queryFn: async () => {
      if (!actor || !bookingId) throw new Error('Actor or booking ID not available');
      return actor.getBooking(bookingId);
    },
    enabled: !!actor && !isFetching && bookingId !== null,
  });
}

export function useGetBookingsByCustomer(customerName: string) {
  const { actor, isFetching } = useActor();

  return useQuery<Booking[]>({
    queryKey: ['bookings', 'customer', customerName],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getBookingsByCustomer(customerName);
    },
    enabled: !!actor && !isFetching && !!customerName,
  });
}

export function useCreateBooking() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (params: {
      customerName: string;
      contactInfo: string;
      serviceType: any;
      preferredDate: bigint;
      serviceAddress: string;
    }) => {
      if (!actor) throw new Error('Actor not initialized');
      return actor.createBooking(
        params.customerName,
        params.contactInfo,
        params.serviceType,
        params.preferredDate,
        params.serviceAddress
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['bookings'] });
    },
  });
}
