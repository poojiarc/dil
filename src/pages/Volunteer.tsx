import { useState } from "react";
import { Send, CheckCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
import heroBg from "@/assets/hero-bg.jpg";
import { motion, AnimatePresence } from "framer-motion";

const Volunteer = () => {
  const [form, setForm] = useState({
    name: "", phone: "", email: "", interest: "", availability: "", message: "",
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  const message = `
Volunteer Application - Dil Vasa Foundation

Full Name: ${form.name}
Phone: ${form.phone}
Email: ${form.email}
Area of Interest: ${form.interest}
Availability: ${form.availability}
Message: ${form.message}
  `;

  const whatsappUrl = `https://wa.me/918520835457?text=${encodeURIComponent(message)}`;

  window.open(whatsappUrl, "_blank");

  // Optional: reset form after redirect
  setForm({
    name: "",
    phone: "",
    email: "",
    interest: "",
    availability: "",
    message: "",
  });
};

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${heroBg})` }} />
        <div className="absolute inset-0 gradient-blue-overlay" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center text-primary-foreground"
        >
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-4">Join as Volunteer</h1>
          <p className="text-lg text-primary-foreground/80">Be the change you wish to see in the world</p>
        </motion.div>
      </section>

      {/* Form */}
      <section className="section-padding">
        <div className="container-custom max-w-2xl">
          <ScrollReveal>
            <div className="card-premium p-8 md:p-10">
              <h2 className="text-2xl font-heading font-bold text-foreground mb-2">Volunteer Registration</h2>
              <p className="text-muted-foreground mb-8 text-sm">Fill in your details and we'll get back to you shortly.</p>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Full Name</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all"
                    placeholder="Your full name"
                  />
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Phone</label>
                    <input
                      type="tel"
                      required
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Email</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Area of Interest</label>
                  <select
                    required
                    value={form.interest}
                    onChange={(e) => setForm({ ...form, interest: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all"
                  >
                    <option value="">Select an area</option>
                    <option value="Education">Education</option>
                    <option value="Healthcare">Healthcare</option>
                    <option value="Skill Development">Skill Development</option>
                    <option value="Community Welfare">Community Welfare</option>
                    <option value="Event Management">Event Management</option>
                    <option value="Fundraising">Fundraising</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Availability</label>
                  <select
                    required
                    value={form.availability}
                    onChange={(e) => setForm({ ...form, availability: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all"
                  >
                    <option value="">Select availability</option>
                    <option value="Weekdays">Weekdays</option>
                    <option value="Weekends">Weekends</option>
                    <option value="Both">Both</option>
                    <option value="Remote Only">Remote Only</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Message</label>
                  <textarea
                    rows={3}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all resize-none"
                    placeholder="Tell us about yourself..."
                  />
                </div>
                <Button type="submit" variant="default" size="lg" className="w-full gap-2">
                  <Send size={16} />
                  Submit Application
                </Button>
              </form>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Success Popup */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/50 px-4"
            onClick={() => setShowSuccess(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-card rounded-2xl p-8 max-w-md w-full text-center shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowSuccess(false)}
                className="absolute top-4 right-4 text-muted-foreground hover:text-foreground"
              >
                <X size={20} />
              </button>
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-secondary flex items-center justify-center">
                <CheckCircle size={32} className="text-primary" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-foreground mb-2">Thank You!</h3>
              <p className="text-muted-foreground">
                Your volunteer application has been submitted successfully. Our team will reach out to you soon!
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Volunteer;
