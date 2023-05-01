import Home from "./pages/Home";
import ProductModal from "./pages/ProductModal";
import EmailSubscibe from "./pages/EmailSubscribe";
import PricingCards from "./pages/PricingCards";
import { Routes, Route } from "react-router-dom";
import ImageGallery from "./pages/ImageGallery";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/email-subscribe" element={<EmailSubscibe />} />
        <Route path="/pricing-cards" element={<PricingCards />} />
        <Route path="/product-modal" element={<ProductModal />} />
        <Route path="/image-gallery" element={<ImageGallery />} />
      </Routes>
    </div>
  );
}

export default App;
