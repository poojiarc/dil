import { Calendar, ArrowRight, Droplets, Stethoscope, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
import clothesDistribution from "@/assets/clothes-distribution.jpg";
import templeInitiative from "@/assets/temple-initiative-2.jpg";
import youthTshirts from "@/assets/youth-tshirts.jpg";
import kabaddiTournament from "@/assets/kabaddi-tournament.jpg";
import clothesDistribution2 from "@/assets/clothes-distribution-2.jpg";
import heroBg from "@/assets/hero-bg.jpg";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const completedEvents = [
  {
    img: clothesDistribution,
    title: "Clothes & Fruits Distribution to Gram Panchayat Staff",
    desc: "Distributed clothes and fruits to the Gram Panchayat staff to honor their contribution to village development.",
  },
  {
    img: templeInitiative,
    title: "Sacred Photo Cards & Devotional Booklets Distribution",
    desc: "Printed and distributed 1,000 sacred photo cards and devotional booklets including Lingashtakam and Hanuman Chalisa.",
  },
  {
    img: youthTshirts,
    title: "T-Shirt Distribution to Rudra Youth",
    desc: "Distributed T-shirts to Rudra Youth, promoting unity, leadership, and team spirit among young community members.",
  },
  {
    img: kabaddiTournament,
    title: "State-Level Kabaddi Tournament Support",
    desc: "Supported the State-Level Kabaddi Tournament organized by Ganee Youth to promote traditional sports and rural talent.",
  },
];

const upcomingEvents = [
  {
    img: clothesDistribution2,
    icon: Droplets,
    title: "Chalivendram – Free Drinking Water Distribution",
    date: "Summer 2026",
    desc: "Providing drinking water to travelers and villagers during the summer season to help them cope with extreme heat.",
  },
  {
    img: clothesDistribution,
    icon: Stethoscope,
    title: "Medical Camps in Villages",
    date: "2026",
    desc: "Organizing free health check-up camps with doctors to provide basic healthcare services and medical awareness to rural communities.",
  },
  {
    img: templeInitiative,
    icon: GraduationCap,
    title: "Scholarships for Merit Students",
    date: "2026",
    desc: "Supporting talented and deserving students by providing scholarships to encourage education and help them achieve their academic goals.",
  },
];

const Events = () => {
  const navigate = useNavigate();
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
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-4">Our Events</h1>
          <p className="text-lg text-primary-foreground/80">Past achievements and upcoming initiatives</p>
        </motion.div>
      </section>

      {/* Completed Events - No dates */}
      <section className="section-padding">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="text-sm font-semibold text-accent uppercase tracking-widest">Completed</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-2">Past Events</h2>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-8">
            {completedEvents.map((event, i) => (
              <ScrollReveal key={event.title} delay={i * 100}>
                <div className="card-premium overflow-hidden group h-full">
                  <div className="relative overflow-hidden">
                    <img
                      src={event.img}
                      alt={event.title}
                      className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-heading font-bold text-foreground mb-2">{event.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{event.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events - With dates */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="text-sm font-semibold text-accent uppercase tracking-widest">Coming Soon</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-2">Future Initiatives & Planned Programs – 2026</h2>
            </div>
          </ScrollReveal>
          <div className="grid gap-8">
            {upcomingEvents.map((event, i) => {
              const Icon = event.icon;
              return (
                <ScrollReveal key={event.title} delay={i * 100}>
                  <div className="card-premium overflow-hidden group">
                    <div className="grid md:grid-cols-[350px_1fr] gap-0">
                      <div className="relative overflow-hidden">
                        <img
                          src={event.img}
                          alt={event.title}
                          className="w-full h-64 md:h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                        />
                        <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-4 py-2 rounded-xl text-sm font-bold flex items-center gap-2">
                          <Calendar size={14} />
                          {event.date}
                        </div>
                      </div>
                      <div className="p-8 flex flex-col justify-center">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center">
                            <Icon size={20} className="text-primary" />
                          </div>
                          <h3 className="text-2xl font-heading font-bold text-foreground">{event.title}</h3>
                        </div>
                        <p className="text-muted-foreground leading-relaxed mb-6">{event.desc}</p>
                        <div>
                          <Button
                            variant="default"
                            className="gap-2"
                            onClick={() => navigate("/volunteer")}
                          >
                            Register Now <ArrowRight size={16} />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;
