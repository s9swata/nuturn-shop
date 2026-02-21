import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { products } from "@/components/collections/data";

const collections = [
  {
    title: "Bridal Collection",
    subtitle: "Exquisite lehengas for your special day",
    href: "/products/4",
    image: products[3]?.image || "/products/product4/1.png",
    span: "col-span-2",
  },
  {
    title: "Festive Edit",
    subtitle: "Perfect for celebrations",
    href: "/products/2",
    image: products[1]?.image || "/products/product2/1.png",
    span: "col-span-1",
  },
  {
    title: "Casual Elegance",
    subtitle: "Bohemian-inspired pieces",
    href: "/products/3",
    image: products[2]?.image || "/products/product3/1.png",
    span: "col-span-1",
  },
  {
    title: "Saree Collection",
    subtitle: "Timeless drapes",
    href: "/products/5",
    image: products[4]?.image || "/products/product5/1.png",
    span: "col-span-2",
  },
];

export function FeaturedCollections() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex items-end justify-between mb-12">
        <div>
          <p className="font-sans text-xs font-semibold tracking-[0.3em] uppercase text-muted-foreground mb-3">
            Curated for you
          </p>
          <h2 className="font-serif text-[clamp(2.5rem,5vw,4.5rem)] font-light leading-[1] tracking-[-0.02em] text-foreground">
            Collections
          </h2>
        </div>
        <Link
          href="/collections"
          className="hidden md:flex items-center gap-2 font-sans text-sm font-medium tracking-wider uppercase text-muted-foreground hover:text-primary transition-colors duration-200 cursor-pointer group"
        >
          View All
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
        </Link>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {collections.map((col) => (
          <Link
            key={col.title}
            href={col.href}
            className={`relative group overflow-hidden rounded-2xl cursor-pointer ${
              col.span === "col-span-2" ? "md:col-span-2" : "md:col-span-1"
            }`}
          >
            <div className="aspect-[4/3] relative overflow-hidden">
              <Image
                src={col.image}
                alt={col.title}
                fill
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 50vw"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Text */}
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="font-serif text-2xl font-light text-white mb-1">
                  {col.title}
                </h3>
                <p className="font-sans text-sm text-white/70 font-light">
                  {col.subtitle}
                </p>
                <div className="mt-3 flex items-center gap-1 text-primary font-sans text-xs font-semibold tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Explore
                  <ArrowRight className="w-3 h-3" />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Mobile View All */}
      <div className="mt-8 md:hidden text-center">
        <Link
          href="/collections"
          className="inline-flex items-center gap-2 font-sans text-sm font-medium tracking-wider uppercase text-muted-foreground hover:text-primary transition-colors duration-200 cursor-pointer"
        >
          View All Collections
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
}
