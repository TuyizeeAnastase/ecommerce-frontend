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
        const response = await axios.get("https://sbg.onrender.com/api/v1/shops");
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
        <div className="container my-24 px-6 mx-auto">
          <section id="shops" className="mb-32 text-gray-800 text-center">
            <h2 className="text-3xl font-bold mb-12 pb-4 text-center">
              Our shops
            </h2>

            <div className="grid lg:grid-cols-3 gap-6 xl:gap-x-12">
              {shops.map((shop) => (
                <div className="mb-6 lg:mb-0" key={shop.id}>
                  <div className="relative block bg-white rounded-lg shadow-lg">
                    <div className="flex">
                      <div
                        className="relative overflow-hidden bg-no-repeat bg-cover relative overflow-hidden bg-no-repeat bg-cover shadow-lg rounded-lg mx-4 -mt-4"
                        data-mdb-ripple="true"
                        data-mdb-ripple-color="light"
                      >
                        <img src={shop.image} className="w-full" alt="" />
                        <a href="/#">
                          <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"></div>
                        </a>
                      </div>
                    </div>
                    <div className="p-6">
                      <h5 className="font-bold text-lg mb-3">{shop.name} </h5>
                      <p className="text-gray-500 mb-4">
                        <small>
                          Open <u> from 7h00 am to 8h00 pm </u> -
                          <a href="/#" className="text-gray-900">
                            Kicukiro, Sonatube
                          </a>
                        </small>
                      </p>
                      <p className="mb-4 pb-2">{shop.summary}</p>
                      <button onClick={() => setData(shop)}>
                        <a
                          href="/productlist"
                          data-mdb-ripple="true"
                          data-mdb-ripple-color="light"
                          className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                        >
                          Shop Now
                        </a>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      )}
    </Fragment>
  );
};
