 import { Link } from "react-router-dom";
import { motion } from "framer-motion";

type BreadcrumbItem = {
  label: string;
  path?: string;
};

type BreadcrumbProps = {
  title: string;
  items?: BreadcrumbItem[];
  backgroundImage?: string;
};

const Breadcrumb = ({
  title,
  items = [],
  backgroundImage = "/images/breadcrumb.jpg",
}: BreadcrumbProps) => {
  return (
    <section
      className="relative overflow-hidden bg-[#075b5b] py-20 sm:py-24"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#075b5b]/75" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 text-center sm:px-8 lg:px-16">
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl"
        >
          {title}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-5 flex flex-wrap items-center justify-center gap-2 text-sm font-medium"
        >
          <Link
            to="/"
            className="text-[#f2a318] transition hover:text-white"
          >
            Home
          </Link>

          {items.map((item, index) => (
            <span key={`${item.label}-${index}`} className="flex items-center gap-2">
              <span className="text-white/60">/</span>

              {item.path ? (
                <Link
                  to={item.path}
                  className="text-[#f2a318] transition hover:text-white"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-white">{item.label}</span>
              )}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Breadcrumb;
