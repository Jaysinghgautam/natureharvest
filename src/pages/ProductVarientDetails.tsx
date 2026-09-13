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

  const product = products.find(
    (item) => String(item.id) === String(id)
  );

  const variant = productVariants.find(
    (item) =>
      String(item.id) === String(variantId) &&
      String(item.categoryId) === String(id)
  );

  if (!product || !variant) {
    return (
      <section className="flex min-h-[70vh] items-center justify-center px-5">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-[#075b5b] sm:text-4xl">
            Product Not Found
          </h1>

          <Link
            to="/products"
            className="mt-5 inline-block font-bold text-[#f2a318]"
          >
            ← Back To Products
          </Link>
        </div>
      </section>
    );
  }

  const similarProducts = productVariants.filter(
    (item) =>
      String(item.categoryId) === String(product.id) &&
      item.id !== variant.id
  );

  return (
    <>
      <Breadcrumb
        title={variant.name}
        backgroundImage="/images/breadcrumb.jpg"
      />

      {/* Product */}
      <section className="px-5 py-12 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-8 md:grid-cols-[280px_1fr] md:items-start">
            {/* Image */}
            <div className="overflow-hidden rounded-[12px] border border-[#f2a318] bg-white p-2 shadow-[0_5px_20px_rgba(0,0,0,0.06)]">
              <img
                src={variant.image}
                alt={variant.name}
                className="h-[230px] w-full rounded-[5px] object-cover"
              />
            </div>

            {/* Content */}
            <div>
              <span className="inline-flex rounded-tl-[20px] rounded-tr-[20px] bg-[#fbe4b8] px-5 py-2 text-xs font-semibold uppercase tracking-wider text-[#173f40]">
                {product.name}
              </span>

              <h1 className="mt-4 text-3xl font-bold text-[#075b5b] sm:text-4xl">
                {variant.name}
              </h1>

              <p className="mt-5 text-sm leading-7 text-gray-600">
                {variant.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <span className="rounded-full bg-[#fbe4b8] px-4 py-2 text-xs font-semibold text-[#075b5b]">
                  Premium Quality
                </span>

                <span className="rounded-full bg-[#fbe4b8] px-4 py-2 text-xs font-semibold text-[#075b5b]">
                  Indian Origin
                </span>

                <span className="rounded-full bg-[#fbe4b8] px-4 py-2 text-xs font-semibold text-[#075b5b]">
                  Export Quality
                </span>
              </div>

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
          <div className="overflow-hidden rounded-[8px] border border-gray-200">
            <div className="bg-[#075b5b] px-6 py-3">
              <h2 className="text-sm font-bold text-white">
                Description
              </h2>
            </div>

            <div className="p-6">
              <p className="text-sm leading-7 text-gray-600">
                {variant.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Back */}
      <div className="flex justify-center pb-12">
        <Button
          to={`/products/${product.id}`}
          className="min-h-[40px] min-w-[165px] px-6 py-2 text-xs"
        >
          Back To {product.name}
        </Button>
      </div>

      {/* Similar Products */}
      {similarProducts.length > 0 && (
        <section className="px-5 pb-16 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-6 text-2xl font-bold text-[#075b5b]">
              Similar Products
            </h2>

            <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
              {similarProducts.slice(0, 4).map((item, index) => (
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