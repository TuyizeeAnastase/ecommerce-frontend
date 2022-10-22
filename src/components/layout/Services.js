import { useEffect, useState } from "react";
import { BookForm } from "../Models/BookForm";
import axios from "axios";

export const Services = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [services, setServices] = useState([]);
  const [service, setService] = useState([]);
  const [succes, setSuccess] = useState(null);
  const user = JSON.parse(localStorage.getItem("user"));
  props.funcNav(true);
  useEffect(() => {
    const getServices = async () => {
      try {
        const response = await axios.get(
          "https://sbg.onrender.com/api/v1/services"
        );
        setServices(response.data.services);
      } catch (err) {
        console.log(err.message);
      }
    };
    getServices();
  }, []);
  return (
    <>
      <section className="bg-[#F3F4F6] pt-20 pb-10 lg:pt-[120px] lg:pb-20">
      {succes && (
          <div className="text-white bg-gray-900 mb-4 text-center text-lg italic py-2 py-4 text-base">
            <p className="text-lg italic">{succes}</p>
            <button
              onClick={() => setSuccess(false)}
              class="block w-full md:inline-block md:w-auto px-4 py-3 md:py-2 bg-white rounded-lg font-semibold text-sm mt-4
          md:mt-0 md:order-1 text-gray-900"
            >
              Close
            </button>
          </div>
        )}
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap">
            {services.map((service) => (
              <div className="w-full px-4 md:w-1/2 xl:w-1/3">
                <div className="mb-10 overflow-hidden rounded-lg bg-white">
                  <img className="w-full" alt="service" src={service.profile} />
                  <div className="p-8 text-center sm:p-9 md:p-7 xl:p-9">
                    <h3>
                      <a
                        href="/#"
                        className="mb-4 block text-xl font-semibold text-dark hover:text-primary sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]"
                      >
                        {service.name}
                      </a>
                    </h3>
                    <p className="mb-7 text-base leading-relaxed text-body-color">
                      Lorem ipsum dolor sit amet pretium consectetur adipiscing
                      elit. Lorem consectetur adipiscing elit.
                    </p>
                    <button
                      onClick={() => {
                        setShowModal(true);
                        setService(service);
                      }}
                      className="inline-block rounded-full border border-[#E5E7EB] py-2 px-7 text-base font-medium text-body-color transition hover:border-primary hover:bg-gray-900 hover:text-white"
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {showModal && user ? (
        <>
          <BookForm
            setShowModal={setShowModal}
            setSuccess={setSuccess}
            service={service}
            user={user}
          />
        </>
      ) : (
        <>
          {!user && (
            <h3 className="mb-4 block text-xl  text-center font-semibold text-red-600  sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]">
              Login first to book service
            </h3>
          )}
        </>
      )}
    </>
  );
};
