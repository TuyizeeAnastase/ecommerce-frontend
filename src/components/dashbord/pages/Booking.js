import { useEffect, useState } from "react";
import axios from "axios";
import { ServiceModal } from "./models/ServiceForm";

export const Booking = () => {
  const [booking, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setError] = useState(null);
  const [msg, setMsg] = useState("");
  const [serviceModal, setServiceModal] = useState(false);
  const [service, setService] = useState([]);
  const [token, setToken] = useState();
  const [status, setStatus] = useState(undefined);

  useEffect(() => {
    const getBookings = async () => {
      const token = JSON.parse(localStorage.getItem("token"));
      setToken(token);
      if (!token) {
        setMsg("Please Login!");
      }
      try {
        const response = await axios.get(
          "https://sbg.onrender.com/api/v1/booking",
          {
            headers: {
              authorization: `Bearer ${token}`,
            },
          }
        );
        setBookings(response.data.bookings);
        setLoading(false);
      } catch (err) {
        setError(err);
        setBookings(null.message);
      }
    };
    getBookings();
  }, [booking]);
  return (
    <>
      <div class="shadow container justify-center mt-4 mx-auto flex flex-col">
        <div className="text-md text-black dark:text-white ml-2">
          <h1 className="p-4">All Bookings</h1>
        </div>
        {status === "success" && <p className="text-blue-500 text-lg italic">Successfully updated.</p>}
        <div className="text-gray-600 text-xs italic py-2 py-4 text-base">
          <p className="text-red-500 text-lg italic">{msg}</p>
        </div>
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
                      Customer
                    </th>
                    <th
                      scope="col"
                      class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                    >
                      Phone
                    </th>
                    <th
                      scope="col"
                      class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                    >
                      Address
                    </th>
                    <th
                      scope="col"
                      class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                    >
                      Status
                    </th>
                  </tr>
                </thead>
                {loading && <p>Loading</p>}
                {err && <p>err</p>}
                {!loading && (
                  <tbody class="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                    {booking.map((book) => (
                      <tr
                        class="hover:bg-gray-100 dark:hover:bg-gray-700"
                        onClick={() => {
                          setServiceModal(true);
                          setService(book);
                        }}
                      >
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
                          {book.booked_user.full_name}
                        </td>
                        <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          {book.phone}
                        </td>
                        <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          {book.address}
                        </td>
                        <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          {book.is_fixed + ""}
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
      {serviceModal && (
        <>
          <ServiceModal
            setServiceModal={setServiceModal}
            service={service}
            token={token}
            setStatus={setStatus}
          />
        </>
      )}
    </>
  );
};
