import { motion } from "framer-motion";
import Button from "../Button";
const instagramPosts = [
  {
    image:
      "https://images.pexels.com/photos/11678442/pexels-photo-11678442.jpeg",
    url: "https://www.instagram.com/natureharvest.in/",
  },
  {
    image:
      "https://images.pexels.com/photos/1206593/pexels-photo-1206593.jpeg",
    url: "https://www.instagram.com/natureharvest.in/",
  },
  {
    image:
      "https://images.pexels.com/photos/5180291/pexels-photo-5180291.jpeg",
    url: "https://www.instagram.com/natureharvest.in/",
  },
  {
    image:
      "https://images.pexels.com/photos/2518861/pexels-photo-2518861.jpeg",
    url: "https://www.instagram.com/natureharvest.in/",
  },
];

const InstagramSection = () => {
  return (
    <section className="overflow-hidden bg-white px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center"
        >
          <div className="flex items-center gap-5">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#fce4ec] text-3xl text-[#e1306c]">
              ◎
            </div>

            <div>
              <h2 className="text-3xl font-bold text-[#00595d] sm:text-4xl">
                Follow Us on Instagram
              </h2>

              <p className="mt-1 text-sm font-medium text-[#f2a318]">
                @natureharvest.in
              </p>
            </div>
          </div>

          <Button
            href="https://www.instagram.com/natureharvest.in/"
            target="_blank"
            rel="noreferrer"
            className="w-fit rounded-tl-[5px] rounded-tr-[40px] rounded-br-[5px] rounded-bl-[40px] bg-[#f2a318] px-9 py-3.5 text-sm font-semibold text-white shadow-md transition duration-300 hover:-translate-y-1 hover:bg-[#ffad19] hover:shadow-lg"
          >
            Follow Us 
          </Button>
        </motion.div>

        {/* Latest 4 Posts */}
        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {instagramPosts.map((post, index) => (
            <motion.a
              key={index}
              href={post.url}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              className={`group relative block h-[220px] overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.08)] sm:h-[280px] lg:h-[320px] ${
                index % 2 === 0
                  ? "rounded-tl-[55px] rounded-br-[55px]"
                  : "rounded-tr-[55px] rounded-bl-[55px]"
              }`}
            >
              <img
                src={post.image}
                alt={`Nature Harvest Instagram post ${index + 1}`}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
              />

              {/* Green overlay */}
              <div className="absolute inset-0 bg-[#00595d]/0 transition duration-500 group-hover:bg-[#00595d]/45" />

              {/* Instagram icon */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 transition duration-500 group-hover:opacity-100">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/90 text-2xl text-[#e1306c] shadow-lg">
                  ◎
                </div>
              </div>
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
};

export default InstagramSection;