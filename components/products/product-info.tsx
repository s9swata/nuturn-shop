import { type Product } from "@/components/collections/data";
import { ProductActions } from "@/components/products/product-actions";
import { ProductAccordion } from "@/components/products/product-accordion";

interface ProductInfoProps {
  product: Product;
}

export function ProductInfo({ product }: ProductInfoProps) {
  return (
    <div className="space-y-6">
      {product.tag && (
        <span
          className={`inline-block font-sans text-[10px] font-semibold tracking-widest uppercase px-2.5 py-1 rounded-full ${
            product.tag === "bestseller"
              ? "bg-primary text-primary-foreground"
              : product.tag === "sale"
              ? "bg-destructive text-destructive-foreground"
              : "bg-background text-foreground border border-border"
          }`}
        >
          {product.tag}
        </span>
      )}

      <div>
        <p className="font-sans text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-2">
          {product.category}
        </p>
        <h1 className="font-serif text-[clamp(2rem,4vw,3rem)] font-light leading-[1.1] tracking-[-0.02em] text-foreground">
          {product.name}
        </h1>
        <p className="font-sans text-2xl font-medium text-foreground mt-4">
          ${product.price}
        </p>
      </div>

      {product.description && (
        <p className="font-sans text-base text-muted-foreground leading-relaxed">
          {product.description}
        </p>
      )}

      <ProductActions product={product} />

      <ProductAccordion details={product.details} />
    </div>
  );
}
