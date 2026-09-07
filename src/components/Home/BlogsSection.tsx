import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const blogs = [
  {
    date: "03",
    month: "FEB",
    title: "The Growing Demand for Millets in the Global Market",
    image: "https://natureharvest.co.in/blog-millets.png",
    slug: "/blogs/growing-demand-for-millets",
  },
  {
    date: "23",
    month: "JAN",
    title: "How to Choose the Right Rice for Your Needs",
    image: "https://natureharvest.co.in/blog-rice.png",
    slug: "/blogs/choose-right-rice",
  },
  {
    date: "23",
    month: "JAN",
    title: "The Benefits of Sourcing Sustainable Agricultural Products",
    image: "https://natureharvest.co.in/blog-sustainable.png",
    slug: "/blogs/sustainable-agricultural-products",
  },
];

const BlogsSection = () => {
  return (
    <section className="bg-white px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="grid items-start gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block rounded-tl-full rounded-tr-full bg-[#f8e6bf] px-5 py-2 text-xs font-medium uppercase text-[#075657]">
              News & Blogs
            </span>

            <h2 className="mt-5 max-w-md text-4xl font-bold leading-[1.08] text-[#00595d] sm:text-5xl">
              Featured News &
              <br />
              Blogs
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-xl text-base leading-7 text-[#075657] lg:pt-8"
          >
            Stay updated with the latest news and insights from the world of
            agriculture. Explore our featured blogs on sustainable farming,
            healthy eating, and market trends, and discover how Nature Harvest
            is shaping the future of agri-exports.
          </motion.p>
        </div>

        {/* Blog Cards */}
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {blogs.map((blog, index) => (
            <motion.article
              key={blog.slug}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
            >
              <Link to={blog.slug} className="group block">

                {/* Image */}
                <div className="relative h-[250px] overflow-hidden rounded-tr-[55px] rounded-bl-[55px] sm:h-[270px]">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />

                  {/* Date */}
                  <div className="absolute bottom-0 left-0 flex h-[66px] w-[66px] flex-col items-center justify-center rounded-full bg-[#00595d] text-white shadow-lg">
                    <span className="text-xl font-bold leading-none">
                      {blog.date}
                    </span>
                    <span className="mt-1 text-[10px] font-medium">
                      {blog.month}
                    </span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="mt-5 text-lg font-semibold leading-6 text-[#00595d] transition-colors duration-300 group-hover:text-[#f2a318]">
                  {blog.title}
                </h3>

              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogsSection;