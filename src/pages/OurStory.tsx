 import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Breadcrumb from "../components/Breadcrub";
import SectionTitle from "../components/SectionTitle";
import Button from "../components/Button";

// --- DATA ARRAYS ---
const accordionItems = [
  {
    title: "A Trusted Name in Agri-Exports",
    content: "Nature Harvest is a premier Agri-export brand specializing in sustainably sourced rice, spices, millets, cereals, and pulses.\n\nWe serve boutique importers, multinational corporations, and everyone in between.",
  },
  {
    title: "Sustainability at Our Core",
    content: "From ethical sourcing to environmentally conscious operations, we are committed to reducing our ecological footprint. Our mission is to promote sustainable agriculture that benefits both the planet and the communities we work with.",
  },
  {
    title: "Uncompromising Quality",
    content: "Every product is rigorously tested and certified to meet the highest international standards. We go the extra mile with third-party inspections and certifications, ensuring peace of mind for our clients.",
  },
  {
    title: "Global Expertise, Local Roots",
    content: "Our network of producers is rooted in India's agricultural heartlands, ensuring authentic and high-quality sourcing. Our leadership brings extensive experience in international business and global market expansion.",
  },
  {
    title: "Commitment to Transparency",
    content: "Open and honest communication underpins all our relationships, fostering trust and long-term partnerships.",
  },
  {
    title: "A Vision for the Future",
    content: "At Nature Harvest, we aim to bring India's agricultural bounty to the global stage, empowering communities and fostering sustainable development along the way.",
  },
];

const whoWeAreFeatures = [
  {
    title: "India: A Global Agri-Export Leader",
    desc: "India's diverse agriculture makes it a key player in global food supply. We source from certified producers to deliver premium grains, spices, and pulses worldwide.",
    svgPath: "M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z",
  },
  {
    title: "Bridging Markets, Connecting Communities",
    desc: "We link farmers, manufacturers, and global buyers through a seamless, transparent export process that meets international standards.",
    svgPath: "M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418",
  },
  {
    title: "Committed to Global Food Security",
    desc: "We support stable food supply chains through ethical sourcing and efficient logistics, ensuring essential commodities reach where they are needed most.",
    svgPath: "M12 2.25c-1.353 2.546-3.882 5.06-5.88 7.375-1.921 2.227-3.12 4.67-3.12 7.125 0 4.97 4.03 9 9 9s9-4.03 9-9c0-2.455-1.199-4.898-3.12-7.125-1.998-2.315-4.527-4.829-5.88-7.375z",
  },
];

const whyUsData = [
  { title: "Farm-Fresh Quality", desc: "Premium agricultural products sourced carefully from trusted producers.", icon: "01" },
  { title: "Sustainability", desc: "Ethical sourcing and responsible practices that support people and the planet.", icon: "02" },
  { title: "Global Standards", desc: "Rigorous quality control and compliance designed for international markets.", icon: "03" },
];

// --- ANIMATION VARIANTS ---
const slideLeft = { initial: { opacity: 0, x: -40 }, whileInView: { opacity: 1, x: 0 }, viewport: { once: true }, transition: { duration: 0.7 } };
const slideRight = { initial: { opacity: 0, x: 40 }, whileInView: { opacity: 1, x: 0 }, viewport: { once: true }, transition: { duration: 0.7 } };
const staggerContainer = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.15 } } };
const fadeUpItem = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

const OurStory = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <>
      <Breadcrumb
        title="Our Story"
        items={[{ label: "About Us", path: "/about/our-story" }, { label: "Our Story" }]}
      />

      {/* --- WHO WE ARE --- */}
      <section className="overflow-hidden bg-white px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div {...slideLeft} className="flex flex-col gap-5 sm:gap-6">
            <div className="group h-[200px] w-full overflow-hidden rounded-tl-2xl rounded-tr-[80px] rounded-bl-[80px] rounded-br-2xl shadow-md sm:h-[280px]">
              <img src="https://natureharvest.co.in/about-us/1.jpg" alt="Hands holding soil" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
            </div>
            <div className="group h-[200px] w-full overflow-hidden rounded-tl-[80px] rounded-tr-2xl rounded-bl-2xl rounded-br-[80px] shadow-md sm:h-[280px]">
              <img src="https://natureharvest.co.in/about-us/2.jpg" alt="Solar panels in a field" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
            </div>
          </motion.div>

          <motion.div {...slideRight}>
            <SectionTitle label="WHO WE ARE" title="Nature Harvest: Efficiency, Sustainability, Success." align="left" />
            <p className="mt-6 text-base leading-relaxed text-gray-600 sm:text-lg">
              At Nature Harvest, we pride ourselves on being more than just an Agri-export company. We are a trusted partner to businesses worldwide, delivering premium agricultural products with integrity, transparency, and a deep commitment to sustainability.
            </p>

            <div className="mt-10 flex flex-col gap-8">
              {whoWeAreFeatures.map((feature, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#f2a318] text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-6 w-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d={feature.svgPath} />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#075657] sm:text-xl">{feature.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-gray-600">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- OUR IDENTITY --- */}
      <section className="bg-[#f8f9fa] px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-10 text-center text-3xl font-bold text-[#075657] sm:mb-14 sm:text-4xl">Our Identity</h2>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-start">
            <div className="flex flex-col gap-4">
              {accordionItems.map((item, index) => {
                const isOpen = openIndex === index;
                return (
                  <div key={index} className={`overflow-hidden rounded-md transition-colors duration-300 ${isOpen ? "bg-[#f3e3be]" : "bg-[#f5e8cd]"}`}>
                    <button
                      onClick={() => setOpenIndex(isOpen ? -1 : index)}
                      className="flex w-full items-center justify-between px-5 py-4 text-left text-sm font-semibold text-[#075657] sm:px-6 sm:text-base"
                    >
                      <span>{item.title}</span>
                      <span className="shrink-0 text-xl font-normal">{isOpen ? "−" : "+"}</span>
                    </button>
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }}>
                          <div className="px-5 pb-5 text-xs leading-relaxed text-gray-700 sm:px-6 sm:text-sm">
                            {item.content.split("\n\n").map((paragraph, i) => (
                              <p key={i} className={i > 0 ? "mt-3" : ""}>{paragraph}</p>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

            <div className="group relative h-[450px] w-full sm:h-[450px] lg:h-full lg:min-h-[450px]">
              <div className="absolute inset-0 overflow-hidden rounded-tl-2xl rounded-tr-[80px] rounded-bl-[80px] rounded-br-2xl shadow-xl">
                <img src="https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&q=80" alt="Hands holding fresh harvest" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
              </div>
              <div className="absolute top-0 right-0 z-10 rounded-bl-[40px] bg-white px-5 py-3 shadow-md sm:px-6 sm:py-4">
                <div className="flex flex-col items-center justify-center gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8 text-green-600 sm:h-10 sm:w-10">
                    <path fillRule="evenodd" d="M12.516 2.17a.75.75 0 00-1.032 0 11.209 11.209 0 01-7.877 3.08.75.75 0 00-.722.515A12.74 12.74 0 002.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 00.374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 00-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08zm3.094 8.016a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                  </svg>
                  <span className="text-xs font-bold text-gray-800 sm:text-sm">Trusted</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FOUNDER --- */}
      <section className="overflow-hidden bg-[#f5faf9] px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <motion.div {...slideLeft} className="group relative">
            <div className="overflow-hidden rounded-tr-[100px] rounded-bl-[100px] shadow-[0_20px_40px_rgba(0,0,0,0.1)]">
              <img src="https://natureharvest.co.in/about-us/director.jpg" alt="Founder and CEO" className="h-[380px] w-full object-cover transition-transform duration-700 group-hover:scale-110 sm:h-[480px]" />
            </div>
            <div className="absolute -bottom-5 -right-2 z-10 rounded-tl-[30px] rounded-br-[30px] bg-[#f2a318] px-5 py-3 shadow-xl sm:-right-5 sm:px-6 sm:py-4">
              <p className="text-xs font-bold uppercase tracking-wider text-[#073f41]">Founder & CEO</p>
            </div>
          </motion.div>

          <motion.div {...slideRight}>
            <SectionTitle label="Founder & CEO" title="Achinta Banerjie" align="left" />
            <p className="mt-6 text-base leading-relaxed text-[#075657] sm:mt-7 sm:text-lg">
              Achinta Banerjie, Founder & CEO of Nature Harvest, has held leadership positions at renowned global corporations like Colgate-Palmolive, Unilever, Amway, and Tupperware Brands, driving global growth and market expansion.
            </p>
            <p className="mt-4 text-base leading-relaxed text-[#075657] sm:mt-5 sm:text-lg">
              With expertise in international business and supply chain management, he leads Nature Harvest with a focus on integrity, transparency, quality, and partner success.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <div className="rounded-tl-[25px] rounded-br-[25px] bg-white px-5 py-3 shadow-sm sm:px-6 sm:py-4">
                <p className="text-xl font-bold text-[#00595d] sm:text-2xl">25+</p>
                <p className="text-[10px] font-medium text-gray-600 sm:text-xs">Years Experience</p>
              </div>
              <div className="rounded-tl-[25px] rounded-br-[25px] bg-white px-5 py-3 shadow-sm sm:px-6 sm:py-4">
                <p className="text-xl font-bold text-[#00595d] sm:text-2xl">Global</p>
                <p className="text-[10px] font-medium text-gray-600 sm:text-xs">Business Experience</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- MISSION & COMMITMENT COMBINED --- */}
      <section className="overflow-hidden bg-white px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div {...slideLeft} className="group h-[300px] w-full sm:h-[450px]">
            <div className="h-full w-full overflow-hidden rounded-bl-[80px] rounded-tr-[80px] shadow-md sm:rounded-bl-[100px] sm:rounded-tr-[100px]">
              <img src="https://natureharvest.co.in/about-us/whyus.png" alt="Woman harvesting grains" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
            </div>
          </motion.div>

          <motion.div {...slideRight} className="flex flex-col gap-8 sm:gap-10">
            <div>
              <span className="inline-block rounded-full bg-[#f5e8cd] px-4 py-1.5 text-[10px] font-bold uppercase tracking-wider text-[#075657] sm:text-xs">
                Our Mission
              </span>
              <p className="mt-4 text-sm leading-relaxed text-gray-600 sm:mt-5 sm:text-base lg:text-lg">
                At Nature Harvest, we are proud to be a premium export brand, delivering naturally sourced, high-quality spices, rice, and grains to global markets. Our mission is centered on purity, sustainability, and ethical sourcing, ensuring that every product we offer is harvested with the utmost care and attention to quality.
              </p>
            </div>
            <div>
              <span className="inline-block rounded-full bg-[#f5e8cd] px-4 py-1.5 text-[10px] font-bold uppercase tracking-wider text-[#075657] sm:text-xs">
                Our Commitment
              </span>
              <p className="mt-4 text-sm leading-relaxed text-gray-600 sm:mt-5 sm:text-base lg:text-lg">
                At Nature Harvest, we are committed to providing our customers with the highest quality products and services. We believe in transparency, sustainability, and ethical sourcing, and we are dedicated to making a positive impact on the world.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- WHY CHOOSE US --- */}
      <section className="bg-white px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <motion.div initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <SectionTitle label="Why Choose Us" title="Quality You Can Trust" description="Farm-fresh quality, sustainable sourcing and global standards are at the heart of everything we do." />
          </motion.div>
          
          {/* Staggered Grid Application */}
          <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-50px" }} className="mt-10 grid gap-6 sm:mt-12 md:grid-cols-3">
            {whyUsData.map((data, idx) => (
              <WhyCard key={idx} {...data} />
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
};

// --- OPTIMIZED WHY CARD ---
const WhyCard = ({ title, description, icon }) => {
  return (
    <motion.div variants={fadeUpItem} className="group rounded-tl-[40px] rounded-br-[40px] bg-[#fff3d7] p-6 transition duration-300 hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(0,0,0,0.08)] sm:rounded-tl-[50px] sm:rounded-br-[50px] sm:p-7">
      <div className="flex items-center justify-between">
        <span className="text-sm font-bold text-[#f2a318]">{icon}</span>
        <span className="text-2xl text-[#00595d] transition-transform duration-300 group-hover:rotate-45">+</span>
      </div>
      <h3 className="mt-6 text-lg font-bold text-[#00595d] sm:mt-8 sm:text-xl">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-[#075657] sm:mt-3">{description}</p>
    </motion.div>
  );
};

export default OurStory;