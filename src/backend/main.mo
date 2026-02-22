import Map "mo:core/Map";
import Text "mo:core/Text";
import Array "mo:core/Array";
import Iter "mo:core/Iter";
import Runtime "mo:core/Runtime";
import Order "mo:core/Order";
import Nat "mo:core/Nat";
import Time "mo:core/Time";
import Migration "migration";

(with migration = Migration.run)
actor {
  // Legacy type definition from old version
  type ServiceType_LEGACY = {
    #websiteCreation;
    #landingPage;
    #brandingDesign;
    #visualDesign;
    #consulting;
  };

  type ContactForm = {
    name : Text;
    email : Text;
    telephone : Text;
    serviceType : ServiceType_LEGACY;
    message : Text;
  };

  // New service types for cleaning business
  type ServiceType = {
    #residentialCleaning;
    #commercialCleaning;
    #carDetailing;
    #carpetCleaning;
  };

  type Booking = {
    id : Nat;
    customerName : Text;
    contactInfo : Text;
    serviceType : ServiceType;
    preferredDate : Time.Time;
    serviceAddress : Text;
  };

  module Booking {
    public func compare(booking1 : Booking, booking2 : Booking) : Order.Order {
      switch (Text.compare(booking1.customerName, booking2.customerName)) {
        case (#equal) { Text.compare(booking1.contactInfo, booking2.contactInfo) };
        case (order) { order };
      };
    };
  };

  var nextBookingId = 0;
  let bookings = Map.empty<Nat, Booking>();

  public shared ({ caller }) func createBooking(
    customerName : Text,
    contactInfo : Text,
    serviceType : ServiceType,
    preferredDate : Time.Time,
    serviceAddress : Text,
  ) : async Nat {
    let bookingId = nextBookingId;
    let booking : Booking = {
      id = bookingId;
      customerName;
      contactInfo;
      serviceType;
      preferredDate;
      serviceAddress;
    };

    bookings.add(bookingId, booking);
    nextBookingId += 1;
    bookingId;
  };

  public query ({ caller }) func getBooking(bookingId : Nat) : async Booking {
    switch (bookings.get(bookingId)) {
      case (null) { Runtime.trap("Booking with this id does not exist") };
      case (?booking) { booking };
    };
  };

  public query ({ caller }) func getAllBookings() : async [Booking] {
    bookings.values().toArray().sort();
  };

  public query ({ caller }) func getBookingsByCustomer(customerName : Text) : async [Booking] {
    let filtered = bookings.values().toArray().filter(
      func(booking) {
        Text.equal(booking.customerName, customerName);
      }
    );
    filtered.sort();
  };
};
