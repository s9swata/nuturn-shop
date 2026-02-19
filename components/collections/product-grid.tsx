"use client";

import { useState, useMemo } from "react";
import { ProductCard } from "./product-card";
import { FilterBar } from "./filter-bar";
import { products, type Category, type SortOption } from "./data";

export function ProductGrid() {
  const [selectedCategory, setSelectedCategory] = useState<Category>("all");
  const [selectedSort, setSelectedSort] = useState<SortOption>("newest");

  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    // Filter by category
    if (selectedCategory !== "all") {
      filtered = filtered.filter((p) => p.category === selectedCategory);
    }

    // Sort
    switch (selectedSort) {
      case "price-low":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "newest":
      default:
        // Keep original order (newest first - products with "new" tag first)
        filtered.sort((a, b) => {
          if (a.tag === "new" && b.tag !== "new") return -1;
          if (b.tag === "new" && a.tag !== "new") return 1;
          return 0;
        });
        break;
    }

    return filtered;
  }, [selectedCategory, selectedSort]);

  return (
    <>
      <FilterBar
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        selectedSort={selectedSort}
        onSortChange={setSelectedSort}
      />

      {filteredProducts.length === 0 ? (
        <div className="text-center py-20">
          <p className="font-sans text-muted-foreground">
            No products found in this category.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </>
  );
}
