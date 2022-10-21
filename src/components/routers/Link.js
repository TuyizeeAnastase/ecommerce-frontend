import { Routes, Route } from "react-router-dom";
import App from "../../App";
import { About } from "../layout/staticPages/About";
import { Contact } from "../layout/staticPages/contact"
import { ProductDetails } from "../product/ProductDetails";
import Whatsapp from "../chat/Wastapp";
import Footer from "../layout/Footer";
import Navigation from "../layout/Navigation";


export const Link = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<App/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/product" element={<ProductDetails/>}/>
      </Routes>
      <Navigation />
      <Footer />
      <Whatsapp />
    </div>
  );
};
