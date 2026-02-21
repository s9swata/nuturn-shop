import { NextRequest, NextResponse } from "next/server";
import { isPolarConfigured, polar } from "@/lib/polar";

interface CheckoutItem {
  productId: number;
  name: string;
  price: number;
  quantity: number;
  size: string;
  image: string;
}

export async function POST(request: NextRequest) {
  if (!isPolarConfigured || !polar) {
    return NextResponse.json(
      { error: "Payment system not configured" },
      { status: 503 }
    );
  }

  try {
    const body = await request.json();
    const { items }: { items: CheckoutItem[] } = body;

    if (!items || items.length === 0) {
      return NextResponse.json(
        { error: "No items in cart" },
        { status: 400 }
      );
    }

    const productIds = items.map((item) => item.productId.toString());

    const prices: Record<string, Array<{
      amountType: "fixed";
      priceAmount: number;
      priceCurrency: "inr";
    }>> = {};

    items.forEach((item) => {
      const productId = item.productId.toString();
      prices[productId] = [{
        amountType: "fixed",
        priceAmount: Math.round(item.price * 100),
        priceCurrency: "inr",
      }];
    });

    const checkout = await polar.checkouts.create({
      products: productIds,
      prices,
      metadata: {
        cartItems: JSON.stringify(
          items.map((item) => ({
            productId: item.productId,
            name: item.name,
            quantity: item.quantity,
            size: item.size,
            price: item.price,
          }))
        ),
      },
    });

    return NextResponse.json({ url: checkout.url });
  } catch (error) {
    console.error("Checkout error:", error);
    return NextResponse.json(
      { error: "Failed to create checkout session" },
      { status: 500 }
    );
  }
}
