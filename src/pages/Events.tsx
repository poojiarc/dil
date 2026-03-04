import { Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
import event1 from "@/assets/event1.jpg";
import event2 from "@/assets/event2.jpg";
import event3 from "@/assets/event3.jpg";
import education from "@/assets/education.jpg";
import skills from "@/assets/skills.jpg";
import heroBg from "@/assets/hero-bg.jpg";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const events = [
  {
    img: event1,
    title: "Education Scholarship Drive",
    date: "June 15, 2026",
    desc: "Our annual scholarship distribution event aims to recognize and support meritorious students from economically underprivileged backgrounds. This year's drive will distribute scholarships to 100+ students across Suryapet district, covering tuition fees, books, and digital learning tools.",
  },
  {
    img: event2,
    title: "Mega Health Camp",
    date: "August 10, 2026",
    desc: "A comprehensive free health camp featuring specialist doctors in cardiology, orthopedics, ophthalmology, and general medicine. Free diagnostic tests, medicine distribution, and health awareness sessions for over 500 rural residents.",
  },
  {
    img: event3,
    title: "Youth Skill Workshop",
    date: "September 5, 2026",
    desc: "A hands-on workshop designed to equip young people with essential digital skills, communication training, and career readiness. Industry experts will conduct sessions on resume building, interview preparation, and freelancing opportunities.",
  },
  {
    img: skills,
    title: "Women Empowerment Program",
    date: "November 12, 2026",
    desc: "A dedicated training program for women focusing on financial literacy, entrepreneurship basics, tailoring, and self-help group formation. This program aims to create 50 new women-led micro-enterprises in Munagala and surrounding villages.",
  },
  {
    img: education,
    title: "Community Food Distribution",
    date: "January 14, 2027",
    desc: "On the occasion of Sankranti, DilVasa Foundation will organize a large-scale food distribution drive providing nutritious meals and essential supplies to 1000+ families in underserved communities across Suryapet district.",
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
          <p className="text-lg text-primary-foreground/80">Upcoming initiatives and community programs</p>
        </motion.div>
      </section>

      {/* Events List */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid gap-8">
            {events.map((event, i) => (
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
                      <h3 className="text-2xl font-heading font-bold text-foreground mb-4">{event.title}</h3>
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
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;
