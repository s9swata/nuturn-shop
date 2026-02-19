import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6">
      <h1 className="font-serif text-[clamp(3rem,8vw,6rem)] font-light leading-none tracking-[-0.02em] text-foreground mb-6">
        404
      </h1>
      <p className="font-sans text-lg text-muted-foreground mb-2">
        Product not found
      </p>
      <p className="font-sans text-sm text-muted-foreground mb-8 max-w-md">
        The product you&apos;re looking for doesn&apos;t exist or may have been removed.
      </p>
      <Link
        href="/collections"
        className="inline-flex items-center justify-center bg-foreground text-background font-sans text-sm font-semibold tracking-wider uppercase px-6 py-3 rounded-lg min-h-[44px] cursor-pointer hover:bg-foreground/90 transition-colors duration-200"
      >
        Continue Shopping
      </Link>
    </div>
  );
}
