 
import { motion } from "framer-motion";
import Breadcrumb from "../components/Breadcrub";

// --- GALLERY IMAGES DATA ---
// Aap yahan apni actual images ke URLs daal sakte hain
const galleryImages = [
  { id: 1, src: "https://natureharvest.co.in/about-us/1.jpg", alt: "Nature Harvest Gallery 1" },
  { id: 2, src: "https://natureharvest.co.in/about-us/2.jpg", alt: "Nature Harvest Gallery 2" },
  { id: 3, src: "https://natureharvest.co.in/about-us/mission.jpg", alt: "Nature Harvest Gallery 3" },
  { id: 4, src: "https://natureharvest.co.in/about-us/commitment.jpg", alt: "Nature Harvest Gallery 4" },
  { id: 5, src: "https://natureharvest.co.in/about-us/identity.jpg", alt: "Nature Harvest Gallery 5" },
  { id: 6, src: "https://natureharvest.co.in/about-us/whyus.png", alt: "Nature Harvest Gallery 6" },
  { id: 7, src: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&q=80", alt: "Nature Harvest Gallery 7" },
  { id: 8, src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80", alt: "Nature Harvest Gallery 8" },
  { id: 9, src: "https://natureharvest.co.in/about-us/director.jpg", alt: "Nature Harvest Gallery 9" },
];

// --- ANIMATION VARIANTS ---
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }, // Ek ke baad ek image aane ka animation
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const Gallery = () => {
  return (
    <div className="min-h-screen bg-white pb-16 lg:pb-24">
      {/* Breadcrumb Section */}
      <Breadcrumb
        title="Gallery"
        items={[
          { label: "Home", path: "/" },
          { label: "Gallery" },
        ]}
      />

      {/* Gallery Grid Section (No Text, Only Images) */}
      <section className="mx-auto w-full max-w-7xl px-4 pt-12 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:gap-8"
        >
          {galleryImages.map((image) => (
            <motion.div
              key={image.id}
              variants={itemVariants}
              // Reference image ke hisaab se border-radius design:
              className="group relative h-[250px] w-full overflow-hidden rounded-tl-[40px] rounded-tr-[40px] rounded-bl-[40px] rounded-br-none bg-gray-100 shadow-sm sm:h-[300px]"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              
              {/* Optional: Subtle overlay on hover */}
              <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/10" />
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
};

export default Gallery;