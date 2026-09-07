import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ShippingSection = () => {
  return (
    <section className="bg-white px-5 py-16 sm:px-8 lg:px-16 lg:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="overflow-hidden rounded-tr-[80px] rounded-bl-[80px]"
        >
          <img
            src="/shipment.png"
            alt="Shipment and Delivery"
            className="h-[340px] w-full object-cover transition duration-700 hover:scale-105 sm:h-[420px]"
          />
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block rounded-tl-full rounded-tr-full bg-[#f8e6bf] px-5 py-2 text-xs font-medium uppercase text-[#075657]">
            Shipment & Delivery
          </span>

          <h2 className="mt-5 max-w-lg text-4xl font-bold leading-tight text-[#00595d] sm:text-5xl">
            Shipment And Delivery
            <br />
            Information
          </h2>

          <p className="mt-6 max-w-xl text-base leading-7 text-[#075657]">
            At Nature Harvest, we are committed to delivering the highest
            standards of quality, reliability, and flexibility to meet your
            shipment and delivery needs. From customized packaging to quality
            certifications, we ensure every step of the process aligns with
            your requirements.
          </p>

          <Link
            to="/shipment-delivery"
            className="mt-8 inline-flex rounded-tr-[40px] rounded-bl-[40px] border border-[#f2a318] px-8 py-3.5 text-sm font-semibold text-[#075657] transition-all duration-300 hover:bg-[#f2a318] hover:text-black"
          >
            Learn More About Shipping
          </Link>
        </motion.div>

      </div>
    </section>
  );
};

export default ShippingSection;