import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BookOpen, HeartPulse, Wrench, Users, ArrowRight, Calendar } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import Counter from "@/components/Counter";
import HeroCarousel from "@/components/HeroCarousel";
import aboutPreview from "@/assets/about-preview.jpg";
import event1 from "@/assets/event1.jpg";
import event2 from "@/assets/event2.jpg";
import event3 from "@/assets/event3.jpg";

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
      {/* Hero Carousel */}
      <HeroCarousel />

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
    </div>
  );
};

export default Index;
