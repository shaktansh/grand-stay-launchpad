import { useState } from "react";
import { CalendarDays, Users, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-hotel.jpg";

interface HeroSectionProps {
  onCheckAvailability: () => void;
}

const HeroSection = ({ onCheckAvailability }: HeroSectionProps) => {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("2");

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Luxury hotel lobby"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/60 via-charcoal/40 to-charcoal/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-24 pb-12">
        <div className="max-w-4xl mx-auto text-center mb-12 animate-fade-up">
          <p className="text-gold font-medium tracking-[0.3em] uppercase text-sm mb-4">
            Welcome to
          </p>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-cream font-semibold mb-6 leading-tight">
            The Grand Stay
          </h1>
          <p className="text-cream/90 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Where timeless elegance meets modern luxury. Experience unparalleled hospitality
            in our boutique sanctuary.
          </p>
        </div>

        {/* Booking Widget */}
        <div className="max-w-4xl mx-auto animate-fade-up stagger-2">
          <div className="bg-background/95 backdrop-blur-md rounded-xl shadow-elevated p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6">
              {/* Check In */}
              <div className="space-y-2">
                <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  Check In
                </label>
                <div className="relative">
                  <CalendarDays className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <input
                    type="date"
                    value={checkIn}
                    onChange={(e) => setCheckIn(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-secondary border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all"
                  />
                </div>
              </div>

              {/* Check Out */}
              <div className="space-y-2">
                <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  Check Out
                </label>
                <div className="relative">
                  <CalendarDays className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <input
                    type="date"
                    value={checkOut}
                    onChange={(e) => setCheckOut(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-secondary border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all"
                  />
                </div>
              </div>

              {/* Guests */}
              <div className="space-y-2">
                <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  Guests
                </label>
                <div className="relative">
                  <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <select
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    className="w-full pl-10 pr-10 py-3 bg-secondary border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all appearance-none cursor-pointer"
                  >
                    <option value="1">1 Guest</option>
                    <option value="2">2 Guests</option>
                    <option value="3">3 Guests</option>
                    <option value="4">4 Guests</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                </div>
              </div>

              {/* Search Button */}
              <div className="flex items-end">
                <Button
                  variant="luxury"
                  size="xl"
                  className="w-full"
                  onClick={onCheckAvailability}
                >
                  Check Availability
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <div className="w-6 h-10 border-2 border-cream/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-cream/80 rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
