import { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { cn } from "@/lib/utils";
import heroImage from "@/assets/hero-hotel.jpg";
import roomDeluxe from "@/assets/room-deluxe.jpg";
import roomSuperDeluxe from "@/assets/room-super-deluxe.jpg";
import roomSuite from "@/assets/room-suite.jpg";
import restaurant from "@/assets/restaurant.jpg";
import hotelExterior from "@/assets/hotel-exterior.jpg";
import spa from "@/assets/spa.jpg";
import pool from "@/assets/pool.jpg";

const galleryImages = [
  { src: heroImage, alt: "Grand Lobby", category: "Interior" },
  { src: hotelExterior, alt: "Hotel Exterior", category: "Exterior" },
  { src: roomSuite, alt: "Grand Suite", category: "Rooms" },
  { src: restaurant, alt: "Fine Dining Restaurant", category: "Dining" },
  { src: spa, alt: "Wellness Spa", category: "Amenities" },
  { src: pool, alt: "Infinity Pool", category: "Amenities" },
  { src: roomDeluxe, alt: "Deluxe Room", category: "Rooms" },
  { src: roomSuperDeluxe, alt: "Super Deluxe Room", category: "Rooms" },
];

const GallerySection = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setSelectedIndex(index);
  const closeLightbox = () => setSelectedIndex(null);

  const goNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % galleryImages.length);
    }
  };

  const goPrev = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + galleryImages.length) % galleryImages.length);
    }
  };

  return (
    <section id="gallery" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-gold font-medium tracking-[0.2em] uppercase text-sm mb-3">
            Visual Journey
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-4">
            Experience The Grand Stay
          </h2>
          <div className="luxury-divider w-24 mx-auto mb-6" />
          <p className="text-muted-foreground leading-relaxed">
            Explore our property through stunning imagery showcasing our elegant spaces and world-class amenities.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={cn(
                "relative overflow-hidden rounded-xl cursor-pointer group animate-fade-up",
                index === 0 && "md:col-span-2 md:row-span-2",
                index === 3 && "md:col-span-2"
              )}
              style={{ animationDelay: `${index * 0.05}s` }}
              onClick={() => openLightbox(index)}
            >
              <div className={cn("w-full", index === 0 ? "h-full min-h-64 md:min-h-96" : "h-48 md:h-56")}>
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/40 transition-colors duration-300 flex items-end justify-start p-4">
                <div className="translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <p className="text-xs text-gold uppercase tracking-wider">{image.category}</p>
                  <p className="text-cream font-serif text-lg">{image.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedIndex !== null && (
        <div className="fixed inset-0 z-50 bg-charcoal/95 flex items-center justify-center animate-fade-in">
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 p-2 text-cream/80 hover:text-cream transition-colors"
          >
            <X className="w-8 h-8" />
          </button>

          <button
            onClick={goPrev}
            className="absolute left-4 md:left-8 p-3 text-cream/80 hover:text-cream transition-colors hover:bg-cream/10 rounded-full"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          <div className="max-w-5xl max-h-[80vh] mx-4">
            <img
              src={galleryImages[selectedIndex].src}
              alt={galleryImages[selectedIndex].alt}
              className="max-w-full max-h-[75vh] object-contain rounded-xl animate-scale-in"
            />
            <div className="text-center mt-4">
              <p className="text-gold text-sm uppercase tracking-wider">
                {galleryImages[selectedIndex].category}
              </p>
              <p className="text-cream font-serif text-xl">
                {galleryImages[selectedIndex].alt}
              </p>
            </div>
          </div>

          <button
            onClick={goNext}
            className="absolute right-4 md:right-8 p-3 text-cream/80 hover:text-cream transition-colors hover:bg-cream/10 rounded-full"
          >
            <ChevronRight className="w-8 h-8" />
          </button>
        </div>
      )}
    </section>
  );
};

export default GallerySection;
