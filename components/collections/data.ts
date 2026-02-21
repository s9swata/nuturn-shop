export interface Product {
  id: number;
  name: string;
  price: number;
  category: "tops" | "bottoms" | "dresses" | "outerwear";
  image: string;
  tag?: "new" | "sale" | "bestseller";
  description?: string;
  details?: string[];
  sizes?: string[];
  images?: string[];
}

export const products: Product[] = [
  {
    id: 1,
    name: "Ivory Regal Texture Kurta Set",
    price: 8999,
    category: "dresses",
    image: "/products/product1/1.png",
    tag: "new",
    description: "A refined ivory kurta set crafted with subtle textured embroidery and a structured silhouette. Paired with relaxed traditional bottoms and classic mojaris, this ensemble is perfect for weddings, festive celebrations, and cultural occasions. Designed for timeless elegance with modern minimal appeal.",
    details: ["Premium fabric", "Relaxed fit", "Dry clean only", "Made in India"],
    sizes: ["XS", "S", "M", "L", "XL"],
    images: [
      "/products/product1/1.png",
      "/products/product1/2.png",
      "/products/product1/3.png",
      "/products/product1/4.png",
    ],
  },
  {
    id: 2,
    name: "Rani Royale Embroidered Sharara Set",
    price: 12499,
    category: "dresses",
    image: "/products/product2/1.png",
    tag: "new",
    description: "A striking wine-toned embroidered kurta paired with a flowing white sharara. Intricate gold threadwork adds regal charm, making it ideal for festive gatherings, engagement ceremonies, and evening celebrations. Lightweight yet statement-making, this set blends tradition with contemporary grace.",
    details: ["Premium fabric with gold threadwork", "Flowing fit", "Dry clean only", "Made in India"],
    sizes: ["XS", "S", "M", "L", "XL"],
    images: [
      "/products/product2/1.png",
      "/products/product2/2.png",
      "/products/product2/3.png",
      "/products/product2/4.png",
      "/products/product2/5.png",
      "/products/product2/6.png",
    ],
  },
  {
    id: 3,
    name: "Azure Breeze Bohemian Skirt Set",
    price: 6499,
    category: "dresses",
    image: "/products/product3/1.png",
    tag: "new",
    description: "A breezy blue and white bohemian-inspired ensemble featuring a soft crop top, tiered maxi skirt, and patterned drape. Designed for comfort and effortless elegance, this outfit is perfect for summer events, brunch occasions, or destination festivities.",
    details: ["Lightweight bohemian fabric", "Relaxed fit", "Hand wash cold", "Made in India"],
    sizes: ["XS", "S", "M", "L", "XL"],
    images: [
      "/products/product3/1.png",
      "/products/product3/2.png",
      "/products/product3/3.png",
      "/products/product3/4.png",
    ],
  },
  {
    id: 4,
    name: "Blush Maharani Couture Lehenga",
    price: 28999,
    category: "dresses",
    image: "/products/product4/1.png",
    tag: "new",
    description: "An exquisite blush pink lehenga adorned with intricate embroidery and fine detailing. Paired with a delicately embellished blouse and graceful dupatta, this couture ensemble is ideal for bridal functions, receptions, and grand celebrations. Crafted to deliver timeless royal sophistication.",
    details: ["Couture fabric with fine embroidery", "Tailored fit", "Dry clean only", "Made in India"],
    sizes: ["XS", "S", "M", "L", "XL"],
    images: [
      "/products/product4/1.png",
      "/products/product4/3.png",
      "/products/product4/4.png",
      "/products/product4/5.png",
      "/products/product4/6.png",
      "/products/product4/7.png",
    ],
  },
  {
    id: 5,
    name: "Sky Mist Embellished Net Saree",
    price: 13999,
    category: "dresses",
    image: "/products/product5/1.png",
    tag: "new",
    description: "A soft sky-blue net saree featuring delicate border embroidery and subtle shimmer accents. Lightweight and fluid in drape, it is complemented by a matching embellished blouse for an effortlessly elegant look. Perfect for cocktail evenings, receptions, and festive occasions.",
    details: ["Net fabric with embellishments", "Regular drape fit", "Dry clean only", "Made in India"],
    sizes: ["XS", "S", "M", "L", "XL"],
    images: [
      "/products/product5/1.png",
      "/products/product5/2.png",
      "/products/product5/3.png",
      "/products/product5/4.png",
      "/products/product5/5.png",
    ],
  },
];

export const categories = [
  { value: "all", label: "All" },
  { value: "tops", label: "Tops" },
  { value: "bottoms", label: "Bottoms" },
  { value: "dresses", label: "Dresses" },
  { value: "outerwear", label: "Outerwear" },
] as const;

export type Category = (typeof categories)[number]["value"];

export const sortOptions = [
  { value: "newest", label: "Newest" },
  { value: "price-low", label: "Price: Low to High" },
  { value: "price-high", label: "Price: High to Low" },
] as const;

export type SortOption = (typeof sortOptions)[number]["value"];
