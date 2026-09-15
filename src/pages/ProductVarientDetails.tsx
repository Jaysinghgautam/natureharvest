import { useState } from "react";
import { Link, useParams } from "react-router-dom";

import Breadcrumb from "../components/Breadcrub";
import Button from "../components/Button";
import ProductCard from "../components/ProductCard";

import { products, productVariants } from "../data/products";

const ProductVariantDetails = () => {
  const { id, variantId } = useParams<{
    id: string;
    variantId: string;
  }>();

  const product = products.find((item) => String(item.id) === String(id));

  const variant = productVariants.find(
    (item) =>
      String(item.id) === String(variantId) &&
      String(item.categoryId) === String(id),
  );

  const [activeTab, setActiveTab] = useState<
    "description" | "features" | "quality"
  >("description");

  /* Product Not Found */
  if (!product || !variant) {
    return (
      <section className="flex min-h-[70vh] items-center justify-center px-5">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-[#075b5b] sm:text-4xl">
            Product Not Found
          </h1>

          <Link
            to="/products"
            className="
              mt-5
              inline-block
              font-bold
              text-[#f2a318]
              transition-colors
              hover:text-[#075b5b]
            "
          >
            Back To Products
          </Link>
        </div>
      </section>
    );
  }

  /* Similar Products */
  const similarProducts = productVariants.filter(
    (item) =>
      String(item.categoryId) === String(product.id) && item.id !== variant.id,
  );

  return (
    <>
      {/* Breadcrumb */}
      <Breadcrumb
        title={variant.name}
        backgroundImage="/images/breadcrumb.jpg"
      />

      {/* Product Details */}
      <section className="px-5 py-12 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-5xl">
          <div
            className="
              grid
              gap-8
              md:grid-cols-[300px_1fr]
              md:items-start
              lg:gap-12
            "
          >
            {/* Product Image */}
            <div
              className="
                overflow-hidden
                rounded-tl-[45px]
                rounded-br-[45px]
                border
                border-[#f2a318]
                bg-white
                p-2.5
                shadow-[0_5px_20px_rgba(0,0,0,0.06)]
              "
            >
              <div
                className="
                  overflow-hidden
                  rounded-tr-[35px]
                  rounded-bl-[35px]
                "
              >
                <img
                  src={variant.image}
                  alt={variant.name}
                  className="
                    h-[260px]
                    w-full
                    object-cover
                    transition-transform
                    duration-500
                    hover:scale-105
                  "
                />
              </div>
            </div>

            {/* Product Content */}
            <div className="flex flex-col">
              {/* Category */}
              <span
                className="
                  inline-flex
                  w-fit
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
                {product.name}
              </span>

              {/* Title */}
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
                {variant.name}
              </h1>

              {/* Description */}
              <p
                className="
                  mt-5
                  max-w-2xl
                  text-sm
                  leading-7
                  text-gray-600
                "
              >
                {variant.description}
              </p>

              {/* Features */}
              <div className="mt-6 flex flex-wrap gap-3">
                <span
                  className="
                    rounded-full
                    bg-[#fbe4b8]
                    px-4
                    py-2
                    text-xs
                    font-semibold
                    text-[#075b5b]
                  "
                >
                  Premium Quality
                </span>

                <span
                  className="
                    rounded-full
                    bg-[#fbe4b8]
                    px-4
                    py-2
                    text-xs
                    font-semibold
                    text-[#075b5b]
                  "
                >
                  Indian Origin
                </span>

                <span
                  className="
                    rounded-full
                    bg-[#fbe4b8]
                    px-4
                    py-2
                    text-xs
                    font-semibold
                    text-[#075b5b]
                  "
                >
                  Export Quality
                </span>
              </div>

              {/* Contact Button */}
              <div className="mt-7">
                <Button
                  href="https://wa.me/918448028999"
                  className="min-h-[42px] px-7 py-2.5 text-xs"
                >
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="px-5 pb-12 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-5xl">
          <div
            className="
        overflow-hidden
        rounded-[10px]
        border
        border-gray-200
        bg-white
        shadow-[0_4px_15px_rgba(0,0,0,0.03)]
      "
          >
            {/* Tabs */}
            <div
              className="
          flex
          flex-wrap
          border-b
          border-gray-200
          bg-gray-50
        "
            >
              {/* Description */}
              <button
                type="button"
                onClick={() => setActiveTab("description")}
                className={`
            border-r
            border-gray-200
            px-5
            py-3
            text-xs
            transition-all
            duration-300
            ${
              activeTab === "description"
                ? "bg-[#075b5b] font-bold text-white"
                : "bg-white font-medium text-gray-600 hover:bg-[#fbe4b8] hover:text-[#075b5b]"
            }
          `}
              >
                Description
              </button>

              {/* Key Features */}
              <button
                type="button"
                onClick={() => setActiveTab("features")}
                className={`
            border-r
            border-gray-200
            px-5
            py-3
            text-xs
            transition-all
            duration-300
            ${
              activeTab === "features"
                ? "bg-[#075b5b] font-bold text-white"
                : "bg-white font-medium text-gray-600 hover:bg-[#fbe4b8] hover:text-[#075b5b]"
            }
          `}
              >
                Key Features
              </button>

              {/* Global Quality */}
              <button
                type="button"
                onClick={() => setActiveTab("quality")}
                className={`
            px-5
            py-3
            text-xs
            transition-all
            duration-300
            ${
              activeTab === "quality"
                ? "bg-[#075b5b] font-bold text-white"
                : "bg-white font-medium text-gray-600 hover:bg-[#fbe4b8] hover:text-[#075b5b]"
            }
          `}
              >
                Global Quality Standards
              </button>
            </div>

            {/* Single Content Div */}
            <div className="min-h-[180px] p-6 sm:p-7">
              {/* Description */}
              {activeTab === "description" && (
                <div>
                  <p className="text-sm leading-7 text-gray-600">
                    {variant.description}
                  </p>

                  <p className="mt-5 text-sm leading-7 text-gray-600">
                    This premium product is carefully selected and processed to
                    maintain its natural quality, taste, aroma, and consistency.
                    It is suitable for domestic as well as international
                    markets.
                  </p>
                </div>
              )}

              {/* Key Features */}
              {activeTab === "features" && (
                <div className="grid gap-3 sm:grid-cols-2">
                  {[
                    "Extra-long grain",
                    "Excellent grain elongation",
                    "Naturally aromatic",
                    "Non-sticky texture",
                    "Premium quality",
                    "Ideal for biryani and pulao",
                  ].map((feature) => (
                    <div
                      key={feature}
                      className="
                  flex
                  items-center
                  gap-3
                  rounded-md
                  bg-[#f8faf9]
                  px-4
                  py-3
                "
                    >
                      <span
                        className="
                    flex
                    h-6
                    w-6
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-[#f2a318]
                    text-xs
                    font-bold
                    text-white
                  "
                      >
                        ✓
                      </span>

                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Global Quality Standards */}
              {activeTab === "quality" && (
                <div className="grid gap-3 sm:grid-cols-2">
                  {[
                    "Premium quality selection",
                    "Hygienically processed and packed",
                    "Strict quality control",
                    "Export-quality standards",
                    "Carefully selected grains",
                    "Suitable for international markets",
                  ].map((standard) => (
                    <div
                      key={standard}
                      className="
                  flex
                  items-center
                  gap-3
                  rounded-md
                  bg-[#f8faf9]
                  px-4
                  py-3
                "
                    >
                      <span
                        className="
                    flex
                    h-6
                    w-6
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-[#f2a318]
                    text-xs
                    font-bold
                    text-white
                  "
                      >
                        ✓
                      </span>

                      <span className="text-sm text-gray-600">{standard}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Back Button */}
      <div className="flex justify-center pb-12">
        <Button
          to={`/products/${product.id}`}
          className="
            min-h-[40px]
            min-w-[165px]
            px-6
            py-2
            text-xs
          "
        >
          Back To {product.name}
        </Button>
      </div>

      {/* Similar Products */}
      {similarProducts.length > 0 && (
        <section className="px-5 pb-16 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-5xl">
            {/* Section Heading */}
            <div className="mb-7">
              <h2
                className="
                  text-2xl
                  font-bold
                  text-[#075b5b]
                  sm:text-3xl
                "
              >
                Similar Products
              </h2>

              <div className="mt-2 h-1 w-12 rounded-full bg-[#f2a318]" />
            </div>

            {/* 3 Products Per Row */}
            <div
              className="
                grid
                grid-cols-1
                gap-6
                sm:grid-cols-2
                lg:grid-cols-3
              "
            >
              {similarProducts.slice(0, 6).map((item, index) => (
                <ProductCard
                  key={item.id}
                  id={item.id}
                  number={String(index + 1).padStart(2, "0")}
                  name={item.name}
                  description={item.description}
                  image={item.image}
                  linkTo={`/products/${product.id}/${item.id}`}
                />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default ProductVariantDetails;
