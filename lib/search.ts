import { products, type Product } from "@/components/collections/data";

export function searchProducts(query: string): Product[] {
  const q = query.toLowerCase().trim();
  if (!q) return [];

  return products.filter((p) => {
    const searchable = [
      p.name,
      p.category,
      p.tag ?? "",
      p.description ?? "",
    ]
      .join(" ")
      .toLowerCase();

    return searchable.includes(q);
  });
}
