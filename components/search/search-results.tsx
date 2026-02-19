"use client";

import Image from "next/image";
import Link from "next/link";
import { type Product } from "@/components/collections/data";

interface SearchResultRowProps {
  product: Product;
  onClick?: () => void;
}

export function SearchResultRow({ product, onClick }: SearchResultRowProps) {
  return (
    <Link
      href={`/products/${product.id}`}
      onClick={onClick}
      className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted/50 transition-colors duration-200 cursor-pointer min-h-[72px]"
    >
      <div className="relative w-12 h-16 flex-shrink-0 rounded-md overflow-hidden bg-muted">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover object-center"
          sizes="48px"
        />
      </div>
      <div className="min-w-0 flex-1">
        <h4 className="font-sans text-sm font-medium text-foreground truncate">
          {product.name}
        </h4>
        <p className="font-sans text-xs text-muted-foreground capitalize">
          {product.category}
        </p>
      </div>
      <p className="font-sans text-sm font-medium text-foreground flex-shrink-0">
        ${product.price}
      </p>
    </Link>
  );
}

interface SearchResultsProps {
  products: Product[];
  query: string;
  onResultClick?: () => void;
}

export function SearchResults({ products, query, onResultClick }: SearchResultsProps) {
  if (products.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="font-sans text-muted-foreground">
          No results for &quot;{query}&quot;
        </p>
        <p className="font-sans text-sm text-muted-foreground mt-1">
          Try searching for something else
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-1">
      {products.map((product) => (
        <SearchResultRow
          key={product.id}
          product={product}
          onClick={onResultClick}
        />
      ))}
    </div>
  );
}
