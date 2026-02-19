"use client";

import { useState } from "react";
import Image from "next/image";
import { type Product } from "@/components/collections/data";

interface ProductGalleryProps {
  product: Product;
}

export function ProductGallery({ product }: ProductGalleryProps) {
  const allImages = product.images && product.images.length > 0 
    ? [product.image, ...product.images] 
    : [product.image];
  
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className="space-y-4">
      <div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-muted">
        <Image
          src={allImages[selectedIndex]}
          alt={product.name}
          fill
          className="object-cover object-center"
          priority
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </div>
      {allImages.length > 1 && (
        <div className="flex gap-3">
          {allImages.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedIndex(idx)}
              className={`relative w-20 h-24 rounded-lg overflow-hidden bg-muted cursor-pointer transition-all duration-200 ${
                selectedIndex === idx
                  ? "ring-2 ring-foreground"
                  : "ring-1 ring-transparent hover:ring-foreground/30"
              }`}
              aria-label={`View image ${idx + 1}`}
            >
              <Image
                src={img}
                alt={`${product.name} view ${idx + 1}`}
                fill
                className="object-cover object-center"
                sizes="80px"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
