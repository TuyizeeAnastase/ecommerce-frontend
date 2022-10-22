import ProductHeader from "./ProductHeader";
import { Fragment, useEffect, useState } from "react";
import axios from "axios";
const ProductList = (props) => {
  props.funcNav(true)
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
        <div className="grid grid-cols-4 gap-1 justify-center md:justify-between hover:justify-between sm:gap-6">
          {products.map((product) => (
            <div className="max-w-l mx-auto" key={product.id}>
              <div className="bg-white shadow-md rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700">
                <a href="/#">
                  <img
                    className="rounded-t-lg p-8"
                    src={product.images}
                    alt="product_image"
                  />
                </a>
                <div className="px-5 pb-5">
                  <a
                    href="/#"
                    className="text-gray-900 font-semibold text-xl tracking-tight dark:text-white"
                  >
                    {product.product_name}
                  </a>
                  <div className="px-2.t py-0.5 rounded dark:bg-blue-200 dark:rext-blue-800 ml-3">
                    <span>{product.discount}% discount</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">
                      {product.price} Rwf
                    </span>
                    <button onClick={() => setProductData(product.id)}>
                      <a
                        href="/product"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      >
                        View Details
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </Fragment>
  );
};

export default ProductList;
