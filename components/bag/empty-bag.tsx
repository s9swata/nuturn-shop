import Link from "next/link";
import { ShoppingBag } from "lucide-react";

export function EmptyBag() {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center mb-6">
        <ShoppingBag className="w-8 h-8 text-muted-foreground" />
      </div>
      <h2 className="font-serif text-2xl font-light text-foreground mb-2">
        Your bag is empty
      </h2>
      <p className="font-sans text-muted-foreground mb-8">
        Add some pieces you love.
      </p>
      <Link
        href="/collections"
        className="inline-flex items-center justify-center bg-foreground text-background font-sans text-sm font-semibold tracking-wider uppercase px-6 py-3 rounded-lg min-h-[44px] cursor-pointer hover:bg-foreground/90 transition-colors duration-200"
      >
        Browse Collections
      </Link>
    </div>
  );
}
