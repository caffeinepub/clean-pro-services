import Map "mo:core/Map";
import Text "mo:core/Text";
import Nat "mo:core/Nat";
import Time "mo:core/Time";

module {
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

  type OldActor = {
    contactForms : Map.Map<Text, ContactForm>;
  };

  type NewActor = {
    nextBookingId : Nat;
    bookings : Map.Map<Nat, Booking>;
  };

  public func run(_old : OldActor) : NewActor {
    {
      nextBookingId = 0;
      bookings = Map.empty<Nat, Booking>();
    };
  };
};
