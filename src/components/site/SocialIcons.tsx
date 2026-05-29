import { Instagram, Youtube } from "lucide-react";

const SOCIALS = [
  { href: "https://www.instagram.com/young_mans_lawn_care/", label: "Instagram", icon: Instagram },
  { href: "https://x.com/YoungMansLawn", label: "X / Twitter", icon: XIcon },
  { href: "https://www.youtube.com/channel/UCB1bnwaXfZ0-uKthZzEkJkQ", label: "YouTube", icon: Youtube },
];

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M18.244 2H21l-6.49 7.41L22 22h-6.78l-4.78-6.27L4.84 22H2l6.95-7.94L2 2h6.93l4.34 5.78L18.24 2Zm-1.18 18h1.69L7.04 4H5.27l11.79 16Z" />
    </svg>
  );
}

export function SocialIcons({ size = 18, className = "" }: { size?: number; className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {SOCIALS.map(({ href, label, icon: Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noreferrer noopener"
          aria-label={label}
          className="text-muted-foreground transition-colors hover:text-accent"
        >
          <Icon className="" style={{ width: size, height: size }} />
        </a>
      ))}
    </div>
  );
}
