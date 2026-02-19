import { Metadata } from "next";
import Image from "next/image";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { NewsletterForm } from "@/components/layout/newsletter-form";
import { Leaf, Scissors, Heart } from "lucide-react";

export const metadata: Metadata = {
  title: "About — Nuturn",
  description: "Learn about Nuturn's mission to create timeless, thoughtfully designed clothing.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16">
        {/* Hero */}
        <section className="relative h-[60vh] mb-20">
          <Image
            src="https://images.unsplash.com/photo-1558171813-4c088753af8f?w=1600&q=80&auto=format&fit=crop"
            alt="Fashion studio"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-foreground/40" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-background max-w-2xl px-6">
              <h1 className="font-serif text-[clamp(2.5rem,6vw,4.5rem)] font-light leading-[1] tracking-[-0.02em]">
                Clothing for the quietly confident.
              </h1>
              <p className="font-sans text-lg mt-4 opacity-90">
                We create pieces that speak softly but say everything.
              </p>
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-6">
          {/* Mission */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-24 items-center">
            <div>
              <p className="font-sans text-xs font-semibold tracking-[0.3em] uppercase text-muted-foreground mb-4">
                Our Mission
              </p>
              <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] font-light leading-[1.1] tracking-[-0.02em] text-foreground mb-6">
                Thoughtful design, timeless appeal.
              </h2>
              <p className="font-sans text-base text-muted-foreground leading-relaxed mb-4">
                At Nuturn, we believe clothing should be an extension of who you are—not a
                statement you have to make. Our pieces are designed to move with you,
                to age gracefully, and to become constants in an ever-changing world.
              </p>
              <p className="font-sans text-base text-muted-foreground leading-relaxed">
                We prioritize quality over quantity, creating garments that transcend
                seasons and trends. Every stitch, every fold, every choice of fabric
                is considered.
              </p>
            </div>
            <div className="relative aspect-[4/5] rounded-xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&q=80&auto=format&fit=crop"
                alt="Minimalist clothing"
                fill
                className="object-cover"
              />
            </div>
          </section>

          {/* Values */}
          <section className="mb-24">
            <div className="text-center mb-12">
              <p className="font-sans text-xs font-semibold tracking-[0.3em] uppercase text-muted-foreground mb-4">
                What We Stand For
              </p>
              <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] font-light leading-[1.1] tracking-[-0.02em] text-foreground">
                Our Values
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-8 bg-muted/30 rounded-xl">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <Scissors className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-light text-foreground mb-3">
                  Craftsmanship
                </h3>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                  Every piece is made with attention to detail by skilled artisans
                  who take pride in their work.
                </p>
              </div>

              <div className="text-center p-8 bg-muted/30 rounded-xl">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <Leaf className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-light text-foreground mb-3">
                  Sustainability
                </h3>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                  We source materials responsibly and design for longevity,
                  reducing waste in every step of production.
                </p>
              </div>

              <div className="text-center p-8 bg-muted/30 rounded-xl">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-light text-foreground mb-3">
                  Simplicity
                </h3>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                  We believe in the beauty of less. Clean lines, honest materials,
                  and pieces that don&apos;t try too hard.
                </p>
              </div>
            </div>
          </section>

          {/* Sustainability */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-24 items-center">
            <div className="relative aspect-[4/5] rounded-xl overflow-hidden order-2 lg:order-1">
              <Image
                src="https://images.unsplash.com/photo-1558171813-4c088753af8f?w=800&q=80&auto=format&fit=crop"
                alt="Sustainable fashion"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <p className="font-sans text-xs font-semibold tracking-[0.3em] uppercase text-muted-foreground mb-4">
                Sustainability
              </p>
              <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] font-light leading-[1.1] tracking-[-0.02em] text-foreground mb-6">
                Made to last, designed to care.
              </h2>
              <p className="font-sans text-base text-muted-foreground leading-relaxed mb-4">
                We believe the most sustainable garment is the one you wear again and again.
                That&apos;s why we choose materials that age beautifully and construction that
                withstands the test of time.
              </p>
              <p className="font-sans text-base text-muted-foreground leading-relaxed">
                From responsibly sourced fabrics to ethical manufacturing partners,
                every decision we make considers our impact on the planet and the
                people who create our clothes.
              </p>
            </div>
          </section>

          {/* Newsletter */}
          <section className="mb-16">
            <NewsletterForm />
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
