import ProductHeader from "./ProductHeader";
import { Fragment, useEffect, useState } from "react";
import axios from "axios";
const ProductList = (props) => {
  props.funcNav(true);
  const [products, setProducts] = useState([]);
  const [loading, setisLoading] = useState(true);
  const [id, setID] = useState(null);
  const [name, setName] = useState(null);
  const [summary, setSummary] = useState(null);
  const setProductData = (id) => {
    localStorage.setItem("productId", id);
  };
  useEffect(() => {
    setID(localStorage.getItem("id"));
    setName(localStorage.getItem("name"));
    setSummary(localStorage.getItem("summary"));
    const getData = async () => {
      try {
        const response = await axios.get(
          `https://sbg.onrender.com/api/v1/products/category/${id}`
        );
        setProducts(response.data.products);
        setisLoading(false);
      } catch (err) {
        setProducts(null.message);
      } finally {
        setisLoading(false);
      }
    };
    getData();
  }, [id]);

  return (
    <Fragment>
      <ProductHeader setName={name} setSummary={summary} />
      {loading && <p>Loading</p>}
      {!loading && (
        <div className="container pb-16 mt-4 ml-6">
          <div className="text-2xl font-medium text-gray-800 uppercase mb-6">
            <div className="grid grid-cols-4 gap-6">
              {products.map((product) => (
                <div className="bg-white shadow rounded overflow-hidden group">
                  <div className="relative">
                    <img src={product.images} alt="product 1" class="w-full" />
                    <div
                      className="absolute inset-0 bg-black bg-opacity-40 flex items-center 
                    justify-center gap-2 opacity-0 group-hover:opacity-100 transition"
                    >
                      <a
                        href="/#"
                        className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                        title="view product"
                      >
                        <i class="fa-solid fa-magnifying-glass"></i>
                      </a>
                      <a
                        href="/#"
                        className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                        title="add to wishlist"
                      >
                        <i class="fa-solid fa-heart"></i>
                      </a>
                    </div>
                  </div>
                  <div className="pt-4 pb-3 px-4">
                    <a href="/#">
                      <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">
                        {product.product_name}
                      </h4>
                    </a>
                    <div className="flex items-baseline mb-1 space-x-2">
                      <p className="text-xl text-primary font-semibold">
                        ${product.discount}
                      </p>
                      <p className="text-sm text-gray-400 line-through">
                        ${product.price}
                      </p>
                    </div>
                    <div className="flex items-center">
                      <div className="flex gap-1 text-sm text-yellow-400">
                        <span>
                          <i class="fa-solid fa-star"></i>
                        </span>
                        <span>
                          <i class="fa-solid fa-star"></i>
                        </span>
                        <span>
                          <i class="fa-solid fa-star"></i>
                        </span>
                        <span>
                          <i class="fa-solid fa-star"></i>
                        </span>
                        <span>
                          <i class="fa-solid fa-star"></i>
                        </span>
                      </div>
                      <div class="text-xs text-gray-500 ml-3">(150)</div>
                    </div>
                  </div>
                  <button
                    className="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition"
                    onClick={() => setProductData(product.id)}
                  >
                    <a href="/product">View</a>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default ProductList;
