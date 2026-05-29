import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Home from "./routes/index";
import About from "./routes/about";
import Contact from "./routes/contact";
import Gallery from "./routes/gallery";
import ServicesIndex from "./routes/services.index";
import LawnCare from "./routes/services.lawn-care";
import TreeServices from "./routes/services.tree-services";
import StormCleanup from "./routes/services.storm-cleanup";
import Greenscape from "./routes/services.greenscape";
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
        <Route path="/services/lawn-care" element={<LawnCare />} />
        <Route path="/services/tree-services" element={<TreeServices />} />
        <Route path="/services/storm-cleanup" element={<StormCleanup />} />
        <Route path="/services/greenscape" element={<Greenscape />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}