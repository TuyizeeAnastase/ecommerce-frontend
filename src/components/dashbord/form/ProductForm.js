import React, { useEffect, useState } from "react";
import axios from "axios";

export const ProductForm = ({ setShowForm, setMsg }) => {
  const [categories, setCategories] = useState([]);
  const [errMsg, setErrMsg] = useState("");
  const [form, setForm] = useState({
    product_name: "",
    category_id: "",
    price: "",
    quantity: "",
    discount: "",
    color: "",
    description: "",
    images: null,
  });
  useEffect(() => {
    const getCategories = async () => {
      try {
        const response = await axios.get(
          "https://sbg.onrender.com/api/v1/shops"
        );
        setCategories(response.data.shops);
      } catch (err) {
        setCategories(null.message);
      }
    };
    getCategories();
  }, []);

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleImage = (image) => {
    setForm({
      images: image,
    });
  };
  const addProduct = async (e) => {
    e.preventDefault();
    let form_data = new FormData();
    form_data.append("product_name", form.product_name);
    form_data.append("quantity", form.quantity);
    form_data.append("price", form.price);
    form_data.append("discount", form.discount);
    form_data.append("color", form.color);
    form_data.append("description", form.description);
    form_data.append("category_id", form.category_id);
    form_data.append("images", form.images, form.images.name);
    try {
      await axios.post("https://sbg.onrender.com/api/v1/products", form_data, {
        headers: {
          content_type: "multipart/form-data",
        },
      });
      setMsg("Product added successfully");
      setShowForm(false);
    } catch (err) {
      if (err.response) {
        console.log(err);
        setErrMsg(err.response.data.message);
      }
    }
  };

  return (
    <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
      <form
        onSubmit={addProduct}
        className="relative bg-white mx-auto p-5 border w-3/6  rounded-md"
      >
        <div className="bg-gray-900 py-2 px-4 text-center text-base font-normal text-white">
          <h1>Add New Product</h1>
        </div>
        <div className="text-gray-600 text-xs italic py-2 py-4 text-base">
          <p className="text-red-500 text-lg italic">{errMsg}</p>
        </div>

        <div className="flex flex-nowrap -mx-3 mb-6">
          <div className="rounded-lg shadow-xl bg-gray-50 px-3 lg:w-full">
            <div className="m-4">
              <label className="inline-block mb-2 text-gray-500">
                Upload prodcut image(jpg,png)
              </label>
              <div className="flex items-center justify-center w-full">
                <label className="flex flex-col w-full h-32 border-4 border-dashed hover:bg-gray-100 hover:border-gray-300">
                  <div className="flex flex-col items-center justify-center pt-7">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-8 h-8 text-gray-400 group-hover:text-gray-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                      />
                    </svg>
                    <p class="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
                      Select a photo <span className="text-blue-500"></span>
                    </p>
                    <input
                      onChange={(e) => handleImage(e.target.files[0])}
                      name="images"
                      type="file"
                      class="opacity-0"
                    />
                  </div>
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Product Name
            </label>
            <input
              type="text"
              value={form.product_name}
              name="product_name"
              onChange={handleChange}
              className="appearance-none block w-full bg-gray-100 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              placeholder="Enter product name"
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Product Category
            </label>
            <select
              name="category_id"
              onChange={handleChange}
              className="appearance-none block w-full bg-gray-100 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            >
              <option value="Select Category">Select Category</option>
              {categories.map((category) => (
                <option value={category.id}>{category.name}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="flex flex-nowrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Price
            </label>
            <input
              className="appearance-none block w-4/6 bg-gray-100 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              placeholder="Enter Price"
              type="number"
              value={form.price}
              name="price"
              onChange={handleChange}
            />
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Quantity
            </label>
            <input
              type="number"
              name="quantity"
              value={form.quantity}
              onChange={handleChange}
              className="appearance-none block w-4/6 bg-gray-100 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              placeholder="Enter Quantity"
            />
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Discount
            </label>
            <input
              type="number"
              name="discount"
              value={form.discount}
              onChange={handleChange}
              className="appearance-none block w-4/6 bg-gray-100 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              placeholder="Enter Discount"
            />
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Color
            </label>
            <input
              type="text"
              name="color"
              value={form.color}
              onChange={handleChange}
              className="appearance-none block w-4/6 bg-gray-100 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              placeholder="Enter Color"
            />
          </div>
        </div>
        <div className="mb-3 px-3 xl:w-96">
          <label className="form-label inline-block mb-2 text-gray-700">
            Enter Product Description
          </label>
          <textarea
            className="
        form-control
        block
        w-full
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            rows="4"
            placeholder="Your description"
            value={form.description}
            onChange={handleChange}
            name="description"
          ></textarea>
        </div>
        <div class="flex p-2 space-x-4">
          <button
            onClick={() => setShowForm(false)}
            class="px-4 py-2 text-white bg-red-500 rounded shadow-xl"
          >
            Cancel
          </button>
          <button class="px-4 py-2 text-white bg-gray-900 rounded shadow-xl">
            Create
          </button>
        </div>
      </form>
    </div>
  );
};
