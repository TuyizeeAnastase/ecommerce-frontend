import React, { useState, useEffect } from "react";
import "./css/productDetail.css";
import axios from "axios";
import { Desription } from "./tab/Description";
import { Details } from "./tab/Details";
import { Review } from "./tab/Review";
import { TabItem } from "./TabItem";
import { TabContent } from "./TabContent";
import { useNavigate } from "react-router-dom";

export const ProductDetails = (props) => {
  props.funcNav(true);
  const [productId, setProductID] = useState(null);
  const [product, setProduct] = useState([]);
  const [loading, setisLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState("tab1");
  const [msg, setMsg] = useState("");
  const [cartMsg, setCartMsg] = useState("");
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  const [quantity, setQuantity] = useState(null);

  useEffect(() => {
    setProductID(localStorage.getItem("productId"));
    const getProductData = async () => {
      try {
        const res = await axios.get(
          `http://localhost:4000/api/v1/products/${productId}`
        );
        setProduct(res.data.product);
        setisLoading(false);
      } catch (err) {
        setError(err);
        setProduct(err.message);
      } finally {
        setisLoading(false);
      }
    };
    getProductData();
  }, [productId]);

  const addToCart = async (id) => {
    const token = JSON.parse(localStorage.getItem("token"));
    if (!token) {
      setMsg("Please Login in order to add to cart");
      setVisible(true);
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    }
    try {
      const form_data = new FormData();
      form_data.append("products_id", id);
      form_data.append("quantity", quantity);
      await axios
        .post("https://sbg.onrender.com/api/v1/cart/", form_data, {
          headers: {
            authorization: `Bearer ${token}`,
          },
        })
        .then(() => {
          setCartMsg("New product added to cart");
        });
    } catch (err) {
      if (err.response) {
        setCartMsg(err.response.data.message);
      }
    }
  };
  return (
    <React.Fragment>
      {loading && <p>Loading</p>}
      {error && <p>{error.response.data.message}</p>}
      {!loading && (
        <section className="text-gray-700 body-font overflow-hidden bg-white">
          <div className="container px-5 py-24 mx-auto">
            <div className="lg:w-4/5 mx-auto flex flex-wrap">
              <img
                alt="product"
                className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"
                src={product.images}
              />
              <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                <h2 className="text-sm title-font text-gray-500 tracking-widest">
                  {product.category.name}
                </h2>
                <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                  {product.product_name}
                </h1>
                <div className="flex mb-4">
                  <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200">
                    <a href="/#" className="text-gray-500">
                      <svg
                        fill="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                      </svg>
                    </a>
                    <a href="/#" className="ml-2 text-gray-500">
                      <svg
                        fill="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                      </svg>
                    </a>
                    <a href="/#" className="ml-2 text-gray-500">
                      <svg
                        fill="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>
                    </a>
                  </span>
                </div>
                <p className="leading-relaxed">{product.description}</p>
                <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
                  <div className="flex">
                    <span className="mr-3">Color</span>
                    <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"></button>
                    <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
                    <button className="border-2 border-gray-300 ml-1 bg-red-500 rounded-full w-6 h-6 focus:outline-none"></button>
                  </div>
                  <div className="flex ml-6 items-center">
                    <span className="mr-3">quantity</span>
                    <div className="relative">
                      <input
                        className="rounded border border-gray-400 py-2 focus:outline-none focus:border-red-500 text-base"
                        onChange={(e) => setQuantity(e.target.value)}
                        type="number"
                        min="0"
                        max={product.quantity}
                      />
                      <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          className="w-4 h-4"
                          viewBox="0 0 24 24"
                        >
                          <path d="M6 9l6 6 6-6"></path>
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex">
                  <span className="title-font font-medium text-2xl text-gray-900">
                    ${product.price}
                  </span>
                  <button
                    onClick={() => addToCart(product.id)}
                    className="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded"
                  >
                    Add to Cart
                  </button>
                  <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                    <svg
                      fill="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                    </svg>
                  </button>
                </div>
                {visible && (
                  <div className="text-gray-600 text-xs italic py-2 py-4 text-base">
                    <p className="text-red-500 text-lg italic">{msg}</p>
                  </div>
                )}
                <div className="text-gray-600 text-xs italic py-2 py-4 text-base">
                  <p className="text-red-500 text-lg italic">{cartMsg}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="py-20 lg:py-[120px]">
            <div className="container mx-auto">
              <div className="-mx-4 flex flex-wrap">
                <div className="w-full px-4">
                  <div className="mb-14 w-full">
                    <div className="flex flex-wrap rounded-lg border border-[#E4E4E4] py-3 px-4">
                      <TabItem
                        title="Description"
                        id="tab1"
                        activeTab={activeTab}
                        setActiveTab={setActiveTab}
                      />
                      <TabItem
                        title="Details"
                        id="tab2"
                        activeTab={activeTab}
                        setActiveTab={setActiveTab}
                      />
                      <TabItem
                        title="Review"
                        id="tab3"
                        activeTab={activeTab}
                        setActiveTab={setActiveTab}
                      />
                    </div>
                    <div>
                      <TabContent id="tab1" activeTab={activeTab}>
                        <Desription />
                      </TabContent>
                      <TabContent id="tab2" activeTab={activeTab}>
                        <Details />
                      </TabContent>
                      <TabContent id="tab3" activeTab={activeTab}>
                        <Review />
                      </TabContent>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </React.Fragment>
  );
};
