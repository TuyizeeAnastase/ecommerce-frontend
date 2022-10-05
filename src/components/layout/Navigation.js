import { Fragment } from "react";
import CartIcon from "../cart/CartIcon";

const Ads = (props) => {
  return (
    <Fragment>
      <header className="header">
        <a href="/#" className="logo">
          {" "}
          <i className="fas fa-shopping-basket"></i> SBG{" "}
        </a>

        <nav className="navbar">
          <a href="/#home">home</a>
          <a href="/#categories">Shops</a>
          <a href="/#categories">Services</a>
          <a href="/#about">About</a>
          <a href="/#contact">Contact</a>
          <a href="/#blogs">Help</a>
        </nav>

        <div className="icons">
          <div className="fas fa-bars" id="menu-btn"></div>
          <div className="fas fa-search" id="search-btn"></div>
          <CartIcon />
          <div className="fas fa-user" id="login-btn"></div>
        </div>

        <form action="" className="search-form">
          <input type="search" id="search-box" placeholder="search here..." />
          <label for="search-box" className="fas fa-search"></label>
        </form>

        <div className="shopping-cart">
          <div className="box">
            <i className="fas fa-trash"></i>
            <img src="" alt="" />
            <div className="content">
              <h3>Matar paneer</h3>
              <span className="price"> &#8377 60/-</span>
              <span className="quantity">qty : 1kg</span>
            </div>
          </div>
          <div className="box">
            <i className="fas fa-trash"></i>
            <img src="" alt="" />
            <div className="content">
              <h3> Fried - Bhindi</h3>
              <span className="price"> &#8377 40 /-</span>
              <span className="quantity">qty : 1kg</span>
            </div>
          </div>
          <div className="box">
            <i className="fas fa-trash"></i>
            <img src="" alt="" />
            <div className="content">
              <h3>paneer</h3>
              <span className="price"> &/#8377 150/-</span>
              <span className="quantity">qty : 1kg</span>
            </div>
          </div>
          <div className="total"> total : &/#8377 250/- </div>
          <a href="/#" className="btn">
            checkout
          </a>
        </div>

        <form action="" className="login-form">
          <h3>login now</h3>
          <input type="email" placeholder="your email" className="box" />
          <input type="password" placeholder="your password" className="box" />
          <p>
            forget your password <a href="/#">click here</a>
          </p>
          <p>
            don't have an account <a href="/#">create now</a>
          </p>
          <input type="submit" value="login now" className="btn" />
        </form>
      </header>
    </Fragment>
  );
};

export default Ads;
