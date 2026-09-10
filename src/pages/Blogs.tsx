import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowRight } from "lucide-react";
 import Breadcrumb from "../components/Breadcrub"; // Un-comment this

// --- MOCK BLOG DATA ---
const blogPosts = [
  {
    id: 1,
    title: "The Growing Demand for Millets in the Global Marke...",
    date: "03 February, 2025",
    month: "February",
    image: "https://images.unsplash.com/photo-1595856453919-b6b6ecaf3888?auto=format&fit=crop&q=80", // Placeholder
  },
  {
    id: 2,
    title: "How to Choose the Right Rice for Your Needs",
    date: "23 January, 2025",
    month: "January",
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&q=80", // Placeholder
  },
  {
    id: 3,
    title: "The Benefits of Sourcing Sustainable Agricultural ...",
    date: "23 January, 2025",
    month: "January",
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&q=80", // Placeholder
  },
  // Add more posts here
];

const filterMonths = ["All", "January", "February", "March", "April", "May"];

// --- ANIMATION VARIANTS ---
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const Blogs = () => {
  const [selectedMonth, setSelectedMonth] = useState("All");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Filter Logic
  const filteredBlogs = blogPosts.filter((post) =>
    selectedMonth === "All" ? true : post.month === selectedMonth
  );

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="min-h-screen bg-[#f8f9fa] pb-20">
      <Breadcrumb title="Blogs" items={[{ label: "Home", path: "/" }, { label: "Blogs" }]} />

      <div className="mx-auto w-full max-w-7xl px-4 pt-10 sm:px-6 lg:px-8">
        
        {/* Header & Filter Section */}
        <div className="mb-8 flex items-end justify-end">
          {/* Custom Dropdown exactly like the reference image */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex w-44 items-center justify-between rounded-t-md bg-[#075657] px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#064a4b]"
            >
              Filter Blogs
              <motion.div animate={{ rotate: isDropdownOpen ? 180 : 0 }}>
                <ChevronDown className="h-4 w-4" />
              </motion.div>
            </button>

            {/* Dropdown Menu */}
            <AnimatePresence>
              {isDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute right-0 top-full z-20 w-44 rounded-b-md bg-white shadow-lg border-x border-b border-gray-200"
                >
                  <ul className="py-1">
                    {filterMonths.map((month) => (
                      <li key={month}>
                        <button
                          onClick={() => {
                            setSelectedMonth(month);
                            setIsDropdownOpen(false);
                          }}
                          className={`w-full px-4 py-2 text-left text-sm transition-colors hover:bg-gray-50 ${
                            selectedMonth === month
                              ? "bg-[#075657] text-white hover:bg-[#075657]"
                              : "text-gray-700"
                          }`}
                        >
                          {month}
                        </button>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Blogs Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {filteredBlogs.length > 0 ? (
            filteredBlogs.map((post) => (
              <motion.div
                key={post.id}
                variants={itemVariants}
                className="group flex cursor-pointer flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                {/* Image Container with Hover Green Screen */}
                <div className="relative h-56 w-full overflow-hidden sm:h-64">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* The Green Screen Overlay */}
                  <div className="absolute inset-0 z-10 flex items-center justify-center bg-[#075657]/85 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <span className="flex items-center gap-2 rounded-full border border-white px-5 py-2 text-sm font-semibold text-white">
                      Read Article <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>

                  {/* Date Badge (Orange) */}
                  <div className="absolute bottom-3 left-3 z-20 rounded bg-[#f2a318] px-3 py-1 text-xs font-bold text-white shadow-sm">
                    {post.date}
                  </div>
                </div>

                {/* Content Container */}
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="line-clamp-2 text-lg font-semibold leading-snug text-gray-800 transition-colors group-hover:text-[#075657]">
                    {post.title}
                  </h3>
                </div>
              </motion.div>
            ))
          ) : (
            <div className="col-span-full py-20 text-center text-gray-500">
              No blogs found for {selectedMonth}.
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Blogs;