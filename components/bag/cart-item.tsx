"use client";

import Image from "next/image";
import { Minus, Plus, X } from "lucide-react";
import { type CartItem, useCartStore } from "@/lib/store/cart";

interface CartItemRowProps {
  item: CartItem;
}

export function CartItemRow({ item }: CartItemRowProps) {
  const { updateQuantity, removeItem } = useCartStore();

  const handleDecrease = () => {
    if (item.quantity > 1) {
      updateQuantity(item.productId, item.size, item.quantity - 1);
    }
  };

  const handleIncrease = () => {
    if (item.quantity < 10) {
      updateQuantity(item.productId, item.size, item.quantity + 1);
    }
  };

  const handleRemove = () => {
    removeItem(item.productId, item.size);
  };

  return (
    <div className="flex gap-4 py-6 border-b border-border">
      <div className="relative w-20 h-24 flex-shrink-0 rounded-lg overflow-hidden bg-muted">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover object-center"
          sizes="80px"
        />
      </div>

      <div className="flex-1 flex flex-col justify-between min-w-0">
        <div className="flex justify-between items-start gap-2">
          <div className="min-w-0">
            <h3 className="font-sans text-sm font-medium text-foreground truncate">
              {item.name}
            </h3>
            <p className="font-sans text-xs text-muted-foreground mt-1">
              Size: {item.size}
            </p>
          </div>
          <button
            onClick={handleRemove}
            className="p-1 text-muted-foreground hover:text-foreground transition-colors duration-200 cursor-pointer"
            aria-label={`Remove ${item.name}`}
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="flex justify-between items-end">
          <div className="flex items-center gap-3">
            <button
              onClick={handleDecrease}
              disabled={item.quantity <= 1}
              className="w-8 h-8 rounded-lg border border-border flex items-center justify-center cursor-pointer hover:border-foreground transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Decrease quantity"
            >
              <Minus className="w-3 h-3" />
            </button>
            <span className="font-sans text-sm font-medium w-6 text-center">
              {item.quantity}
            </span>
            <button
              onClick={handleIncrease}
              disabled={item.quantity >= 10}
              className="w-8 h-8 rounded-lg border border-border flex items-center justify-center cursor-pointer hover:border-foreground transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Increase quantity"
            >
              <Plus className="w-3 h-3" />
            </button>
          </div>
          <p className="font-sans text-sm font-medium text-foreground">
            ${item.price * item.quantity}
          </p>
        </div>
      </div>
    </div>
  );
}
