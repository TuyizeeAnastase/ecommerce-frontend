import { Fragment, useEffect, useState } from "react";
import axios from "axios";

export const Shops = () => {
  const [shops, setShops] = useState([]);
  const [loading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const setData = (data) => {
    let { id, name, summary } = data;
    localStorage.setItem("id", id);
    localStorage.setItem("name", name);
    localStorage.setItem("summary", summary);
  };
  useEffect(() => {
    const getShops = async () => {
      try {
        const response = await axios.get(
          "https://sbg.onrender.com/api/v1/shops"
        );
        setShops(response.data.shops);
        setIsLoading(false);
      } catch (err) {
        setError(err);
        setShops(null.message);
      } finally {
        setIsLoading(false);
      }
    };
    getShops();
  }, [loading]);
  return (
    <Fragment>
      {loading && <p>Loading</p>}
      {error && <p>err</p>}
      {!loading && (
        <div className="container py-16 text-center ml-36">
          <h2 className="text-2xl font-medium text-gray-800 uppercase mb-6">
            Shop By category
          </h2>
          <div className="grid grid-cols-3 gap-3">
            {shops.map((shop) => (
              <div
                className="relative rounded-sm overflow-hidden group"
                key={shop.id}
              >
                <img src={shop.image} alt="category 1" class="w-full" />
                <button onClick={() => setData(shop)}>
                  <a
                    href="/productlist"
                    class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition"
                  >
                    {shop.name}
                  </a>
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </Fragment>
  );
};
