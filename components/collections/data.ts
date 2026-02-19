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
    name: "Draped Linen Blazer",
    price: 298,
    category: "outerwear",
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&q=80&auto=format&fit=crop",
    tag: "new",
    description: "A relaxed, modern blazer crafted from breathable Belgian linen. The draped silhouette offers effortless movement while maintaining structure. Perfect for layering over dresses or pairing with tailored trousers.",
    details: ["100% Belgian linen", "Relaxed fit", "Dry clean only", "Made in Portugal"],
    sizes: ["XS", "S", "M", "L", "XL"],
    images: [
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&q=80&auto=format&fit=crop",
    ],
  },
  {
    id: 2,
    name: "Wide-Leg Trousers",
    price: 195,
    category: "bottoms",
    image: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=600&q=80&auto=format&fit=crop",
    tag: "new",
    description: "High-waisted trousers with a dramatic wide leg. Crafted from lightweight Italian wool crepe with a subtle sheen. The elevated silhouette pairs beautifully with fitted tops.",
    details: ["96% wool, 4% elastane", "Wide leg fit", "Dry clean only", "Made in Italy"],
    sizes: ["XS", "S", "M", "L", "XL"],
    images: [
      "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=600&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&q=80&auto=format&fit=crop",
    ],
  },
  {
    id: 3,
    name: "Oversized Merino Knit",
    price: 245,
    category: "tops",
    image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=600&q=80&auto=format&fit=crop",
    tag: "bestseller",
    description: "An chunky knit sweater made from ultra-soft Australian merino wool. The oversized fit creates a cozy, effortless look. Perfect for layering or wearing alone.",
    details: ["100% extra fine merino wool", "Oversized fit", "Hand wash cold", "Made in New Zealand"],
    sizes: ["XS", "S", "M", "L", "XL"],
    images: [
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=600&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&q=80&auto=format&fit=crop",
    ],
  },
  {
    id: 4,
    name: "Silk Slip Dress",
    price: 320,
    category: "dresses",
    image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=600&q=80&auto=format&fit=crop",
    tag: "new",
    description: "A timeless slip dress cut from lustrous mulberry silk. The bias cut drapes beautifully against the skin, creating an elegant, feminine silhouette.",
    details: ["100% mulberry silk", "Bias cut", "Dry clean only", "Made in France"],
    sizes: ["XS", "S", "M", "L", "XL"],
    images: [
      "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=600&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=600&q=80&auto=format&fit=crop",
    ],
  },
  {
    id: 5,
    name: "Tailored Wool Coat",
    price: 450,
    category: "outerwear",
    image: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=600&q=80&auto=format&fit=crop",
    description: "A double-breasted coat crafted from premium Scottish wool. The classic silhouette features peak lapels and horn buttons. A wardrobe investment piece.",
    details: ["100% Scottish wool", "Double-breasted", "Dry clean only", "Made in Scotland"],
    sizes: ["XS", "S", "M", "L", "XL"],
    images: [
      "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=600&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=600&q=80&auto=format&fit=crop",
    ],
  },
  {
    id: 6,
    name: "Cotton Poplin Shirt",
    price: 145,
    category: "tops",
    image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=600&q=80&auto=format&fit=crop",
    description: "A crisp cotton shirt with a modern, boxy fit. The perfect everyday piece, suitable for both office and weekend wear.",
    details: ["100% organic cotton", "Boxy fit", "Machine wash cold", "Made in India"],
    sizes: ["XS", "S", "M", "L", "XL"],
    images: [
      "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=600&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1598554747436-c9293d6a588f?w=600&q=80&auto=format&fit=crop",
    ],
  },
  {
    id: 7,
    name: "High-Waist Jeans",
    price: 189,
    category: "bottoms",
    image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=600&q=80&auto=format&fit=crop",
    tag: "sale",
    description: "Classic high-waisted jeans with a straight leg. Made from premium Japanese selvedge denim that ages beautifully over time.",
    details: ["100% Japanese selvedge denim", "High-waisted", "Machine wash cold", "Made in Japan"],
    sizes: ["XS", "S", "M", "L", "XL"],
    images: [
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=600&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1582552938357-32b906df40cb?w=600&q=80&auto=format&fit=crop",
    ],
  },
  {
    id: 8,
    name: "Midi Wrap Dress",
    price: 275,
    category: "dresses",
    image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=600&q=80&auto=format&fit=crop",
    description: "A versatile wrap dress in a flowing tencel fabric. The adjustable tie waist creates a customizable fit while the midi length offers elegant coverage.",
    details: ["100% tencel lyocell", "Wrap closure", "Machine wash cold", "Made in USA"],
    sizes: ["XS", "S", "M", "L", "XL"],
    images: [
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=600&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=600&q=80&auto=format&fit=crop",
    ],
  },
  {
    id: 9,
    name: "Cashmere Cardigan",
    price: 385,
    category: "tops",
    image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=600&q=80&auto=format&fit=crop",
    tag: "bestseller",
    description: "A luxurious cashmere cardigan with mother-of-pearl buttons. The relaxed fit makes it perfect for layering. An investment in everyday elegance.",
    details: ["100% Mongolian cashmere", "Relaxed fit", "Dry clean only", "Made in Inner Mongolia"],
    sizes: ["XS", "S", "M", "L", "XL"],
    images: [
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=600&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&q=80&auto=format&fit=crop",
    ],
  },
  {
    id: 10,
    name: "Pleated Midi Skirt",
    price: 165,
    category: "bottoms",
    image: "https://images.unsplash.com/photo-1583496661160-fb5886a0uj4a?w=600&q=80&auto=format&fit=crop",
    tag: "new",
    description: "A flowing midi skirt with permanent pleats. Crafted from lightweight polyester crepe that holds its shape. The elastic waistband offers comfort without compromising style.",
    details: ["100% polyester crepe", "Permanent pleats", "Machine wash cold", "Made in South Korea"],
    sizes: ["XS", "S", "M", "L", "XL"],
    images: [
      "https://images.unsplash.com/photo-1583496661160-fb5886a0uj4a?w=600&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1583496661160-fb5886a0uj4a?w=600&q=80&auto=format&fit=crop",
    ],
  },
  {
    id: 11,
    name: "Leather Bomber Jacket",
    price: 420,
    category: "outerwear",
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&q=80&auto=format&fit=crop",
    description: "A classic bomber jacket in buttery soft lambskin leather. Features ribbed collar, cuffs, and hem for a timeless look.",
    details: ["100% lambskin leather", "Classic bomber fit", "Professional leather clean", "Made in Italy"],
    sizes: ["XS", "S", "M", "L", "XL"],
    images: [
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&q=80&auto=format&fit=crop",
    ],
  },
  {
    id: 12,
    name: "Silk Button-Up Blouse",
    price: 225,
    category: "tops",
    image: "https://images.unsplash.com/photo-1598554747436-c9293d6a588f?w=600&q=80&auto=format&fit=crop",
    description: "A refined silk blouse with mother-of-pearl buttons. The relaxed fit and draped collar create an effortlessly sophisticated look.",
    details: ["100% silk charmeuse", "Relaxed fit", "Dry clean only", "Made in China"],
    sizes: ["XS", "S", "M", "L", "XL"],
    images: [
      "https://images.unsplash.com/photo-1598554747436-c9293d6a588f?w=600&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=600&q=80&auto=format&fit=crop",
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
