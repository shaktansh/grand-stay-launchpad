import { Heart, Award, Users } from "lucide-react";

const StorySection = () => {
  return (
    <section id="story" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="animate-fade-up">
            <p className="text-gold font-medium tracking-[0.2em] uppercase text-sm mb-3">
              Our Story
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-4">
              A Legacy of Hospitality
            </h2>
            <div className="luxury-divider w-24 mb-8" />

            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Founded in 2010 by partners Elizabeth and James Morrison, The Grand Stay was born 
                from a shared passion for exceptional hospitality and timeless elegance. What began 
                as a dream to create a sanctuary for discerning travelers has blossomed into an 
                award-winning boutique hotel.
              </p>
              <p>
                Every detail at The Grand Stay reflects our commitment to excellence—from the 
                hand-selected furnishings to our carefully curated dining experience. We believe 
                that true luxury lies not in opulence, but in the warmth of genuine care and 
                attention to every guest's needs.
              </p>
              <p>
                Today, we continue to welcome guests from around the world, each one becoming 
                part of our extended family. Our story is still being written, one unforgettable 
                stay at a time.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-border">
              <div>
                <p className="font-serif text-3xl md:text-4xl text-gold mb-1">15+</p>
                <p className="text-sm text-muted-foreground">Years of Excellence</p>
              </div>
              <div>
                <p className="font-serif text-3xl md:text-4xl text-gold mb-1">50K+</p>
                <p className="text-sm text-muted-foreground">Happy Guests</p>
              </div>
              <div>
                <p className="font-serif text-3xl md:text-4xl text-gold mb-1">12</p>
                <p className="text-sm text-muted-foreground">Industry Awards</p>
              </div>
            </div>
          </div>

          {/* Founders */}
          <div className="relative animate-fade-up stagger-2">
            <div className="grid grid-cols-2 gap-6">
              {/* Founder 1 */}
              <div className="text-center">
                <div className="relative mb-4">
                  <div className="w-40 h-40 md:w-48 md:h-48 mx-auto rounded-full bg-gradient-to-br from-gold/20 to-sapphire/20 p-1">
                    <div className="w-full h-full rounded-full bg-secondary flex items-center justify-center">
                      <span className="font-serif text-5xl text-gold">E</span>
                    </div>
                  </div>
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-gold text-charcoal px-4 py-1 rounded-full text-sm font-medium">
                    Co-Founder
                  </div>
                </div>
                <h4 className="font-serif text-xl text-foreground">Elizabeth Morrison</h4>
                <p className="text-sm text-muted-foreground">Creative Vision</p>
              </div>

              {/* Founder 2 */}
              <div className="text-center mt-12">
                <div className="relative mb-4">
                  <div className="w-40 h-40 md:w-48 md:h-48 mx-auto rounded-full bg-gradient-to-br from-gold/20 to-sapphire/20 p-1">
                    <div className="w-full h-full rounded-full bg-secondary flex items-center justify-center">
                      <span className="font-serif text-5xl text-gold">J</span>
                    </div>
                  </div>
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-gold text-charcoal px-4 py-1 rounded-full text-sm font-medium">
                    Co-Founder
                  </div>
                </div>
                <h4 className="font-serif text-xl text-foreground">James Morrison</h4>
                <p className="text-sm text-muted-foreground">Operations Excellence</p>
              </div>
            </div>

            {/* Values */}
            <div className="mt-12 grid grid-cols-3 gap-4">
              {[
                { icon: Heart, label: "Passion" },
                { icon: Award, label: "Excellence" },
                { icon: Users, label: "Family" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="text-center p-4 bg-secondary rounded-xl">
                  <Icon className="w-6 h-6 text-gold mx-auto mb-2" />
                  <p className="text-sm font-medium text-foreground">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
