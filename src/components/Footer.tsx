import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-charcoal text-cream">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="font-serif text-3xl mb-4">
              The Grand<span className="text-gold">Stay</span>
            </h3>
            <p className="text-cream/70 text-sm leading-relaxed mb-6">
              Where timeless elegance meets modern luxury. Experience unparalleled 
              hospitality in our boutique sanctuary.
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Twitter].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 rounded-full border border-cream/20 flex items-center justify-center hover:border-gold hover:text-gold transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg mb-6 text-gold">Quick Links</h4>
            <ul className="space-y-3">
              {["Rooms & Suites", "Dining", "Spa & Wellness", "Events", "Gallery", "Contact"].map(
                (link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-cream/70 hover:text-cream transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-lg mb-6 text-gold">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <span className="text-cream/70 text-sm">
                  123 Luxury Avenue, Grand District
                  <br />
                  New York, NY 10001
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gold shrink-0" />
                <a href="tel:+1555000000" className="text-cream/70 hover:text-cream text-sm">
                  +1 (555) 000-0000
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gold shrink-0" />
                <a href="mailto:stay@thegrandstay.com" className="text-cream/70 hover:text-cream text-sm">
                  stay@thegrandstay.com
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-serif text-lg mb-6 text-gold">Hours</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <div className="text-sm">
                  <p className="text-cream mb-1">Front Desk</p>
                  <p className="text-cream/70">24 Hours</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <div className="text-sm">
                  <p className="text-cream mb-1">Restaurant</p>
                  <p className="text-cream/70">7AM - 11AM | 6PM - 11PM</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <div className="text-sm">
                  <p className="text-cream mb-1">Spa & Wellness</p>
                  <p className="text-cream/70">9AM - 9PM</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-cream/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-cream/50">
            <p>© 2024 The Grand Stay. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-cream transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-cream transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-cream transition-colors">
                Cancellation Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
