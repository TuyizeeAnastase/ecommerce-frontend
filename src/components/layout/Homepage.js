import Banner from "./Banner";
import { Shops } from "./Shops";
import { Blog } from "./Blog";
import Brands from "./Brands";

export const Homepage = (props) => {
  props.funcNav(true)
  return (
    <div>
      <Banner />
      <Shops />
      <Brands />
      <Blog />
    </div>
  );
};
