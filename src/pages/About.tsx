import { Eye, Target, User, CheckCircle } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import Counter from "@/components/Counter";
import aboutHero from "@/assets/about-hero.jpg";
import aboutPreview from "@/assets/about-preview.jpg";
import community from "@/assets/community.jpg";
import { motion } from "framer-motion";

const timeline = [
  { year: "2023", title: "Foundation Established", desc: "DilVasa Foundation was officially registered with a mission to serve rural communities." },
  { year: "2024", title: "First Health Camp", desc: "Organized the first mega health camp in Munagala, serving over 500 individuals." },
  { year: "2025", title: "Education Initiative Launch", desc: "Launched the scholarship program supporting 200+ students across Telangana." },
  { year: "2026", title: "Expanding Horizons", desc: "Scaling operations to 15+ villages with focus on skill development and women empowerment." },
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
                  To build a compassionate and self-reliant society by ensuring access to quality education, healthcare, and opportunities for sustainable development. We envision a world where every individual, regardless of their background, has the opportunity to thrive and contribute meaningfully to society.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="card-premium p-8 h-full">
                <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center mb-5">
                  <Target size={28} className="text-primary" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-foreground mb-4">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To implement transparent, scalable, and impactful welfare initiatives that empower individuals and uplift communities. Through structured programs in education, healthcare, skill development, and community welfare, we aim to create lasting positive change at the grassroots level.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img src={aboutPreview} alt="Foundation community work" className="w-full h-auto object-cover" loading="lazy" />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="flex items-center gap-3 mb-4">
                <User size={24} className="text-primary" />
                <span className="text-sm font-semibold text-accent uppercase tracking-widest">Founder</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">Dileep Vasa</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Dileep Vasa, drawing from over a decade in IT leadership and non-profit engagement including TTA (USA), established DVF to bring structured and organized welfare systems to rural communities. His experience spans across technology management, community building, and social impact initiatives.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                With a deep understanding of both the challenges faced by underserved communities and the power of organized philanthropy, Dileep founded DilVasa Foundation to bridge the gap between opportunity and access, starting from his hometown of Munagala.
              </p>
              <div className="flex flex-col gap-3">
                {["10+ years IT & Non-Profit experience", "TTA (USA) active contributor", "Structured welfare management approach"].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-foreground">
                    <CheckCircle size={16} className="text-primary shrink-0" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="text-sm font-semibold text-accent uppercase tracking-widest">Our Journey</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-2">Milestones</h2>
            </div>
          </ScrollReveal>
          <div className="max-w-3xl mx-auto">
            {timeline.map((item, i) => (
              <ScrollReveal key={item.year} delay={i * 150}>
                <div className="flex gap-6 mb-10 last:mb-0">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold shrink-0">
                      {item.year}
                    </div>
                    {i < timeline.length - 1 && <div className="w-0.5 flex-1 bg-border mt-2" />}
                  </div>
                  <div className="pb-2">
                    <h4 className="text-lg font-heading font-bold text-foreground mb-1">{item.title}</h4>
                    <p className="text-muted-foreground text-sm">{item.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
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

      {/* Image Section */}
      <section className="section-padding">
        <div className="container-custom">
          <ScrollReveal>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img src={community} alt="Community welfare activities" className="w-full h-80 object-cover" loading="lazy" />
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default About;
