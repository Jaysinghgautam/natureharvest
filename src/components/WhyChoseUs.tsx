import { motion } from "framer-motion";
import { useState,useEffect } from "react";

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

const whyChooseImages = [
  {
    image: "https://images.unsplash.com/photo-1530507629858-e4977d30e9e0?q=80&w=643&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Farmers working in agricultural field",
  },
 
  {
    image: "https://images.unsplash.com/photo-1566957173130-3f46743b0439?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDY3fHx8ZW58MHx8fHx8",
    alt: "Agricultural products",
  }
 
];

const WhyChooseUs = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const [activeImage, setActiveImage] = useState(0);

useEffect(() => {
  const timer = setInterval(() => {
    setActiveImage((prev) => (prev + 1) % whyChooseImages.length);
  }, 2000);

  return () => clearInterval(timer);
}, []);

  return (
    <section className="relative overflow-hidden bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        {/* ================= TOP CONTENT ================= */}
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex rounded-r-full rounded-bl-full bg-[#fbe4b8] px-7 py-2.5">
              <span className="text-sm font-semibold uppercase tracking-wide text-[#073f41]">
                Why Trust Us
              </span>
            </div>

            <h2 className="mt-7 max-w-xl text-4xl font-bold leading-[1.08] text-[#075657] sm:text-5xl lg:text-[50px]">
              Why Choose
              <br />
              Nature Harvest?
            </h2>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:pt-5"
          >
            <p className="max-w-2xl text-[16px] leading-7 text-[#075657] sm:text-[17px]">
              Experience unmatched quality, transparency, and reliability with
              Nature Harvest. We prioritize your needs, ensure global
              compliance, simplify trade processes, and deliver premium
              agricultural products on time, every time.
            </p>
          </motion.div>
        </div>

        {/* ================= MAIN CONTENT ================= */}
        <div className="mt-10 grid items-start gap-10 lg:grid-cols-[1fr_1.25fr]">
          {/* ================= LEFT SIDE ================= */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative z-10"
          >
            {/* Trusted Partner Card */}
            <div className="relative flex h-[150px] max-w-[595px] overflow-hidden rounded-br-[70px] rounded-tl-[0px]">
              {/* Green Part */}
              <div className="flex w-[54%] items-center rounded-br-[90px] bg-[#07564f] px-8 sm:px-10">
                <h3 className="text-3xl font-bold leading-[0.95] text-white sm:text-[30px]">
                  Your
                  <br />
                  Trusted
                  <br />
                  Partner
                </h3>
              </div>

              {/* Golden Part */}
              <div className="flex flex-1 items-center bg-[#f2a619] px-7">
                <p className="text-xl leading-[1.05] text-[#073f41] sm:text-[23px]">
                  Finest of India,
                  <br />
                  From the Silk Route
                  <br />
                  to Global Markets
                </p>
              </div>
            </div>

            {/* Accordion */}
            <div className="mt-14 max-w-[440px] space-y-4">
              {trustItems.map((item, index) => {
                const isActive = activeIndex === index;

                return (
                  <div key={item.title}>
                    <button
                      type="button"
                      onClick={() => setActiveIndex(isActive ? -1 : index)}
                      className={`
                        flex
                        w-full
                        items-center
                        justify-between
                        rounded-r-full
                        rounded-bl-full
                        px-5
                        py-3
                        text-left
                        transition-all
                        duration-300
                        ${
                          isActive
                            ? "bg-[#f2a619] text-[#073f41]"
                            : "bg-[#fbe8c4] text-[#111]"
                        }
                      `}
                    >
                      <span className="text-sm font-semibold sm:text-[15px]">
                        {item.title}
                      </span>

                      <span className="ml-4 text-lg font-semibold">
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
                        <p className="px-3 py-4 text-[15px] leading-6 text-[#075657]">
                          {item.description}
                        </p>
                      </motion.div>
                    )}
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* ================= RIGHT IMAGE ================= */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="relative lg:-mt-16"
          >
            <div
              className="
      relative
      h-[500px]
      overflow-hidden
      rounded-tr-[110px]
      rounded-bl-[110px]
      rounded-br-[110px]
      sm:h-[600px]
      lg:h-[680px]
    "
            >
              {whyChooseImages.map((item, index) => (
                <img
                  key={item.image}
                  src={item.image}
                  alt={item.alt}
                  className={`absolute inset-0 h-full w-full object-cover
          transition-opacity duration-700
          ${activeImage === index ? "opacity-100" : "opacity-0"}
        `}
                />
              ))}

              {/* Image Overlay */}
              {/* <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" /> */}

              {/* Trusted Badge */}
              <div className="absolute right-5 top-5 flex h-[135px] w-[155px] flex-col items-center justify-center px-5 py-4 shadow-sm">
 
              <img src="https://natureharvest.co.in/about-us/trusted.png" alt="" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
