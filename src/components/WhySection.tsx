import { motion } from "framer-motion";
import featureReviews from "@/assets/feature-reviews.jpg";
import featureSocial from "@/assets/feature-social.jpg";
import featureWood from "@/assets/feature-wood.jpg";
import featureScan from "@/assets/feature-scan.jpg";

const features = [
  {
    title: "Increase Google Reviews",
    image: featureReviews,
  },
  {
    title: "All Social Links in One QR",
    image: featureSocial,
  },
  {
    title: "Premium Wooden Design",
    image: featureWood,
  },
  {
    title: "Easy Scan Experience",
    image: featureScan,
  },
];

const WhySection = () => {
  return (
    <section id="products" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-display font-bold text-center mb-16"
        >
          Why <span className="text-gradient-gold">SCANERA</span>?
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group bg-card rounded-xl overflow-hidden border border-border hover:border-primary/40 transition-colors"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={feature.image}
                  alt={feature.title}
                  loading="lazy"
                  width={600}
                  height={600}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="font-display font-bold text-foreground">{feature.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhySection;
