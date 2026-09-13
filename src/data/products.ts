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
  {
    id: "basmati-1121",
    categoryId: "1",
    name: "1121 Basmati Rice",
    description:
      "A Premium Rice Variety, 1121 Basmati Rice is Celebrated For Its Extra-Long Grains, Exceptional Elongation...",
    image: "/images/basmati-rice.jpg",
  },
  {
    id: "basmati-1401",
    categoryId: "1",
    name: "1401 Basmati Rice",
    description:
      "Grown In The Himalayan Foothills, This Heritage Variety Is Prized For Its Authentic Aroma, Classic Flavor, And Soft Texture...",
    image: "/images/basmati-rice.jpg",
  },
  {
    id: "basmati-1509",
    categoryId: "1",
    name: "1509 Basmati Rice",
    description:
      "Known For Its Affordability, Quick Cooking Time, And Mild Aroma, 1509 Basmati Rice Is Ideal For Bulk Catering...",
    image: "/images/basmati-rice.jpg",
  },
  {
    id: "pusa-basmati",
    categoryId: "1",
    name: "Pusa Basmati Rice",
    description:
      "Renowned For Its Slender Grains And Aromatic Profile, Pusa Basmati Is Versatile, Suitable For Home Cooking...",
    image: "/images/basmati-rice.jpg",
  },

  {
    id: "nonbasmati-sona-masuri",
    categoryId: "2",
    name: "Sona Masuri Rice",
    description:
      "Lightweight and aromatic rice variety suitable for everyday meals and international markets.",
    image: "/images/non-basmati-rice.jpg",
  },
  {
    id: "nonbasmati-parboiled",
    categoryId: "2",
    name: "Parboiled Rice",
    description:
      "High-quality parboiled rice with excellent cooking characteristics and export quality.",
    image: "/images/non-basmati-rice.jpg",
  },

  {
    id: "spices-turmeric",
    categoryId: "3",
    name: "Turmeric",
    description:
      "Premium Indian turmeric selected for its natural colour, aroma and quality.",
    image: "/images/spices.jpg",
  },
  {
    id: "spices-cumin",
    categoryId: "3",
    name: "Cumin Seeds",
    description:
      "Aromatic Indian cumin seeds carefully sourced for food and spice markets.",
    image: "/images/spices.jpg",
  },
];

export default products;