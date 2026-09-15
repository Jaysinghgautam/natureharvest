export type Product = {
  id: string;
  number: string;
  name: string;
  category: string;
  description: string;
  image: string;
  origin: string;
  packaging: string;
  quality: string;
  availability: string;
};

export type ProductVariant = {
  id: string;
  categoryId: string;
  name: string;
  description: string;
  image: string;
  keyFeatures: string[];
  globalQualityStandards: string[];
};

export const products: Product[] = [
  {
    id: "1",
    number: "01",
    name: "Basmati Rice",
    category: "Basmati Rice",
    description:
      "Premium Indian Basmati Rice known for its long slender grains, natural aroma, delicate texture and excellent cooking quality.",
    image: "/images/basmati-rice.jpg",
    origin: "India",
    packaging: "Available as per buyer requirement",
    quality: "Premium Export Quality",
    availability: "Global Supply",
  },

  {
    id: "2",
    number: "02",
    name: "Non-Basmati Rice",
    category: "Non-Basmati Rice",
    description:
      "High-quality Non-Basmati Rice sourced from trusted agricultural regions of India.",
    image: "/images/non-basmati-rice.jpg",
    origin: "India",
    packaging: "Available as per buyer requirement",
    quality: "Export Quality",
    availability: "Global Supply",
  },

  {
    id: "3",
    number: "03",
    name: "Spices",
    category: "Spices",
    description:
      "A wide range of carefully sourced Indian spices selected for authentic flavour, aroma, colour and quality.",
    image: "/images/spices.jpg",
    origin: "India",
    packaging: "Available as per buyer requirement",
    quality: "Premium Quality",
    availability: "Global Supply",
  },

  {
    id: "4",
    number: "04",
    name: "Pulses & Lentils",
    category: "Pulses and Lentils",
    description:
      "Premium pulses and lentils sourced through reliable agricultural networks.",
    image: "/images/pulses.jpg",
    origin: "India",
    packaging: "Available as per buyer requirement",
    quality: "Export Quality",
    availability: "Global Supply",
  },

  {
    id: "5",
    number: "05",
    name: "Millets & Coarse Grains",
    category: "Millets & Coarse Grains",
    description:
      "Nutritious and sustainably sourced millets and coarse grains.",
    image: "/images/millets.jpg",
    origin: "India",
    packaging: "Available as per buyer requirement",
    quality: "Premium Quality",
    availability: "Global Supply",
  },

  {
    id: "6",
    number: "06",
    name: "Dehydrated & Processed Items",
    category: "Dehydrated & Processed Items",
    description:
      "Quality dehydrated and processed agricultural products prepared for international buyers.",
    image: "/images/dehydrated-items.jpg",
    origin: "India",
    packaging: "Available as per buyer requirement",
    quality: "Export Quality",
    availability: "Global Supply",
  },

  {
    id: "7",
    number: "07",
    name: "Oil Seeds",
    category: "Oil Seeds",
    description:
      "Carefully sourced oil seeds selected for quality and consistency.",
    image: "/images/oil-seeds.jpg",
    origin: "India",
    packaging: "Available as per buyer requirement",
    quality: "Premium Quality",
    availability: "Global Supply",
  },
];

/* Individual products inside each category */
export const productVariants: ProductVariant[] = [
  /* ================= BASMATI RICE ================= */

  {
    id: "basmati-1121",
    categoryId: "1",
    name: "1121 Basmati Rice",
    description:
      "1121 Basmati Rice is a premium rice variety celebrated for its extra-long grains, exceptional elongation, natural aroma and delicate texture. It is widely preferred for biryani, pulao and premium culinary applications.",

    image: "/images/1121 BASMATI RICE.png",

    keyFeatures: [
      "Extra-long grains with exceptional elongation",
      "Rich, natural basmati aroma",
      "Non-sticky, fluffy texture after cooking",
      "Aged for 12-24 months for enhanced fragrance",
      "Ideal for biryani, pilaf, and fine dining",
    ],

    globalQualityStandards: [
      "FSSAI Certified",
      "APEDA Registered",
      "ISO 22000 Compliant",
      "HACCP Certified",
      "Phytosanitary Certified",
    ],
  },

  {
    id: "basmati-1401",
    categoryId: "1",
    name: "1401 Basmati Rice",
    description:
      "1401 Basmati Rice is prized for its authentic aroma, classic flavour, soft texture and excellent cooking characteristics, making it suitable for premium food applications.",

    image: "/images/1401.png",

    keyFeatures: [
      "Long slender grains",
      "Authentic basmati aroma",
      "Soft and delicate texture",
      "Excellent cooking performance",
      "Naturally aromatic",
      "Suitable for premium dishes",
    ],

    globalQualityStandards: [
      "Premium quality selection",
      "Strict quality inspection",
      "Hygienically processed",
      "Export-quality standards",
      "Consistent product quality",
      "International market suitability",
    ],
  },

  {
    id: "basmati-1509",
    categoryId: "1",
    name: "1509 Basmati Rice",
    description:
      "1509 Basmati Rice is a popular export variety known for its quick cooking time, mild aroma, and consistent quality. It is a cost-effective choice for bulk catering, food processing, and large-scale distribution worldwide. Despite its affordability, 1509 Basmati does not compromise on quality. Its medium-long grains elongate well upon cooking, making it a reliable choice for restaurants, hotels, and foodservice businesses looking for value-for-money rice.",

    image: "/images/1509 Basmati Rice.png",

    keyFeatures: [
      "Quick cooking time — ideal for catering",
      "Medium-long grains with good elongation",
      "Mild, pleasant aroma",
      "Consistent quality across large batches",
      "Cost-effective for bulk exports",
      "APEDA-compliant quality standards",
    ],

    globalQualityStandards: [
      "FSSAI Certified",
      "APEDA Registered",
      "ISO 22000 Compliant",
      "HACCP Certified",
      "Phytosanitary Certified",
    ],
  },
  {
    id: "pusa-basmati",
    categoryId: "1",
    name: "Pusa Basmati Rice",
    description:
      "Pusa Basmati Rice is a modern, high-yield variety that combines the best of tradition and innovation. With slender grains and a pleasant aroma, it is one of the most widely cultivated and exported basmati varieties from India. Pusa Basmati is renowned for its versatility — equally suited for home cooking and commercial kitchens. Its consistent grain quality, reliable elongation, and balanced flavor make it a top choice for retailers and distributors worldwide.",
    image: "/images/Pusa Basmati Rice.png",

    keyFeatures: [
      "Slender, long grains with good elongation",
      "Pleasant aromatic profile",
      "High-yield and consistent crop quality",
      "Suitable for home and commercial use",
      "Widely exported globally",
      "Sustainably sourced from certified farms",
    ],

    globalQualityStandards: [
      "FSSAI Certified",
      "APEDA Registered",
      "ISO 22000 Compliant",
      "HACCP Certified",
      "Phytosanitary Certified",
    ],
  },

  /* ================= NON-BASMATI RICE ================= */

  {
    id: "nonbasmati-sona-masuri",
    categoryId: "2",
    name: "Sona Masoori Rice",
    description:
      "Sona Masoori is a lightweight and aromatic medium-grain rice. It is unpolished and contains less starch than other varieties, making it highly digestible and a popular choice for health-conscious consumers. Known as the 'Pearls of South India,' it is perfect for sweet pongal, biryani, idlis, and everyday meals. Its pleasant aroma and distinct flavor make it a premium non-basmati option.",
    image: "/images/IR64.png",

    keyFeatures: [
      "Lightweight and highly digestible",
      "Low starch content",
      "Aromatic medium-grain rice",
      "Ideal for daily consumption and health diets",
      "Perfect for sweet and savory dishes",
      "100% natural and unpolished options available",
    ],

    globalQualityStandards: [
      "FSSAI Certified",
      "APEDA Registered",
      "ISO 22000 Compliant",
      "HACCP Certified",
      "Phytosanitary Certified",
    ],
  },

  {
    id: "nonbasmati-parboiled",
    categoryId: "2",
    name: "Parboiled Rice",
    description:
      "High-quality parboiled rice with excellent cooking characteristics, good grain integrity and export-quality standards.",

    image: "/images/Sona Masoori Rice.png",

    keyFeatures: [
      "Excellent cooking characteristics",
      "Good grain integrity",
      "Firm cooked texture",
      "Suitable for bulk requirements",
      "Long-lasting quality",
      "Ideal for international markets",
    ],

    globalQualityStandards: [
      "Export-quality product",
      "Strict quality control",
      "Hygienic processing",
      "Carefully selected grains",
      "Consistent quality",
      "International buyer requirements",
    ],
  },
  {
    id: "nonbasmati-parboiled",
    categoryId: "2",
    name: "PR 11 Rice",
    description:
      "PR 11 Rice is a medium-grain, high-starch rice that offers affordability, consistent quality, and versatility. Primarily used in bulk catering, industrial food production, and processed foods, it is valued for its cost-effectiveness and high yield. It is commonly used in ready-to-eat meals, snacks, and South Indian cuisine, serving as an essential ingredient in African, Asian, and Latin American food markets.",
    image: "/images/pr-11.jpeg",

    keyFeatures: [
      "Medium-grain, high-starch rice",
      "Economical and budget-friendly",
      "Consistent quality and high yield",
      "Ideal for industrial food production and catering",
      "Popular in South Indian, African, and Latin American markets",
      "Versatile for ready-to-eat meals and snacks",
    ],

    globalQualityStandards: [
      "FSSAI Certified",
      "APEDA Registered",
      "ISO 22000 Compliant",
      "HACCP Certified",
      "Phytosanitary Certified",
    ],
  },

  /* ================= SPICES ================= */

  {
    id: "spices-turmeric",
    categoryId: "3",
    name: "Turmeric",
    description:
      "Premium Indian turmeric selected for its natural colour, aroma, flavour and consistent quality.",

    image: "/images/spices.jpg",

    keyFeatures: [
      "Natural golden colour",
      "Distinctive aroma",
      "Rich natural flavour",
      "Carefully sourced",
      "Suitable for food applications",
      "Premium quality selection",
    ],

    globalQualityStandards: [
      "Premium quality selection",
      "Strict quality inspection",
      "Hygienically processed",
      "Export-quality standards",
      "Consistent colour and quality",
      "International market suitability",
    ],
  },

  {
    id: "spices-cumin",
    categoryId: "3",
    name: "Cumin Seeds",
    description:
      "Aromatic Indian cumin seeds carefully sourced for food, spice and international markets.",

    image: "/images/spices.jpg",

    keyFeatures: [
      "Strong natural aroma",
      "Distinctive flavour",
      "Carefully selected seeds",
      "Consistent size and quality",
      "Suitable for food applications",
      "Versatile culinary use",
    ],

    globalQualityStandards: [
      "Premium quality selection",
      "Strict quality control",
      "Hygienically processed",
      "Export-quality standards",
      "Consistent product quality",
      "Suitable for international buyers",
    ],
  },
];

export default products;
