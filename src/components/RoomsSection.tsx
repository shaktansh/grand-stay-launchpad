import { Wifi, Car, Coffee, Sparkles, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import roomDeluxe from "@/assets/room-deluxe.jpg";
import roomSuperDeluxe from "@/assets/room-super-deluxe.jpg";
import roomSuite from "@/assets/room-suite.jpg";

interface Room {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  amenities: string[];
  size: string;
}

const rooms: Room[] = [
  {
    id: "deluxe",
    name: "Deluxe Room",
    description: "Elegant comfort with city views. Perfect for couples seeking a refined retreat.",
    price: 299,
    image: roomDeluxe,
    amenities: ["King Bed", "City View", "Rain Shower", "Mini Bar"],
    size: "35 sqm",
  },
  {
    id: "super-deluxe",
    name: "Super Deluxe",
    description: "Spacious luxury with premium amenities. Ideal for extended stays and business travelers.",
    price: 449,
    image: roomSuperDeluxe,
    amenities: ["King Bed", "Lounge Area", "Bathtub", "Workspace"],
    size: "50 sqm",
  },
  {
    id: "suite",
    name: "Grand Suite",
    description: "Ultimate indulgence with panoramic views. The pinnacle of luxury accommodation.",
    price: 699,
    image: roomSuite,
    amenities: ["Master Suite", "Living Room", "Butler Service", "Private Terrace"],
    size: "85 sqm",
  },
];

interface RoomsSectionProps {
  onSelectRoom: (room: Room) => void;
}

const RoomsSection = ({ onSelectRoom }: RoomsSectionProps) => {
  return (
    <section id="rooms" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-gold font-medium tracking-[0.2em] uppercase text-sm mb-3">
            Accommodations
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-4">
            Exquisite Rooms & Suites
          </h2>
          <div className="luxury-divider w-24 mx-auto mb-6" />
          <p className="text-muted-foreground leading-relaxed">
            Each room is thoughtfully designed to provide the perfect balance of comfort and sophistication.
          </p>
        </div>

        {/* Amenities Bar */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-12 mb-16">
          {[
            { icon: Wifi, label: "Free WiFi" },
            { icon: Car, label: "Valet Parking" },
            { icon: Coffee, label: "Room Service" },
            { icon: Sparkles, label: "Daily Housekeeping" },
          ].map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2 text-muted-foreground">
              <Icon className="w-5 h-5 text-gold" />
              <span className="text-sm font-medium">{label}</span>
            </div>
          ))}
        </div>

        {/* Room Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room, index) => (
            <div
              key={room.id}
              className="group bg-card rounded-xl overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-500 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-block bg-gold/90 text-charcoal text-xs font-bold px-3 py-1 rounded-full">
                    {room.size}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-serif text-2xl text-foreground mb-2">{room.name}</h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {room.description}
                </p>

                {/* Amenities */}
                <div className="grid grid-cols-2 gap-2 mb-6">
                  {room.amenities.map((amenity) => (
                    <div key={amenity} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Check className="w-4 h-4 text-gold" />
                      <span>{amenity}</span>
                    </div>
                  ))}
                </div>

                {/* Price & CTA */}
                <div className="flex items-end justify-between pt-4 border-t border-border">
                  <div>
                    <p className="text-xs text-muted-foreground uppercase">From</p>
                    <p className="text-2xl font-serif text-foreground">
                      ${room.price}
                      <span className="text-sm text-muted-foreground font-sans">/night</span>
                    </p>
                  </div>
                  <Button
                    variant="luxury"
                    onClick={() => onSelectRoom(room)}
                  >
                    Select Room
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoomsSection;
export type { Room };
