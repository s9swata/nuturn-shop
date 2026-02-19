import { Metadata } from "next";
import Link from "next/link";
import { searchProducts } from "@/lib/search";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ProductCard } from "@/components/collections/product-card";
import { SearchInput } from "@/components/search/search-input";

interface SearchPageProps {
  searchParams: Promise<{ q?: string }>;
}

export async function generateMetadata({ searchParams }: SearchPageProps): Promise<Metadata> {
  const { q } = await searchParams;
  const query = q?.trim() || "";
  
  if (query) {
    return {
      title: `Search: ${query} — Nuturn`,
      description: `Search results for "${query}" at Nuturn.`,
    };
  }
  
  return {
    title: "Search — Nuturn",
    description: "Search for products at Nuturn.",
  };
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const { q } = await searchParams;
  const query = q?.trim() || "";
  const results = query ? searchProducts(query) : [];

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-8">
            <h1 className="font-serif text-[clamp(2rem,4vw,3rem)] font-light leading-[1] tracking-[-0.02em] text-foreground mb-6">
              Search
            </h1>
            <SearchInput initialQuery={query} />
          </div>

          {query ? (
            <>
              <p className="font-sans text-base text-muted-foreground mb-8">
                {results.length === 0 ? (
                  <>No results for &quot;{query}&quot;</>
                ) : (
                  <>
                    {results.length} {results.length === 1 ? "result" : "results"} for &quot;{query}&quot;
                  </>
                )}
              </p>

              {results.length > 0 ? (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                  {results.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="font-sans text-muted-foreground mb-4">
                    Try searching for something else, like &quot;dress&quot; or &quot;linen&quot;
                  </p>
                  <Link
                    href="/collections"
                    className="inline-flex items-center justify-center bg-foreground text-background font-sans text-sm font-semibold tracking-wider uppercase px-6 py-3 rounded-lg min-h-[44px] cursor-pointer hover:bg-foreground/90 transition-colors duration-200"
                  >
                    Browse All Products
                  </Link>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-12">
              <p className="font-sans text-muted-foreground mb-4">
                Enter a search term to find products
              </p>
              <p className="font-sans text-sm text-muted-foreground">
                Try &quot;tops&quot;, &quot;dresses&quot;, &quot;sale&quot;, or product names
              </p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
