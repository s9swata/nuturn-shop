"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { SearchInput } from "./search-input";
import { SearchResults } from "./search-results";
import { searchProducts } from "@/lib/search";
import { X, Search } from "lucide-react";

interface SearchModalProps {
  open: boolean;
  onClose: () => void;
}

function SearchModalInner({ onClose, onResultClick }: { 
  onClose: () => void; 
  onResultClick: () => void;
}) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<ReturnType<typeof searchProducts>>([]);
  const router = useRouter();

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const handleInputChange = useCallback((q: string) => {
    setQuery(q);
    if (q.trim()) {
      const searchResults = searchProducts(q.trim());
      setResults(searchResults);
    } else {
      setResults([]);
    }
  }, []);

  const handleViewAll = () => {
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query.trim())}`);
      onClose();
    }
  };

  return (
    <div className="relative w-full max-w-2xl bg-background border border-border rounded-2xl shadow-2xl overflow-hidden">
      <div className="p-4 border-b border-border">
        <SearchInput
          onSearch={handleInputChange}
          autoFocus
        />
      </div>

      <div className="max-h-[60vh] overflow-y-auto p-2">
        {!query.trim() ? (
          <div className="py-12 text-center">
            <Search className="w-10 h-10 mx-auto text-muted-foreground/50 mb-4" />
            <p className="font-sans text-muted-foreground">
              Start typing to search
            </p>
          </div>
        ) : (
          <>
            <SearchResults
              products={results}
              query={query}
              onResultClick={onResultClick}
            />
            {results.length > 0 && (
              <div className="p-2 pt-4 border-t border-border mt-2">
                <button
                  onClick={handleViewAll}
                  className="w-full text-center font-sans text-sm font-medium text-primary hover:text-primary/80 transition-colors duration-200 cursor-pointer"
                >
                  View all {results.length} results for &quot;{query}&quot;
                </button>
              </div>
            )}
          </>
        )}
      </div>

      <button
        onClick={onClose}
        className="absolute top-4 right-4 p-2 text-muted-foreground hover:text-foreground transition-colors duration-200 cursor-pointer rounded-lg hover:bg-muted"
        aria-label="Close search"
      >
        <X className="w-5 h-5" />
      </button>
    </div>
  );
}

export function SearchModal({ open, onClose }: SearchModalProps) {
  const handleResultClick = useCallback(() => {
    onClose();
  }, [onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center pt-20 px-4"
      role="dialog"
      aria-modal="true"
      aria-label="Search products"
    >
      <div
        className="absolute inset-0 bg-background/95 backdrop-blur-md"
        onClick={onClose}
      />

      <SearchModalInner 
        onClose={onClose} 
        onResultClick={handleResultClick} 
      />
    </div>
  );
}
