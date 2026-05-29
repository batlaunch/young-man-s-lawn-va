import { useState } from "react";
import { X } from "lucide-react";

export function DemoBanner() {
  const [open, setOpen] = useState(true);
  if (!open) return null;
  return (
    <div className="bg-accent text-accent-foreground">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2 text-xs sm:text-sm lg:px-8">
        <p className="leading-snug">
          👋 Hi Justin! This is a preview of what your professional website could look like. Everything here — your services, pricing, story, and brand — was built just for you.
        </p>
        <button onClick={() => setOpen(false)} aria-label="Dismiss" className="shrink-0 rounded p-1 hover:bg-black/10">
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
