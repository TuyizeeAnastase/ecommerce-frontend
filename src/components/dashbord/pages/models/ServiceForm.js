import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const ServiceModal = ({
  setServiceModal,
  service,
  token,
  setStatus,
}) => {
  const [fixed, setIsFixed] = useState(null);
  const [updateMsg, setUpdateMsg] = useState("");
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  const [msg, setMsg] = useState("");
  const updateBook = async (id) => {
    if (!token) {
      setMsg("Please Login in order to add to cart");
      setVisible(true);
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    }
    try {
      await axios
        .patch(
          `https://sbg.onrender.com/api/v1/booking/${id}`,
          {
            is_fixed: fixed,
          },
          {
            headers: {
              authorization: `Bearer ${token}`,
            },
          }
        )
        .then(() => {
          setUpdateMsg("Booking updated");
          setServiceModal(false);
          setStatus("success");
        });
    } catch (err) {
      if (err.response) {
        setUpdateMsg(err.response.message);
      }
    }
  };
  return (
    <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
      <div className="relative w-full my-6 mx-auto max-w-3xl">
        <div className="border-0 rounded-lg shadow-lg relative  flex flex-col w-full bg-white outline-none focus:outline-none">
          <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
            <h3 className="text-3xl font=semibold">Book Services</h3>
            <button
              className="bg-transparent border-0 text-black float-right"
              onClick={() => setServiceModal(false)}
            >
              <span className="text-white opacity-7 h-6 w-6 text-xl block bg-gray-900 py-0 rounded-full">
                x
              </span>
            </button>
          </div>
          {visible && (
            <div className="text-gray-600 text-xs italic py-2 py-4 text-base">
              <p className="text-red-500 text-lg italic">{msg}</p>
            </div>
          )}
          <div className="text-gray-600 text-xs italic py-2 py-4 text-base">
            <p className="text-red-500 text-lg italic">{updateMsg}</p>
          </div>
          <div className="relative p-6 flex-auto">
            <form className="bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 w-full">
              <label className="block text-black text-sm font-bold mb-1">
                Username
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
                type="text"
                value={service.booked_user.full_name}
                disabled
              />
              <label className="block text-black text-sm font-bold mb-1">
                Phone Number
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
                type="text"
                value={service.booked_user.phone_number}
                disabled
              />
              <label className="block text-black text-sm font-bold mb-1">
                Address
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
                type="text"
                disabled
                value={service.address}
              />
              <label className="block text-black text-sm font-bold mb-1">
                Category
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
                type="text"
                disabled
                value={service.booking_category.name}
              />
              <label className="block text-black text-sm font-bold mb-1">
                Issue
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
                type="text"
                disabled
                value={service.issue}
              />
              <label className="block text-black text-sm font-bold mb-1">
                Fixed
              </label>
              <select onChange={(e) => setIsFixed(e.target.value)}>
                <option>{service.is_fixed}</option>
                <option value="No">No</option>
                <option value="Yes">Yes</option>
              </select>
            </form>
          </div>
          <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
            <button
              className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
              type="button"
              onClick={() => setServiceModal(false)}
            >
              Cancel
            </button>
            <button
              className="bg-gray-900 text-white active:bg-yellow-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
              type="submit"
              onClick={() => updateBook(service.id)}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
