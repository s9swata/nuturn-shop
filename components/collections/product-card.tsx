import Link from "next/link";
import Image from "next/image";
import { type Product } from "./data";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/products/${product.id}`} className="group cursor-pointer block">
      <div className="relative aspect-[3/4] overflow-hidden rounded-xl mb-4 bg-muted">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />
        {product.tag && (
          <div className="absolute top-3 left-3">
            <span
              className={`font-sans text-[10px] font-semibold tracking-widest uppercase px-2.5 py-1 rounded-full ${
                product.tag === "bestseller"
                  ? "bg-primary text-primary-foreground"
                  : product.tag === "sale"
                  ? "bg-destructive text-destructive-foreground"
                  : "bg-background/90 text-foreground"
              }`}
            >
              {product.tag}
            </span>
          </div>
        )}
        <div className="absolute inset-x-0 bottom-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <button className="w-full bg-foreground/90 backdrop-blur-sm text-background font-sans text-xs font-semibold tracking-wider uppercase py-3 rounded-lg cursor-pointer hover:bg-foreground transition-colors duration-200 min-h-[44px]">
            Quick Add
          </button>
        </div>
      </div>
      <div>
        <h3 className="font-sans text-sm font-medium text-foreground mb-1 group-hover:text-primary transition-colors duration-200">
          {product.name}
        </h3>
        <p className="font-sans text-sm text-muted-foreground">
          ₹{product.price.toLocaleString("en-IN")}
        </p>
      </div>
    </Link>
  );
}
