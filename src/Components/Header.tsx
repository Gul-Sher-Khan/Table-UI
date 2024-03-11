import React, { useState } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const Header = ({ isDark, setIsDark }: any) => {
  const toggleTheme = () => {
    setIsDark(!isDark);
    document.body.classList.toggle("dark");
  };

  return (
    <div className="flex justify-between items-center">
      <div>
        <h1 className="font-bold text-2xl">Deliveries</h1>
        <p className="text-gray-800 dark:text-gray-400">More than 400+ deliveries</p>
      </div>
      <div className="flex gap-6 mr-2">
        <button
          onClick={toggleTheme}
          className={`text-3xl p-1 ${isDark && "text-yellow-400"} `}
        >
          {isDark ? <MdLightMode /> : <MdDarkMode />}
        </button>
        <button
          className="bg-blue-500/80 text-white p-2 px-3 rounded-md 
      hover:bg-blue-700 hover:scale-110
      transition-all ease-in-out duration-200 font-semibold dark:bg-[#252f41] dark:text-blue-500 dark:hover:bg-blue-700 dark:hover:text-white"
        >
          New Report
        </button>
        <button
          className="bg-blue-500/80 text-white p-2 px-3 rounded-md
      hover:bg-blue-700 hover:scale-110
      transition-all ease-in-out duration-200 font-semibold"
        >
          Create
        </button>
      </div>
    </div>
  );
};

export default Header;
