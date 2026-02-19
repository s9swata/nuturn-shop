import { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ProductGrid } from "@/components/collections/product-grid";

export const metadata: Metadata = {
  title: "Collections — Nuturn",
  description: "Explore our complete collection of modern clothing. Timeless pieces, refined silhouettes.",
};

export default function CollectionsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          {/* Page Header */}
          <div className="mb-12">
            <p className="font-sans text-xs font-semibold tracking-[0.3em] uppercase text-muted-foreground mb-3">
              Shop
            </p>
            <h1 className="font-serif text-[clamp(2.5rem,5vw,4.5rem)] font-light leading-[1] tracking-[-0.02em] text-foreground">
              All Collections
            </h1>
            <p className="font-sans text-base text-muted-foreground mt-4 max-w-xl">
              Discover our complete collection of elevated essentials. Each piece
              designed for movement, longevity, and the quietly confident.
            </p>
          </div>

          {/* Product Grid with Filters */}
          <ProductGrid />
        </div>
      </main>
      <Footer />
    </>
  );
}
