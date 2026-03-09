import { Heart, Landmark, Users, CheckCircle, Shirt, BookOpen } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import clothesDistribution from "@/assets/clothes-distribution.jpg";
import clothesDistribution2 from "@/assets/clothes-distribution-2.jpg";
import templeInitiative from "@/assets/temple-initiative.jpg";
import templeInitiative2 from "@/assets/temple-initiative-2.jpg";
import youthTshirts from "@/assets/youth-tshirts.jpg";
import kabaddiTournament from "@/assets/kabaddi-tournament.jpg";
import heroBg from "@/assets/hero-bg.jpg";
import { motion } from "framer-motion";

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
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-4">Community Activities</h1>
          <p className="text-lg text-primary-foreground/80">Giving Back to the Community. Creating Meaningful Impact.</p>
        </motion.div>
      </section>

      {/* Clothes & Fruits Distribution */}
      <section className="section-padding">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="text-sm font-semibold text-accent uppercase tracking-widest">Community Service</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-2">Clothes & Fruits Distribution</h2>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <img src={clothesDistribution} alt="Clothes distribution to Gram Panchayat staff" className="w-full h-72 object-cover" loading="lazy" />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <img src={clothesDistribution2} alt="Clothes and fruits distribution" className="w-full h-72 object-cover" loading="lazy" />
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-secondary flex items-center justify-center">
                  <Shirt size={24} className="text-primary" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-foreground">Giving Back to the Community</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                On behalf of Dil Vasa Foundation, Mr. Vasa Dileep distributed clothes and fruits to the Gram Panchayat staff.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                This initiative was organized to honor the hardworking Panchayat staff who continuously contribute to village development. The program brought happiness and appreciation to everyone involved.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Dil Vasa Foundation continues to move forward on the path of service with many more community welfare initiatives ahead.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Temple Spiritual Initiative */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="text-sm font-semibold text-accent uppercase tracking-widest">Spiritual Initiative</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-2">Temple Community Service</h2>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollReveal delay={200}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-secondary flex items-center justify-center">
                  <Landmark size={24} className="text-primary" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-foreground">Sacred Photo Cards & Devotional Booklets</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                With the divine blessings of Sri Sri Sri Parvati Gangadhara Swamy, the foundation printed and distributed 1,000 sacred photo cards of the Moola Virat deity.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Devotional booklets including Lingashtakam and Hanuman Chalisa were also distributed to devotees as part of this spiritual initiative.
              </p>
              <div className="card-premium p-6 mt-6">
                <h4 className="font-heading font-bold text-foreground mb-2">Temple Location</h4>
                <ul className="space-y-1 text-muted-foreground text-sm">
                  <li>Sri Sri Sri Parvati Gangadhara Swamy Temple</li>
                  <li>Cherugattu Shiva Temple</li>
                  <li>Munagala Village, Suryapet District, Telangana</li>
                </ul>
              </div>
            </ScrollReveal>
            <ScrollReveal>
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <img src={templeInitiative} alt="Temple devotional booklet distribution" className="w-full h-72 object-cover" loading="lazy" />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <img src={templeInitiative2} alt="Sacred photo card distribution" className="w-full h-72 object-cover" loading="lazy" />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Youth & Sports Support */}
      <section className="section-padding">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="text-sm font-semibold text-accent uppercase tracking-widest">Youth Empowerment</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-2">Youth & Sports Support</h2>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <ScrollReveal>
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img src={youthTshirts} alt="T-Shirt Distribution to Rudra Youth" className="w-full h-80 object-cover" loading="lazy" />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-secondary flex items-center justify-center">
                  <Users size={24} className="text-primary" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-foreground">T-Shirt Distribution to Rudra Youth</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                DilVasa Foundation proudly supported inspiring youth initiatives that reflect dedication, discipline, and community spirit. T-shirts were distributed to Rudra Youth, encouraging unity, leadership, and team spirit among young changemakers.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Rudra Youth has been a strong and devoted supporter of Sri Parvathi Sametha Gangadhara Swamy Devalayam – Cheruvugattu Shivalayam for the past 14 years.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollReveal delay={200} className="md:order-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-secondary flex items-center justify-center">
                  <Heart size={24} className="text-primary" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-foreground">State-Level Kabaddi Tournament</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                DilVasa Foundation supported the State-Level Kabaddi Tournament organized by Ganee Youth, promoting traditional sports, physical fitness, and rural talent at the grassroots level while inspiring healthy competition and teamwork.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The foundation firmly believes that youth are the backbone of society. By supporting sports and community-driven initiatives, we are investing in confidence, character, and a stronger future.
              </p>
            </ScrollReveal>
            <ScrollReveal className="md:order-1">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img src={kabaddiTournament} alt="State-Level Kabaddi Tournament" className="w-full h-80 object-cover" loading="lazy" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Quote Banner */}
      <section className="py-16 bg-primary">
        <div className="container-custom text-center">
          <p className="text-primary-foreground text-xl md:text-2xl font-heading italic max-w-3xl mx-auto">
            "Together we grow. Together we lead."
          </p>
          <p className="text-primary-foreground/70 mt-4 text-sm">#DilVasaFoundation #YouthEmpowerment #teamdilvasa</p>
        </div>
      </section>
    </div>
  );
};

export default Services;
