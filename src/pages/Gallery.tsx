//  import { motion, type Variants } from "framer-motion";

// import Breadcrumb from "../components/Breadcrub";

// // ================= GALLERY IMAGES =================

// const galleryImages = [
//   {
//     id: 1,
//     src: "/gallary/image1.jpg",
//     alt: "Nature Harvest Gallery 1",
//   },
//   {
//     id: 2,
//     src: "/gallary/image2.jpg",
//     alt: "Nature Harvest Gallery 2",
//   },
//   {
//     id: 3,
//     src: "/gallary/image3.jpg",
//     alt: "Nature Harvest Gallery 3",
//   },
//   {
//     id: 4,
//     src: "/gallary/image4.jpg",
//     alt: "Nature Harvest Gallery 4",
//   },
//   {
//     id: 5,
//     src: "/gallary/image5.jpg",
//     alt: "Nature Harvest Gallery 5",
//   },
//   {
//     id: 6,
//     src: "/gallary/image6.jpg",
//     alt: "Nature Harvest Gallery 6",
//   },
//   {
//     id: 7,
//     src: "/gallary/image7.jpg",
//     alt: "Nature Harvest Gallery 7",
//   },
//   {
//     id: 8,
//     src: "/gallary/image8.jpg",
//     alt: "Nature Harvest Gallery 8",
//   },
//   {
//     id: 9,
//     src: "/gallary/image9.jpg",
//     alt: "Nature Harvest Gallery 9",
//   },{
//     id: 10,
//     src: "/gallary/image10.jpg",
//     alt: "Nature Harvest Gallery 10",
//   },
//   {
//     id: 11,
//     src: "/gallary/image11.jpg",
//     alt: "Nature Harvest Gallery 11",
//   },
// ];

// // ================= ANIMATION =================

// const containerVariants: Variants = {
//   hidden: {
//     opacity: 0,
//   },

//   show: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.15,
//     },
//   },
// };

// const itemVariants: Variants = {
//   hidden: {
//     opacity: 0,
//     y: 30,
//   },

//   show: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.5,
//     },
//   },
// };

// // ================= GALLERY =================

// const Gallery = () => {
//   return (
//     <div className="min-h-screen bg-white pb-16 lg:pb-24">

//       {/* ================= BREADCRUMB ================= */}

//       <Breadcrumb
//         title="Gallery"
//         backgroundImage="/images/breadcrumb.jpg"
//       />

//       {/* ================= GALLERY GRID ================= */}

//       <section className="mx-auto w-full max-w-7xl px-4 pt-12 sm:px-6 lg:px-8 lg:pt-16">

//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="show"
//           viewport={{
//             once: true,
//             margin: "-50px",
//           }}
//           className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:gap-8"
//         >
//           {galleryImages.map((image) => (
//             <motion.div
//               key={image.id}
//               variants={itemVariants}
//               className="
//                 group
//                 relative
//                 h-[250px]
//                 w-full
//                 overflow-hidden
//                 rounded-tl-none
//                 rounded-tr-[50px]
//                 rounded-bl-[50px]
//                 rounded-br-none
//                 bg-gray-100
//                 shadow-sm
//                 transition-all
//                 duration-500
//                 hover:-translate-y-1
//                 hover:shadow-xl
//                 sm:h-[300px]
//               "
//             >
//               <img
//                 src={image.src}
//                 alt={image.alt}
//                 loading="lazy"
//                 className="
//                   h-full
//                   w-full
//                   object-cover
//                   transition-transform
//                   duration-700
//                   group-hover:scale-110
//                 "
//               />

//               {/* Hover Overlay */}

//               <div
//                 className="
//                   absolute
//                   inset-0
//                   bg-black/0
//                   transition-all
//                   duration-500
//                   group-hover:bg-black/10
//                 "
//               />
//             </motion.div>
//           ))}
//         </motion.div>

//       </section>
//     </div>
//   );
// };

// export default Gallery;








import { useEffect, useState } from "react";
import { motion, type Variants } from "framer-motion";
import axios from "axios";

import Breadcrumb from "../components/Breadcrub";

// ================= API =================

const SERVER_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

interface GalleryImage {
  _id?: string;
  id?: string;
  name?: string;
  url?: string;
  [key: string]: any; // backend ke alag field names ke liye
}

const FALLBACK_IMG =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300"><rect width="100%" height="100%" fill="#e5e7eb"/><text x="50%" y="50%" fill="#9ca3af" font-family="sans-serif" font-size="18" text-anchor="middle" dominant-baseline="middle">Image not found</text></svg>`
  );

// Backend chahe jis naam se image bheje, sahi src bana do
const getImageSrc = (img: GalleryImage): string => {
  let raw: any =
    img.url || img.imageUrl || img.image_url || img.secure_url ||
    img.image1 || img.image || img.path || img.src || "";

  if (Array.isArray(raw)) raw = raw[0];
  if (raw && typeof raw === "object") raw = raw.url || raw.secure_url || raw.path || "";
  raw = String(raw || "").trim();
  if (!raw) return "";

  if (/^(https?:)?\/\//i.test(raw) || /^(data|blob):/i.test(raw)) return raw;

  return `${SERVER_URL}/${raw.replace(/\\/g, "/").replace(/^\.?\/+/, "")}`;
};

// ================= ANIMATION =================

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const cardShape =
  "rounded-tl-none rounded-tr-[50px] rounded-bl-[50px] rounded-br-none";

// ================= GALLERY =================

const Gallery = () => {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    let cancelled = false;

    axios
      .get(`${SERVER_URL}/api/gallery/listimage`)
      .then(({ data }) => {
        if (cancelled) return;
        setImages(data.images || data.data || data.list || []);
      })
      .catch((err) => {
        console.error("Gallery load error:", err.response?.data || err.message);
        if (!cancelled) setError(true);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className="min-h-screen bg-white pb-16 lg:pb-24">
      <Breadcrumb title="Gallery" backgroundImage="/images/breadcrumb.jpg" />

      <section className="mx-auto w-full max-w-7xl px-4 pt-12 sm:px-6 lg:px-8 lg:pt-16">
        {loading ? (
          // Loading skeleton
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:gap-8">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className={`h-[250px] w-full animate-pulse bg-gray-200 sm:h-[300px] ${cardShape}`}
              />
            ))}
          </div>
        ) : error ? (
          <p className="py-16 text-center text-gray-500">
            Gallery load nahi ho payi. Kripya thodi der baad try karein.
          </p>
        ) : images.length === 0 ? (
          <p className="py-16 text-center text-gray-500">
            Abhi koi image available nahi hai.
          </p>
        ) : (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:gap-8"
          >
            {images.map((img, index) => (
              <motion.div
                key={img._id || img.id || index}
                variants={itemVariants}
                className={`group relative h-[250px] w-full overflow-hidden bg-gray-100 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl sm:h-[300px] ${cardShape}`}
              >
                <img
                  src={getImageSrc(img) || FALLBACK_IMG}
                  alt={img.name || `Nature Harvest Gallery ${index + 1}`}
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.onerror = null; // infinite loop se bachne ke liye
                    e.currentTarget.src = FALLBACK_IMG;
                  }}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/0 transition-all duration-500 group-hover:bg-black/10" />
              </motion.div>
            ))}
          </motion.div>
        )}
      </section>
    </div>
  );
};

export default Gallery;

