import { useState } from "react";
import { X, Info } from "lucide-react";

export function DemoBanner({ className = "" }: { className?: string }) {
  const [open, setOpen] = useState(true);
  if (!open) return null;
  return (
    <div className={`rounded-xl border border-primary/30 bg-cream-soft/95 shadow-sm backdrop-blur-sm ${className}`}>
      <div className="flex items-start justify-between gap-3 px-4 py-3">
        <div className="flex items-start gap-3">
          <Info className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
          <p className="text-sm leading-relaxed text-ink">
            This is an early look at what your website could look like! Everything you see is fully customizable — colors, fonts, layout, images, and text can all be changed to match your brand. The content and examples throughout the site are just placeholders for now and will be swapped out with real information, photos, and details about your business as we move forward. Nothing is set in stone, so let us know what you like, what you don't, and we'll build from there!
          </p>
        </div>
        <button
          onClick={() => setOpen(false)}
          aria-label="Dismiss"
          className="shrink-0 rounded p-1 text-ink hover:bg-black/5"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
