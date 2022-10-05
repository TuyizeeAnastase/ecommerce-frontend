import { Fragment } from "react";
import Slider from "react-slick";

const Banner = ({images}) => {
  const settings = {
    infinite: true,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    // lazyLoad: true,
    autoplay: true,
  autoplaySpeed: 7000,
   
  };
  return (
    <Fragment>
      <section className="banner">
        <div className="imgslider">
        <Slider {...settings}>
          {images.map((item) => (
            <div key={item.id}>
              <img src={item.src}  alt={item.alt} />
            </div>
          ))}
          </Slider>
        </div>
      </section>
    </Fragment>
  );
};

export default Banner;