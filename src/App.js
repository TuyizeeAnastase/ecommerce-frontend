import Navigation from "./components/layout/Navigation";
import Banner from "./components/layout/Banner";
import Features from "./components/layout/Features";
import ProductList from "./components/layout/ProductList";
import images from "./assets/images.js";
import { Fragment } from 'react'
import './assets/app.css'
import './assets/script.js'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <Fragment>
        <Navigation/>
        <Banner images={images}/>
        <Features/>
        <ProductList/>
    </Fragment>
  );
}

export default App;
