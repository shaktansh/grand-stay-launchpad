import { useState } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import RoomsSection from "@/components/RoomsSection";
import BookingModal from "@/components/BookingModal";
import DiningSection from "@/components/DiningSection";
import GallerySection from "@/components/GallerySection";
import StorySection from "@/components/StorySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import type { Room } from "@/components/RoomsSection";
import type { MenuItem } from "@/components/DiningSection";
import type { CartItem } from "@/components/CartDrawer";

const Index = () => {
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const handleSelectRoom = (room: Room) => {
    setSelectedRoom(room);
    setIsBookingOpen(true);
  };

  const handleAddToOrder = (item: MenuItem) => {
    setCartItems((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (itemId: string, quantity: number) => {
    setCartItems((prev) =>
      prev.map((i) => (i.id === itemId ? { ...i, quantity } : i))
    );
  };

  const handleRemoveItem = (itemId: string) => {
    setCartItems((prev) => prev.filter((i) => i.id !== itemId));
  };

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      <main className="min-h-screen bg-background">
        <Header cartCount={cartCount} onCartClick={() => setIsCartOpen(true)} />
        
        <HeroSection onCheckAvailability={() => document.getElementById("rooms")?.scrollIntoView({ behavior: "smooth" })} />
        
        <RoomsSection onSelectRoom={handleSelectRoom} />
        
        <DiningSection onAddToOrder={handleAddToOrder} />
        
        <GallerySection />
        
        <StorySection />
        
        <TestimonialsSection />
        
        <Footer />

        {/* Modals & Drawers */}
        <BookingModal
          room={selectedRoom}
          isOpen={isBookingOpen}
          onClose={() => setIsBookingOpen(false)}
        />

        <CartDrawer
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)}
          items={cartItems}
          onUpdateQuantity={handleUpdateQuantity}
          onRemoveItem={handleRemoveItem}
        />
      </main>
    </>
  );
};

export default Index;
