import React, { useState, useEffect, useRef } from "react";
import "./css/productDetail.css";

const product = {
  id: 1,
  name: "new laptop",
  slug: "new-laptop",
  photo: "",
  price: 1234,
  desc: "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 orum et Malorum",
  images: [
    {
      src: "https://res.cloudinary.com/depljf8uc/image/upload/v1665066011/white_c9zhdf.jpg",
    },
    {
      src: "https://res.cloudinary.com/depljf8uc/image/upload/v1665066011/black_cksrfw.jpg",
    },
    {
      src: "https://res.cloudinary.com/depljf8uc/image/upload/v1665066119/reds_w3zgjd.png",
    },
  ],
  colors: ["#00bfff", "#80ff00", "#ff0000"],
  infos: [
    {
      title: "highlights",
      content: "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 orum et Malorum",
    },
    {
      title: "description",
      content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      title: "comments",
      content: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    },
    {
      title: "reviews",
      content: "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.",
    },
  ],
  discount: 20,
  sold: 45,
  category: "laptop",
  brand: "apple",
};

export const ProductDetails = () => {
  const [slideIndex, setSlideIndex] = useState(1);

  const [width, setWidth] = useState(0);
  const [start, setStart] = useState(0);
  const [change, setChange] = useState(9);

  const [selectedColor, setSelectedColor] = useState(product.colors[0]);

  const [infoTitle, setInfoTitle] = useState(product.infos[0].title);

  const slideRef = useRef();

  useEffect(() => {
    if (!slideRef.current) return;
    const scrollWidth = slideRef.current.scrollWidth;
    const childrenElementCount = slideRef.current.childrenElementCount;
    const width = scrollWidth / childrenElementCount;
    setWidth(width);
  },[]);

  function plusSlides(n) {
    setSlideIndex((prev) => prev + n);
    slideShow(slideIndex + n);
  }
  function slideShow(n) {
    if (n > product.images.length) {
      setSlideIndex(1);
    }
    if (n < 1) {
      setSlideIndex(product.images.length);
    }
  }
  //Drag
  function dragStart(e) {
    setStart(e.clientX);
  }
  function dragOver(e) {
    let touch = e.clientX;
    setChange(start - touch);
  }
  function dragEnd(e) {
    if (change > 0) {
      slideRef.current.scrolLeft += width;
    } else {
      slideRef.current.scrolLeft -= width;
    }
  }
  useEffect(() => {
    if (!slideRef.current || !width) return;
    let numbOfThumb = Math.round(slideRef.current.offsetWidth / width);
    slideRef.current.scrolLeft =
      slideIndex > numbOfThumb ? (slideIndex - 1) * width : 0;
  }, [width, slideIndex]);
  return (
    <React.Fragment>
      <section className="product-details">
        <div className="product-page-img">
          {product.images.map((image, index) => (
            <div
              key={index}
              className="mySlides"
              style={{ display: index + 1 === slideIndex ? "block" : "none" }}
            >
              <div className="numbertext">
                {index + 1} / {product.images.length}
              </div>
              <img src={image.src} alt="" />
            </div>
          ))}
          <a href="#!" className="prev" onClick={() => plusSlides(-1)}>
            &#10094;
          </a>
          <a href="#!" className="next" onClick={() => plusSlides(1)}>
            &#10095;
          </a>

          <div
            className="slider-img"
            draggable={true}
            ref={slideRef}
            onDragStart={dragStart}
            onDragOver={dragOver}
            onDragEnd={dragEnd}
          >
            {product.images.map((image, index) => (
              <div
                key={index}
                className={`slider-box ${
                  index + 1 === slideIndex ? "active" : ""
                }`}
                onClick={() => setSlideIndex(index + 1)}
              >
                <img src={image.src} alt="" />
              </div>
            ))}
          </div>
        </div>
        <div className="product-page-details">
          <strong>{product.name}</strong>
          <p className="product-category">
            {product.brand} - {product.category}
          </p>
          <p className="product-price">
            $
            {Math.round(
              product.price - (product.price * product.discount) / 100
            )}
            <del style={{ textDecorationLine: 'line-through' }}>{product.price}$</del>
          </p>
          <p className="small-desc">{product.desc}</p>
          <div className="product-options">
            <span>Colors:</span>
            {product.colors.map((color) => (
              <div key={color} className="color_option">
                <button
                  style={{ background: color }}
                  className={color === selectedColor ? "active" : ""}
                  onClick={() => setSelectedColor(color)}
                />
              </div>
            ))}
          </div>
          <div className="product-page-offer">
            <i className="fa-solid fa-tag" />
            {product.discount}% discount
          </div>

          <div className="product-sold">
            {/* icon */}
            <strong>
              {product.sold}
              <span>Product Sold.</span>
            </strong>
          </div>

          <div className="cart-btns">
            <a href="#!" className="add-cart">
              Add to Cart
            </a>
          </div>
        </div>
      </section>
      <section className="product-all-info">
        <ul className="product-info-menu">
          {product.infos.map((info) => (
            <li
              key={info}
              onClick={() => setInfoTitle(info.title)}
              className={`p-info-list  ${
                info.title === infoTitle ? "active" : ""
              }`}
            >
              {info.title}
            </li>
          ))}
        </ul>
        {product.infos.map((info) => (
          <div
            key={info.title}
            className={`info-container  ${
              info.title === infoTitle ? "active" : ""
            }`}
          >
            {info.content}
          </div>
        ))}
      </section>
    </React.Fragment>
  );
};
