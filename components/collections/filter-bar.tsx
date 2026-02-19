"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { categories, sortOptions, type Category, type SortOption } from "./data";

interface FilterBarProps {
  selectedCategory: Category;
  onCategoryChange: (category: Category) => void;
  selectedSort: SortOption;
  onSortChange: (sort: SortOption) => void;
}

export function FilterBar({
  selectedCategory,
  onCategoryChange,
  selectedSort,
  onSortChange,
}: FilterBarProps) {
  const [sortOpen, setSortOpen] = useState(false);

  const currentSortLabel =
    sortOptions.find((opt) => opt.value === selectedSort)?.label || "Sort by";

  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
      {/* Category Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
        {categories.map((cat) => (
          <button
            key={cat.value}
            onClick={() => onCategoryChange(cat.value)}
            className={cn(
              "font-sans text-sm font-medium tracking-wider uppercase px-4 py-2 rounded-full whitespace-nowrap transition-all duration-200 min-h-[44px]",
              selectedCategory === cat.value
                ? "bg-foreground text-background"
                : "bg-muted text-muted-foreground hover:bg-muted/80"
            )}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Sort Dropdown */}
      <div className="relative">
        <button
          onClick={() => setSortOpen(!sortOpen)}
          className="flex items-center gap-2 font-sans text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 px-4 py-2 rounded-full border border-border min-h-[44px] cursor-pointer"
        >
          {currentSortLabel}
          <ChevronDown
            className={cn(
              "w-4 h-4 transition-transform duration-200",
              sortOpen && "rotate-180"
            )}
          />
        </button>
        {sortOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-background border border-border rounded-xl shadow-lg overflow-hidden z-10">
            {sortOptions.map((opt) => (
              <button
                key={opt.value}
                onClick={() => {
                  onSortChange(opt.value);
                  setSortOpen(false);
                }}
                className={cn(
                  "w-full text-left font-sans text-sm px-4 py-3 transition-colors duration-200 cursor-pointer",
                  selectedSort === opt.value
                    ? "bg-primary/10 text-primary"
                    : "hover:bg-muted"
                )}
              >
                {opt.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
