import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { DemoBanner } from "./DemoBanner";

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <DemoBanner />
      <main className="flex-1 pt-16">{children}</main>
      <Footer />
    </div>
  );
}
