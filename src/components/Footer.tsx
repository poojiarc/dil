import { Link } from "react-router-dom";
import { Home, Info, Briefcase, Calendar, Phone, MapPin, Mail, Facebook, Instagram, Heart } from "lucide-react";
import logoFull from "@/assets/logo-full.jpg";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo & About */}
          <div>
            <img src={logoPng} alt="DilVasa Foundation" className="h-16 w-auto mb-4 brightness-0 invert" />
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Empowering the Needy. Transforming Lives. DilVasa Foundation is committed to creating a better tomorrow through education, healthcare, and community welfare.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-heading font-bold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { to: "/", label: "Home", icon: Home },
                { to: "/about", label: "About Us", icon: Info },
                { to: "/services", label: "Services", icon: Briefcase },
                { to: "/events", label: "Events", icon: Calendar },
                { to: "/contact", label: "Contact", icon: Phone },
              ].map((link) => {
                const Icon = link.icon;
                return (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                    >
                      <Icon size={14} />
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-heading font-bold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li className="flex items-start gap-2">
                <Phone size={14} className="mt-1 shrink-0" />
                +91 85208 35457
              </li>
              <li className="flex items-start gap-2">
                <Mail size={14} className="mt-1 shrink-0" />
                dilvasafoundation@gmail.com
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={14} className="mt-1 shrink-0" />
                2/390 Main Bazar, Munagala (Village & Mandal), Suryapet – 508233
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-lg font-heading font-bold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-primary-foreground/30 flex items-center justify-center hover:bg-primary-foreground/10 hover:shadow-[0_0_15px_hsl(213_76%_50%/0.4)] transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-primary-foreground/30 flex items-center justify-center hover:bg-primary-foreground/10 hover:shadow-[0_0_15px_hsl(213_76%_50%/0.4)] transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/15">
        <div className="container-custom py-6 text-center space-y-2">
          <p className="text-sm text-primary-foreground/70">
            Made with <Heart size={14} className="inline text-red-400 fill-red-400" /> by{" "}
            <a
              href="https://staffarc.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-primary-foreground hover:underline"
            >
              StaffArc
            </a>
          </p>
          <p className="text-xs text-primary-foreground/50">
            © 2026 DilVasa Foundation. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
