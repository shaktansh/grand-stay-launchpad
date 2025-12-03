import { useState } from "react";
import { X, Check, User, Mail, Phone, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { Room } from "./RoomsSection";

interface BookingModalProps {
  room: Room | null;
  isOpen: boolean;
  onClose: () => void;
}

const BookingModal = ({ room, isOpen, onClose }: BookingModalProps) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [isComplete, setIsComplete] = useState(false);

  if (!isOpen || !room) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1) {
      setStep(2);
    } else {
      setIsComplete(true);
    }
  };

  const handleClose = () => {
    setStep(1);
    setIsComplete(false);
    setFormData({ name: "", email: "", phone: "" });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-charcoal/80 backdrop-blur-sm animate-fade-in"
        onClick={handleClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-lg bg-card rounded-2xl shadow-elevated overflow-hidden animate-scale-in">
        {/* Header */}
        <div className="relative p-6 border-b border-border">
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 p-2 hover:bg-secondary rounded-full transition-colors"
          >
            <X className="w-5 h-5 text-muted-foreground" />
          </button>

          {!isComplete && (
            <>
              <p className="text-gold font-medium tracking-wider uppercase text-xs mb-1">
                {step === 1 ? "Step 1 of 2" : "Step 2 of 2"}
              </p>
              <h3 className="font-serif text-2xl text-foreground">
                {step === 1 ? "Guest Details" : "Confirm Reservation"}
              </h3>
            </>
          )}
        </div>

        {/* Content */}
        <div className="p-6">
          {isComplete ? (
            <div className="text-center py-8 animate-fade-up">
              <div className="w-20 h-20 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Check className="w-10 h-10 text-gold" />
              </div>
              <h3 className="font-serif text-2xl text-foreground mb-2">
                Reservation Confirmed!
              </h3>
              <p className="text-muted-foreground mb-6">
                Thank you for choosing The Grand Stay. A confirmation email has been sent to {formData.email}.
              </p>
              <div className="bg-secondary rounded-lg p-4 text-left mb-6">
                <p className="text-sm text-muted-foreground mb-1">Your reservation</p>
                <p className="font-serif text-lg text-foreground">{room.name}</p>
                <p className="text-gold font-semibold">${room.price}/night</p>
              </div>
              <Button variant="luxury" onClick={handleClose} className="w-full">
                Done
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {step === 1 ? (
                <>
                  {/* Room Summary */}
                  <div className="flex gap-4 p-4 bg-secondary rounded-lg">
                    <img
                      src={room.image}
                      alt={room.name}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                    <div>
                      <h4 className="font-serif text-lg text-foreground">{room.name}</h4>
                      <p className="text-gold font-semibold">${room.price}/night</p>
                      <p className="text-xs text-muted-foreground">{room.size}</p>
                    </div>
                  </div>

                  {/* Guest Form */}
                  <div className="space-y-4">
                    <div>
                      <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider block mb-2">
                        Full Name
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="John Doe"
                          className="w-full pl-10 pr-4 py-3 bg-secondary border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider block mb-2">
                        Email Address
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="john@example.com"
                          className="w-full pl-10 pr-4 py-3 bg-secondary border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider block mb-2">
                        Phone Number
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+1 (555) 000-0000"
                          className="w-full pl-10 pr-4 py-3 bg-secondary border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all"
                        />
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  {/* Confirmation Summary */}
                  <div className="space-y-4">
                    <div className="p-4 bg-secondary rounded-lg">
                      <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Room</p>
                      <p className="font-serif text-lg text-foreground">{room.name}</p>
                      <p className="text-sm text-muted-foreground">{room.size} • {room.amenities.join(" • ")}</p>
                    </div>

                    <div className="p-4 bg-secondary rounded-lg">
                      <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Guest</p>
                      <p className="font-medium text-foreground">{formData.name}</p>
                      <p className="text-sm text-muted-foreground">{formData.email}</p>
                      <p className="text-sm text-muted-foreground">{formData.phone}</p>
                    </div>

                    <div className="p-4 bg-gold/10 border border-gold/30 rounded-lg">
                      <div className="flex justify-between items-center">
                        <span className="text-foreground">Total Amount</span>
                        <span className="font-serif text-2xl text-gold">${room.price}</span>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">Per night • Taxes included</p>
                    </div>
                  </div>

                  <p className="text-xs text-muted-foreground text-center">
                    By completing this reservation, you agree to our terms and conditions.
                  </p>
                </>
              )}

              <div className="flex gap-3">
                {step === 2 && (
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setStep(1)}
                    className="flex-1"
                  >
                    Back
                  </Button>
                )}
                <Button type="submit" variant="luxury" className="flex-1">
                  {step === 1 ? "Continue" : "Complete Reservation (Mock)"}
                </Button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
