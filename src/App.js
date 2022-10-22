import {
  Route,
  Routes,
  BrowserRouter as Router
} from "react-router-dom";
import "./assets/app.css";
import Footer from "./components/layout/Footer";
import Navigation from "./components/layout/Navigation";
import { About } from "./components/layout/staticPages/About";
import { Homepage } from "./components/layout/Homepage";
import { Contact } from "./components/layout/staticPages/contact";
import { ProductDetails } from "./components/product/ProductDetails";
import { Cart } from "./components/cart/Cart";
import { Checkout } from "./components/checkout/checkout";
import Signup from "./components/account/Signup";
import { Login } from "./components/account/Login";
import ProductList from "./components/layout/ProductList";
import { Services } from "./components/layout/Services";
import { Dashboard } from "./components/dashbord/Dashboard";
import { useState, useEffect } from "react";
import { SideNavigation } from "./components/dashbord/sideNavigation/index";
import { Users } from "./components/dashbord/pages/Users";
import { Products } from "./components/dashbord/pages/Products";
import { Booking } from "./components/dashbord/pages/Booking";

function App() {
  const [showNav, setShowNav] = useState(false);
  const [user, setUser] = useState();

  useEffect(() => {
    const loggedUser = localStorage.getItem("user");
    if (loggedUser) {
      const foundUser = JSON.parse(loggedUser);
      setUser(foundUser);
    }
  }, []);

  return (
    <Router>
      {showNav && <Navigation user={user} setUser={setUser} />}
      {!showNav && <SideNavigation />}
      <Routes>
        <Route exact path="/" element={<Homepage funcNav={setShowNav} />} />
        <Route path="/about" element={<About funcNav={setShowNav} />} />
        <Route path="/contact" element={<Contact funcNav={setShowNav} />} />
        <Route
          path="/product"
          element={<ProductDetails funcNav={setShowNav} />}
        />
        <Route path="/cart" element={<Cart funcNav={setShowNav} />} />
        <Route path="/checkout" element={<Checkout funcNav={setShowNav} />} />
        <Route path="/signup" element={<Signup funcNav={setShowNav} />} />
        <Route
          path="/login"
          element={<Login setUser={setUser} funcNav={setShowNav} />}
        />
        <Route
          path="/productlist"
          element={<ProductList funcNav={setShowNav} />}
        />
        <Route path="/services" element={<Services funcNav={setShowNav} />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/admin/users" element={<Users />} />
        <Route path="/admin/products" element={<Products />} />
        <Route path="/admin/booking" element={<Booking/>}/>
      </Routes>
      {showNav && <Footer />}
    </Router>
  );
}

export default App;
