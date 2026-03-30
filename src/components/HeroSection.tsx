import { motion } from "framer-motion";
import heroStandee from "@/assets/hero-standee.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden sparkle-bg pt-20">
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-black leading-tight">
              Custom Wooden{" "}
              <span className="text-gradient-gold">QR Code</span>
              <br />
              Standees for Businesses
            </h1>
            <p className="mt-6 text-lg text-muted-foreground font-body max-w-md">
              Increase reviews, engagement and brand trust
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="inline-block bg-gradient-gold text-primary-foreground font-body font-semibold px-8 py-3 rounded-md hover:opacity-90 transition-opacity"
              >
                Order Now
              </a>
              <a
                href="#gallery"
                className="inline-block border border-foreground/30 text-foreground font-body font-semibold px-8 py-3 rounded-md hover:border-primary hover:text-primary transition-colors"
              >
                View Designs
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="flex justify-center"
          >
            <div className="relative">
              <motion.img
                src={heroStandee}
                alt="SCANERA Custom Wooden QR Code Standee"
                width={500}
                height={563}
                className="rounded-lg glow-gold"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/10 via-transparent to-primary/10 rounded-2xl -z-10 blur-xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
