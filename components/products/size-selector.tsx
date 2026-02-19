"use client";

import { useState } from "react";

interface SizeSelectorProps {
  sizes?: string[];
  onSizeChange?: (size: string) => void;
}

export function SizeSelector({ sizes = ["XS", "S", "M", "L", "XL"], onSizeChange }: SizeSelectorProps) {
  const [selected, setSelected] = useState<string | null>(null);

  const handleSelect = (size: string) => {
    setSelected(size);
    onSizeChange?.(size);
  };

  return (
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
            onClick={() => handleSelect(size)}
            className={`flex-1 h-12 rounded-lg font-sans text-sm font-medium transition-all duration-200 cursor-pointer min-w-[44px] ${
              selected === size
                ? "bg-foreground text-background"
                : "bg-background border border-input text-foreground hover:border-foreground"
            }`}
            aria-pressed={selected === size}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
}
