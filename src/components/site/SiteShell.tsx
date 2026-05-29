import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { DemoBanner } from "./DemoBanner";

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <DemoBanner />
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
