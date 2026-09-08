import { motion } from "framer-motion";

import SectionTitle from "../SectionTitle";
import Button from "../Button";

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
  const isDark = product.dark;
  const isLeft = product.position === "left";

  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className={`
        group relative flex
        h-[185px]
        w-full
        overflow-hidden
        ${
          isDark
            ? "bg-[#075b5b] text-white"
            : "bg-[#f6ad00] text-black"
        }
        ${
          isLeft
            ? "rounded-bl-[75px] rounded-tr-[75px]"
            : "rounded-br-[75px] rounded-tl-[75px]"
        }
      `}
    >
      {/* Text */}
      <div
        className={`
          relative z-10
          flex h-full flex-col justify-center
          ${
            isLeft
              ? "w-[57%] pl-7 pr-3 sm:pl-8"
              : "ml-auto w-[57%] pl-3 pr-7 sm:pr-8"
          }
        `}
      >
        <span className="text-base font-bold leading-none">
          {product.number}
        </span>

        <h3 className="mt-2 text-2xl font-semibold leading-none sm:text-[25px]">
          {product.name}
        </h3>

        <p
          className={`
            mt-3
            max-w-[205px]
            text-[10px]
            leading-[1.45]
            sm:text-[11px]
            ${
              isDark
                ? "text-white/90"
                : "text-black/80"
            }
          `}
        >
          {product.description}
        </p>
      </div>

      {/* Product Image */}
      <div
        className={`
          absolute top-1/2
          h-[145px] w-[145px]
          -translate-y-1/2
          overflow-hidden
          ${
            isLeft
              ? "right-6 rounded-tr-[60px] rounded-bl-[60px]"
              : "left-6 rounded-tl-[60px] rounded-br-[60px]"
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
      className="overflow-hidden bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24"
    >
      <div className="mx-auto max-w-[1300px]">

        {/* Heading */}
        <SectionTitle
          label="Products"
          title="Our Products"
          align="left"
        />

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-7 max-w-[1100px] space-y-4"
        >
          <p className="flex gap-3 text-[13px] leading-7 text-[#075657] sm:text-[14px]">
            <span className="mt-1 shrink-0 text-lg text-[#f2a318]">
              ❯
            </span>

            <span>
              At Nature Harvest, we deliver premium agricultural
              products—including rice, spices, pulses, millets, oil seeds,
              and other agro products—sustainably sourced and rigorously
              tested to meet global quality standards.
            </span>
          </p>

          <p className="flex gap-3 text-[13px] leading-7 text-[#075657] sm:text-[14px]">
            <span className="mt-1 shrink-0 text-lg text-[#f2a318]">
              ❯
            </span>

            <span>
              With a focus on transparency, ethical sourcing, and
              customer-first solutions, we ensure seamless processes,
              tailored offerings, and unmatched reliability. Choose Nature
              Harvest for products that embody purity, consistency, and a
              steadfast commitment to excellence.
            </span>
          </p>
        </motion.div>

        {/* Products */}
        <div
          className="
            relative mt-12
            grid items-center
            gap-6
            lg:grid-cols-[1fr_210px_1fr]
            lg:gap-7
          "
        >
          {/* Left Cards */}
          <div className="flex flex-col gap-6">
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

          {/* Center Farmer */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.85,
              y: 35,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="
              relative z-10
              hidden
              h-[400px]
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

          {/* Right Cards */}
          <div className="flex flex-col gap-6">
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

        {/* Mobile Farmer */}
        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="my-10 flex justify-center lg:hidden"
        >
          <img
            src="https://res.cloudinary.com/drc0gwhz9/image/upload/v1788773396/Screenshot_2026-09-07_143517_qa4gq3.png"
            alt="Farmer"
            className="h-72 w-auto object-contain sm:h-80"
          />
        </motion.div>

        {/* Button */}
        <div className="mt-12 flex justify-center">
          <Button
            to="/products"
            className="
              min-w-[190px]
              border
              border-[#f2a318]
              bg-white
              !text-[#075657]
              shadow-none
              hover:!bg-[#f2a318]
              hover:!text-[#075657]
            "
          >
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;