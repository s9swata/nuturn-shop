import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { products } from "@/components/collections/data";

export function Hero() {
  const heroImage = products[0]?.image || "/products/product1/1.png";
  return (
    <section className="relative min-h-screen flex items-end overflow-hidden bg-foreground">
      {/* Full-bleed background image */}
      <div className="absolute inset-0">
        <Image
          src={heroImage}
          alt="Nuturn ethnic wear collection"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Gradient overlay — bottom-heavy for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pb-20 pt-48">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <p className="font-sans text-xs font-semibold tracking-[0.3em] uppercase text-white/70 mb-6">
            New Arrivals
          </p>

          {/* Headline */}
          <h1 className="font-serif text-[clamp(3.5rem,10vw,9rem)] font-light leading-[0.9] tracking-[-0.02em] text-white mb-8">
            Wear
            <br />
            <em className="italic text-primary">what</em>
            <br />
            you are.
          </h1>

          {/* Subline */}
          <p className="font-sans text-base font-light text-white/70 max-w-md mb-10 leading-relaxed">
            Elevated essentials for those who move between worlds. Designed for
            the quietly confident.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4">
            <Button
              asChild
              size="lg"
              className="cursor-pointer bg-primary hover:bg-primary/90 text-primary-foreground font-sans font-semibold tracking-wider uppercase text-sm px-8 py-6 rounded-full transition-all duration-200 min-h-[44px]"
            >
              <Link href="/collections">
                Shop Now
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="ghost"
              size="lg"
              className="cursor-pointer text-white hover:text-white hover:bg-white/10 border border-white/30 font-sans font-medium tracking-wider uppercase text-sm px-8 py-6 rounded-full transition-all duration-200 min-h-[44px]"
            >
              <Link href="/new-arrivals">New Arrivals</Link>
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 right-8 hidden md:flex flex-col items-center gap-2 text-white/40">
          <span className="font-sans text-[10px] tracking-[0.2em] uppercase rotate-90 origin-center">Scroll</span>
          <div className="w-px h-12 bg-white/20" />
        </div>
      </div>
    </section>
  );
}
