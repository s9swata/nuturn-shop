import Link from "next/link";
import { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Order Confirmed — Nuturn",
  description: "Thank you for your order. Your purchase has been completed successfully.",
};

export default function ConfirmationPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16 min-h-[60vh]">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <div className="mb-8">
            <CheckCircle className="w-20 h-20 mx-auto text-green-500 mb-6" />
            <h1 className="font-serif text-[clamp(2rem,4vw,3rem)] font-light leading-[1.1] tracking-[-0.02em] text-foreground mb-4">
              Thank You!
            </h1>
            <p className="font-sans text-lg text-muted-foreground">
              Your order has been confirmed.
            </p>
          </div>

          <div className="bg-muted/30 rounded-xl p-6 mb-8">
            <p className="font-sans text-sm text-muted-foreground mb-4">
              A confirmation email has been sent to your registered email address with order details and tracking information.
            </p>
            <p className="font-sans text-sm text-muted-foreground">
              If you have any questions about your order, please contact our customer support team.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/collections"
              className="inline-flex items-center justify-center gap-2 bg-foreground text-background font-sans text-sm font-semibold tracking-wider uppercase py-4 px-8 rounded-lg min-h-[52px] cursor-pointer hover:bg-foreground/90 transition-all duration-200"
            >
              Continue Shopping
            </Link>
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 border border-input bg-background text-foreground font-sans text-sm font-semibold tracking-wider uppercase py-4 px-8 rounded-lg min-h-[52px] cursor-pointer hover:bg-muted transition-all duration-200"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
