"use client";

import { useState } from "react";
import { ShoppingBag } from "lucide-react";
import { type Product } from "@/components/collections/data";
import { useCartStore } from "@/lib/store/cart";

interface ProductActionsProps {
  product: Product;
}

export function ProductActions({ product }: ProductActionsProps) {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isAdded, setIsAdded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  const addItem = useCartStore((state) => state.addItem);

  const sizes = product.sizes || ["XS", "S", "M", "L", "XL"];

  const handleAdd = async () => {
    if (!selectedSize) {
      setError("Please select a size");
      return;
    }

    setError(null);
    setIsLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 300));

    addItem({
      productId: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      size: selectedSize,
    });

    setIsLoading(false);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  const handleSizeSelect = (size: string) => {
    setSelectedSize(size);
    setError(null);
  };

  return (
    <div className="space-y-6">
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="font-sans text-xs font-semibold tracking-widest uppercase text-foreground">
            Size
          </span>
          <button className="font-sans text-xs text-muted-foreground underline cursor-pointer hover:text-foreground transition-colors duration-200">
            Size Guide
          </button>
        </div>
        <div className="flex gap-2">
          {sizes.map((size) => (
            <button
              key={size}
              onClick={() => handleSizeSelect(size)}
              className={`flex-1 h-12 rounded-lg font-sans text-sm font-medium transition-all duration-200 cursor-pointer min-w-[44px] ${
                selectedSize === size
                  ? "bg-foreground text-background"
                  : "bg-background border border-input text-foreground hover:border-foreground"
              }`}
              aria-pressed={selectedSize === size}
            >
              {size}
            </button>
          ))}
        </div>
        {error && (
          <p className="font-sans text-xs text-destructive">{error}</p>
        )}
      </div>

      <button
        onClick={handleAdd}
        disabled={isLoading || isAdded}
        className="w-full flex items-center justify-center gap-2 bg-foreground text-background font-sans text-sm font-semibold tracking-wider uppercase py-4 rounded-lg min-h-[52px] cursor-pointer hover:bg-foreground/90 transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {isLoading ? (
          <span>Adding...</span>
        ) : isAdded ? (
          <span>Added to Bag</span>
        ) : (
          <>
            <ShoppingBag className="w-4 h-4" />
            <span>Add to Bag — ${product.price}</span>
          </>
        )}
      </button>
    </div>
  );
}
