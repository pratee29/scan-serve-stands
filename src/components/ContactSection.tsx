import { motion } from "framer-motion";
import { MapPin, Phone, MessageCircle, Instagram } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 relative sparkle-bg">
      <div className="absolute inset-0 bg-background/95" />
      <div className="container mx-auto px-6 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-display font-bold text-center mb-4"
        >
          Get Your <span className="text-gradient-gold">Standee</span>
        </motion.h2>
        <p className="text-center text-muted-foreground font-body mb-16 max-w-md mx-auto">
          DM us or call to place your order. Delivery across Gujarat!
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {[
            { icon: Phone, label: "Call Us", value: "DM for Number", href: "#" },
            { icon: MessageCircle, label: "WhatsApp", value: "Message Us", href: "#" },
            { icon: Instagram, label: "Instagram", value: "@scanera", href: "#" },
            { icon: MapPin, label: "Location", value: "Himatnagar, Gujarat", href: "#" },
          ].map((item, i) => (
            <motion.a
              key={item.label}
              href={item.href}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-card border border-border rounded-xl p-6 text-center hover:border-primary/40 transition-colors block"
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-gold flex items-center justify-center">
                <item.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-display font-bold mb-1">{item.label}</h3>
              <p className="text-sm text-muted-foreground font-body">{item.value}</p>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-muted-foreground font-body text-sm mb-2">Available for</p>
          <p className="font-display font-bold text-lg">
            Businesses • Cafes • Hotels • Hospitals
          </p>
          <p className="text-primary font-body font-semibold mt-1">
            Himatnagar | Ahmedabad | Delivery Across Gujarat
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
