import { Fragment } from "react";

const Features = (props) => {
  return (
    <Fragment>
      <section className="features" id="features">
        <div className="box-container">
          <div className="box">
            <img src="https://res.cloudinary.com/depljf8uc/image/upload/v1664962399/hardwares_yxx7hx.gif" alt="" />
            <h3>Plumbing</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Deserunt, earum!
            </p>
            <a href="/#" className="btn">
              shop now
            </a>
          </div>

          <div className="box">
            <img src="https://res.cloudinary.com/depljf8uc/image/upload/v1664962441/electricals-min_wgtg22.gif" alt="" />
            <h3>electricals</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Deserunt, earum!
            </p>
            <a href="/#" className="btn">
              shop now
            </a>
          </div>

          <div className="box">
            <img src="https://res.cloudinary.com/depljf8uc/image/upload/v1664962441/plumb-min_tg668c.gif" alt="" />
            <h3>Hardware & fixtures</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Deserunt, earum!
            </p>
            <a href="/#" className="btn">
              shop now
            </a>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Features;
