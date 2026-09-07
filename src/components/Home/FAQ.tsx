import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const faqs = [
  {
    question: "What is Nature Harvest?",
    answer:
      "Nature Harvest is a premium agri-export brand specializing in quality rice, spices, cereals, pulses, and other agro products. We focus on sustainability, global compliance, and delivering exceptional value to our partners worldwide.",
  },
  {
    question: "Where is Nature Harvest based?",
    answer:
      "Nature Harvest is based in Gurugram, Haryana, India, with a global network for sourcing and exporting agricultural products.",
  },
  {
    question: "Are your products certified for global markets?",
    answer:
      "Yes. Our products follow applicable food safety, quality, and international export standards.",
  },
  {
    question: "Do you offer organic products?",
    answer:
      "Yes, organic product options are available depending on product category and customer requirements.",
  },
  {
    question: "Can you customize the packaging for our brand?",
    answer:
      "Yes. We offer customized packaging solutions according to product, quantity, market, and branding requirements.",
  },
];

const FAQ = () => {
  const [open, setOpen] = useState(0);

  return (
    <section className="bg-white px-5 py-16 sm:px-8 lg:px-16 lg:py-24">
      <div className="mx-auto grid max-w-7xl items-start gap-12 lg:grid-cols-2 lg:gap-14">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block rounded-tl-full rounded-tr-full bg-[#f8e6bf] px-5 py-2 text-xs font-medium uppercase text-[#174f50]">
            Frequently Asked Questions
          </span>

          <h2 className="mt-5 max-w-xl text-4xl font-bold leading-tight text-[#00595d] sm:text-5xl">
            Below Are Some Frequently
            <br className="hidden sm:block" />
            Asked Question And Answers
          </h2>

          <p className="mt-6 max-w-xl text-base leading-7 text-[#075657]">
            Find quick answers to common questions about our services,
            products, and processes. We have compiled essential information
            to help you make informed decisions with ease and confidence.
          </p>

          {/* FAQ List */}
          <div className="mt-8 space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = open === index;

              return (
                <div
                  key={faq.question}
                  className="overflow-hidden rounded-md bg-[#fff3d7]"
                >
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? -1 : index)}
                    className="flex w-full items-center justify-between px-5 py-5 text-left text-sm font-medium text-[#00595d] sm:text-base"
                  >
                    <span>Q: {faq.question}</span>

                    <span className="ml-4 text-lg font-medium">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                      >
                        <p className="px-5 pb-5 text-sm leading-6 text-[#075657]">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Button */}
          <Link
            to="/faqs"
            className="mt-10 inline-flex rounded-bl-[38px] rounded-tr-[38px] bg-[#00595d] px-10 py-4 text-sm font-semibold text-white transition hover:bg-[#f2a318] hover:text-black"
          >
            View All FAQs
          </Link>
        </motion.div>

        {/* Right Images */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-12"
        >
          <div className="overflow-hidden rounded-tr-[100px] rounded-bl-[100px] shadow-[0_15px_35px_rgba(0,0,0,0.08)]">
            <img
              src="https://natureharvest.co.in/product/%E0%A4%96%E0%A5%82%E0%A4%AC%E0%A4%B8%E0%A5%82%E0%A4%B0%E0%A4%A4-%E0%A4%B9%E0%A5%88%E0%A4%82-%E0%A4%A8%E0%A5%9B%E0%A4%BE%E0%A4%B0-%E0%A4%97%E0%A4%BE%E0%A4%82%E0%A4%B5-%E0%A4%AE%E0%A5%87%E0%A4%82.jpg"
              alt="Farmers working in rice field"
              className="h-[300px] w-full object-cover transition duration-700 hover:scale-105 sm:h-[350px]"
            />
          </div>

          <div className="overflow-hidden rounded-tr-[100px] rounded-bl-[100px] shadow-[0_15px_35px_rgba(0,0,0,0.08)]">
            <img
              src="https://natureharvest.co.in/product/Red%20Chile%20Processing.jpg"
              alt="Agricultural farming"
              className="h-[300px] w-full object-cover transition duration-700 hover:scale-105 sm:h-[350px]"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default FAQ;