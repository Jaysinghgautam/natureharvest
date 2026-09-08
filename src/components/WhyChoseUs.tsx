import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import SectionTitle from "./SectionTitle";

const trustItems = [
  {
    title: "We Put You First:",
    description:
      "Your satisfaction is our top priority. We work closely with you to understand your unique needs and deliver solutions that align perfectly with your requirements.",
  },
  {
    title: "We Value Transparency and Fairness:",
    description:
      "We believe in transparent communication, fair business practices, and building long-term relationships with our customers.",
  },
  {
    title: "We Guarantee Global Quality and Compliance:",
    description:
      "Our products follow rigorous quality standards and international compliance requirements to ensure reliable global delivery.",
  },
  {
    title: "We Make Business Easy:",
    description:
      "From sourcing to documentation and delivery, we simplify the process and provide flexible solutions according to your requirements.",
  },
  {
    title: "We Deliver Consistency and Reliability:",
    description:
      "We maintain consistent quality and dependable supply so that every shipment meets your expectations.",
  },
];

const images = [
  {
    src: "https://images.unsplash.com/photo-1530507629858-e4977d30e9e0?q=80&w=643&auto=format&fit=crop",
    alt: "Farmers working in agricultural field",
  },
  {
    src: "https://images.unsplash.com/photo-1566957173130-3f46743b0439?w=600&auto=format&fit=crop&q=60",
    alt: "Agricultural products",
  },
];

const WhyChooseUs = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* Header */}
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <SectionTitle
              label="Why Trust Us"
              title="Why Choose Nature Harvest?"
              align="left"
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="max-w-xl pt-2 text-[15px] leading-7 text-[#075657] lg:pt-8"
          >
            Experience unmatched quality, transparency, and reliability with
            Nature Harvest. We prioritize your needs, ensure global compliance,
            simplify trade processes, and deliver premium agricultural
            products on time, every time.
          </motion.p>
        </div>

        {/* Main Content */}
        <div className="mt-10 grid items-start gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-0">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative z-20"
          >
            {/* Trusted Partner Banner */}
            <div className="relative mb-10 h-[125px] w-full max-w-[550px] lg:w-[115%]">
              <div className="absolute left-0 top-0 z-20 flex h-full w-[45%] items-center rounded-br-[65px] bg-[#07564f] px-6 shadow-lg sm:px-8">
                <h3 className="text-2xl font-bold leading-[1.05] text-white sm:text-[27px]">
                  Your
                  <br />
                  Trusted
                  <br />
                  Partner
                </h3>
              </div>

              <div className="absolute left-[35%] top-0 z-10 flex h-full w-[65%] items-center rounded-r-[20px] bg-[#f2a619] pl-[15%] pr-4">
                <p className="text-base leading-[1.2] text-[#073f41] sm:text-[18px]">
                  Finest of India,
                  <br />
                  From the Silk Route
                  <br />
                  to Global Markets
                </p>
              </div>
            </div>

            {/* Accordion */}
            <div className="max-w-[460px] space-y-3 lg:pr-8">
              {trustItems.map((item, index) => {
                const isActive = activeIndex === index;

                return (
                  <div key={item.title}>
                    <button
                      type="button"
                      onClick={() =>
                        setActiveIndex(isActive ? -1 : index)
                      }
                      className={`
                        flex w-full items-center justify-between
                        rounded-r-lg
                        px-5 py-3.5
                        text-left
                        transition-all duration-300
                        ${
                          isActive
                            ? "bg-[#f2a619] text-[#073f41]"
                            : "bg-[#fdf0d5] text-[#111]"
                        }
                      `}
                    >
                      <span className="text-[13px] font-semibold sm:text-sm">
                        {item.title}
                      </span>

                      <span className="ml-3 text-lg font-semibold">
                        {isActive ? "−" : "+"}
                      </span>
                    </button>

                    {isActive && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="px-3 py-3 text-[13px] leading-6 text-[#075657] sm:text-sm">
                          {item.description}
                        </p>
                      </motion.div>
                    )}
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="relative z-10 lg:-mt-10"
          >
            <div
              className="
                relative h-[450px]
                w-full overflow-hidden
                rounded-tr-[90px]
                rounded-br-[90px]
                rounded-bl-[90px]
                shadow-xl
                sm:h-[550px]
                lg:h-[680px]
              "
            >
              {images.map((image, index) => (
                <img
                  key={image.src}
                  src={image.src}
                  alt={image.alt}
                  className={`
                    absolute inset-0
                    h-full w-full object-cover
                    transition-opacity duration-700
                    ${
                      activeImage === index
                        ? "opacity-100"
                        : "opacity-0"
                    }
                  `}
                />
              ))}

              {/* Trusted Badge */}
              <div className="absolute right-5 top-5 w-[105px] rounded-xl bg-white p-3 shadow-xl sm:right-6 sm:top-6 sm:w-[125px]">
                <img
                  src="https://natureharvest.co.in/about-us/trusted.png"
                  alt="Trusted quality"
                  className="w-full object-contain"
                />
              </div>

              {/* Bottom Decoration */}
              <div className="absolute bottom-[-10px] right-[-10px] opacity-80">
                <svg
                  width="140"
                  height="140"
                  viewBox="0 0 100 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M80 80 C 80 40, 40 20, 20 20"
                    stroke="white"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  <path
                    d="M80 80 C 70 50, 40 40, 30 40"
                    stroke="white"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  <path
                    d="M80 80 C 60 60, 40 60, 40 60"
                    stroke="white"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;