"use client";

import { useState, useEffect, useCallback } from "react";
import { Search, X } from "lucide-react";
import { useRouter } from "next/navigation";

interface SearchInputProps {
  initialQuery?: string;
  onSearch?: (query: string) => void;
  autoFocus?: boolean;
  className?: string;
}

export function SearchInput({
  initialQuery = "",
  onSearch,
  autoFocus = false,
  className = "",
}: SearchInputProps) {
  const [query, setQuery] = useState(initialQuery);
  const router = useRouter();

  const handleSearch = useCallback(
    (q: string) => {
      onSearch?.(q);
    },
    [onSearch]
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query.trim())}`);
      handleSearch(query.trim());
    }
  };

  const handleClear = () => {
    setQuery("");
  };

  useEffect(() => {
    setQuery(initialQuery);
  }, [initialQuery]);

  return (
    <form onSubmit={handleSubmit} className={className}>
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for products..."
          autoFocus={autoFocus}
          className="w-full h-14 pl-12 pr-12 bg-muted/50 border border-border rounded-xl font-sans text-base text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-200"
        />
        {query && (
          <button
            type="button"
            onClick={handleClear}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-1 text-muted-foreground hover:text-foreground transition-colors duration-200 cursor-pointer"
            aria-label="Clear search"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>
    </form>
  );
}
