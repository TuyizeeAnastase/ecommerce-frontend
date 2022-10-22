import React from "react";

const style = {
  activeClasses:
    "bg-gray-900 text-white rounded-md py-3 px-4 text-sm font-medium md:text-base lg:px-6",
  inactiveClasses:
    "text-body-color hover:bg-gray-900 hover:text-white rounded-md py-3 px-4 text-sm font-medium md:text-base lg:px-6",
};

export const TabItem = ({ id, title, activeTab, setActiveTab }) => {
  const handleClick = () => {
    setActiveTab(id);
  };
  return (
    <button
      onClick={handleClick}
      className={activeTab === id ? style.activeClasses : style.inactiveClasses}
    >
      {title}
    </button>
  );
};
