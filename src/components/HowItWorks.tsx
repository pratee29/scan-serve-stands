import { motion } from "framer-motion";
import { Package, Palette, Truck } from "lucide-react";

const steps = [
  {
    icon: Palette,
    title: "Choose Your Design",
    description: "Pick from our premium templates or create a custom design with your branding.",
  },
  {
    icon: Package,
    title: "Add Your Links",
    description: "Add Google Review, Instagram, WhatsApp, website and all social links.",
  },
  {
    icon: Truck,
    title: "Get It Delivered",
    description: "We craft your standee and deliver it across Gujarat within days.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-24 relative sparkle-bg">
      <div className="absolute inset-0 bg-background/95" />
      <div className="container mx-auto px-6 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-display font-bold text-center mb-16"
        >
          How It <span className="text-gradient-gold">Works</span>
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="text-center"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-gold flex items-center justify-center"
              >
                <step.icon className="w-10 h-10 text-primary-foreground" />
              </motion.div>
              <div className="text-sm font-body font-semibold text-primary mb-2">Step {i + 1}</div>
              <h3 className="text-xl font-display font-bold mb-3">{step.title}</h3>
              <p className="text-muted-foreground font-body text-sm">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
