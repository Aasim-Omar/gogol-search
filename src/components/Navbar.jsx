import React from "react";
import { Link } from "react-router-dom";
import { BsMoonStars, BsFillBrightnessHighFill } from "react-icons/bs";
import Links from "./Links";
import Search from "./Search";
import { useResultsContext } from "../context/ResultsContextProvider";

const Navbar = () => {
  const { darkTheme, setDarkTheme } = useResultsContext()
  return (
    <div className="">
      <div className="py-2 px-4 flex justify-between items-center border-b-2 border-zinc-200 dark:border-zinc-600">
        <Link to="/">
          <h1 className="text-3xl font-display text-zinc-700 dark:text-zinc-300">
            Gogol
          </h1>
        </Link>
        <p
          className="text-blue-400 text-3xl cursor-pointer bg-gray-200 dark:bg-zinc-700 p-2 rounded-full"
          onClick={() => setDarkTheme(!darkTheme)}
        >
          {darkTheme ? <BsMoonStars /> : <BsFillBrightnessHighFill />}
        </p>
      </div>
      <Search />
      <Links />
    </div>
  );
};

export default Navbar;
