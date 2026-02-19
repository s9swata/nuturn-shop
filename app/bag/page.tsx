"use client";

import { useCartStore, useCartTotals } from "@/lib/store/cart";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { CartItemRow } from "@/components/bag/cart-item";
import { CartSummary } from "@/components/bag/cart-summary";
import { EmptyBag } from "@/components/bag/empty-bag";

export default function BagPage() {
  const items = useCartStore((state) => state.items);
  const { totalItems } = useCartTotals();

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <h1 className="font-serif text-[clamp(2.5rem,5vw,4rem)] font-light leading-[1] tracking-[-0.02em] text-foreground">
              Your Bag
            </h1>
            <p className="font-sans text-base text-muted-foreground mt-4">
              {totalItems === 0
                ? "Your bag is empty"
                : `${totalItems} ${totalItems === 1 ? "item" : "items"}`}
            </p>
          </div>

          {items.length === 0 ? (
            <EmptyBag />
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
              <div className="lg:col-span-2">
                {items.map((item) => (
                  <CartItemRow key={`${item.productId}-${item.size}`} item={item} />
                ))}
              </div>
              <div className="lg:col-span-1">
                <div className="lg:sticky lg:top-28">
                  <CartSummary />
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
