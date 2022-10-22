import data from "./data";
import { Link, useLocation } from "react-router-dom";

const style = {
  inactive: `text-gray-400`,
  active: `font-medium text-gray-900`,
  link: `flex items-center justify-start text-blue-600 my-2 p-4 text-sm w-full hover:text-blue-600`,
};

export const SideNavItems = () => {
  const pathname = useLocation().pathname;
  return (
    <ul className="md:pl-6 h-96">
      <li>
        {data.map((item) => (
          <Link to={item.link} key={item.title}>
            <span
              className={`${style.link} 
               ${item.link === pathname ? style.active : style.inactive}`}
            >
              <span>{item.icon}</span>
              <span className="mx-4">{item.title}</span>
            </span>
          </Link>
        ))}
      </li>
    </ul>
  );
};
