import Banner from "./components/layout/Banner";
import Features from "./components/layout/Features";
import ProductList from "./components/layout/ProductList";
import images from "./assets/images.js";
import Info from "./components/layout/Info";
import { Partners } from "./components/layout/Partners";
import { Fragment } from "react";
import "./assets/app.css";
import "./assets/script.js";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <Fragment>
      <Banner images={images} />
      <Info />
      <Features />
      <ProductList category={"featured"} />
      <ProductList category={"Latest"} />
      <Partners />
      <ProductList category={"Popular"} />
    </Fragment>
  );
}

export default App;
