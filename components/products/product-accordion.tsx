"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
  isOpen: boolean;
  onToggle: () => void;
}

function AccordionItem({ title, children, isOpen, onToggle }: AccordionItemProps) {
  return (
    <div className="border-b border-border">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-4 cursor-pointer"
        aria-expanded={isOpen}
      >
        <span className="font-sans text-sm font-medium text-foreground">
          {title}
        </span>
        <ChevronDown
          className={`w-4 h-4 text-muted-foreground transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-40 pb-4" : "max-h-0"
        }`}
      >
        <p className="font-sans text-sm text-muted-foreground leading-relaxed">
          {children}
        </p>
      </div>
    </div>
  );
}

interface ProductAccordionProps {
  details?: string[];
}

export function ProductAccordion({ details = [] }: ProductAccordionProps) {
  const [openSection, setOpenSection] = useState<string | null>("details");

  const sections = [
    {
      id: "details",
      title: "Details",
      content: details.length > 0 ? (
        <ul className="list-disc list-inside space-y-1">
          {details.map((detail, idx) => (
            <li key={idx}>{detail}</li>
          ))}
        </ul>
      ) : (
        "Product details coming soon."
      ),
    },
    {
      id: "shipping",
      title: "Shipping & Returns",
      content:
        "Free standard shipping on orders over ₹15,000. Express shipping available at checkout. Returns accepted within 30 days of purchase. Items must be unworn with original tags attached.",
    },
  ];

  const toggleSection = (id: string) => {
    setOpenSection(openSection === id ? null : id);
  };

  return (
    <div className="border-t border-border mt-8">
      {sections.map((section) => (
        <AccordionItem
          key={section.id}
          title={section.title}
          isOpen={openSection === section.id}
          onToggle={() => toggleSection(section.id)}
        >
          {section.content}
        </AccordionItem>
      ))}
    </div>
  );
}
