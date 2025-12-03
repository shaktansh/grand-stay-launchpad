import { X, Minus, Plus, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { MenuItem } from "./DiningSection";

interface CartItem extends MenuItem {
  quantity: number;
}

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (itemId: string, quantity: number) => void;
  onRemoveItem: (itemId: string) => void;
}

const CartDrawer = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
}: CartDrawerProps) => {
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <>
      {/* Backdrop */}
      <div
        className={cn(
          "fixed inset-0 bg-charcoal/60 backdrop-blur-sm z-50 transition-opacity duration-300",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className={cn(
          "fixed top-0 right-0 h-full w-full max-w-md bg-background z-50 shadow-elevated transition-transform duration-300 ease-out",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <div className="flex items-center gap-3">
            <ShoppingBag className="w-5 h-5 text-gold" />
            <h2 className="font-serif text-xl text-foreground">Your Order</h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-secondary rounded-full transition-colors"
          >
            <X className="w-5 h-5 text-muted-foreground" />
          </button>
        </div>

        {/* Content */}
        <div className="flex flex-col h-[calc(100%-180px)] overflow-hidden">
          {items.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
              <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mb-4">
                <ShoppingBag className="w-10 h-10 text-muted-foreground" />
              </div>
              <p className="font-serif text-xl text-foreground mb-2">Your order is empty</p>
              <p className="text-sm text-muted-foreground">
                Browse our menu and add items to your order
              </p>
            </div>
          ) : (
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 p-4 bg-secondary rounded-xl animate-fade-up"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h4 className="font-serif text-lg text-foreground">{item.name}</h4>
                    <p className="text-gold font-medium">${item.price}</p>

                    {/* Quantity Controls */}
                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() =>
                          item.quantity > 1
                            ? onUpdateQuantity(item.id, item.quantity - 1)
                            : onRemoveItem(item.id)
                        }
                        className="w-8 h-8 flex items-center justify-center rounded-full border border-border hover:bg-background transition-colors"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="font-medium text-foreground w-6 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                        className="w-8 h-8 flex items-center justify-center rounded-full border border-border hover:bg-background transition-colors"
                      >
                        <Plus className="w-4 h-4" />
                      </button>

                      <button
                        onClick={() => onRemoveItem(item.id)}
                        className="ml-auto text-sm text-muted-foreground hover:text-destructive transition-colors"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-background border-t border-border">
            <div className="flex justify-between items-center mb-4">
              <span className="text-muted-foreground">Subtotal</span>
              <span className="font-serif text-2xl text-foreground">${total}</span>
            </div>
            <Button variant="luxury" className="w-full" size="lg">
              Place Order (Mock)
            </Button>
            <p className="text-xs text-muted-foreground text-center mt-3">
              This is a demo. No actual order will be placed.
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
export type { CartItem };
