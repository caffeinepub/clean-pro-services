import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Booking {
    id: bigint;
    customerName: string;
    serviceType: ServiceType;
    serviceAddress: string;
    contactInfo: string;
    preferredDate: Time;
}
export type Time = bigint;
export enum ServiceType {
    commercialCleaning = "commercialCleaning",
    residentialCleaning = "residentialCleaning",
    carDetailing = "carDetailing",
    carpetCleaning = "carpetCleaning"
}
export interface backendInterface {
    createBooking(customerName: string, contactInfo: string, serviceType: ServiceType, preferredDate: Time, serviceAddress: string): Promise<bigint>;
    getAllBookings(): Promise<Array<Booking>>;
    getBooking(bookingId: bigint): Promise<Booking>;
    getBookingsByCustomer(customerName: string): Promise<Array<Booking>>;
}
