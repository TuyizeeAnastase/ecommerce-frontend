import { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "../Button";
import { ProductForm } from "../form/ProductForm";
import { ConfirmModel } from "./ConfirmModel";

export const Products = () => {
  const [showForm, setShowForm] = useState(false);
  const [products, setProducts] = useState([]);
  const [loading, setisLoading] = useState(true);
  const [error, setError] = useState(null);
  const [msg, setMsg] = useState("");
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [deleteMessage, setDeleteMessage] = useState("");
  const [id, setID] = useState();
  const [image, setImage] = useState();

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await axios.get(
          "https://sbg.onrender.com/api/v1/products"
        );
        setProducts(response.data.products);
        setisLoading(false);
      } catch (err) {
        setError(err);
        setProducts(null.message);
      } finally {
        setisLoading(false);
      }
    };
    getProducts();
  }, []);

  const setShowDeleteModal = (product, id, image) => {
    setID(id);
    setImage(image);
    setDeleteMessage(`Are you sure you want to delete the ${product} ? `);
    setConfirmDelete(true);
  };

  const setHideDeleteModal = () => {
    setConfirmDelete(false);
  };

  const remove = async (id) => {
    try {
      await axios.delete(`https://sbg.onrender.com/api/v1/products/${id}`);
      setConfirmDelete(false);
      setMsg("Product deleted successfully");
      window.location.reload();
    } catch (err) {
      if (err.response) {
        setMsg(err.response.data.message);
      }
    }
  };
  return (
    <>
      <div class="shadow container justify-center mt-4 mx-auto flex flex-col">
        <div className="text-md text-black dark:text-white ml-2">
          <h1 className="p-4">All Products</h1>
          <Button setShowForm={setShowForm} />
        </div>
        {msg && (
          <div className="text-white bg-gray-900 mb-4 text-center text-lg italic py-2 py-4 text-base">
            <p className="text-lg italic">{msg}</p>
            <button
              onClick={() => setMsg(false)}
              class="block w-full md:inline-block md:w-auto px-4 py-3 md:py-2 bg-white rounded-lg font-semibold text-sm mt-4
          md:mt-0 md:order-1 text-gray-900"
            >
              Close
            </button>
          </div>
        )}
        <div class="overflow-x-auto shadow-md sm:rounded-lg">
          <div class="inline-block min-w-full align-middle dark:bg-gray-800">
            <div class="p-4">
              <label for="table-search" class="sr-only">
                Search
              </label>
              <div class="relative mt-1">
                <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <svg
                    class="w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
                <input
                  type="text"
                  id="table-search"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search for users"
                />
              </div>
            </div>
            <div class="overflow-hidden">
              <table class="min-w-full table-fixed dark:divide-gray-700 divide-y divide-green-400 ">
                <thead class="bg-gray-100 dark:bg-gray-700">
                  <tr>
                    <th scope="col" class="p-4">
                      <div class="flex items-center">
                        <input
                          id="checkbox-search-all"
                          type="checkbox"
                          class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label for="checkbox-search-all" class="sr-only">
                          checkbox
                        </label>
                      </div>
                    </th>
                    <th
                      scope="col"
                      class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                    >
                      Product Name
                    </th>
                    <th
                      scope="col"
                      class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                    >
                      Shop
                    </th>
                    <th
                      scope="col"
                      class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                    >
                      Discount
                    </th>
                    <th
                      scope="col"
                      class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                    >
                      quantity
                    </th>
                    <th
                      scope="col"
                      class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                    >
                      Price
                    </th>
                    <th scope="col" class="p-4">
                      <span class="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                {loading && <p>Loading</p>}
                {error && <p>err</p>}
                {!loading && (
                  <tbody class="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                    {products.map((product) => (
                      <tr class="hover:bg-gray-100 dark:hover:bg-gray-700">
                        <td class="p-4 w-4">
                          <div class="flex items-center">
                            <input
                              id="checkbox-search-1"
                              type="checkbox"
                              class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            />
                            <label for="checkbox-search-1" class="sr-only">
                              checkbox
                            </label>
                          </div>
                        </td>
                        <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          {product.product_name}
                        </td>
                        <td class="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">
                          {/* {product.category.name} */}
                        </td>
                        <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          {product.discount} %
                        </td>
                        <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          {product.quantity}
                        </td>
                        <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          {product.price} Frw
                        </td>
                        <td class="flex py-4 px-6 text-sm font-medium  text-right whitespace-nowrap">
                          <a href="/#">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              class="w-6 h-6 text-blue-400"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 
                      2 0 112.828 
                      2.828L11.828 15H9v-2.828l8.586-8.586z"
                              />
                            </svg>
                          </a>
                          <button
                            onClick={() =>
                              setShowDeleteModal(
                                product.product_name,
                                product.id,
                                product.images
                              )
                            }
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              class="w-6 h-6 text-red-400"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 
                      4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                              />
                            </svg>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                )}
              </table>
            </div>
          </div>
        </div>
      </div>
      {confirmDelete ? (
        <>
          <ConfirmModel
            showModal={confirmDelete}
            confirmModel={remove}
            hideModal={setHideDeleteModal}
            id={id}
            message={deleteMessage}
            image={image}
          />
        </>
      ) : null}
      {showForm ? (
        <>
          <ProductForm setShowForm={setShowForm} setMsg={setMsg} />
        </>
      ) : null}
    </>
  );
};
