import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, Info, Briefcase, Calendar, Phone, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoFull from "@/assets/logo-full.jpg";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { to: "/", label: "Home", icon: Home },
  { to: "/about", label: "About", icon: Info },
  { to: "/services", label: "Services", icon: Briefcase },
  { to: "/events", label: "Events", icon: Calendar },
  { to: "/contact", label: "Contact", icon: Phone },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed left-0 right-0 z-50 transition-all duration-500 top-0 ${
        scrolled
          ? "bg-primary shadow-lg py-2 !top-0"
          : "bg-primary/80 backdrop-blur-sm py-3"
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
  <img
    src={logoFull}
    alt="DilVasa Foundation Logo"
    className="h-14 w-auto rounded bg-white/90 p-1"
  />

  <div className="hidden sm:block leading-tight">
    <h1
      className="text-xl font-bold text-primary-foreground drop-shadow-md"
  style={{ fontFamily: "'Playfair Display', serif", letterSpacing: "1px" }}
    >
      Dil Vasa
    </h1>
    <p
      className="text-xl font-bold text-primary-foreground drop-shadow-md"
  style={{ fontFamily: "'Playfair Display', serif", letterSpacing: "1px" }}
    >
      Foundation
    </p>
  </div>
</Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = location.pathname === link.to;
            return (
              <Link
                key={link.to}
                to={link.to}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                  scrolled
                    ? isActive
                      ? "bg-primary-foreground/20 text-primary-foreground"
                      : "text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10"
                    : isActive
                    ? "bg-primary/20 text-primary-foreground"
                    : "text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10"
                }`}
              >
                <Icon size={16} />
                {link.label}
              </Link>
            );
          })}
          <Link to="/volunteer">
            <Button variant="cta" size="lg" className="ml-4">
              Join Volunteer
            </Button>
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-primary-foreground p-2"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-primary overflow-hidden"
          >
            <nav className="container-custom py-4 flex flex-col gap-2">
              {navLinks.map((link) => {
                const Icon = link.icon;
                const isActive = location.pathname === link.to;
                return (
                  <Link
                    key={link.to}
                    to={link.to}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl text-base font-medium transition-all ${
                      isActive
                        ? "bg-primary-foreground/20 text-primary-foreground"
                        : "text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10"
                    }`}
                  >
                    <Icon size={18} />
                    {link.label}
                  </Link>
                );
              })}
              <Link to="/volunteer" className="mt-2">
                <Button variant="cta" size="lg" className="w-full">
                  Join Volunteer
                </Button>
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
