import Banner from "./Banner";
import { Shops } from "./Shops";
import { Blog } from "./Blog";
import Brands from "./Brands";
import Feature from "./Feature";

export const Homepage = (props) => {
  props.funcNav(true);
  return (
    <div>
      <Banner />
      <Feature />
      <Shops />
      <Brands />
      <Blog />
    </div>
  );
};
