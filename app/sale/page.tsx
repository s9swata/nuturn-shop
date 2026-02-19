import { Metadata } from "next";
import { products } from "@/components/collections/data";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ProductCard } from "@/components/collections/product-card";

export const metadata: Metadata = {
  title: "Sale — Nuturn",
  description: "Shop our sale collection. Selected styles at reduced prices.",
};

export default function SalePage() {
  const saleProducts = products.filter((p) => p.tag === "sale");

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <p className="font-sans text-xs font-semibold tracking-[0.3em] uppercase text-primary mb-3">
              Limited Time
            </p>
            <h1 className="font-serif text-[clamp(2.5rem,5vw,4.5rem)] font-light leading-[1] tracking-[-0.02em] text-foreground">
              Sale
            </h1>
            <p className="font-sans text-base text-muted-foreground mt-4 max-w-xl">
              Selected styles at reduced prices. Once they&apos;re gone, they&apos;re gone.
            </p>
          </div>

          {saleProducts.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {saleProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="font-sans text-lg text-muted-foreground mb-4">
                No items on sale right now.
              </p>
              <p className="font-sans text-sm text-muted-foreground">
                Check back soon for new arrivals!
              </p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
