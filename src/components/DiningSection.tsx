import { Plus, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import restaurantImage from "@/assets/restaurant.jpg";
import dish1 from "@/assets/dish-1.jpg";
import dish2 from "@/assets/dish-2.jpg";

interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: "appetizer" | "entree";
  image: string;
}

const menuItems: MenuItem[] = [
  {
    id: "1",
    name: "Seared Scallops",
    description: "Pan-seared scallops with truffle butter, micro greens, and balsamic reduction",
    price: 28,
    category: "appetizer",
    image: dish1,
  },
  {
    id: "2",
    name: "Lobster Bisque",
    description: "Creamy Maine lobster soup with brandy cream and chive oil",
    price: 22,
    category: "appetizer",
    image: dish1,
  },
  {
    id: "3",
    name: "Wagyu Filet Mignon",
    description: "8oz prime cut with truffle mash, seasonal vegetables, and red wine jus",
    price: 68,
    category: "entree",
    image: dish2,
  },
  {
    id: "4",
    name: "Chilean Sea Bass",
    description: "Pan-roasted with saffron risotto, asparagus, and citrus beurre blanc",
    price: 54,
    category: "entree",
    image: dish2,
  },
  {
    id: "5",
    name: "Rack of Lamb",
    description: "Herb-crusted New Zealand lamb with mint pesto and roasted fingerlings",
    price: 58,
    category: "entree",
    image: dish2,
  },
  {
    id: "6",
    name: "Tuna Tartare",
    description: "Yellowfin tuna with avocado mousse, sesame, and wonton crisps",
    price: 26,
    category: "appetizer",
    image: dish1,
  },
];

interface DiningSectionProps {
  onAddToOrder: (item: MenuItem) => void;
}

const DiningSection = ({ onAddToOrder }: DiningSectionProps) => {
  const appetizers = menuItems.filter((item) => item.category === "appetizer");
  const entrees = menuItems.filter((item) => item.category === "entree");

  return (
    <section id="dining" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <p className="text-gold font-medium tracking-[0.2em] uppercase text-sm mb-3">
              Fine Dining
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-4">
              Culinary Excellence
            </h2>
            <div className="luxury-divider w-24 mb-6" />
            <p className="text-muted-foreground leading-relaxed mb-6">
              Experience world-class cuisine at our signature restaurant. Our award-winning chefs 
              craft each dish using the finest seasonal ingredients, creating memorable dining experiences.
            </p>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-gold" />
                <span>Breakfast: 7AM - 11AM</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-gold" />
                <span>Dinner: 6PM - 11PM</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src={restaurantImage}
              alt="Fine dining restaurant"
              className="w-full h-80 object-cover rounded-xl shadow-elevated"
            />
            <div className="absolute -bottom-4 -left-4 bg-gold text-charcoal px-6 py-3 rounded-lg shadow-gold">
              <p className="font-serif text-lg font-semibold">Michelin Inspired</p>
            </div>
          </div>
        </div>

        {/* Menu */}
        <div className="space-y-12">
          {/* Appetizers */}
          <div>
            <h3 className="font-serif text-2xl text-foreground mb-6 flex items-center gap-4">
              <span>Appetizers</span>
              <div className="flex-1 h-px bg-border" />
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {appetizers.map((item, index) => (
                <MenuCard key={item.id} item={item} onAdd={onAddToOrder} index={index} />
              ))}
            </div>
          </div>

          {/* Entrees */}
          <div>
            <h3 className="font-serif text-2xl text-foreground mb-6 flex items-center gap-4">
              <span>Entrées</span>
              <div className="flex-1 h-px bg-border" />
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {entrees.map((item, index) => (
                <MenuCard key={item.id} item={item} onAdd={onAddToOrder} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface MenuCardProps {
  item: MenuItem;
  onAdd: (item: MenuItem) => void;
  index: number;
}

const MenuCard = ({ item, onAdd, index }: MenuCardProps) => {
  return (
    <div
      className="group bg-card rounded-xl overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-300 animate-fade-up"
      style={{ animationDelay: `${index * 0.05}s` }}
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 to-transparent" />
        <span className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm text-foreground font-serif text-lg px-3 py-1 rounded-full">
          ${item.price}
        </span>
      </div>
      <div className="p-5">
        <h4 className="font-serif text-xl text-foreground mb-2">{item.name}</h4>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{item.description}</p>
        <Button
          variant="outline"
          size="sm"
          className="w-full group/btn hover:bg-primary hover:text-primary-foreground hover:border-primary"
          onClick={() => onAdd(item)}
        >
          <Plus className="w-4 h-4 mr-1 transition-transform group-hover/btn:rotate-90" />
          Add to Order
        </Button>
      </div>
    </div>
  );
};

export default DiningSection;
export type { MenuItem };
