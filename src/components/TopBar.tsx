import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";

const TopBar = () => {
  return (
    <div className="bg-primary text-primary-foreground py-2.5 text-sm hidden md:block">
      <div className="container-custom flex items-center justify-between">
        <div className="flex items-center gap-6">
          <a href="tel:+918520835457" className="flex items-center gap-2 hover:text-accent transition-colors">
            <Phone size={14} />
            +91 85208 35457
          </a>
          <a href="mailto:dilvasafoundation@gmail.com" className="flex items-center gap-2 hover:text-accent transition-colors">
            <Mail size={14} />
            dilvasafoundation@gmail.com
          </a>
          <span className="flex items-center gap-2">
            <MapPin size={14} />
            Munagala, Suryapet – 508233
          </span>
        </div>
        <div className="flex items-center gap-3">
          <a
            href="#"
            className="w-8 h-8 rounded-full border border-primary-foreground/30 flex items-center justify-center hover:bg-primary-foreground/10 transition-all duration-300"
            aria-label="Facebook"
          >
            <Facebook size={14} />
          </a>
          <a
            href="#"
            className="w-8 h-8 rounded-full border border-primary-foreground/30 flex items-center justify-center hover:bg-primary-foreground/10 transition-all duration-300"
            aria-label="Instagram"
          >
            <Instagram size={14} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
