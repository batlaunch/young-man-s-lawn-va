import { Star } from "lucide-react";

// Only the Yelp profile is verified; other social handles are not published on Yelp.
const SOCIALS = [
  { href: "https://www.yelp.com/biz/young-man-land-service-rixeyville-5", label: "Yelp", icon: Star },
];

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
