 import React from "react";
import { motion } from "framer-motion";
import { MapPin, Mail, Phone } from "lucide-react";

// import Breadcrumb from "../components/Breadcrub";
 
import Button from "../components/Button";
import SectionTitle from "../components/SectionTitle";

// --- ANIMATION VARIANTS ---
const slideRight = {
  hidden: { opacity: 0, x: -40 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const slideLeft = {
  hidden: { opacity: 0, x: 40 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

// --- CONTACT DETAILS ---
const contactDetails = [
  {
    id: 1,
    icon: MapPin,
    title: "Location",
    content: (
      <>
        Office No. 741, Emaar Emrald Plaza,
        <br />
        Golf Course Ext Rd, Sector 65,
        <br />
        Gurugram, Haryana 122018
      </>
    ),
  },
  {
    id: 2,
    icon: Mail,
    title: "Send Email",
    content: "info@natureharvest.co.in",
  },
  {
    id: 3,
    icon: Phone,
    title: "Call Anytime",
    content: "+91 844 8028 999",
  },
];

const Contacts = () => {
  return (
    <div className="min-h-screen bg-[#f8f9fa]">
      {/* Breadcrumb */}
      {/* <Breadcrumb /> */}

      {/* --- TOP MAP SECTION --- */}
      <div className="h-[350px] w-full bg-gray-200 sm:h-[450px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3509.1121028711826!2d77.0601323!3d28.3980644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d23b2d15eb07f%3A0xc68297b5e28a55!2sEmaar%20Emerald%20Plaza!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Map Location"
          className="grayscale filter transition-all duration-500 hover:grayscale-0"
        />
      </div>

      {/* --- MAIN CONTENT SECTION --- */}
      <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          {/* LEFT COLUMN */}
          <motion.div
            variants={slideRight}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-col"
          >
            {/* Section Title */}
            <SectionTitle
              badge="Contact Now"
              title="Have An Enquiry Or Some Feedback?"
              description="We would love to hear from you. Maybe you have a question about one of our events or membership options? Fill in the details on the form and we'll get back to you as soon as we possibly can."
            />

            {/* Contact Details */}
            <div className="mt-12 flex flex-col gap-8">
              {contactDetails.map(
                ({ id, icon: Icon, title, content }) => (
                  <div key={id} className="flex items-start gap-5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#075657] text-white shadow-md">
                      <Icon className="h-5 w-5" />
                    </div>

                    <div>
                      <p className="text-sm text-gray-500">{title}</p>

                      <p className="mt-1 text-base font-semibold leading-relaxed text-[#075657]">
                        {content}
                      </p>
                    </div>
                  </div>
                )
              )}
            </div>
          </motion.div>

          {/* RIGHT COLUMN */}
          <motion.div
            variants={slideLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <div className="rounded-lg bg-[#14423e] p-8 shadow-xl sm:p-10 lg:p-12">
              <form
                className="flex flex-col gap-6"
                onSubmit={(e) => e.preventDefault()}
              >
                {/* Inputs */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <input
                    type="text"
                    placeholder="Your Name*"
                    required
                    className="w-full rounded bg-white px-4 py-3.5 text-sm text-gray-800 outline-none placeholder:text-gray-500 focus:ring-2 focus:ring-[#f2a318]"
                  />

                  <input
                    type="email"
                    placeholder="Email*"
                    required
                    className="w-full rounded bg-white px-4 py-3.5 text-sm text-gray-800 outline-none placeholder:text-gray-500 focus:ring-2 focus:ring-[#f2a318]"
                  />

                  <input
                    type="tel"
                    placeholder="Phone*"
                    required
                    className="w-full rounded bg-white px-4 py-3.5 text-sm text-gray-800 outline-none placeholder:text-gray-500 focus:ring-2 focus:ring-[#f2a318]"
                  />

                  <input
                    type="text"
                    placeholder="Subject*"
                    required
                    className="w-full rounded bg-white px-4 py-3.5 text-sm text-gray-800 outline-none placeholder:text-gray-500 focus:ring-2 focus:ring-[#f2a318]"
                  />
                </div>

                {/* Message */}
                <textarea
                  rows={5}
                  placeholder="Message*"
                  required
                  className="w-full resize-y rounded bg-white px-4 py-4 text-sm text-gray-800 outline-none placeholder:text-gray-500 focus:ring-2 focus:ring-[#f2a318]"
                />

                {/* reCAPTCHA */}
                <div className="flex w-fit items-center gap-4 rounded-md border border-gray-300 bg-[#f9f9f9] px-4 py-3 shadow-sm">
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      className="h-7 w-7 cursor-pointer rounded-sm border-gray-300 text-blue-600 focus:ring-blue-500"
                    />

                    <span className="text-sm text-gray-700">
                      I'm not a robot
                    </span>
                  </div>

                  <div className="ml-6 flex flex-col items-center">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-8 w-8 text-blue-500"
                      fill="currentColor"
                    >
                      <path d="M22 12c0 5.52-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2c1.78 0 3.44.47 4.9 1.28L15.35 4.8C14.33 4.29 13.2 4 12 4c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8h2zM12 6c3.31 0 6 2.69 6 6v1h-2v-1c0-2.21-1.79-4-4-4s-4 1.79-4 4 1.79 4 4 4v2c-3.31 0-6-2.69-6-6s2.69-6 6-6z" />
                    </svg>

                    <span className="text-[10px] text-gray-500">
                      reCAPTCHA
                    </span>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="mt-2">
                  <Button type="submit">
                    Send Message
                  </Button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;