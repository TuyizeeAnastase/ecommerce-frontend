import deliveryVan from "./assets/delivery-van.svg";
import money from "./assets/money-back.svg";
import service from "./assets/service-hours.svg";

const Feature = () => {
  return (
    <div class="container py-16">
      <div class="w-10/12 grid grid-cols-3 gap-6 mr-6 mx-auto justify-center">
        <div class="border border-primary rounded-sm px-3 py-6 flex justify-center items-center gap-5">
          <img
            src={deliveryVan}
            alt="Delivery"
            class="w-12 h-12 object-contain"
          />
          <div>
            <h4 class="font-medium capitalize text-lg">Free Shipping</h4>
            <p class="text-gray-500 text-sm">Order over $200</p>
          </div>
        </div>
        <div class="border border-primary rounded-sm px-3 py-6 flex justify-center items-center gap-5">
          <img src={money} alt="Delivery" class="w-12 h-12 object-contain" />
          <div>
            <h4 class="font-medium capitalize text-lg">Money Rturns</h4>
            <p class="text-gray-500 text-sm">30 days money returs</p>
          </div>
        </div>
        <div class="border border-primary rounded-sm px-3 py-6 flex justify-center items-center gap-5">
          <img src={service} alt="Delivery" class="w-12 h-12 object-contain" />
          <div>
            <h4 class="font-medium capitalize text-lg">24/7 Support</h4>
            <p class="text-gray-500 text-sm">Customer support</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
