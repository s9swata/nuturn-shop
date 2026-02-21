import { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "Terms of Service — Nuturn",
  description: "Terms and conditions for using the Nuturn website and services.",
};

export default function TermsOfServicePage() {
  const lastUpdated = "February 21, 2026";

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16">
        <section className="bg-muted/20 py-20 mb-16">
          <div className="max-w-7xl mx-auto px-6">
            <p className="font-sans text-xs font-semibold tracking-[0.3em] uppercase text-muted-foreground mb-4">
              Legal
            </p>
            <h1 className="font-serif text-[clamp(2.5rem,5vw,4rem)] font-light leading-[1] tracking-[-0.02em] text-foreground">
              Terms of Service
            </h1>
            <p className="font-sans text-muted-foreground mt-4">
              Last updated: {lastUpdated}
            </p>
          </div>
        </section>

        <div className="max-w-3xl mx-auto px-6">
          <div className="prose prose-lg max-w-none space-y-12">
            <section>
              <h2 className="font-serif text-2xl font-light text-foreground mb-4">
                Acceptance of Terms
              </h2>
              <p className="font-sans text-muted-foreground leading-relaxed">
                By accessing and using the Nuturn website (&quot;Site&quot;), you accept and agree to be bound by the terms and provision of this Agreement. If you do not agree to abide by these terms, please do not use this Site.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-light text-foreground mb-4">
                Account Responsibilities
              </h2>
              <p className="font-sans text-muted-foreground leading-relaxed mb-4">
                When you create an account with Nuturn, you are responsible for maintaining the security of your account and restricting access to your computer or device. You agree to accept responsibility for all activities that occur under your account.
              </p>
              <p className="font-sans text-muted-foreground leading-relaxed">
                You must notify us immediately of any unauthorized use of your account or any other breach of security. Nuturn will not be liable for any loss or damage arising from your failure to comply with these obligations.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-light text-foreground mb-4">
                User Conduct
              </h2>
              <p className="font-sans text-muted-foreground leading-relaxed mb-4">
                You agree not to use the Site to:
              </p>
              <ul className="font-sans text-muted-foreground leading-relaxed list-disc pl-6 space-y-2">
                <li>Upload or transmit any content that is unlawful, harmful, or otherwise objectionable</li>
                <li>Impersonate any person or entity or falsely state or otherwise misrepresent your affiliation</li>
                <li>Engage in any activity that could damage, disable, or impair the Site</li>
                <li>Collect or store personal data about other users without their consent</li>
                <li>Use the Site for any commercial purpose without our prior written consent</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-light text-foreground mb-4">
                Product Information
              </h2>
              <p className="font-sans text-muted-foreground leading-relaxed mb-4">
                We strive to provide accurate product descriptions, pricing, and availability. However, we cannot guarantee that all information on the Site is completely accurate, current, or error-free.
              </p>
              <p className="font-sans text-muted-foreground leading-relaxed">
                We reserve the right to correct any errors, inaccuracies, or omissions and to change or update information at any time without prior notice. If a product is listed at an incorrect price due to a pricing error, we reserve the right to cancel orders placed for that product.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-light text-foreground mb-4">
                Orders & Pricing
              </h2>
              <p className="font-sans text-muted-foreground leading-relaxed mb-4">
                All orders placed through the Site are subject to our acceptance. We reserve the right to refuse or cancel any order for any reason, including but not limited to: product availability, errors in pricing or product description, or issues with credit card verification.
              </p>
              <p className="font-sans text-muted-foreground leading-relaxed">
                Prices shown on the Site are in INR (₹) and are subject to change without notice. Shipping costs and applicable taxes are calculated at checkout and are your responsibility.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-light text-foreground mb-4">
                Shipping & Returns
              </h2>
              <p className="font-sans text-muted-foreground leading-relaxed mb-4">
                Our shipping and return policies are incorporated into these Terms of Service by reference. Please review our Shipping & Returns page for detailed information about delivery times, shipping costs, and our return policy.
              </p>
              <p className="font-sans text-muted-foreground leading-relaxed">
                We are not responsible for packages that are lost, stolen, or damaged during transit. Please ensure your shipping address is correct and complete before placing your order.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-light text-foreground mb-4">
                Intellectual Property
              </h2>
              <p className="font-sans text-muted-foreground leading-relaxed mb-4">
                The content, design, logos, and all other materials on this Site are the intellectual property of Nuturn and are protected by copyright, trademark, and other applicable laws.
              </p>
              <p className="font-sans text-muted-foreground leading-relaxed">
                You may not reproduce, distribute, modify, or create derivative works from any content on this Site without our prior written consent. All rights not expressly granted herein are reserved by Nuturn.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-light text-foreground mb-4">
                Limitation of Liability
              </h2>
              <p className="font-sans text-muted-foreground leading-relaxed mb-4">
                Nuturn shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses resulting from:
              </p>
              <ul className="font-sans text-muted-foreground leading-relaxed list-disc pl-6 space-y-2">
                <li>Your use or inability to use the Site</li>
                <li>Any unauthorized access to or use of our servers</li>
                <li>Any interruption or cessation of transmission to or from the Site</li>
                <li>Any bugs, viruses, or the like that may be transmitted to or through the Site</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-light text-foreground mb-4">
                Governing Law
              </h2>
              <p className="font-sans text-muted-foreground leading-relaxed">
                These Terms of Service shall be governed by and construed in accordance with the laws of the State of New York, without regard to its conflict of law provisions. Any dispute arising under these terms shall be resolved in the state or federal courts located in New York County, New York.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-light text-foreground mb-4">
                Changes to Terms
              </h2>
              <p className="font-sans text-muted-foreground leading-relaxed">
                We reserve the right to modify these Terms of Service at any time. Any changes will be effective immediately upon posting on the Site. Your continued use of the Site following the posting of revised Terms of Service constitutes your acceptance of the changes.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-light text-foreground mb-4">
                Contact Information
              </h2>
              <p className="font-sans text-muted-foreground leading-relaxed mb-4">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="font-sans text-muted-foreground leading-relaxed">
                <p>Nuturn</p>
                <p>123 Fashion Avenue</p>
                <p>New York, NY 10001</p>
                <p>Email: hello@nuturn.com</p>
                <p>Phone: +1 (555) 123-4567</p>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
