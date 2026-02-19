import { Metadata } from "next";
import { products } from "@/components/collections/data";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ProductCard } from "@/components/collections/product-card";

export const metadata: Metadata = {
  title: "New Arrivals — Nuturn",
  description: "Discover our latest arrivals. Fresh styles added weekly.",
};

export default function NewArrivalsPage() {
  const newProducts = products.filter((p) => p.tag === "new");

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <p className="font-sans text-xs font-semibold tracking-[0.3em] uppercase text-muted-foreground mb-3">
              Just In
            </p>
            <h1 className="font-serif text-[clamp(2.5rem,5vw,4.5rem)] font-light leading-[1] tracking-[-0.02em] text-foreground">
              New Arrivals
            </h1>
            <p className="font-sans text-base text-muted-foreground mt-4 max-w-xl">
              Fresh styles added weekly. Be the first to discover our latest additions.
            </p>
          </div>

          {newProducts.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {newProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <p className="font-sans text-muted-foreground">
              No new arrivals at the moment. Check back soon!
            </p>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
