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

const ProductList = (props) => {
  const products_list = products.map((product) => (
    <div class="box">
            <img src={product.image} alt=""/>
            <h3><a href="/product">{product.name}</a></h3>
            <p>{product.price}</p>
            <a href="/#" class="btn">add to cart</a>
        </div>
  ));
  return (
    <section class="categories" id="categories">
      <h1 class="heading"> {props.category}<span>Products</span> </h1>
     <div class="box-container">
     {products_list}
     </div>
    </section>
  );
};

export default ProductList;
