 import { motion } from "framer-motion";
import { Link } from "react-router-dom";

type Product = {
  id: string;
  number: string;
  name: string;
  description: string;
  image: string;
  dark?: boolean;
  position: "left" | "right";
};

const products: Product[] = [
  {
    id: "rice",
    number: "01.",
    name: "Rice",
    description:
      "Premium basmati rice with long grains, rich aroma, and perfect fluffiness. Ideal for luxurious dishes.",
    image: "https://natureharvest.co.in/home/rice.png",
    dark: true,
    position: "left",
  },
  {
    id: "pulses-lentils",
    number: "02.",
    name: "Pulses",
    description:
      "High-quality pulses and lentils, including lentils, chickpeas, beans, and more for nutritious meals.",
    image: "https://natureharvest.co.in/home/moong-dal.png",
    position: "right",
  },
  {
    id: "spices",
    number: "03.",
    name: "Spices",
    description:
      "A wide range of aromatic spices, including cumin, turmeric, and cardamom, providing authentic flavor.",
    image: "https://natureharvest.co.in/home/cardamom-green.png",
    position: "left",
  },
  {
    id: "millets",
    number: "04.",
    name: "Millets",
    description:
      "Healthy and nutritious millets and coarse grains, perfect for weight management and wholesome meals.",
    image: "https://natureharvest.co.in/home/millets.png",
    dark: true,
    position: "right",
  },
];

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 35,
  },

  show: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: index * 0.1,
    },
  }),
};

type ProductCardProps = {
  product: Product;
  index: number;
};

const ProductCard = ({ product, index }: ProductCardProps) => {
  const dark = product.dark;

  const isLeft = product.position === "left";

  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className={`
        group relative flex h-[165px] w-full overflow-hidden
        ${
          dark
            ? "bg-[#075b5b] text-white"
            : "bg-[#f6ad00] text-black"
        }
        ${
          isLeft
            ? "rounded-bl-[65px] rounded-tr-[65px]"
            : "rounded-br-[65px] rounded-tl-[65px]"
        }
      `}
    >
      {/* ================= TEXT ================= */}
      <div
        className={`
          relative z-10 flex h-full flex-col justify-center
          ${
            isLeft
              ? "w-[58%] pl-7 pr-2"
              : "ml-auto w-[58%] pl-2 pr-7"
          }
        `}
      >
        <span className="text-sm font-bold leading-none">
          {product.number}
        </span>

        <h3 className="mt-2 text-xl font-semibold leading-none">
          {product.name}
        </h3>

        <p
          className={`
            mt-2 max-w-[190px] text-[9px] leading-[1.4]
            ${
              dark
                ? "text-white/90"
                : "text-black/80"
            }
          `}
        >
          {product.description}
        </p>
      </div>

      {/* ================= IMAGE ================= */}
      <div
        className={`
          absolute top-1/2 h-[125px] w-[125px]
          -translate-y-1/2 overflow-hidden
          ${
            isLeft
              ? "right-6 rounded-tr-[55px] rounded-bl-[55px]"
              : "left-6 rounded-tl-[55px] rounded-br-[55px]"
          }
        `}
      >
        <img
          src={product.image}
          alt={product.name}
          className="
            h-full
            w-full
            object-cover
            transition-transform
            duration-500
            group-hover:scale-110
          "
        />
      </div>
    </motion.div>
  );
};

const ProductsSection = () => {
  return (
    <section
      id="products"
      className="bg-white px-5 py-16 sm:px-8 lg:px-10 lg:py-24"
    >
      <div className="mx-auto max-w-[1200px]">

        {/* ================= HEADING ================= */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span
            className="
              inline-flex
              rounded-tl-[5px]
              rounded-tr-[18px]
              rounded-br-[5px]
              rounded-bl-[18px]
              bg-[#f7e8cc]
              px-5
              py-2
              text-[10px]
              font-semibold
              tracking-wider
              text-[#075657]
            "
          >
            PRODUCTS
          </span>

          <h2
            className="
              mt-3
              text-4xl
              font-semibold
              tracking-tight
              text-[#075657]
              sm:text-5xl
            "
          >
            Our Products
          </h2>
        </motion.div>

        {/* ================= DESCRIPTION ================= */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: 0.2,
          }}
          className="
            mt-7
            max-w-[1050px]
            space-y-4
            text-[11px]
            leading-6
            text-[#075657]
            sm:text-[13px]
          "
        >
          <p className="flex gap-2">
            <span className="shrink-0 text-lg text-[#f2a318]">
              ❯
            </span>

            <span>
              At Nature Harvest, we deliver premium agricultural
              products—including rice, spices, pulses, millets,
              oil seeds, and other agro products—sustainably sourced
              and rigorously tested to meet global quality standards.
            </span>
          </p>

          <p className="flex gap-2">
            <span className="shrink-0 text-lg text-[#f2a318]">
              ❯
            </span>

            <span>
              With a focus on transparency, ethical sourcing, and
              customer-first solutions, we ensure seamless processes,
              tailored offerings, and unmatched reliability.
            </span>
          </p>
        </motion.div>

        {/* ================= PRODUCTS GRID ================= */}
        <div
          className="
            relative
            mt-10
            grid
            items-center
            gap-5
            lg:grid-cols-[1fr_180px_1fr]
          "
        >

          {/* ================= LEFT COLUMN ================= */}
          <div className="flex flex-col gap-5">
            {products
              .filter((product) => product.position === "left")
              .map((product, index) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  index={index}
                />
              ))}
          </div>

          {/* ================= CENTER FARMER ================= */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.85,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="
              relative
              z-10
              hidden
              h-[360px]
              items-end
              justify-center
              lg:flex
            "
          >
            <img
              src="https://res.cloudinary.com/drc0gwhz9/image/upload/v1788773396/Screenshot_2026-09-07_143517_qa4gq3.png"
              alt="Farmer"
              className="
                h-full
                w-full
                object-contain
                object-bottom
              "
            />
          </motion.div>

          {/* ================= RIGHT COLUMN ================= */}
          <div className="flex flex-col gap-5">
            {products
              .filter((product) => product.position === "right")
              .map((product, index) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  index={index + 2}
                />
              ))}
          </div>
        </div>

        {/* ================= MOBILE FARMER ================= */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="
            my-8
            flex
            justify-center
            lg:hidden
          "
        >
          <img
            src="https://res.cloudinary.com/drc0gwhz9/image/upload/v1788773396/Screenshot_2026-09-07_143517_qa4gq3.png"
            alt="Farmer"
            className="
              h-72
              w-auto
              object-contain
            "
          />
        </motion.div>

        {/* ================= BUTTON ================= */}
        <div className="mt-12 flex justify-center">
          <Link
            to="/products"
            className="
              rounded-tl-[5px]
              rounded-tr-[25px]
              rounded-br-[5px]
              rounded-bl-[25px]
              border
              border-[#f2a318]
              px-10
              py-3
              text-xs
              font-semibold
              text-[#075657]
              transition-all
              duration-300
              hover:bg-[#f2a318]
              hover:text-black
              hover:-translate-y-0.5
            "
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;