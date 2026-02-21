import { Webhooks } from "@polar-sh/nextjs";
import { NextRequest, NextResponse } from "next/server";

const webhookSecret = process.env.POLAR_WEBHOOK_SECRET;

export async function POST(request: NextRequest) {
  if (!webhookSecret) {
    return NextResponse.json(
      { error: "Webhook not configured" },
      { status: 503 }
    );
  }

  try {
    const result = await Webhooks({
      webhookSecret,
      onOrderPaid: async (payload) => {
        console.log("Order paid:", payload);
        console.log("Payment successful!");
      },
      onOrderCreated: async (payload) => {
        console.log("Order created:", payload);
      },
      onCheckoutCreated: async (payload) => {
        console.log("Checkout created");
      },
      onCheckoutUpdated: async (payload) => {
        console.log("Checkout updated, status:", payload);
      },
    })(request);

    return result;
  } catch (error) {
    console.error("Webhook error:", error);
    return NextResponse.json(
      { error: "Webhook processing failed" },
      { status: 500 }
    );
  }
}
