import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BookOpen, HeartPulse, Wrench, Users, ArrowRight, Phone, Mail, MapPin, Facebook, Instagram, Calendar } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import Counter from "@/components/Counter";
import heroBg from "@/assets/hero-bg.jpg";
import aboutPreview from "@/assets/about-preview.jpg";
import event1 from "@/assets/event1.jpg";
import event2 from "@/assets/event2.jpg";
import event3 from "@/assets/event3.jpg";
import { motion } from "framer-motion";

const services = [
  {
    icon: BookOpen,
    title: "Education",
    desc: "Supporting students with resources, scholarships, digital access, and mentorship programs.",
  },
  {
    icon: HeartPulse,
    title: "Healthcare",
    desc: "Organizing health camps, medical awareness programs, and assistance for critical treatments.",
  },
  {
    icon: Wrench,
    title: "Skill Development",
    desc: "Empowering youth and women through vocational training, career guidance, and entrepreneurship support.",
  },
  {
    icon: Users,
    title: "Community Welfare",
    desc: "Conducting food distribution, disaster relief, and essential infrastructure support programs.",
  },
];

const events = [
  { img: event1, title: "Education Scholarship Drive", date: "June 15, 2026", desc: "Annual scholarship distribution event to support meritorious students from underprivileged backgrounds." },
  { img: event2, title: "Mega Health Camp", date: "August 10, 2026", desc: "Free comprehensive health checkups and medicine distribution for rural communities." },
  { img: event3, title: "Women Empowerment Program", date: "November 12, 2026", desc: "Skill development and entrepreneurship training for women in underserved areas." },
];

const Index = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 gradient-blue-overlay" />
        <div className="relative z-10 container-custom text-center text-primary-foreground py-32">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold leading-tight mb-6"
          >
            Empowering Communities.
            <br />
            Transforming Lives.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="max-w-2xl mx-auto text-lg md:text-xl text-primary-foreground/85 mb-10 leading-relaxed"
          >
            DilVasa Foundation is dedicated to uplifting underserved communities through education, healthcare, skill development, and sustainable welfare initiatives.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/volunteer">
              <Button variant="cta" size="lg" className="text-base px-8 py-6">
                Join as Volunteer
              </Button>
            </Link>
            <a href="#">
              <Button variant="hero-outline" size="lg" className="text-base px-8 py-6">
                Donate Now
              </Button>
            </a>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* About Preview */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img src={aboutPreview} alt="DilVasa Foundation community work" className="w-full h-auto object-cover" loading="lazy" />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <span className="text-sm font-semibold text-accent uppercase tracking-widest">About Us</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-2 mb-6">
                A Vision to Give Back & Transform
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                DilVasa Foundation was established with a strong vision to give back to society and bring measurable change, starting from Munagala village and expanding across Telangana and India. Founded by Dileep Vasa, who brings over a decade of professional IT expertise and non-profit experience including impactful involvement with Telangana American Telugu Association (TTA) in the United States.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                The foundation operates as a non-profit organization with no profit motive, focusing on structured, transparent, and scalable welfare management systems.
              </p>
              <Link to="/about">
                <Button variant="default" size="lg" className="gap-2">
                  Learn More <ArrowRight size={16} />
                </Button>
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Impact Counters */}
      <section className="py-16 bg-secondary/50">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <Counter end={5000} suffix="+" label="Lives Impacted" />
            <Counter end={120} suffix="+" label="Volunteers" />
            <Counter end={50} suffix="+" label="Events Conducted" />
            <Counter end={15} suffix="+" label="Villages Reached" />
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="text-sm font-semibold text-accent uppercase tracking-widest">What We Do</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-2">Our Services</h2>
            </div>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <ScrollReveal key={service.title} delay={i * 100}>
                  <div className="card-premium glow-border p-8 text-center h-full">
                    <div className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-secondary flex items-center justify-center">
                      <Icon size={28} className="text-primary" />
                    </div>
                    <h3 className="text-xl font-heading font-bold text-foreground mb-3">{service.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{service.desc}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Events Preview */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="text-sm font-semibold text-accent uppercase tracking-widest">Upcoming</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-2">Our Events</h2>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-8">
            {events.map((event, i) => (
              <ScrollReveal key={event.title} delay={i * 150}>
                <div className="card-premium overflow-hidden group h-full">
                  <div className="relative overflow-hidden">
                    <img
                      src={event.img}
                      alt={event.title}
                      className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1">
                      <Calendar size={12} />
                      {event.date}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-heading font-bold text-foreground mb-2">{event.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{event.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/events">
              <Button variant="default" size="lg" className="gap-2">
                View All Events <ArrowRight size={16} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Strip */}
      <section className="py-12 bg-primary">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-primary-foreground">
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <div className="flex items-center gap-2">
                <Phone size={18} />
                <span className="text-sm">+91 85208 35457</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={18} />
                <span className="text-sm">dilvasafoundation@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={18} />
                <span className="text-sm">Munagala, Suryapet – 508233</span>
              </div>
            </div>
            <div className="flex gap-3">
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
      </section>
    </div>
  );
};

export default Index;
