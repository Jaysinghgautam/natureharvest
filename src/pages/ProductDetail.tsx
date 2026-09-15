import { Link, useParams } from "react-router-dom";

import Breadcrumb from "../components/Breadcrub";
import Button from "../components/Button";
import ProductCard from "../components/ProductCard";

import { products, productVariants } from "../data/products";
import { useAppContext } from "../context/AppContext";

const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();
  const { selectedProductId } = useAppContext();

  const productId = id || selectedProductId;

  const product = products.find(
    (item) => String(item.id) === String(productId)
  );

  /* Product Not Found */
  if (!product) {
    return (
      <section className="flex min-h-[70vh] items-center justify-center px-5">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-[#075b5b] sm:text-4xl">
            Product Not Found
          </h1>

          <Link
            to="/products"
            className="
              mt-6
              inline-block
              font-bold
              text-[#f2a318]
              transition-colors
              duration-300
              hover:text-[#075b5b]
            "
          >
            ← Back To Products
          </Link>
        </div>
      </section>
    );
  }

  /* Products belonging to selected category */
  const categoryProducts = productVariants.filter(
    (item) =>
      String(item.categoryId) === String(product.id)
  );

  return (
    <>
      {/* Breadcrumb */}
      <Breadcrumb
        title={product.name}
        backgroundImage="/images/breadcrumb.jpg"
      />

      {/* Category Header */}
      <section className="px-5 py-12 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-5xl">
          <div
            className="
              grid
              gap-7
              md:grid-cols-2
              md:items-center
            "
          >
            {/* Heading */}
            <div>
              <span
                className="
                  inline-flex
                  rounded-tl-[20px]
                  rounded-br-[20px]
                  bg-[#fbe4b8]
                  px-5
                  py-2
                  text-xs
                  font-semibold
                  uppercase
                  tracking-wider
                  text-[#173f40]
                "
              >
                Products
              </span>

              <h1
                className="
                  mt-4
                  text-3xl
                  font-bold
                  leading-tight
                  text-[#075b5b]
                  sm:text-4xl
                "
              >
                {product.name}
              </h1>
            </div>

            {/* Description */}
            <p
              className="
                text-sm
                leading-7
                text-gray-600
              "
            >
              We offer a wide range of premium agricultural products,
              including various rice varieties, pulses, spices, millets,
              and more. Our products are sourced sustainably, ensuring
              the highest quality for our customers worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Category Products */}
      <section className="px-5 pb-14 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-5xl">
          {categoryProducts.length > 0 ? (
            <>
              {/* Product Grid */}
              <div
                className="
                  grid
                  grid-cols-1
                  gap-6
                  sm:grid-cols-2
                  lg:grid-cols-3
                "
              >
                {categoryProducts.map((item, index) => (
                  <ProductCard
                    key={item.id}
                    id={item.id}
                    number={String(index + 1).padStart(2, "0")}
                    name={item.name}
                    description={item.description}
                    image={item.image}
                    linkTo={`/products/${product.id}/${item.id}`}
                    position={
                      index % 2 === 0
                        ? "left"
                        : "right"
                    }
                  />
                ))}
              </div>
            </>
          ) : (
            /* No Products */
            <div
              className="
                rounded-xl
                border
                border-gray-200
                bg-white
                p-10
                text-center
                shadow-[0_4px_15px_rgba(0,0,0,0.03)]
              "
            >
              <p className="text-sm text-gray-500">
                No products available in this category.
              </p>
            </div>
          )}

          {/* Back Button */}
          <div className="mt-10 flex justify-center">
            <Button
              to="/products"
              className="
                min-h-[40px]
                min-w-[165px]
                px-6
                py-2
                text-xs
              "
            >
              ← Back To Product Page
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetails;
 