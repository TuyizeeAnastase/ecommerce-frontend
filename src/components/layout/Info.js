import "../../assets/layout/info.css";

const Info = () => {
  return (
    <section>
      <div className="info">
        <div className="content">
          <div className="content-icon"><i className="fa fa-car fa-lg" aria-hidden="true"></i></div>
          <div className="info-box-content">
            <h6>FREE SHIPPING &amp; RETURN</h6>
            <p>Free shipping on all orders over $49</p>
          </div>
        </div>
        <div className="content">
          <div className="content-icon"><i className="fa fa-car fa-lg" aria-hidden="true"></i></div>
          <div className="info-box-content">
            <h6>MONEY BACK GUARANTEE</h6>
            <p>100% money back guarantee</p>
          </div>
        </div>
        <div className="content">
          <div className="content-icon"><i className="fa fa-car fa-lg" aria-hidden="true"></i></div>
          <div className="info-box-content">
            <h6>ONLINE SUPPORT 24/7</h6>
            <p>Awesome Support for 24/7 Days</p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Info;
