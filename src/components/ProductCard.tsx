import { motion } from "framer-motion";
import { Link } from "react-router-dom";

type ProductCardProps = {
  id: string;
  number: string;
  name: string;
  description: string;
  image: string;
  dark?: boolean;
  position?: "left" | "right";
};

const ProductCard = ({
  id,
  number,
  name,
  description,
  image,
  dark = false,
  position = "left",
}: ProductCardProps) => {
  const isLeft = position === "left";

  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`group relative flex h-[165px] overflow-hidden ${
        dark ? "bg-[#075b5b] text-white" : "bg-[#f2a318] text-black"
      } ${
        isLeft
          ? "rounded-bl-[65px] rounded-tr-[65px]"
          : "rounded-br-[65px] rounded-tl-[65px]"
      }`}
    >
      {/* Content */}
      <div
        className={`relative z-10 flex w-[55%] flex-col justify-center px-6 sm:px-7 ${
          !isLeft ? "order-2 text-right" : ""
        }`}
      >
        <span className="text-sm font-bold">{number}</span>

        <h3 className="mt-1 text-xl font-bold">
          {name}
        </h3>

        <p
          className={`mt-1 text-[9px] leading-[1.5] ${
            dark ? "text-white/90" : "text-black/80"
          }`}
        >
          {description}
        </p>

        <Link
          to={`/products/${id}`}
          className={`mt-2 text-[11px] font-bold underline underline-offset-2 ${
            dark ? "text-[#f2a318]" : "text-[#075b5b]"
          }`}
        >
          View Product
        </Link>
      </div>

      {/* Product Image */}
      <div
        className={`absolute top-5 h-[125px] w-[125px] overflow-hidden ${
          isLeft
            ? "right-6 rounded-bl-[55px] rounded-tr-[55px]"
            : "left-6 rounded-br-[55px] rounded-tl-[55px]"
        }`}
      >
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
    </motion.div>
  );
};

export default ProductCard;