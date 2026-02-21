import Link from "next/link";
import { Instagram, Twitter } from "lucide-react";
import { NewsletterForm } from "@/components/layout/newsletter-form";

const footerLinks = {
  Shop: [
    { label: "New Arrivals", href: "/new-arrivals" },
    { label: "Collections", href: "/collections" },
    { label: "Sale", href: "/sale" },
  ],
  Help: [
    { label: "Shipping & Returns", href: "/privacy-policy" },
    { label: "FAQ", href: "/privacy-policy" },
    { label: "Contact Us", href: "/about" },
  ],
  Company: [
    { label: "About Nuturn", href: "/about" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      {/* Newsletter strip */}
      <div className="border-b border-background/10">
        <div className="max-w-7xl mx-auto px-6 py-14 md:flex items-center justify-between gap-12">
          <div className="mb-8 md:mb-0">
            <h3 className="font-serif text-3xl font-light text-background mb-2">
              Stay in the edit.
            </h3>
            <p className="font-sans text-sm text-background/60 max-w-xs">
              New collections, exclusive drops, and stories — direct to your inbox.
            </p>
          </div>
          <NewsletterForm />
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link
              href="/"
              className="font-serif text-2xl font-semibold tracking-[0.15em] uppercase text-background hover:text-primary transition-colors duration-200 cursor-pointer"
            >
              Nuturn
            </Link>
            <p className="font-sans text-sm text-background/50 mt-4 max-w-[200px] leading-relaxed">
              Modern clothing for the quietly confident.
            </p>
            {/* Social icons */}
            <div className="flex items-center gap-3 mt-6">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-background/20 text-background/60 hover:text-background hover:border-background/60 transition-all duration-200 cursor-pointer"
                aria-label="Nuturn on Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-background/20 text-background/60 hover:text-background hover:border-background/60 transition-all duration-200 cursor-pointer"
                aria-label="Nuturn on Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h4 className="font-sans text-xs font-semibold tracking-[0.25em] uppercase text-background/40 mb-5">
                {section}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="font-sans text-sm text-background/70 hover:text-background transition-colors duration-200 cursor-pointer"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-background/10 max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-3">
        <p className="font-sans text-xs text-background/40">
          &copy; {new Date().getFullYear()} Nuturn. All rights reserved.
        </p>
        <div className="flex items-center gap-6">
          {["Privacy Policy", "Terms of Service"].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase().replace(/ /g, "-")}`}
              className="font-sans text-xs text-background/40 hover:text-background/70 transition-colors duration-200 cursor-pointer"
            >
              {item}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
