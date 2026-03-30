import { motion } from "framer-motion";
import galleryReal from "@/assets/gallery-real.png";
import productsShowcase from "@/assets/products-showcase.png";
import standeeDetail from "@/assets/standee-detail.png";
import testimonial from "@/assets/testimonial.png";
import galleryStandees from "@/assets/gallery-standees.jpg";

const images = [
  { src: galleryReal, alt: "SCANERA standees in various business settings" },
  { src: productsShowcase, alt: "SCANERA product designs showcase" },
  { src: standeeDetail, alt: "SCANERA standee detail with social links" },
  { src: testimonial, alt: "Happy customer with SCANERA standee" },
  { src: galleryStandees, alt: "Multiple SCANERA standee collection" },
];

const GallerySection = () => {
  return (
    <section id="gallery" className="py-24">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-display font-bold text-center mb-16"
        >
          Our <span className="text-gradient-gold">Gallery</span>
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className={`overflow-hidden rounded-xl border border-border ${
                i === 0 ? "col-span-2 row-span-2" : ""
              }`}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
