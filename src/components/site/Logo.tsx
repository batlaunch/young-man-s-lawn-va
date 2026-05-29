export function LogoPlaceholder({ small = false }: { small?: boolean }) {
  return (
    <div className="flex flex-col">
      <div
        className={`flex items-center justify-center rounded-xl border-2 border-dashed border-accent/70 bg-primary/40 px-4 ${
          small ? "py-2 text-xs" : "py-3 text-sm"
        } font-display italic tracking-wide text-brand-white/80`}
      >
        [ YOUR LOGO HERE ]
      </div>
      <span className="mt-1 text-[10px] text-muted-foreground">
        (Logo will be placed here)
      </span>
    </div>
  );
}
