const ProductHeader = ({setName,setSummary}) => {
  return (
    <div
      className="relative overflow-hidden bg-no-repeat bg-cover"
      style={{
        background: "50%",
        backgroundImage:
          "url('https://res.cloudinary.com/depljf8uc/image/upload/v1674568577/Top-5-Push-Notifications-Templates-For-Ecommerce-Website-banner1_etn1hn.jpg')",
        height: "250px",
      }}
    >
      <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed">
        <div className="flex justify-center items-center h-full">
          <div className="text-center text-white px-6 md:px-12">
            <h1 className="text-3xl text-white font-bold mt-8 mb-6 uppercase ">
              {setName}
            </h1>
            <h3 className="text-2xl text-white  font-bold mb-8 capitalize">
              {setSummary}
            </h3>
            <div className="flex ">
              <div className="mb-3 xl:w-96">
                <div className="input-group flex items-stretch w-full mb-4">
                  <input
                    type="search"
                    className="form-control flex-auto min-w-0 block w-full px-6 py-4 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="Search"
                    aria-label="Search"
                    aria-describedby="button-addon2"
                  />
                  <button
                    type="button"
                    className="btn inline-block px-6 py-4 border-2 border-white text-white bg-blue-600 font-medium text-xs leading-tight uppercase  hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out flex items-center"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                    id="button-addon2"
                  >
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="search"
                      className="w-6"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="currentColor"
                        d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductHeader;
