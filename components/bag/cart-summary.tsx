"use client";

import { useCartTotals } from "@/lib/store/cart";
import { Lock } from "lucide-react";

export function CartSummary() {
  const { totalPrice } = useCartTotals();

  return (
    <div className="bg-muted/30 rounded-xl p-6">
      <h3 className="font-serif text-lg font-light text-foreground mb-4">
        Order Summary
      </h3>

      <div className="space-y-3 mb-6">
        <div className="flex justify-between font-sans text-sm">
          <span className="text-muted-foreground">Subtotal</span>
          <span className="text-foreground">${totalPrice}</span>
        </div>
        <div className="flex justify-between font-sans text-sm">
          <span className="text-muted-foreground">Shipping</span>
          <span className="text-foreground">
            {totalPrice >= 200 ? "Free" : "Calculated at checkout"}
          </span>
        </div>
      </div>

      {totalPrice > 0 && totalPrice < 200 && (
        <p className="font-sans text-xs text-muted-foreground mb-4">
          Add ${200 - totalPrice} more for free shipping
        </p>
      )}

      <div className="border-t border-border pt-4 mb-6">
        <div className="flex justify-between font-sans text-base font-medium">
          <span className="text-foreground">Total</span>
          <span className="text-foreground">${totalPrice}</span>
        </div>
      </div>

      <button
        disabled
        className="w-full flex items-center justify-center gap-2 bg-foreground text-background font-sans text-sm font-semibold tracking-wider uppercase py-4 rounded-lg min-h-[52px] cursor-not-allowed opacity-70"
      >
        <Lock className="w-4 h-4" />
        Coming Soon
      </button>
    </div>
  );
}
