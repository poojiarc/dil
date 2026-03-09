import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import heroSlide1 from "@/assets/hero-slide1.jpg";
import heroSlide2 from "@/assets/hero-slide2.jpg";
import heroSlide3 from "@/assets/hero-slide3.jpg";

const slides = [
  {
    image: heroSlide1,
    title: "Small Acts Of Kindness\nCreate A Big Impact\nOn People's Lives",
    subtitle: "Empowering communities and changing lives through dedicated service and support. Join us in making a difference today.",
    cta: "Explore Our Cause",
    link: "/about",
  },
  {
    image: heroSlide2,
    title: "Healthcare For All\nBringing Hope To\nEvery Doorstep",
    subtitle: "Organizing health camps, medical awareness programs, and critical treatment assistance for underserved communities.",
    cta: "Our Services",
    link: "/services",
  },
  {
    image: heroSlide3,
    title: "Empowering Youth\nBuilding Skills\nTransforming Futures",
    subtitle: "Vocational training, career guidance, and entrepreneurship support programs creating lasting change.",
    cta: "Join As Volunteer",
    link: "/volunteer",
  },
];

const HeroCarousel = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const slide = slides[current];

  return (
    <section className="relative min-h-[85vh] md:min-h-screen bg-muted overflow-hidden">
      <div className="container-custom h-full relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center min-h-[85vh] md:min-h-screen py-28 md:py-32">
          {/* Text */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`text-${current}`}
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 40 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground leading-tight mb-6 whitespace-pre-line">
                {slide.title}
              </h1>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-6 max-w-lg">
                {slide.subtitle}
              </p>

              {/* Founder Quote */}
              <div className="mb-8 border-l-4 border-accent pl-4 py-2">
                <p className="text-foreground/80 italic text-sm md:text-base leading-relaxed font-body">
                  "True success is not measured by what we achieve for ourselves, but by how many lives we uplift along the way."
                </p>
                <p className="text-accent font-semibold text-sm mt-2">— Dileep Vasa</p>
              </div>

              <Link to={slide.link}>
                <Button variant="cta" size="lg" className="text-base px-8 py-6 rounded-full">
                  {slide.cta}
                </Button>
              </Link>
            </motion.div>
          </AnimatePresence>

          {/* Image */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`img-${current}`}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-primary/20">
                <img
                  src={slide.image}
                  alt={slide.title.split("\n")[0]}
                  className="w-full h-[350px] md:h-[450px] lg:h-[500px] object-cover"
                />
              </div>
              {/* Decorative blue bar */}
              <div className="absolute -right-4 top-8 bottom-8 w-4 bg-primary rounded-full hidden md:block" />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              i === current ? "bg-primary w-8" : "bg-primary/30"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;
