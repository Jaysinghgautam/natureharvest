 import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useAppContext } from "../context/AppContext";

type ProductCardProps = {
  id: string;
  number?: string;
  name: string;
  description: string;
  image: string;
  dark?: boolean;
  position?: "left" | "right";
  linkTo?: string;
};

const ProductCard = ({
  id,
  name,
  description,
  image,
  linkTo,
}: ProductCardProps) => {
  const { openProductDetail } = useAppContext();

  const productUrl = linkTo || `/products/${id}`;

  const handleClick = () => {
    if (!linkTo) {
      openProductDetail(id);
    }
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="
        group
        flex
        w-full
        max-w-[174px]
        flex-col
        overflow-hidden
        rounded-[10px]
        border
        border-[#f2a318]
        bg-white
        p-2.5
        shadow-[0_4px_12px_rgba(0,0,0,0.04)]
        transition-shadow
        duration-300
        hover:shadow-[0_8px_20px_rgba(0,0,0,0.1)]
      "
    >
      {/* Product Image */}
      <Link
        to={productUrl}
        onClick={handleClick}
        aria-label={`View ${name}`}
        className="
          relative
          block
          h-[115px]
          w-full
          overflow-hidden
          rounded-[3px]
        "
      >
        <img
          src={image}
          alt={name}
          loading="lazy"
          className="
            h-full
            w-full
            object-cover
            transition-transform
            duration-500
            group-hover:scale-105
          "
        />

        <div
          className="
            absolute
            inset-0
            bg-[#075b5b]/0
            transition-colors
            duration-300
            group-hover:bg-[#075b5b]/10
          "
        />
      </Link>

      {/* Product Content */}
      <div className="flex flex-1 flex-col px-1.5 pt-2 text-center">
        <Link to={productUrl} onClick={handleClick}>
          <h3
            className="
              text-[11px]
              font-bold
              leading-4
              text-[#075b5b]
              transition-colors
              duration-300
              group-hover:text-[#f2a318]
            "
          >
            {name}
          </h3>
        </Link>

        <p
          className="
            mt-2
            line-clamp-4
            min-h-[56px]
            text-[8.5px]
            leading-[1.55]
            text-gray-500
          "
        >
          {description}
        </p>

        {/* Know More */}
        <Link
          to={productUrl}
          onClick={handleClick}
          className="
            mx-auto
            mt-3
            inline-flex
            min-h-[27px]
            min-w-[80px]
            items-center
            justify-center
            rounded-tr-[25px]
            rounded-bl-[25px]
            bg-[#f2a318]
            px-4
            py-1.5
            text-[9px]
            font-bold
            text-black
            shadow-[0_3px_8px_rgba(242,163,24,0.2)]
            transition-all
            duration-300
            hover:-translate-y-0.5
            hover:bg-[#d98d0b]
            hover:shadow-[0_5px_12px_rgba(242,163,24,0.3)]
          "
        >
          Know More
        </Link>
      </div>
    </motion.article>
  );
};

export default ProductCard;