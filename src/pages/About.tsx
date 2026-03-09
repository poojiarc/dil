import { Eye, Target, User, CheckCircle, Award, Users, Heart, Briefcase } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import Counter from "@/components/Counter";
import aboutHero from "@/assets/about-hero.jpg";
import clothesDistribution from "@/assets/clothes-distribution.jpg";
import templeInitiative from "@/assets/temple-initiative.jpg";
import community from "@/assets/community.jpg";
import { motion } from "framer-motion";

const achievements = [
  {
    icon: Briefcase,
    title: "Professional Achievements",
    items: [
      "Founder & CEO of CUBEXIT Inc., a US-based IT staffing and consulting company",
      "Built a growing network connecting technology professionals with global opportunities",
      "Entrepreneur and investor with interests in real estate and community development",
    ],
  },
  {
    icon: Users,
    title: "Community Leadership",
    items: [
      "Board Director – Telangana American Telugu Association (TTA)",
      "Organizer of Bathukamma, Bonalu, Holi, and Ganesh Chaturthi celebrations in the United States",
      "Active supporter of food drives, blood donation camps, and charity initiatives",
    ],
  },
  {
    icon: Heart,
    title: "Philanthropy",
    items: [
      "Founder of DilVasa Foundation",
      "Supporting youth empowerment, education, sports, and village development",
      "Promoting social service and community welfare initiatives",
    ],
  },
];

const About = () => {
  return (
    <div>
      {/* Hero Banner */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${aboutHero})` }} />
        <div className="absolute inset-0 gradient-blue-overlay" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center text-primary-foreground"
        >
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-4">About Us</h1>
          <p className="text-lg text-primary-foreground/80">Empowering the Needy. Transforming Lives.</p>
        </motion.div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-10">
            <ScrollReveal>
              <div className="card-premium p-8 h-full">
                <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center mb-5">
                  <Eye size={28} className="text-primary" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-foreground mb-4">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To build a compassionate and empowered society where education, opportunity, and community support help individuals achieve their full potential.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="card-premium p-8 h-full">
                <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center mb-5">
                  <Target size={28} className="text-primary" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-foreground mb-4">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  The mission of the DilVasa Foundation is to support meaningful initiatives that strengthen communities and empower individuals through:
                </p>
                <ul className="space-y-2">
                  {[
                    "Education support and student development",
                    "Youth empowerment and leadership programs",
                    "Promotion of sports and cultural activities",
                    "Community welfare and social service initiatives",
                    "Rural and village development programs",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-muted-foreground text-sm">
                      <CheckCircle size={14} className="text-primary mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4 text-sm">
                  Through collaboration, compassion, and service, the foundation strives to create lasting positive impact in society.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="text-sm font-semibold text-accent uppercase tracking-widest">Leadership</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-2">Founder – Dileep Vasa</h2>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <ScrollReveal>
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img src={clothesDistribution} alt="Dileep Vasa - DVF Founder" className="w-full h-auto object-cover" loading="lazy" />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Dileep Vasa is an entrepreneur, real estate investor, and community leader dedicated to empowering communities through service and leadership.
                </p>
                <p>
                  Originally from Munagala village in Suryapet district, Telangana, Dileep pursued his professional journey in the United States while staying deeply connected to his roots and community values.
                </p>
                <p>
                  He is the Founder and CEO of <strong className="text-foreground">CUBEXIT Inc.</strong>, an IT staffing and consulting company based in the United States. Through his entrepreneurial vision and commitment to excellence, he has built a successful organization that creates career opportunities for technology professionals and supports businesses with innovative talent solutions.
                </p>
                <p>
                  Beyond business, Dileep is widely recognized for his commitment to community service. He currently serves as a <strong className="text-foreground">Board Director of Telangana American Telugu Association (TTA)</strong>, one of the leading Telugu organizations in the United States that promotes Telangana culture, community unity, and charitable activities.
                </p>
                <p>
                  In the state of Florida, he has actively organized and supported several large cultural and community programs including Bathukamma celebrations, Bonalu festivals, Holi events, and Ganesh Chaturthi, bringing together hundreds of families from the Telugu diaspora.
                </p>
                <p>
                  He has also participated in various social initiatives such as food drives, blood donation camps, and community support programs.
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Foundation Focus */}
          <ScrollReveal>
            <div className="mt-12 card-premium p-8">
              <h3 className="text-xl font-heading font-bold text-foreground mb-4">
                Driven by a passion for giving back to society, Dileep founded the DilVasa Foundation focusing on:
              </h3>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {["Youth Empowerment", "Education Support", "Sports Development", "Community Welfare", "Rural & Village Development"].map((focus) => (
                  <div key={focus} className="flex items-center gap-2 text-foreground bg-secondary/50 px-4 py-3 rounded-xl">
                    <CheckCircle size={16} className="text-primary shrink-0" />
                    <span className="text-sm font-medium">{focus}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Achievements & Milestones */}
      <section className="section-padding">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="text-sm font-semibold text-accent uppercase tracking-widest">Recognition</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-2">Achievements & Milestones</h2>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((ach, i) => {
              const Icon = ach.icon;
              return (
                <ScrollReveal key={ach.title} delay={i * 150}>
                  <div className="card-premium p-8 h-full">
                    <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center mb-5">
                      <Icon size={28} className="text-primary" />
                    </div>
                    <h3 className="text-xl font-heading font-bold text-foreground mb-4">{ach.title}</h3>
                    <ul className="space-y-3">
                      {ach.items.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-muted-foreground text-sm">
                          <CheckCircle size={14} className="text-primary mt-0.5 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="py-16 bg-primary">
        <div className="container-custom">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-heading font-bold text-primary-foreground">Our Impact</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground">5000+</div>
              <p className="mt-2 text-primary-foreground/70">Lives Impacted</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground">120+</div>
              <p className="mt-2 text-primary-foreground/70">Volunteers</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground">50+</div>
              <p className="mt-2 text-primary-foreground/70">Events</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground">15+</div>
              <p className="mt-2 text-primary-foreground/70">Villages</p>
            </div>
          </div>
        </div>
      </section>

      {/* Community Image */}
      <section className="section-padding">
        <div className="container-custom">
          <ScrollReveal>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img src={templeInitiative} alt="Community welfare activities" className="w-full h-80 object-cover" loading="lazy" />
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default About;
