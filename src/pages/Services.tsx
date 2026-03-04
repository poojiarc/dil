import { BookOpen, HeartPulse, Wrench, Users, CheckCircle, TrendingUp, Heart, GraduationCap } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import Counter from "@/components/Counter";
import education from "@/assets/education.jpg";
import healthcare from "@/assets/healthcare.jpg";
import skills from "@/assets/skills.jpg";
import community from "@/assets/community.jpg";
import heroBg from "@/assets/hero-bg.jpg";
import { motion } from "framer-motion";

const servicesData = [
  {
    icon: BookOpen,
    title: "Education",
    img: education,
    desc: "Our education program is designed to bridge the gap between opportunity and access. We believe that every child deserves the chance to learn, grow, and realize their full potential regardless of their socio-economic background.",
    points: [
      "Scholarship programs for meritorious underprivileged students",
      "Digital literacy and computer education in rural schools",
      "Mentorship programs connecting students with professionals",
      "Supply of educational materials, books, and uniforms",
      "After-school tutoring and exam preparation support",
    ],
  },
  {
    icon: HeartPulse,
    title: "Healthcare",
    img: healthcare,
    desc: "Access to quality healthcare is a fundamental right. DilVasa Foundation organizes regular health camps and medical outreach programs to ensure that rural communities receive the medical attention they deserve.",
    points: [
      "Free mega health camps with specialist consultations",
      "Medical awareness and preventive healthcare workshops",
      "Financial assistance for critical surgeries and treatments",
      "Mental health awareness and counseling programs",
      "Distribution of medicines and medical supplies",
    ],
  },
  {
    icon: Wrench,
    title: "Skill Development",
    img: skills,
    desc: "Empowering individuals with practical skills is key to sustainable development. Our skill development initiatives focus on creating self-reliant individuals who can contribute to their community's economic growth.",
    points: [
      "Vocational training in IT, tailoring, and craftsmanship",
      "Career guidance and placement assistance for youth",
      "Entrepreneurship training and micro-business mentoring",
      "Women-centric livelihood programs",
      "Agricultural skill development for farming communities",
    ],
  },
  {
    icon: Users,
    title: "Community Welfare",
    img: community,
    desc: "Our community welfare activities address the immediate and essential needs of the most vulnerable sections of society. We believe in building a support system that uplifts everyone together.",
    points: [
      "Regular food distribution drives for underserved families",
      "Disaster relief and emergency response coordination",
      "Infrastructure support for schools and community centers",
      "Clean water and sanitation initiative support",
      "Cultural and social awareness community programs",
    ],
  },
];

const Services = () => {
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
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-4">Our Services</h1>
          <p className="text-lg text-primary-foreground/80">Making a difference through structured welfare programs</p>
        </motion.div>
      </section>

      {/* Services Detail */}
      {servicesData.map((service, i) => {
        const Icon = service.icon;
        const isReversed = i % 2 !== 0;
        return (
          <section key={service.title} className={`section-padding ${i % 2 !== 0 ? "bg-secondary/30" : ""}`}>
            <div className="container-custom">
              <div className={`grid md:grid-cols-2 gap-12 items-center ${isReversed ? "md:[&>*:first-child]:order-2" : ""}`}>
                <ScrollReveal>
                  <div className="rounded-2xl overflow-hidden shadow-lg">
                    <img src={service.img} alt={service.title} className="w-full h-80 object-cover" loading="lazy" />
                  </div>
                </ScrollReveal>
                <ScrollReveal delay={200}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-secondary flex items-center justify-center">
                      <Icon size={24} className="text-primary" />
                    </div>
                    <h2 className="text-3xl font-heading font-bold text-foreground">{service.title}</h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-6">{service.desc}</p>
                  <ul className="space-y-3">
                    {service.points.map((point) => (
                      <li key={point} className="flex items-start gap-2">
                        <CheckCircle size={16} className="text-primary mt-0.5 shrink-0" />
                        <span className="text-sm text-foreground">{point}</span>
                      </li>
                    ))}
                  </ul>
                </ScrollReveal>
              </div>
            </div>
          </section>
        );
      })}

      {/* Statistics */}
      <section className="py-16 bg-primary">
        <div className="container-custom">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-heading font-bold text-primary-foreground">Impact in Numbers</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: GraduationCap, count: "200+", label: "Students Supported" },
              { icon: HeartPulse, count: "500+", label: "Health Checkups" },
              { icon: TrendingUp, count: "100+", label: "Skills Trained" },
              { icon: Heart, count: "1000+", label: "Meals Distributed" },
            ].map((stat) => {
              const SIcon = stat.icon;
              return (
                <div key={stat.label} className="text-center">
                  <SIcon size={32} className="mx-auto text-primary-foreground/80 mb-2" />
                  <div className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground">{stat.count}</div>
                  <p className="mt-1 text-primary-foreground/70 text-sm">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
