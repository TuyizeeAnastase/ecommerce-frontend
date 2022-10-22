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
          `https://sbg.onrender.com/api/v1/products/${productId}`
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
          <div className="container px-5 py-8 mx-auto">
            <div className="lg:w-4/5 mx-auto flex flex-wrap">
              <img
                alt="product"
                className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"
                src={product.images}
              />
              <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                <h2 className="text-sm title-font text-gray-900 tracking-widest">
                  {product.category.name}
                </h2>
                <h1 className="text-gray-900 mb-4 font-bold text-3xl lg:text-4xl">
                  {product.product_name}
                </h1>
                <p className="text-gray-600 mb-6 text-base sm:text-lg">
                  {product.description}Lorem ipsum dolor sit amet, consectetur
                  adipisicing elit. Officia nisi, doloribus nulla cumque
                  molestias corporis eaque harum vero! Quas sit odit optio
                  debitis nulla quisquam, dolorum quaerat animi iusto quod.
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde
                  ex dolorum voluptate cupiditate adipisci doloremque, vel quam
                  praesentium nihil veritatis.
                </p>
                <div className="flex items-center justify-between mb-6 sm:flex-col sm:items-start">
                  <div className="flex items-center gap-4">
                    <h3 className="text-very-dark font-bold text-3xl inline-block">
                      $567.7
                    </h3>
                    <span className="inline-block h-fit py-0.5 px-2 font-bold bg-gray-900 text-white rounded-lg text-sm">
                      45%
                    </span>
                  </div>
                  <p className="text-dark-grayish w-fit line-through decoration-dark-grayish decoration-1 my-auto">
                    $4544
                  </p>
                </div>
                <div className="flex flex-col gap-5 mb-16 sm:flex-row lg:mb-0">
                  <div className="flex justify-center w-1/5">
                    <svg
                      className="fill-current text-gray-900 text-bold w-3"
                      viewBox="0 0 448 512"
                    >
                      <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                    </svg>

                    <input
                      className="mx-4 border rounded text-center w-16"
                      type="text"
                      defaultValue="1"
                      onChange={(e) => setQuantity(e.target.value)}
                      max={product.quantity}
                    />

                    <svg
                      className="fill-current text-gray-900 text-bold w-3"
                      viewBox="0 0 448 512"
                    >
                      <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                    </svg>
                  </div>
                  <button
                    onClick={() => addToCart(product.id)}
                    className="w-full h-10 bg-gray-900 py-2 flex items-center justify-center gap-4 text-md rounded-lg font-bold text-white shadow-md shadow-orange hover:brightness-125 transition select-none"
                    id="add_to_cart"
                  >
                    <svg
                      width="24"
                      height="24"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 22 20"
                    >
                      <path
                        d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                        fill="hsl(223, 64%, 98%)"
                        fill-rule="nonzero"
                      />
                    </svg>
                    Add to Cart
                  </button>
                  <button className="rounded-full w-16 h-10 bg-gray-900 p-0 border-0 inline-flex items-center justify-center text-white ml-2">
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
                    <p className="text-gray-900 text-lg italic">{msg}</p>
                  </div>
                )}
                <div className="text-gray-600 text-xs italic py-2 py-4 text-base">
                  <p className="text-blue-500 text-lg italic">{cartMsg}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="py-4 lg:py-[12px]">
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
