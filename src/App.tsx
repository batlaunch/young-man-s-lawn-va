import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Home from "./routes/index";
import About from "./routes/about";
import Contact from "./routes/contact";
import Gallery from "./routes/gallery";
import ServicesIndex from "./routes/services.index";
import LawnTurf from "./routes/services.lawn-turf";
import TreesShrubsBeds from "./routes/services.trees-shrubs-beds";
import LandscapeHardscaping from "./routes/services.landscape-hardscaping";
import Irrigation from "./routes/services.irrigation";
import PestControl from "./routes/services.pest-control";
import Seasonal from "./routes/services.seasonal";
import NotFound from "./routes/not-found";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<ServicesIndex />} />
        <Route path="/services/lawn-turf" element={<LawnTurf />} />
        <Route path="/services/trees-shrubs-beds" element={<TreesShrubsBeds />} />
        <Route path="/services/landscape-hardscaping" element={<LandscapeHardscaping />} />
        <Route path="/services/irrigation" element={<Irrigation />} />
        <Route path="/services/pest-control" element={<PestControl />} />
        <Route path="/services/seasonal" element={<Seasonal />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}