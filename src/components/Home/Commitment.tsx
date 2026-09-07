 import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const wheatLeaves = [
  [18, 72, -35],
  [5, 52, -45],
  [20, 32, -35],
  [35, 15, -20],
  [55, 62, 35],
  [50, 42, 35],
  [55, 22, 25],
];

const Commitment = () => {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto grid max-w-[1500px] items-stretch gap-6 px-5 sm:px-8 lg:grid-cols-[2fr_1fr] lg:gap-8 lg:px-0">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative min-h-[520px] overflow-hidden rounded-tr-[120px] bg-[#075b5b]"
        >
          <img
            src="/images/commitment.png"
            alt="Agricultural field"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-[#075b5b]/45" />

          <div className="relative z-10 flex h-full max-w-[850px] flex-col justify-center px-8 py-16 sm:px-14 lg:px-20">
            <h2 className="text-4xl font-semibold text-white sm:text-5xl lg:text-[58px]">
              Our Commitment
            </h2>

            <p className="mt-8 max-w-[800px] text-base font-medium leading-[1.8] text-white sm:text-lg">
              At Nature Harvest, we are committed to providing our customers
              with the highest quality products and services. We believe in
              transparency, sustainability, and ethical sourcing, and we are
              dedicated to making a positive impact on the world.
            </p>

            <Link
              to="/about/brochures"
              className="mt-10 flex h-16 w-fit min-w-[310px] items-center justify-center rounded-tl-[5px] rounded-tr-[60px] rounded-br-[5px] rounded-bl-[60px] bg-[#f2a318] px-8 text-lg font-semibold text-black shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-[#ffad19]"
            >
              Download Brochure
            </Link>
          </div>

          {/* Wheat Decoration */}
          <div className="absolute bottom-[-10px] left-8 z-10 sm:left-12">
            <div className="relative h-36 w-28 rotate-[-25deg]">
              <span className="absolute bottom-0 left-1/2 h-32 w-[3px] -translate-x-1/2 rotate-[-15deg] rounded-full bg-[#f2a318]" />

              {wheatLeaves.map(([left, top, rotate], index) => (
                <span
                  key={index}
                  className="absolute h-7 w-3 rounded-full bg-[#f2a318]"
                  style={{
                    left: `${left}px`,
                    top: `${top}px`,
                    transform: `rotate(${rotate}deg)`,
                  }}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="group relative min-h-[430px] overflow-hidden rounded-tl-[110px] lg:mt-24"
        >
          <img
            src="/commit.png"
            alt="Nature Harvest agriculture"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </motion.div>

      </div>
    </section>
  );
};

export default Commitment;