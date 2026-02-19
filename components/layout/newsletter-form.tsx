"use client";

import { ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function NewsletterForm() {
  return (
    <form
      className="flex gap-2 w-full max-w-md"
      onSubmit={(e) => e.preventDefault()}
    >
      <Input
        type="email"
        placeholder="your@email.com"
        className="bg-background/10 border-background/20 text-background placeholder:text-background/40 focus-visible:ring-primary font-sans flex-1 rounded-full px-5"
        aria-label="Email address for newsletter"
      />
      <Button
        type="submit"
        size="icon"
        className="cursor-pointer bg-primary hover:bg-primary/90 text-primary-foreground rounded-full w-12 h-12 min-w-[44px] min-h-[44px] shrink-0 transition-colors duration-200"
        aria-label="Subscribe to newsletter"
      >
        <ArrowRight className="w-5 h-5" />
      </Button>
    </form>
  );
}
