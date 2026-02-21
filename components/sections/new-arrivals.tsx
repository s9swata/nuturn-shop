import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { products } from "@/components/collections/data";

export function NewArrivals() {
  const newArrivals = products.slice(0, 4);
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
              href={`/products/${product.id}`}
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
                {product.tag && (
                  <div className="absolute top-3 left-3">
                    <span
                      className={`font-sans text-[10px] font-semibold tracking-widest uppercase px-2.5 py-1 rounded-full ${
                        product.tag === "bestseller"
                          ? "bg-primary text-primary-foreground"
                          : "bg-background/90 text-foreground"
                      }`}
                    >
                      {product.tag}
                    </span>
                  </div>
                )}
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
                  ₹{product.price.toLocaleString("en-IN")}
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
