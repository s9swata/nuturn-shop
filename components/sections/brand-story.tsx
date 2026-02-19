import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function BrandStory() {
  return (
    <section className="py-24 max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        {/* Image Side */}
        <div className="relative">
          {/* Main image */}
          <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=900&q=80&auto=format&fit=crop"
              alt="Nuturn brand story — woman in editorial fashion pose"
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {/* Floating accent card */}
          <div className="absolute -bottom-6 -right-6 md:-right-10 bg-background border border-border rounded-2xl p-5 shadow-lg max-w-[200px]">
            <p className="font-serif text-4xl font-light text-foreground leading-none mb-1">
              2019
            </p>
            <p className="font-sans text-xs text-muted-foreground leading-relaxed">
              Founded with the belief that clothing should speak without words.
            </p>
          </div>
        </div>

        {/* Text Side */}
        <div>
          <p className="font-sans text-xs font-semibold tracking-[0.3em] uppercase text-muted-foreground mb-6">
            Our Story
          </p>
          <h2 className="font-serif text-[clamp(2.5rem,4vw,4rem)] font-light leading-[1.05] tracking-[-0.02em] text-foreground mb-8">
            Clothing that
            <br />
            <em className="italic text-primary">moves</em> with you.
          </h2>

          <div className="space-y-5 mb-10">
            <p className="font-sans text-base text-muted-foreground leading-relaxed">
              Nuturn was born from a simple frustration: fashion that looked
              beautiful in editorial but fell apart in real life. We set out to
              make clothes that are equally at home on a runway and on a Tuesday
              morning.
            </p>
            <p className="font-sans text-base text-muted-foreground leading-relaxed">
              Every piece is designed with intention — for movement, for
              longevity, for the quietly confident person who knows that
              restraint is its own kind of power.
            </p>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-3 gap-6 mb-10 border-t border-border pt-8">
            {[
              { value: "100%", label: "Sustainable fabrics" },
              { value: "40+", label: "Countries shipped" },
              { value: "6yr", label: "In the making" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-serif text-3xl font-light text-foreground mb-1">
                  {stat.value}
                </p>
                <p className="font-sans text-xs text-muted-foreground leading-snug">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <Button
            asChild
            variant="outline"
            size="lg"
            className="cursor-pointer font-sans font-semibold tracking-wider uppercase text-sm rounded-full px-8 py-6 border-foreground text-foreground hover:bg-foreground hover:text-background transition-all duration-200 min-h-[44px]"
          >
            <Link href="/about">
              Read Our Story
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
