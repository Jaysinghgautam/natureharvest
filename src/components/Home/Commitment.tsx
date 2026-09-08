 import { motion } from "framer-motion";
import Button from "../Button";

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
    <section className="overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto grid max-w-[1500px] gap-6 px-5 sm:px-8 lg:grid-cols-[2fr_1fr] lg:gap-8 lg:px-0">

        {/* LEFT — Green Screen Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="
            relative min-h-[500px]
            overflow-hidden
            rounded-tr-[100px]
            rounded-bl-[70px]
            bg-[#075b5b]
            sm:min-h-[560px]
            lg:min-h-[620px]
          "
        >
          <img
            src="/images/commitment.png"
            alt="Nature Harvest agricultural field"
            className="absolute inset-0 h-full w-full object-cover"
          />

          {/* Green Screen */}
          <div className="absolute inset-0 bg-[#075b5b]/75" />

          {/* Content */}
          <div className="relative z-10 flex h-full max-w-[850px] flex-col justify-center px-7 py-14 sm:px-12 sm:py-16 lg:px-20">

            <span className="mb-5 h-1 w-16 rounded-full bg-[#f2a318]" />

            <h2 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-[58px]">
              Our Commitment
            </h2>

            <p className="mt-7 max-w-[760px] text-[15px] leading-7 text-white/90 sm:text-[17px] sm:leading-8">
              At Nature Harvest, we are committed to providing our customers
              with the highest quality products and services. We believe in
              transparency, sustainability, and ethical sourcing, and we are
              dedicated to making a positive impact on the world.
            </p>

            {/* Buttons */}
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:gap-4">
              <Button
                to="/about/brochures"
                className="w-full min-w-0 !text-[#073f41] sm:w-auto sm:min-w-[220px]"
              >
                Download Brochure
              </Button>

              <Button
                to="/contact"
                className="
                  w-full
                  min-w-0
                  border-2
                  border-[#f2a318]
                  bg-transparent
                  !text-white
                  hover:!bg-[#f2a318]
                  hover:!text-[#073f41]
                  sm:w-auto
                  sm:min-w-[170px]
                "
              >
                Contact Us
              </Button>
            </div>
          </div>

          {/* Wheat Decoration */}
          <div className="absolute bottom-[-10px] left-6 z-10 sm:left-10">
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

        {/* RIGHT — Green Screen Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="
            group
            relative
            min-h-[430px]
            overflow-hidden
            rounded-tl-[100px]
            rounded-br-[70px]
            lg:mt-24
            lg:min-h-[500px]
          "
        >
          <img
            src="/commit.png"
            alt="Nature Harvest agriculture"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />

          {/* Green Screen */}
          <div className="absolute inset-0 bg-[#075b5b]/55 transition-opacity duration-500 group-hover:bg-[#075b5b]/45" />

          {/* Gold Border */}
          <div className="absolute inset-5 rounded-tl-[75px] rounded-br-[55px] border border-[#f2a318]/50" />

 
        </motion.div>

      </div>
    </section>
  );
};

export default Commitment;