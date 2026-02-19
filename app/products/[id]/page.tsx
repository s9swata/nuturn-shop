import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { products } from "@/components/collections/data";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ProductGallery } from "@/components/products/product-gallery";
import { ProductInfo } from "@/components/products/product-info";
import { RelatedProducts } from "@/components/products/related-products";
import { ChevronRight } from "lucide-react";

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return products.map((product) => ({ id: String(product.id) }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { id } = await params;
  const product = products.find((p) => p.id === Number(id));
  
  if (!product) {
    return { title: "Product Not Found — Nuturn" };
  }

  return {
    title: `${product.name} — Nuturn`,
    description: product.description || `Shop ${product.name} from Nuturn's ${product.category} collection.`,
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    notFound();
  }

  const categoryLabel = product.category.charAt(0).toUpperCase() + product.category.slice(1);

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-8">
            <Link href="/collections" className="hover:text-foreground transition-colors duration-200 cursor-pointer">
              Collections
            </Link>
            <ChevronRight className="w-3 h-3" />
            <Link href={`/collections?category=${product.category}`} className="hover:text-foreground transition-colors duration-200 cursor-pointer">
              {categoryLabel}
            </Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-foreground">{product.name}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <ProductGallery product={product} />
            <ProductInfo product={product} />
          </div>

          <RelatedProducts currentProductId={product.id} />
        </div>
      </main>
      <Footer />
    </>
  );
}
