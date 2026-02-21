"use client";

import { useState } from "react";
import { Lock, Loader2 } from "lucide-react";
import { useCartStore, useCartTotals } from "@/lib/store/cart";

export function CheckoutButton() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const items = useCartStore((state) => state.items);
  const clearCart = useCartStore((state) => state.clearCart);
  const { totalPrice } = useCartTotals();

  const handleCheckout = async () => {
    if (items.length === 0) return;

    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ items }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to create checkout");
      }

      if (data.url) {
        clearCart();
        window.location.href = data.url;
      }
    } catch (err) {
      console.error("Checkout error:", err);
      setError(
        err instanceof Error ? err.message : "Something went wrong. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button
      onClick={handleCheckout}
      disabled={isLoading || items.length === 0}
      className="w-full flex items-center justify-center gap-2 bg-foreground text-background font-sans text-sm font-semibold tracking-wider uppercase py-4 rounded-lg min-h-[52px] cursor-pointer hover:bg-foreground/90 transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed"
    >
      {isLoading ? (
        <>
          <Loader2 className="w-4 h-4 animate-spin" />
          <span>Processing...</span>
        </>
      ) : (
        <>
          <Lock className="w-4 h-4" />
          <span>Checkout — ₹{totalPrice.toLocaleString("en-IN")}</span>
        </>
      )}
      {error && (
        <p className="absolute -bottom-6 left-0 right-0 text-center font-sans text-xs text-destructive">
          {error}
        </p>
      )}
    </button>
  );
}
