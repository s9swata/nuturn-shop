import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const newArrivals = [
  {
    id: 1,
    name: "Draped Linen Blazer",
    price: "$298",
    tag: "New",
    image:
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&q=80&auto=format&fit=crop",
    href: "/products/draped-linen-blazer",
  },
  {
    id: 2,
    name: "Wide-Leg Trousers",
    price: "$195",
    tag: "New",
    image:
      "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=600&q=80&auto=format&fit=crop",
    href: "/products/wide-leg-trousers",
  },
  {
    id: 3,
    name: "Oversized Merino Knit",
    price: "$245",
    tag: "Bestseller",
    image:
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=600&q=80&auto=format&fit=crop",
    href: "/products/oversized-merino-knit",
  },
  {
    id: 4,
    name: "Silk Slip Dress",
    price: "$320",
    tag: "New",
    image:
      "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=600&q=80&auto=format&fit=crop",
    href: "/products/silk-slip-dress",
  },
];

export function NewArrivals() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="font-sans text-xs font-semibold tracking-[0.3em] uppercase text-muted-foreground mb-3">
              Just landed
            </p>
            <h2 className="font-serif text-[clamp(2.5rem,5vw,4.5rem)] font-light leading-[1] tracking-[-0.02em] text-foreground">
              New Arrivals
            </h2>
          </div>
          <Link
            href="/new-arrivals"
            className="hidden md:flex items-center gap-2 font-sans text-sm font-medium tracking-wider uppercase text-muted-foreground hover:text-primary transition-colors duration-200 cursor-pointer group"
          >
            See All
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {newArrivals.map((product) => (
            <Link
              key={product.id}
              href={product.href}
              className="group cursor-pointer"
            >
              {/* Image */}
              <div className="relative aspect-[3/4] overflow-hidden rounded-xl mb-4 bg-muted">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                {/* Badge */}
                <div className="absolute top-3 left-3">
                  <span
                    className={`font-sans text-[10px] font-semibold tracking-widest uppercase px-2.5 py-1 rounded-full ${
                      product.tag === "Bestseller"
                        ? "bg-primary text-primary-foreground"
                        : "bg-background/90 text-foreground"
                    }`}
                  >
                    {product.tag}
                  </span>
                </div>
                {/* Quick add overlay */}
                <div className="absolute inset-x-0 bottom-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <button className="w-full bg-foreground/90 backdrop-blur-sm text-background font-sans text-xs font-semibold tracking-wider uppercase py-3 rounded-lg cursor-pointer hover:bg-foreground transition-colors duration-200 min-h-[44px]">
                    Quick Add
                  </button>
                </div>
              </div>

              {/* Info */}
              <div>
                <h3 className="font-sans text-sm font-medium text-foreground mb-1 group-hover:text-primary transition-colors duration-200">
                  {product.name}
                </h3>
                <p className="font-sans text-sm text-muted-foreground">
                  {product.price}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* Mobile See All */}
        <div className="mt-10 md:hidden text-center">
          <Link
            href="/new-arrivals"
            className="inline-flex items-center gap-2 font-sans text-sm font-medium tracking-wider uppercase text-muted-foreground hover:text-primary transition-colors duration-200 cursor-pointer"
          >
            See All New Arrivals
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
