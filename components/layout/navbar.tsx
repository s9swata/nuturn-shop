"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ShoppingBag, Search, Menu, X } from "lucide-react";
import { UserButton, useUser } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useCartTotals } from "@/lib/store/cart";
import { SearchModal } from "@/components/search/search-modal";

const navLinks = [
  { label: "Collections", href: "/collections" },
  { label: "New Arrivals", href: "/new-arrivals" },
  { label: "About", href: "/about" },
  { label: "Sale", href: "/sale" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const { isSignedIn } = useUser();
  const { totalItems } = useCartTotals();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-4 left-4 right-4 z-50 transition-all duration-300",
          scrolled ? "top-2" : "top-4"
        )}
      >
        <nav
          className={cn(
            "max-w-7xl mx-auto flex items-center justify-between px-6 py-3 rounded-2xl transition-all duration-300",
            scrolled
              ? "bg-background/90 backdrop-blur-md shadow-md border border-border"
              : "bg-background/60 backdrop-blur-sm border border-border/50"
          )}
        >
          {/* Logo */}
          <Link
            href="/"
            className="font-serif text-2xl font-semibold tracking-[0.15em] uppercase text-foreground hover:text-primary transition-colors duration-200"
          >
            Nuturn
          </Link>

          {/* Desktop Nav Links */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "font-sans text-sm font-medium tracking-wider uppercase text-muted-foreground",
                    "hover:text-foreground transition-colors duration-200",
                    link.label === "Sale" && "text-primary hover:text-primary/80"
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right Icons */}
          <div className="flex items-center gap-1">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setSearchOpen(true)}
              className="cursor-pointer text-muted-foreground hover:text-foreground min-h-[44px] min-w-[44px]"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </Button>

            {isSignedIn ? (
              <div className="min-h-[44px] min-w-[44px] flex items-center">
                <UserButton
                  afterSignOutUrl="/"
                  appearance={{
                    elements: {
                      avatarBox: "w-8 h-8",
                    },
                  }}
                />
              </div>
            ) : (
              <Button
                asChild
                variant="ghost"
                className="cursor-pointer text-muted-foreground hover:text-foreground font-sans text-sm font-medium tracking-wider uppercase min-h-[44px]"
              >
                <Link href="/sign-in">Sign In</Link>
              </Button>
            )}

            <Link
              href="/bag"
              className="cursor-pointer text-muted-foreground hover:text-foreground relative min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label={`Shopping bag, ${totalItems} items`}
            >
              <ShoppingBag className="w-5 h-5" />
              {totalItems > 0 && (
                <span className="absolute -top-0.5 -right-0.5 min-w-[18px] h-[18px] flex items-center justify-center bg-primary text-primary-foreground text-[10px] font-semibold rounded-full px-1">
                  {totalItems > 99 ? "99+" : totalItems}
                </span>
              )}
            </Link>

            {/* Mobile hamburger */}
            <Button
              variant="ghost"
              size="icon"
              className="cursor-pointer md:hidden text-muted-foreground hover:text-foreground min-h-[44px] min-w-[44px]"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              onClick={() => setMobileOpen((v) => !v)}
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden mt-2 max-w-7xl mx-auto bg-background/95 backdrop-blur-md border border-border rounded-2xl shadow-lg px-6 py-4">
            <ul className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      "font-sans text-base font-medium tracking-wider uppercase text-muted-foreground",
                      "hover:text-foreground transition-colors duration-200 block py-1",
                      link.label === "Sale" && "text-primary"
                    )}
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              {!isSignedIn && (
                <li>
                  <Link
                    href="/sign-in"
                    className={cn(
                      "font-sans text-base font-medium tracking-wider uppercase text-muted-foreground",
                      "hover:text-foreground transition-colors duration-200 block py-1"
                    )}
                    onClick={() => setMobileOpen(false)}
                  >
                    Sign In
                  </Link>
                </li>
              )}
            </ul>
          </div>
        )}
      </header>

      <SearchModal open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
