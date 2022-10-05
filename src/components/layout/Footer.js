const Footer = () => {
  return (
    <section className="footer">
      <div className="box-container">
        <div className="box">
          <h3>
            {" "}
            sbg <i className="fas fa-shopping-basket"></i>{" "}
          </h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam,
            saepe.
          </p>
          <div className="share">
            <a target="_blank" href="/#" className="fab fa-facebook-f">
              {" "}
            </a>
            <a href="/#" className="fab fa-twitter"> </a>
            <a href="/#" className="fab fa-instagram"> </a>
            <a href="/#" className="fab fa-linkedin"> </a>
          </div>
        </div>

        <div className="box">
          <h3>contact info</h3>
          <a href="/#" className="links">
            {" "}
            <i className="fas fa-phone"></i> +250787499115{" "}
          </a>
          <a href="/#" className="links">
            {" "}
            <i className="fas fa-phone"></i> +250725282101{" "}
          </a>
          <a href="/#" className="links">
            {" "}
            <i className="fas fa-envelope"></i> customer@sbg.com{" "}
          </a>
          <a href="/#" className="links">
            {" "}
            <i className="fas fa-map-marker-alt"></i> Kigali, Rwanda{" "}
          </a>
        </div>

        <div className="box">
          <h3>quick links</h3>
          <a href="/#" className="links">
            {" "}
            <i className="fas fa-arrow-right"></i> home{" "}
          </a>
          <a href="/#" className="links">
            {" "}
            <i className="fas fa-arrow-right"></i> shops{" "}
          </a>
          <a href="/#" className="links">
            {" "}
            <i className="fas fa-arrow-right"></i> services{" "}
          </a>
          <a href="/#" className="links">
            {" "}
            <i className="fas fa-arrow-right"></i> about{" "}
          </a>
          <a href="/#" className="links">
            {" "}
            <i className="fas fa-arrow-right"></i> contact{" "}
          </a>
          <a href="/#" className="links">
            {" "}
            <i className="fas fa-arrow-right"></i> help{" "}
          </a>
        </div>

        <div className="box">
          <h3>newsletter</h3>
          <p>subscribe for latest updates</p>
          <input type="email" placeholder="your email" className="email" />
          <input type="submit" value="subscribe" className="btn" />
          <img src="image/payment.png" className="payment-img" alt="" />
        </div>
      </div>
      
      <div className="credit">
        {" "}
        created by <span> sbg company limited </span> | all rights reserved{" "}
      </div>
    </section>
  );
};

export default Footer;
