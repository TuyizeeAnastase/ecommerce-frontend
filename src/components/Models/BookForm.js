import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const BookForm = ({ setShowModal, user, service, setSuccess }) => {
  const [address, setAddress] = useState(null);
  const [issue, setIssue] = useState(null);
  const [loginMsg, setLoginMsg] = useState(null);

  const navigate = useNavigate();

  const booking = async () => {
    const token = JSON.parse(localStorage.getItem("token"));
    if (!token) {
      setLoginMsg("Please Login in order to book service");
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    }
    try {
      await axios
        .post(
          "https://sbg.onrender.com/api/v1/booking",
          {
            address: address,
            issue: issue,
            category_id: service.id,
          },
          {
            headers: {
              authorization: `Bearer ${token}`,
            },
          }
        )
        .then(() => {
          setSuccess(`${service.name} Service Booked`);
          setShowModal(false);
        });
    } catch (err) {
      if (err.message) {
        setSuccess(err.response.data.message);
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
              onClick={() => setShowModal(false)}
            >
              <span className="text-white opacity-7 h-6 w-6 text-xl block bg-gray-900 py-0 rounded-full">
                x
              </span>
            </button>
          </div>
          <div className="relative p-6 flex-auto">
            <div className="text-gray-600 text-xs italic py-2 py-4 text-base">
              <p className="text-red-500 text-lg italic">{loginMsg}</p>
            </div>
            <form className="bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 w-full">
              <label className="block text-black text-sm font-bold mb-1">
                Username
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
                type="text"
                value={user.full_name}
                disabled
              />
              <label className="block text-black text-sm font-bold mb-1">
                Phone Number
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
                type="text"
                value={user.phone_number}
                disabled
              />
              <label className="block text-black text-sm font-bold mb-1">
                Address
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
              <label className="block text-black text-sm font-bold mb-1">
                Category
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
                type="text"
                value={service.name}
                disabled
              />
              <label className="block text-black text-sm font-bold mb-1">
                Issue
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
                type="text"
                value={issue}
                onChange={(e) => setIssue(e.target.value)}
              />
            </form>
          </div>
          <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
            <button
              className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
              type="button"
              onClick={() => setShowModal(false)}
            >
              Cancel
            </button>
            <button
              className="bg-gray-900 text-white active:bg-yellow-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
              type="submit"
              onClick={() => booking()}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
