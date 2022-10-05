const products = [
  {
    id: 1,
    price: '456$',
    name: "test1",
    image:"https://res.cloudinary.com/depljf8uc/image/upload/v1664962780/product3_uvvafg.png"
  },
  {
    id: 2,
    price: '45$',
    name: "test2",
    image:"https://res.cloudinary.com/depljf8uc/image/upload/v1664962780/product1_rz8yma.png"
  },
  {
    id: 3,
    price: '34$',
    name: "test3",
    image:"https://res.cloudinary.com/depljf8uc/image/upload/v1664962779/product2_vbvubs.jpg"
  },
  {
    id: 4,
    price: '600$',
    name: "test4",
    image:"https://res.cloudinary.com/depljf8uc/image/upload/v1664959771/cld-sample-5.jpg"
  },
  {
    id: 5,
    price: '4567$',
    name: "test5",
    image:"https://res.cloudinary.com/depljf8uc/image/upload/v1664959770/cld-sample-3.jpg"
  },
];

const ProductList = () => {
  const products_list = products.map((product) => (
    <div className="swiper product-slider">
      <div className="swiper-wrapper">
        <div className="swiper-slide box">
          <img src={product.image} alt="" />
          <h3>{product.name}</h3>
          <div className="price"> {product.price} </div>
          <div className="stars">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star-half-alt"></i>
          </div>
          <a href="/#" className="btn">
            add to cart
          </a>
        </div>
      </div>
    </div>
  ));
  return (
    <section className="products" id="products">
      <h1 className="heading">
        {" "}
        our <span>Latest Products</span>{" "}
      </h1>
      {products_list}
    </section>
  );
};

export default ProductList;
