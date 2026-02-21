import { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "Privacy Policy — Nuturn",
  description: "Learn how Nuturn collects, uses, and protects your personal information.",
};

export default function PrivacyPolicyPage() {
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
              Privacy Policy
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
                Information We Collect
              </h2>
              <p className="font-sans text-muted-foreground leading-relaxed mb-4">
                We collect information you provide directly to us, as well as information automatically collected when you use our Site:
              </p>
              <h3 className="font-sans text-lg font-medium text-foreground mt-6 mb-3">
                Information You Provide
              </h3>
              <ul className="font-sans text-muted-foreground leading-relaxed list-disc pl-6 space-y-2">
                <li>Account information (name, email, phone number, password)</li>
                <li>Shipping and billing addresses</li>
                <li>Payment information (processed securely through third-party providers)</li>
                <li>Communication preferences</li>
                <li>Reviews, ratings, and feedback you submit</li>
                <li>Customer support inquiries</li>
              </ul>
              <h3 className="font-sans text-lg font-medium text-foreground mt-6 mb-3">
                Automatically Collected Information
              </h3>
              <ul className="font-sans text-muted-foreground leading-relaxed list-disc pl-6 space-y-2">
                <li>Device information (IP address, browser type, operating system)</li>
                <li>Usage data (pages visited, time spent, links clicked)</li>
                <li>Location data (general location based on IP address)</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-light text-foreground mb-4">
                How We Use Your Information
              </h2>
              <p className="font-sans text-muted-foreground leading-relaxed mb-4">
                We use the information we collect to:
              </p>
              <ul className="font-sans text-muted-foreground leading-relaxed list-disc pl-6 space-y-2">
                <li>Process and fulfill your orders</li>
                <li>Provide customer support and respond to inquiries</li>
                <li>Personalize your shopping experience</li>
                <li>Send transactional emails (order confirmations, shipping updates)</li>
                <li>Send marketing communications (with your consent)</li>
                <li>Improve our Site and services</li>
                <li>Detect and prevent fraud</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-light text-foreground mb-4">
                Information Sharing
              </h2>
              <p className="font-sans text-muted-foreground leading-relaxed mb-4">
                We may share your information with:
              </p>
              <ul className="font-sans text-muted-foreground leading-relaxed list-disc pl-6 space-y-2">
                <li><strong>Service Providers:</strong> Third-party companies that help us operate our business (payment processing, shipping, email delivery, analytics)</li>
                <li><strong>Business Partners:</strong> With your consent, partners who offer products or services we think may interest you</li>
                <li><strong>Legal Requirements:</strong> When required by law, regulation, or legal process</li>
                <li><strong>Business Transfers:</strong> In connection with mergers, acquisitions, or sale of assets</li>
              </ul>
              <p className="font-sans text-muted-foreground leading-relaxed mt-4">
                We do not sell your personal information to third parties.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-light text-foreground mb-4">
                Data Security
              </h2>
              <p className="font-sans text-muted-foreground leading-relaxed mb-4">
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
              </p>
              <p className="font-sans text-muted-foreground leading-relaxed">
                Payment information is encrypted using secure socket layer technology (SSL) and processed through PCI-DSS compliant payment processors. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-light text-foreground mb-4">
                Your Rights
              </h2>
              <p className="font-sans text-muted-foreground leading-relaxed mb-4">
                You have the following rights regarding your personal information:
              </p>
              <ul className="font-sans text-muted-foreground leading-relaxed list-disc pl-6 space-y-2">
                <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
                <li><strong>Correction:</strong> Request correction of inaccurate or incomplete data</li>
                <li><strong>Deletion:</strong> Request deletion of your personal information (&quot;right to be forgotten&quot;)</li>
                <li><strong>Opt-out:</strong> Unsubscribe from marketing communications at any time</li>
                <li><strong>Data Portability:</strong> Request your data in a structured, machine-readable format</li>
              </ul>
              <p className="font-sans text-muted-foreground leading-relaxed mt-4">
                To exercise these rights, please contact us at hello@nuturn.com. We will respond to your request within 30 days.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-light text-foreground mb-4">
                Cookies & Tracking
              </h2>
              <p className="font-sans text-muted-foreground leading-relaxed mb-4">
                We use cookies and similar tracking technologies to enhance your browsing experience and analyze Site traffic. Cookies are small files stored on your device that help us remember your preferences and understand how you use our Site.
              </p>
              <h3 className="font-sans text-lg font-medium text-foreground mt-6 mb-3">
                Types of Cookies We Use
              </h3>
              <ul className="font-sans text-muted-foreground leading-relaxed list-disc pl-6 space-y-2">
                <li><strong>Essential Cookies:</strong> Necessary for the Site to function properly</li>
                <li><strong>Analytics Cookies:</strong> Help us understand how visitors navigate and use our Site</li>
                <li><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements</li>
                <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
              </ul>
              <p className="font-sans text-muted-foreground leading-relaxed mt-4">
                You can control or disable cookies through your browser settings. However, disabling essential cookies may affect your ability to use certain features of our Site.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-light text-foreground mb-4">
                Data Retention
              </h2>
              <p className="font-sans text-muted-foreground leading-relaxed mb-4">
                We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.
              </p>
              <ul className="font-sans text-muted-foreground leading-relaxed list-disc pl-6 space-y-2">
                <li>Account information: Retained while your account is active and for 3 years after deletion</li>
                <li>Order information: Retained for 5 years for tax and accounting purposes</li>
                <li>Marketing data: Retained until you unsubscribe</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-light text-foreground mb-4">
                Children&apos;s Privacy
              </h2>
              <p className="font-sans text-muted-foreground leading-relaxed">
                Our Site is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately, and we will delete such information from our records.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-light text-foreground mb-4">
                Third-Party Links
              </h2>
              <p className="font-sans text-muted-foreground leading-relaxed mb-4">
                Our Site may contain links to third-party websites, services, or applications that are not operated by Nuturn. We have no control over these third parties and are not responsible for their privacy practices.
              </p>
              <p className="font-sans text-muted-foreground leading-relaxed">
                We encourage you to review the privacy policies of any third-party sites you visit. Your interactions with these third parties are governed by their respective privacy policies.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-light text-foreground mb-4">
                Changes to This Policy
              </h2>
              <p className="font-sans text-muted-foreground leading-relaxed mb-4">
                We may update this Privacy Policy from time to time to reflect changes in our practices or for operational, legal, or regulatory reasons.
              </p>
              <p className="font-sans text-muted-foreground leading-relaxed">
                When we make material changes, we will post the updated policy on this page and update the &quot;Last updated&quot; date at the top. We encourage you to review this Privacy Policy periodically.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-light text-foreground mb-4">
                Contact Information
              </h2>
              <p className="font-sans text-muted-foreground leading-relaxed mb-4">
                If you have any questions about this Privacy Policy or our data practices, please contact us:
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
