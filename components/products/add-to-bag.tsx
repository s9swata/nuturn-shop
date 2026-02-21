"use client";

import { useState } from "react";
import { ShoppingBag } from "lucide-react";

interface AddToBagProps {
  price: number;
}

export function AddToBag({ price }: AddToBagProps) {
  const [isAdded, setIsAdded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleAdd = async () => {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 500));
    setIsLoading(false);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
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
          <span>Add to Bag — ₹{price.toLocaleString("en-IN")}</span>
        </>
      )}
    </button>
  );
}
