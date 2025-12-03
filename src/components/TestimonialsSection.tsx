import { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    id: 1,
    name: "Sarah & Michael Thompson",
    location: "New York, USA",
    text: "Our anniversary stay at The Grand Stay was absolutely magical. From the champagne welcome to the impeccable room service, every moment was perfect. The Grand Suite exceeded all our expectations.",
    rating: 5,
    date: "October 2024",
  },
  {
    id: 2,
    name: "David Chen",
    location: "Singapore",
    text: "As a frequent business traveler, I've stayed at many luxury hotels. The Grand Stay stands out for its genuine warmth and attention to detail. The restaurant alone is worth the trip.",
    rating: 5,
    date: "September 2024",
  },
  {
    id: 3,
    name: "Emma Laurent",
    location: "Paris, France",
    text: "Simply exquisite. The blend of modern luxury and classic elegance is masterfully done. The spa treatments were heavenly, and the staff made us feel like family.",
    rating: 5,
    date: "November 2024",
  },
  {
    id: 4,
    name: "Robert & Linda Foster",
    location: "London, UK",
    text: "We've found our new favorite retreat. The culinary experience was outstanding, and waking up to those views from the Super Deluxe room was breathtaking. We're already planning our return.",
    rating: 5,
    date: "August 2024",
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const goPrev = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-gold font-medium tracking-[0.2em] uppercase text-sm mb-3">
            Guest Experiences
          </p>
          <h2 className="font-serif text-4xl md:text-5xl mb-4">
            What Our Guests Say
          </h2>
          <div className="h-px w-24 mx-auto bg-gradient-to-r from-transparent via-gold to-transparent mb-6" />
        </div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="text-center">
                    <Quote className="w-12 h-12 text-gold mx-auto mb-6 opacity-50" />
                    
                    {/* Stars */}
                    <div className="flex justify-center gap-1 mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                      ))}
                    </div>

                    {/* Quote */}
                    <blockquote className="font-serif text-xl md:text-2xl leading-relaxed mb-8 text-primary-foreground/90">
                      "{testimonial.text}"
                    </blockquote>

                    {/* Author */}
                    <div>
                      <p className="font-semibold text-lg">{testimonial.name}</p>
                      <p className="text-sm text-primary-foreground/70">
                        {testimonial.location} • {testimonial.date}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 p-2 text-primary-foreground/60 hover:text-primary-foreground transition-colors"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>
          <button
            onClick={goNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 p-2 text-primary-foreground/60 hover:text-primary-foreground transition-colors"
          >
            <ChevronRight className="w-8 h-8" />
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsAutoPlaying(false);
                  setCurrentIndex(index);
                }}
                className={cn(
                  "w-2 h-2 rounded-full transition-all duration-300",
                  index === currentIndex ? "bg-gold w-8" : "bg-primary-foreground/30 hover:bg-primary-foreground/50"
                )}
              />
            ))}
          </div>
        </div>

        {/* Awards */}
        <div className="mt-20 pt-12 border-t border-primary-foreground/20">
          <p className="text-center text-sm text-primary-foreground/60 uppercase tracking-wider mb-8">
            Recognized By
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {["TripAdvisor", "Forbes Travel", "Condé Nast", "Luxury Travel"].map((award) => (
              <div
                key={award}
                className="text-primary-foreground/40 font-serif text-lg md:text-xl hover:text-gold transition-colors cursor-default"
              >
                {award}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
