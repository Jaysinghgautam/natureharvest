import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const certifications = [
  {
    name: "Halal",
    image: "https://natureharvest.co.in/home/icons/kosher-stamp.png",
  },
  {
    name: "ISO",
    image: "https://natureharvest.co.in/home/icons/ISO.png",
  },
  {
    name: "FDA",
    image:
      "https://natureharvest.co.in/home/icons/fda-the-food-and-drug-administration-logo-png_seeklogo-268773.png",
  },
  {
    name: "Kosher",
    image: "https://natureharvest.co.in/home/icons/kosher-stamp.png",
  },
  {
    name: "HACCP",
    image: "https://natureharvest.co.in/home/icons/logo-haccp-sm2.png",
  },
  {
    name: "APEDA",
    image: "https://natureharvest.co.in/home/icons/Apeda.png",
  },
  {
    name: "FSSAI",
    image: "https://natureharvest.co.in/home/icons/Fssai-Logo-Vector.png",
  },
  {
    name: "Halal",
    image: "https://natureharvest.co.in/home/icons/Halal_logo.svg.png",
  },
];

const OurStory = () => {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* ================= CERTIFICATION BAR ================= */}
      <div className="relative overflow-hidden border-b border-gray-100 bg-white py-8 md:py-10">
        <style>
          {`
      @keyframes marquee-left {
        from {
          transform: translateX(-50%);
        }
        to {
          transform: translateX(0);
        }
      }

      .animate-marquee-left {
        animation: marquee-left 20s linear infinite;
      }
    `}
        </style>

        <div className="flex w-max animate-marquee-left items-center">
          {/* First Set */}
          {certifications.map((certificate, index) => (
            <div
              key={`first-${certificate.name}-${index}`}
              className="flex h-20 w-[160px] shrink-0 items-center justify-center px-6"
            >
              <img
                src={certificate.image}
                alt={certificate.name}
                className="max-h-20 max-w-[110px] object-contain"
              />
            </div>
          ))}

          {/* Duplicate Set */}
          {certifications.map((certificate, index) => (
            <div
              key={`second-${certificate.name}-${index}`}
              className="flex h-20 w-[160px] shrink-0 items-center justify-center px-6"
            >
              <img
                src={certificate.image}
                alt={certificate.name}
                className="max-h-20 max-w-[110px] object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      {/* ================= OUR STORY ================= */}
      <div className="relative mx-auto max-w-7xl px-6 py-20 lg:py-28">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          {/* ================= LEFT IMAGE ================= */}
          <motion.div
            initial={{ opacity: 0, x: -70 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div
              className="
                relative
                h-[430px]
                overflow-hidden
                rounded-tl-[0px]
                rounded-tr-[110px]
                rounded-br-[110px]
                rounded-bl-[110px]
                shadow-[0_25px_60px_rgba(0,0,0,0.12)]
                sm:h-[500px]
                lg:h-[555px]
              "
            >
              <img
                src="/images/image2.png"
                alt="Nature Harvest agriculture"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />

              {/* Image overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#00534f]/50 via-transparent to-transparent" />

              {/* ================= SOCIAL STATS ================= */}
              <div
                className="
                  absolute
                  bottom-0
                  left-[28%]
                  flex
                  w-[52%]
                  min-w-[280px]
                  items-center
                  justify-center
                  rounded-tl-[0px]
                  rounded-tr-[90px]
                  bg-[#00534f]
                  px-6
                  py-6
                  text-white
                  sm:py-7
                "
              >
                {/* Followers */}
                <div className="flex flex-1 flex-col items-center">
                  <span className="text-4xl font-bold sm:text-5xl">2K</span>

                  <span className="mt-1 text-xs uppercase tracking-wider text-white/80 sm:text-sm">
                    Followers
                  </span>
                </div>

                {/* Divider */}
                <div className="h-12 w-px bg-white/30" />

                {/* Likes */}
                <div className="flex flex-1 flex-col items-center">
                  <span className="text-4xl font-bold sm:text-5xl">23K</span>

                  <span className="mt-1 text-xs uppercase tracking-wider text-white/80 sm:text-sm">
                    Likes
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ================= RIGHT CONTENT ================= */}
          <motion.div
            initial={{ opacity: 0, x: 70 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            {/* Section Label */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="
                mb-7
                inline-flex
                rounded-r-full
                rounded-bl-full
                bg-[#fbe4b8]
                px-8
                py-3
                text-sm
                font-medium
                uppercase
                tracking-wider
                text-[#173f40]
              "
            >
              Our Story
            </motion.div>

            {/* Heading */}
            <h2
              className="
                max-w-xl
                text-4xl
                font-bold
                leading-[1.12]
                text-[#075657]
                sm:text-5xl
                lg:text-[52px]
              "
            >
              Welcome To
              <br />
              Nature Harvest
            </h2>

            {/* Description */}
            <p
              className="
                mt-8
                max-w-2xl
                text-[17px]
                leading-8
                text-[#074f54]
              "
            >
              Nature Harvest is a premier agri-export brand delivering
              sustainably sourced, high-quality rice, spices, cereals, pulses,
              millets, and other agricultural products to buyers worldwide.
            </p>

            <p
              className="
                mt-4
                max-w-2xl
                text-[17px]
                leading-8
                text-[#074f54]
              "
            >
              With a trusted network of producers, we maintain rigorous quality
              standards and global compliance while creating reliable and
              customized solutions for our customers.
            </p>

            {/* Button */}
            <div className="mt-8">
              <Link
                to="/about/our-story"
                className="
                  inline-flex
                  min-w-[220px]
                  items-center
                  justify-center
                  rounded-br-[65px]
                  rounded-tl-[65px]
                  bg-[#f2a619]
                  px-10
                  py-4
                  text-base
                  font-semibold
                  text-[#073f41]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-[#ffb52b]
                  hover:shadow-[0_15px_35px_rgba(242,166,25,0.25)]
                "
              >
                About Us
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ================= FEATURE STRIP ================= */}

      <div className="relative overflow-hidden border-y border-emerald-100 bg-emerald-50 py-5">
        <style>
          {`
      @keyframes serviceMarquee {
        from {
          transform: translateX(0);
        }
        to {
          transform: translateX(-50%);
        }
      }

      .service-marquee {
        animation: serviceMarquee 25s linear infinite;
      }

      .service-marquee:hover {
        animation-play-state: paused;
      }
    `}
        </style>

        <div className="service-marquee flex w-max items-center">
          {/* First Set */}
          {[
            "Custom Import Solutions",
            "Rice Export",
            "Spices Supplier",
            "Cereals Export",
            "Pulses Trading",
            "Millets Distribution",
            "Agricultural Products",
          ].map((item, index) => (
            <div
              key={`first-${index}`}
              className="flex shrink-0 items-center gap-8 px-8 text-lg font-semibold text-emerald-900 md:text-xl"
            >
              <span className="text-2xl">🌾</span>
              <span>{item}</span>
            </div>
          ))}

          {/* Duplicate Set — Seamless Loop */}
          {[
            "Custom Import Solutions",
            "Rice Export",
            "Spices Supplier",
            "Cereals Export",
            "Pulses Trading",
            "Millets Distribution",
            "Agricultural Products",
          ].map((item, index) => (
            <div
              key={`second-${index}`}
              className="flex shrink-0 items-center gap-8 px-8 text-lg font-semibold text-emerald-900 md:text-xl"
            >
              <span className="text-2xl">🌾</span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurStory;
