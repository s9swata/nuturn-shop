import { products } from "@/components/collections/data";
import { ProductCard } from "@/components/collections/product-card";

interface RelatedProductsProps {
  currentProductId: number;
}

export function RelatedProducts({ currentProductId }: RelatedProductsProps) {
  const currentProduct = products.find((p) => p.id === currentProductId);
  
  if (!currentProduct) return null;

  const relatedProducts = products
    .filter((p) => p.category === currentProduct.category && p.id !== currentProductId)
    .slice(0, 4);

  if (relatedProducts.length === 0) return null;

  const categoryLabel = currentProduct.category.charAt(0).toUpperCase() + currentProduct.category.slice(1);

  return (
    <section className="mt-20">
      <h2 className="font-serif text-2xl font-light text-foreground mb-8">
        More {categoryLabel}
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {relatedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
