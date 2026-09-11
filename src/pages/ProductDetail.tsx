import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  MessageCircle,
} from "lucide-react";

import Breadcrumb from "../components/Breadcrub";
import SectionTitle from "../components/SectionTitle";
import Button from "../components/Button";

type Product = {
  id: string;
  number: string;
  name: string;
  category: string;
  description: string;
  image: string;
  origin?: string;
  packaging?: string;
  quality?: string;
  availability?: string;
};

const products: Product[] = [
  {
    id: "basmati-rice",
    number: "01",
    name: "Basmati Rice",
    category: "Rice",
    description:
      "Premium quality Basmati Rice known for its long grains, delicate aroma, excellent texture, and superior cooking characteristics. Carefully sourced to meet global quality standards.",
    image: "/images/basmati-rice.jpg",
    origin: "India",
    packaging: "Available as per buyer requirement",
    quality: "Premium Export Quality",
    availability: "Global Supply",
  },
  {
    id: "non-basmati-rice",
    number: "02",
    name: "Non-Basmati Rice",
    category: "Rice",
    description:
      "High-quality Non-Basmati Rice sourced from trusted agricultural regions. Suitable for domestic and international food markets with consistent quality and reliable supply.",
    image: "/images/non-basmati-rice.jpg",
    origin: "India",
    packaging: "Available as per buyer requirement",
    quality: "Export Quality",
    availability: "Global Supply",
  },
  {
    id: "spices",
    number: "03",
    name: "Spices",
    category: "Spices",
    description:
      "A wide range of carefully sourced Indian spices selected for their authentic flavour, aroma, colour, and quality. Suitable for food manufacturers, distributors, and international buyers.",
    image: "/images/spices.jpg",
    origin: "India",
    packaging: "Available as per buyer requirement",
    quality: "Premium Quality",
    availability: "Global Supply",
  },
  {
    id: "pulses",
    number: "04",
    name: "Pulses & Lentils",
    category: "Pulses and Lentils",
    description:
      "Premium pulses and lentils sourced from reliable agricultural networks. Our products are selected for their consistency, cleanliness, nutritional value, and export suitability.",
    image: "/images/pulses.jpg",
    origin: "India",
    packaging: "Available as per buyer requirement",
    quality: "Export Quality",
    availability: "Global Supply",
  },
  {
    id: "millets",
    number: "05",
    name: "Millets & Coarse Grains",
    category: "Millets & Coarse Grains",
    description:
      "Nutritious and sustainably sourced millets and coarse grains that support the growing global demand for healthy and versatile food products.",
    image: "/images/millets.jpg",
    origin: "India",
    packaging: "Available as per buyer requirement",
    quality: "Premium Quality",
    availability: "Global Supply",
  },
  {
    id: "dehydrated-processed",
    number: "06",
    name: "Dehydrated & Processed Items",
    category: "Dehydrated & Processed Items",
    description:
      "Quality dehydrated and processed agricultural products prepared to retain flavour, usability, and consistency while meeting the requirements of international buyers.",
    image: "/images/dehydrated-items.jpg",
    origin: "India",
    packaging: "Available as per buyer requirement",
    quality: "Export Quality",
    availability: "Global Supply",
  },
  {
    id: "oil-seeds",
    number: "07",
    name: "Oil Seeds",
    category: "Oil Seeds",
    description:
      "Carefully sourced oil seeds selected for quality and consistency. Suitable for food processing, trading, and international agricultural supply chains.",
    image: "/images/oil-seeds.jpg",
    origin: "India",
    packaging: "Available as per buyer requirement",
    quality: "Premium Quality",
    availability: "Global Supply",
  },
];

const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();

  const product = products.find((item) => item.id === id);

  if (!product) {
    return (
      <div className="min-h-screen bg-white">
        <Breadcrumb
          title="Product Details"
          backgroundImage="/images/breadcrumb.jpg"
        />

        <section className="px-5 py-20 sm:px-8 lg:px-16">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#fbe4b8]">
              <span className="text-3xl font-bold text-[#075b5b]">
                !
              </span>
            </div>

            <h1 className="mt-6 text-3xl font-bold text-[#075b5b] sm:text-4xl">
              Product Not Found
            </h1>

            <p className="mx-auto mt-4 max-w-xl text-gray-600">
              The product you are looking for could not be found.
              Please return to our products page and choose another
              product.
            </p>

            <div className="mt-8">
              <Button to="/products">
                <ArrowLeft className="h-4 w-4" />
                Back to Products
              </Button>
            </div>
          </div>
        </section>
      </div>
    );
  }

  const relatedProducts = products
    .filter((item) => item.id !== product.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <Breadcrumb
        title={product.name}
        backgroundImage="/images/breadcrumb.jpg"
      />

      {/* Product Hero */}
      <section className="overflow-hidden bg-white px-5 py-14 sm:px-8 lg:px-16 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            {/* Product Image */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="absolute -left-5 -top-5 h-28 w-28 rounded-full bg-[#fbe4b8]/60 blur-2xl" />

              <div className="group relative h-[360px] overflow-hidden rounded-tl-[85px] rounded-br-[85px] bg-[#f5f5f0] shadow-[0_15px_45px_rgba(0,0,0,0.10)] sm:h-[450px] lg:h-[520px]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#075b5b]/25 via-transparent to-transparent" />

                <div className="absolute bottom-0 left-0 flex min-h-[72px] min-w-[72px] items-center justify-center rounded-tr-[30px] bg-[#f2a318] px-5 text-2xl font-bold text-black shadow-lg">
                  {product.number}
                </div>
              </div>
            </motion.div>

            {/* Product Information */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <span className="inline-flex min-h-[42px] items-center rounded-tl-[28px] rounded-tr-[28px] bg-[#fbe4b8] px-7 py-2.5 text-sm font-semibold uppercase tracking-[0.08em] text-[#075b5b]">
                {product.category}
              </span>

              <h1 className="mt-5 text-4xl font-bold leading-tight text-[#075b5b] sm:text-5xl">
                {product.name}
              </h1>

              <div className="mt-5 h-[4px] w-20 rounded-full bg-[#f2a318]" />

              <p className="mt-6 text-base leading-8 text-gray-600 sm:text-lg">
                {product.description}
              </p>

              {/* Quick Information */}
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                <InfoItem
                  title="Origin"
                  value={product.origin || "India"}
                />

                <InfoItem
                  title="Quality"
                  value={product.quality || "Premium Quality"}
                />

                <InfoItem
                  title="Packaging"
                  value={
                    product.packaging ||
                    "Available as per requirement"
                  }
                />

                <InfoItem
                  title="Availability"
                  value={
                    product.availability || "Global Supply"
                  }
                />
              </div>

              {/* CTA */}
              <div className="mt-9 flex flex-wrap gap-4">
                <Button
                  href="https://wa.me/918448028999?text=Hello%20Nature%20Harvest,%20I%20am%20interested%20in%20your%20product."
                >
                  <MessageCircle className="h-5 w-5" />
                  Enquire Now
                </Button>

                <Button
                  to="/products"
                  className="!bg-[#075b5b] !text-white shadow-[0_8px_22px_rgba(7,91,91,0.20)] hover:!bg-[#064a4b] hover:!text-white"
                >
                  <ArrowLeft className="h-4 w-4 !text-white" />
                  All Products
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Product Highlights */}
      <section className="bg-[#f7f8f5] px-5 py-14 sm:px-8 lg:px-16 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            label="Product Highlights"
            title={`Why Choose ${product.name}?`}
            description="We focus on quality, consistency, responsible sourcing, and dependable global supply."
          />

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <HighlightCard
              title="Premium Quality"
              description="Carefully selected products meeting consistent quality requirements."
            />

            <HighlightCard
              title="Global Standards"
              description="Products prepared with international buyers and markets in mind."
            />

            <HighlightCard
              title="Reliable Supply"
              description="Strong sourcing networks help us maintain dependable supply."
            />

            <HighlightCard
              title="Responsible Sourcing"
              description="We believe in sustainable and transparent agricultural sourcing."
            />
          </div>
        </div>
      </section>

      {/* Product Information */}
      <section className="bg-white px-5 py-14 sm:px-8 lg:px-16 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
            <div>
              <SectionTitle
                label="Our Promise"
                title="Quality You Can Trust"
                align="left"
              />
            </div>

            <div>
              <p className="text-base leading-8 text-gray-600 sm:text-lg">
                Nature Harvest works with trusted agricultural
                sourcing networks to deliver quality products to
                customers and businesses across global markets.
                Every product is selected with attention to
                consistency, quality, and customer requirements.
              </p>

              <div className="mt-7 space-y-4">
                {[
                  "Consistent product quality",
                  "Trusted agricultural sourcing",
                  "International market focus",
                  "Flexible packaging requirements",
                  "Reliable customer support",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-[#f2a318]" />

                    <span className="text-sm font-medium text-gray-700 sm:text-base">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enquiry Banner */}
      <section className="px-5 pb-14 sm:px-8 lg:px-16 lg:pb-20">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-tl-[65px] rounded-br-[65px] bg-[#075b5b]">
          <div className="relative px-7 py-12 sm:px-12 lg:px-16 lg:py-14">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/5" />

            <div className="relative z-10 flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
              <div>
                <span className="text-sm font-semibold uppercase tracking-[0.12em] text-[#f2a318]">
                  Get in Touch
                </span>

                <h2 className="mt-2 max-w-2xl text-3xl font-bold text-white sm:text-4xl">
                  Looking for {product.name}?
                </h2>

                <p className="mt-3 max-w-2xl leading-7 text-white/75">
                  Contact our team for product details, packaging,
                  pricing, and bulk enquiries.
                </p>
              </div>

              <Button
                href="https://wa.me/918448028999?text=Hello%20Nature%20Harvest,%20I%20want%20to%20enquire%20about%20this%20product."
                className="shrink-0"
              >
                Contact Us
                <ArrowRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="bg-[#f7f8f5] px-5 py-14 sm:px-8 lg:px-16 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            label="Explore More"
            title="Related Products"
            description="Explore more products from our agricultural product range."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {relatedProducts.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
              >
                <Link
                  to={`/products/${item.id}`}
                  className="group block overflow-hidden rounded-tl-[55px] rounded-br-[55px] bg-white shadow-[0_8px_28px_rgba(0,0,0,0.07)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_35px_rgba(0,0,0,0.10)]"
                >
                  <div className="relative h-[220px] overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-[#075b5b]/10 transition duration-300 group-hover:bg-[#075b5b]/20" />

                    <span className="absolute left-0 top-0 rounded-br-[25px] bg-[#f2a318] px-5 py-3 text-sm font-bold text-black">
                      {item.number}
                    </span>
                  </div>

                  <div className="p-6">
                    <span className="text-xs font-bold uppercase tracking-[0.12em] text-[#f2a318]">
                      {item.category}
                    </span>

                    <h3 className="mt-2 text-xl font-bold text-[#075b5b]">
                      {item.name}
                    </h3>

                    <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-[#075b5b]">
                      View Product
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

type InfoItemProps = {
  title: string;
  value: string;
};

const InfoItem = ({ title, value }: InfoItemProps) => {
  return (
    <div className="rounded-xl border border-gray-100 bg-[#f8f9f7] px-5 py-4">
      <p className="text-xs font-bold uppercase tracking-[0.1em] text-[#f2a318]">
        {title}
      </p>

      <p className="mt-1 text-sm font-semibold text-[#075b5b]">
        {value}
      </p>
    </div>
  );
};

type HighlightCardProps = {
  title: string;
  description: string;
};

const HighlightCard = ({
  title,
  description,
}: HighlightCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.25 }}
      className="rounded-tl-[35px] rounded-br-[35px] bg-white p-7 shadow-[0_8px_25px_rgba(0,0,0,0.06)]"
    >
      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#fbe4b8]">
        <CheckCircle2 className="h-5 w-5 text-[#075b5b]" />
      </div>

      <h3 className="mt-5 text-lg font-bold text-[#075b5b]">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-6 text-gray-600">
        {description}
      </p>
    </motion.div>
  );
};

export default ProductDetails;