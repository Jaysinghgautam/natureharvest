 

// import { useState } from "react";
// import { motion } from "framer-motion";

// type Social = {
//   name: string;
//   href: string;
//   bg: string;
//   icon: string;
// };

// type Contact = {
//   name: string;
//   href: string;
//   icon: string;
//   external?: boolean;
// };

// const socials: Social[] = [
//   { name: "Facebook", href: "#", bg: "#1877F2", icon: "f" },
//   { name: "Twitter", href: "#", bg: "#111", icon: "𝕏" },
//   { name: "Instagram", href: "#", bg: "#E1306C", icon: "◎" },
//   { name: "LinkedIn", href: "#", bg: "#0077B5", icon: "in" },
//   { name: "YouTube", href: "#", bg: "#FF0000", icon: "▶" },
// ];

// const contacts: Contact[] = [
//   {
//     name: "Call Us",
//     href: "tel:+918448028999",
//     icon: "☎",
//   },
//   {
//     name: "WhatsApp",
//     href: "https://wa.me/918448028999",
//     icon: "◉",
//     external: true,
//   },
//   {
//     name: "Email Us",
//     href: "mailto:info@natureharvest.co.in",
//     icon: "✉",
//   },
//   {
//     name: "Send Enquiry",
//     href: "#contact",
//     icon: "▤",
//   },
// ];

// const stats = [
//   ["100%", "Quality"],
//   ["Global", "Reach"],
//   ["Farm", "Sourced"],
// ];

// const Hero = () => {
//   const [connectOpen, setConnectOpen] = useState(false);

//   return (
//     <section className="relative min-h-screen overflow-hidden bg-[#eef5f4]">

//       {/* Background */}
//       <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-[#f2a318]/10 blur-3xl" />
//       <div className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full bg-[#00595d]/5 blur-3xl" />
//       <div className="pointer-events-none absolute bottom-0 left-1/3 h-60 w-60 rounded-full bg-[#f2a318]/5 blur-3xl" />

//       {/* Hero Content */}
//       <div className="relative mx-auto flex min-h-screen max-w-[1450px] items-center px-5 py-16 sm:px-8 lg:px-10 xl:px-14">
//         <div className="grid w-full items-center gap-12 lg:grid-cols-[54%_46%] xl:gap-16">

//           {/* Video */}
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8 }}
//             className="relative flex justify-center lg:justify-start"
//           >
//             <div className="pointer-events-none absolute -left-8 -top-8 h-28 w-28 rounded-full border border-[#f2a318]/30" />

//             <div className="pointer-events-none absolute -bottom-5 left-8 z-10 grid grid-cols-4 gap-2 opacity-50">
//               {Array.from({ length: 12 }).map((_, i) => (
//                 <span
//                   key={i}
//                   className="h-1.5 w-1.5 rounded-full bg-[#f2a318]"
//                 />
//               ))}
//             </div>

//             <div className="relative h-[390px] w-full max-w-[745px] overflow-hidden rounded-tr-[80px] rounded-bl-[80px] bg-black shadow-[0_30px_70px_rgba(0,70,70,0.16)] sm:h-[460px] lg:h-[510px] xl:h-[530px]">
//               <video
//                 className="h-full w-full object-cover"
//                 autoPlay
//                 muted
//                 loop
//                 playsInline
//                 preload="auto"
//               >
//                 <source
//                   src="https://natureharvest.co.in/videos/2.mp4"
//                   type="video/mp4"
//                 />
//               </video>

//               <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-[#003f42]/20 via-transparent to-white/10" />

//               <div className="absolute bottom-5 left-5 rounded-full border border-white/30 bg-white/15 px-4 py-2 backdrop-blur-md">
//                 <span className="text-xs font-medium tracking-wide text-white sm:text-sm">
//                   🌱 Naturally Sourced
//                 </span>
//               </div>
//             </div>
//           </motion.div>

//           {/* Content */}
//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8 }}
//             className="relative"
//           >
//             <div className="mb-5 flex items-center gap-3">
//               <span className="h-[2px] w-10 bg-[#f2a318]" />
//               <p className="text-xs font-semibold tracking-[0.2em] text-[#e99c00] sm:text-sm">
//                 QUALITY AGRO EXPORT
//               </p>
//             </div>

//             <h1 className="max-w-[650px] text-[38px] font-bold leading-[1.08] tracking-[-1.5px] text-[#00595d] sm:text-[48px] lg:text-[52px] xl:text-[57px]">
//               Sustainably Sourced,
//               <span className="block">
//                 <span className="relative inline-block">
//                   Globally Trusted
//                   <span className="absolute -bottom-2 left-0 h-1 w-[70%] rounded-full bg-[#f2a318]" />
//                 </span>
//               </span>
//             </h1>

//             <p className="mt-8 max-w-[590px] text-[16px] leading-[1.8] text-[#145e61] sm:text-[18px]">
//               Delivering the finest agricultural products from India to the
//               world with unmatched quality and trust. Every grain, every
//               spice — carefully sourced, rigorously tested, and expertly
//               delivered.
//             </p>

//             <div className="mt-6 flex items-center gap-3">
//               <div className="h-9 w-1 rounded-full bg-[#f2a318]" />
//               <p className="text-base font-medium text-[#d99300] sm:text-lg">
//                 Nature Harvest — where purity meets performance.
//               </p>
//             </div>

//             {/* Buttons */}
//             <div className="mt-10 flex flex-wrap gap-4">
//               <a
//                 href="#products"
//                 className="group relative flex h-14 min-w-[195px] items-center justify-center overflow-hidden rounded-tl-[5px] rounded-tr-[42px] rounded-br-[5px] rounded-bl-[42px] bg-[#f2a318] px-7 text-base font-semibold text-[#111] shadow-[0_10px_25px_rgba(242,163,24,0.22)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(242,163,24,0.32)]"
//               >
//                 <span className="relative z-10">Our Products</span>
//                 <span className="absolute -right-10 h-28 w-28 rounded-full bg-white/15 transition-all duration-500 group-hover:right-0" />
//               </a>

//               <a
//                 href="#story"
//                 className="group flex h-14 min-w-[195px] items-center justify-center gap-3 rounded-tl-[5px] rounded-tr-[42px] rounded-br-[5px] rounded-bl-[42px] border-2 border-[#f2a318] bg-white/30 px-7 text-base font-semibold text-[#00595d] backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:bg-[#f2a318] hover:text-[#111]"
//               >
//                 Our Story
//                 <span className="transition-transform group-hover:translate-x-1">
//                   →
//                 </span>
//               </a>
//             </div>

//             {/* Stats */}
//             <div className="mt-10 flex flex-wrap gap-6 border-t border-[#00595d]/10 pt-7 sm:gap-7">
//               {stats.map(([value, label], index) => (
//                 <div key={label} className="flex items-center gap-6">
//                   {index > 0 && (
//                     <div className="h-10 w-px bg-[#00595d]/15" />
//                   )}

//                   <div>
//                     <p className="text-2xl font-bold text-[#00595d]">
//                       {value}
//                     </p>
//                     <p className="mt-1 text-xs font-medium uppercase tracking-wider text-[#557b7b]">
//                       {label}
//                     </p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </motion.div>
//         </div>
//       </div>

//       {/* Social Media */}
//       <div className="fixed right-0 top-1/2 z-[80] flex -translate-y-1/2 flex-col overflow-hidden rounded-l-md shadow-[0_8px_25px_rgba(0,0,0,0.15)] sm:top-[100px] sm:translate-y-0">
//         {socials.map((social) => (
//           <a
//             key={social.name}
//             href={social.href}
//             aria-label={social.name}
//             className="flex h-10 w-10 items-center justify-center text-white transition-all duration-300 hover:w-12 sm:h-12 sm:w-12 sm:hover:w-14"
//             style={{ backgroundColor: social.bg }}
//           >
//             <span className="text-xs font-bold sm:text-base">
//               {social.icon}
//             </span>
//           </a>
//         ))}
//       </div>

//       {/* Connect Now */}
//       <div className="fixed bottom-5 right-5 z-[100]">

//         {/* Contact Options */}
//         <div
//           className={`absolute bottom-[72px] right-0 flex flex-col items-end gap-3 transition-all duration-500 ${
//             connectOpen
//               ? "pointer-events-auto translate-y-0 opacity-100"
//               : "pointer-events-none translate-y-8 opacity-0"
//           }`}
//         >
//           {contacts.map((contact) => (
//             <a
//               key={contact.name}
//               href={contact.href}
//               target={contact.external ? "_blank" : undefined}
//               rel={contact.external ? "noreferrer" : undefined}
//               className="group flex items-center gap-3 transition duration-300 hover:-translate-x-1"
//             >
//               <span className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#00595d] shadow-[0_6px_20px_rgba(0,0,0,0.12)]">
//                 {contact.name}
//               </span>

//               <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#f6a51b] text-xl text-white shadow-[0_8px_25px_rgba(242,163,24,0.35)] transition duration-300 group-hover:scale-110 sm:h-14 sm:w-14">
//                 {contact.icon}
//               </span>
//             </a>
//           ))}
//         </div>

//         {/* Button */}
//         <button
//           type="button"
//           onClick={() => setConnectOpen((open) => !open)}
//           aria-expanded={connectOpen}
//           className="group relative flex h-14 min-w-[175px] items-center justify-center gap-3 overflow-hidden rounded-[14px] bg-[#f6a51b] px-6 text-base font-semibold text-white shadow-[0_10px_30px_rgba(242,163,24,0.35)] transition duration-300 hover:-translate-y-1 hover:bg-[#ee9f0d] active:scale-95 sm:h-[58px] sm:min-w-[205px] sm:text-lg"
//         >
//           <span className="absolute -left-20 top-0 h-full w-16 rotate-[20deg] bg-white/20 transition-all duration-700 group-hover:left-[110%]" />

//           <span
//             className={`relative flex h-7 w-7 items-center justify-center text-xl transition-transform duration-300 ${
//               connectOpen ? "rotate-180" : ""
//             }`}
//           >
//             {connectOpen ? "×" : "☎"}
//           </span>

//           <span className="relative">
//             {connectOpen ? "Close" : "Connect Now"}
//           </span>
//         </button>
//       </div>
//     </section>
//   );
// };

// export default Hero;


 import { useState } from "react";
import { motion } from "framer-motion";
import Button from "./Button";

type Social = {
  name: string;
  href: string;
  bg: string;
  icon: string;
};

type Contact = {
  name: string;
  href: string;
  icon: string;
  external?: boolean;
};

const socials: Social[] = [
  { name: "Facebook", href: "#", bg: "#1877F2", icon: "f" },
  { name: "Twitter", href: "#", bg: "#111", icon: "𝕏" },
  {
    name: "Instagram",
    href: "https://www.instagram.com/natureharvest.in/",
    bg: "#E1306C",
    icon: "◎",
  },
  { name: "LinkedIn", href: "#", bg: "#0077B5", icon: "in" },
  { name: "YouTube", href: "#", bg: "#FF0000", icon: "▶" },
];

const contacts: Contact[] = [
  { name: "Call Us", href: "tel:+918448028999", icon: "☎" },
  {
    name: "WhatsApp",
    href: "https://wa.me/918448028999",
    icon: "◉",
    external: true,
  },
  {
    name: "Email Us",
    href: "mailto:info@natureharvest.co.in",
    icon: "✉",
  },
  { name: "Send Enquiry", href: "#contact", icon: "▤" },
];

const stats = [
  ["100%", "Quality"],
  ["Global", "Reach"],
  ["Farm", "Sourced"],
];

const Hero = () => {
  const [connectOpen, setConnectOpen] = useState(false);

  return (
    <section className="relative overflow-hidden bg-[#eef5f4]">
      {/* Background Decorations */}
      <div className="absolute -left-40 top-20 h-80 w-80 rounded-full bg-[#f2a318]/10 blur-3xl" />
      <div className="absolute -right-32 top-0 h-96 w-96 rounded-full bg-[#00595d]/5 blur-3xl" />

      {/* Hero Container */}
      <div className="relative mx-auto flex min-h-[calc(100vh-80px)] max-w-[1500px] items-center px-5 py-12 sm:px-8 lg:px-10 xl:px-14">
        <div className="grid w-full items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14 xl:gap-16">

          {/* Video */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -left-6 -top-6 h-24 w-24 rounded-full border border-[#f2a318]/30" />

            <div className="relative h-[380px] w-full overflow-hidden rounded-tr-[95px] rounded-bl-[95px] bg-black shadow-[0_25px_60px_rgba(0,70,70,0.15)] sm:h-[450px] lg:h-[500px] xl:h-[540px]">
              <video
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                className="h-full w-full object-cover"
              >
                <source
                  src="https://natureharvest.co.in/videos/2.mp4"
                  type="video/mp4"
                />
              </video>

              <div className="absolute inset-0 bg-gradient-to-tr from-[#003f42]/20 via-transparent to-white/10" />

              <span className="absolute bottom-5 left-5 rounded-full border border-white/30 bg-white/15 px-4 py-2 text-xs font-medium text-white backdrop-blur-md sm:text-sm">
                🌱 Naturally Sourced
              </span>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="max-w-[620px]"
          >
            <div className="mb-5 flex items-center gap-3">

              <span className="text-xs font-semibold tracking-[0.2em] text-[#e99c00] sm:text-sm">
                QUALITY AGRO EXPORT
              </span>
            </div>

            <h1 className="text-[38px] font-bold leading-[1.08] tracking-[-1.5px] text-[#00595d] sm:text-[48px] lg:text-[52px] xl:text-[57px]">
              Sustainably Sourced,
              <span className="mt-1 block">
                <span className="relative inline-block">
                  Globally Trusted
              
                </span>
              </span>
            </h1>

            <p className="mt-7 max-w-[590px] text-[16px] leading-[1.8] text-[#145e61] sm:text-[18px]">
              Delivering the finest agricultural products from India to the
              world with unmatched quality and trust. Every grain, every
              spice — carefully sourced, rigorously tested, and expertly
              delivered.
            </p>

            <div className="mt-5 flex items-center gap-3">
 

              <p className="text-base font-medium text-[#d99300] sm:text-lg">
                Nature Harvest — where purity meets performance.
              </p>
            </div>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">
              <Button to="/products" className=" hover:!text-[#ffffff]">Our Products</Button>

              <Button
                to="/about/our-story"
                className="border-2 border-[#f2a318] bg-white/30 !text-[#00595d] hover:!bg-[#f2a318] hover:!text-black"
              >
                Our Story 
              </Button>
            </div>

            {/* Stats */}
            <div className="mt-8 flex flex-wrap gap-6 border-t border-[#00595d]/10 pt-6">
              {stats.map(([value, label], index) => (
                <div key={label} className="flex items-center gap-6">
                  {index > 0 && (
                    <span className="h-10 w-px bg-[#00595d]/15" />
                  )}

                  <div>
                    <p className="text-2xl font-bold text-[#00595d]">
                      {value}
                    </p>

                    <p className="mt-1 text-xs font-medium uppercase tracking-wider text-[#557b7b]">
                      {label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Social Media */}
      <div className="fixed right-0 top-1/2 z-[80] flex -translate-y-1/2 flex-col overflow-hidden rounded-l-md shadow-lg sm:top-[100px] sm:translate-y-0">
        {socials.map((social) => (
          <a
            key={social.name}
            href={social.href}
            target={social.href.startsWith("http") ? "_blank" : undefined}
            rel="noreferrer"
            aria-label={social.name}
            className="flex h-10 w-10 items-center justify-center text-white transition-all hover:w-12 sm:h-12 sm:w-12"
            style={{ backgroundColor: social.bg }}
          >
            <span className="text-xs font-bold sm:text-base">
              {social.icon}
            </span>
          </a>
        ))}
      </div>

      {/* Connect Now */}
      <div className="fixed bottom-5 right-5 z-[100]">
        <div
          className={`absolute bottom-[72px] right-0 flex flex-col items-end gap-3 transition-all duration-500 ${
            connectOpen
              ? "pointer-events-auto translate-y-0 opacity-100"
              : "pointer-events-none translate-y-8 opacity-0"
          }`}
        >
          {contacts.map((contact) => (
            <a
              key={contact.name}
              href={contact.href}
              target={contact.external ? "_blank" : undefined}
              rel={contact.external ? "noreferrer" : undefined}
              className="group flex items-center gap-3 transition duration-300 hover:-translate-x-1"
            >
              <span className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#00595d] shadow-lg">
                {contact.name}
              </span>

              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#f6a51b] text-xl text-white shadow-lg transition group-hover:scale-110 sm:h-14 sm:w-14">
                {contact.icon}
              </span>
            </a>
          ))}
        </div>

        <button
          type="button"
          onClick={() => setConnectOpen((open) => !open)}
          aria-expanded={connectOpen}
          className="flex h-14 min-w-[175px] items-center justify-center gap-3 rounded-[14px] bg-[#f6a51b] px-6 text-base font-semibold text-white shadow-lg transition hover:-translate-y-1 hover:bg-[#ee9f0d] active:scale-95 sm:h-[58px] sm:min-w-[205px] sm:text-lg"
        >
          <span className="text-xl">{connectOpen ? "×" : "☎"}</span>
          {connectOpen ? "Close" : "Connect Now"}
        </button>
      </div>
    </section>
  );
};

export default Hero;