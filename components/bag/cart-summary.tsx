"use client";

import { useCartTotals } from "@/lib/store/cart";
import { CheckoutButton } from "@/components/bag/checkout-button";

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
          <span className="text-foreground">₹{totalPrice.toLocaleString("en-IN")}</span>
        </div>
        <div className="flex justify-between font-sans text-sm">
          <span className="text-muted-foreground">Shipping</span>
          <span className="text-foreground">
            {totalPrice >= 15000 ? "Free" : "Calculated at checkout"}
          </span>
        </div>
      </div>

      {totalPrice > 0 && totalPrice < 15000 && (
        <p className="font-sans text-xs text-muted-foreground mb-4">
          Add ₹{(15000 - totalPrice).toLocaleString("en-IN")} more for free shipping
        </p>
      )}

      <div className="border-t border-border pt-4 mb-6">
        <div className="flex justify-between font-sans text-base font-medium">
          <span className="text-foreground">Total</span>
          <span className="text-foreground">₹{totalPrice.toLocaleString("en-IN")}</span>
        </div>
      </div>

      <CheckoutButton />
    </div>
  );
}
