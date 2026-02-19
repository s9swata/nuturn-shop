import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { FeaturedCollections } from "@/components/sections/featured-collections";
import { NewArrivals } from "@/components/sections/new-arrivals";
import { BrandStory } from "@/components/sections/brand-story";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <FeaturedCollections />
        <NewArrivals />
        <BrandStory />
      </main>
      <Footer />
    </>
  );
}
