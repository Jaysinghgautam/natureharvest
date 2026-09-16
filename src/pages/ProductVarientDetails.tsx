import { useState } from "react";
import { Star } from "lucide-react";
import { Link, useParams } from "react-router-dom";

import Breadcrumb from "../components/Breadcrub";
import Button from "../components/Button";
import ProductCard from "../components/ProductCard";

import { products, productVariants } from "../data/products";

type TabType = "description" | "features" | "quality";

const ProductVariantDetails = () => {
  const { id, variantId } = useParams<{
    id: string;
    variantId: string;
  }>();

  const [activeTab, setActiveTab] = useState<TabType>("description");

  /* ================= FIND CATEGORY ================= */
  const product = products.find((item) => String(item.id) === String(id));

  /* ================= FIND VARIANT ================= */
  const variant = productVariants.find(
    (item) =>
      String(item.id) === String(variantId) &&
      String(item.categoryId) === String(id),
  );

  /* ================= NOT FOUND ================= */
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

  /* ================= SIMILAR PRODUCTS ================= */
  const similarProducts = productVariants.filter(
    (item) =>
      String(item.categoryId) === String(product.id) && item.id !== variant.id,
  );

  /* ================= TABS ================= */
  const tabs: {
    id: TabType;
    label: string;
  }[] = [
    {
      id: "description",
      label: "Description",
    },
    {
      id: "features",
      label: "Key Features",
    },
    {
      id: "quality",
      label: "Global Quality Standards",
    },
  ];

  return (
    <>
      {/* ================= BREADCRUMB ================= */}
      <Breadcrumb
        title={variant.name}
        backgroundImage="/images/breadcrumb.jpg"
      />

      {/* content  */}
      <section className="px-5 py-14 sm:px-8 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-6xl">
          <div
            className="
        grid
        gap-10
        md:grid-cols-[420px_1fr]
        md:items-center
        lg:grid-cols-[500px_1fr]
        lg:gap-16
      "
          >
            {/* ================= PRODUCT IMAGE ================= */}
            <div
              className="
          w-full
          overflow-hidden
          rounded-xl
          border-2
          border-[#f2a318]
          p-3
          shadow-[0_6px_25px_rgba(0,0,0,0.08)]
        "
            >
              <div
                className="
            overflow-hidden
            rounded-tr-[45px]
            rounded-bl-[45px]
            bg-gray-100
          "
              >
                <img
                  src={variant.image}
                  alt={variant.name}
                  loading="lazy"
                  className="
              h-[330px]
              w-full
              object-cover
              transition-transform
              duration-500
              hover:scale-105
              sm:h-[380px]
              lg:h-[420px]
            "
                />
              </div>
            </div>

            {/* ================= PRODUCT CONTENT ================= */}
            <div className="flex flex-col">
              {/* Category */}
              <span
                className="
            inline-flex
            w-fit
            rounded-tl-[22px]
            rounded-br-[22px]
            bg-[#fbe4b8]
            px-6
            py-2.5
            text-sm
            font-semibold
            uppercase
            tracking-wider
            text-[#173f40]
          "
              >
                {product.name}
              </span>

              {/* Product Name */}
              <h1
                className="
            mt-5
            text-3xl
            font-bold
            leading-tight
            text-[#075b5b]
            sm:text-4xl
            lg:text-5xl
          "
              >
                {variant.name}
              </h1>

              {/* Product Type */}
              <div className="mt-6">
                <span
                  className="
              inline-flex
              max-w-full
              rounded-tr-[30px]
              rounded-bl-[30px]
              bg-[#f2a318]
              px-7
              py-3.5
              text-base
              font-semibold
              leading-relaxed
              text-black
              sm:text-lg
            "
                >
                  {variant.qualityStandards.join(" | ")}
                </span>
              </div>

              {/* Rating and Reviews */}
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`h-5 w-5 ${
                        star <= Math.round(variant.rating)
                          ? "fill-[#f2a318] text-[#f2a318]"
                          : "fill-gray-200 text-gray-200"
                      }`}
                    />
                  ))}
                </div>

                <span className="text-sm text-gray-500 sm:text-base">
                  {variant.rating.toFixed(1)} from {variant.reviews} Reviews
                </span>
              </div>

              {/* Contact Button */}
              <div className="mt-8">
                <Button
                  href="https://wa.me/918448028999"
                  className="min-h-[52px] min-w-[190px] px-8 py-3 text-sm"
                >
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= TABS ================= */}
      <section className="px-5 pb-12 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-5xl">
          <div
            className="
              overflow-hidden
              rounded-[10px]
              border
              border-gray-200
              bg-white
              shadow-[0_4px_15px_rgba(0,0,0,0.04)]
            "
          >
            {/* ================= TAB BUTTONS ================= */}
            <div
              className="
                flex
                overflow-x-auto
                border-b
                border-gray-200
                bg-gray-50
              "
            >
              {tabs.map((tab) => {
                const isActive = activeTab === tab.id;

                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveTab(tab.id)}
                    className={`
                      shrink-0
                      border-r
                      border-gray-200
                      px-5
                      py-3
                      text-xs
                      font-medium
                      transition-all
                      duration-300
                      sm:px-6
                      ${
                        isActive
                          ? "bg-[#075b5b] font-bold text-white"
                          : "bg-white text-gray-600 hover:bg-[#fbe4b8] hover:text-[#075b5b]"
                      }
                    `}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>

            {/* ================= TAB CONTENT ================= */}
            <div className="min-h-[200px] p-6 sm:p-8">
              {/* ================= DESCRIPTION ================= */}
              {activeTab === "description" && (
                <div>
                  <h3 className="mb-4 text-lg font-bold text-[#075b5b]">
                    {variant.name}
                  </h3>

                  <p className="text-sm leading-7 text-gray-600">
                    {variant.description}
                  </p>
                </div>
              )}

              {/* ================= KEY FEATURES ================= */}
              {activeTab === "features" && (
                <div>
                  <h3 className="mb-5 text-lg font-bold text-[#075b5b]">
                    Key Features
                  </h3>

                  {variant.keyFeatures?.length > 0 ? (
                    <div className="grid gap-3 sm:grid-cols-2">
                      {variant.keyFeatures.map((feature) => (
                        <div
                          key={feature}
                          className="
                            flex
                            items-center
                            gap-3
                            rounded-lg
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

                          <span className="text-sm text-gray-600">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-sm text-gray-500">
                      No key features available.
                    </p>
                  )}
                </div>
              )}

              {/* ================= GLOBAL QUALITY ================= */}
              {activeTab === "quality" && (
                <div>
                  <h3 className="mb-5 text-lg font-bold text-[#075b5b]">
                    Global Quality Standards
                  </h3>

                  {variant.globalQualityStandards?.length > 0 ? (
                    <div className="grid gap-3 sm:grid-cols-2">
                      {variant.globalQualityStandards.map((standard) => (
                        <div
                          key={standard}
                          className="
                            flex
                            items-center
                            gap-3
                            rounded-lg
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

                          <span className="text-sm text-gray-600">
                            {standard}
                          </span>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-sm text-gray-500">
                      No global quality standards available.
                    </p>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ================= BACK BUTTON ================= */}
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

      {/* ================= SIMILAR PRODUCTS ================= */}
      {similarProducts.length > 0 && (
        <section className="px-5 pb-16 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-5xl">
            {/* Heading */}
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
            </div>

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
              {similarProducts.slice(0, 6).map((item, index) => (
                <ProductCard
                  key={item.id}
                  id={item.id}
                  number={String(index + 1).padStart(2, "0")}
                  name={item.name}
                  description={item.description}
                  image={item.image}
                  linkTo={`/products/${product.id}/${item.id}`}
                  position={index % 2 === 0 ? "left" : "right"}
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
