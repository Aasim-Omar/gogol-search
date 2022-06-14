import React, { useState } from "react";
import { useResultsContext } from "../context/ResultsContextProvider";
import { Link } from "react-router-dom";
import { BsMoonStars, BsFillBrightnessHighFill } from "react-icons/bs";

const Home = () => {
  const { searchTerm, setSearchTerm, darkTheme, setDarkTheme } = useResultsContext();
  return (
    <div className="flex justify-center items-center min-h-screen">
      <p
          className="text-blue-400 text-4xl cursor-pointer bg-gray-200 dark:bg-zinc-700 p-2 rounded-full absolute top-5 right-5"
          onClick={() => setDarkTheme(!darkTheme)}
        >
          {darkTheme ? <BsMoonStars /> : <BsFillBrightnessHighFill />}
        </p>
      <div className="flex flex-col justify-center items-center mb-36 w-full">
        <h1 className="text-8xl mb-10">Gogol</h1>
        <div className="flex border-2 w-80 md:w-2/5 overflow-hidden rounded-full border-zinc-400">
          <input
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
            className="block border-none text-lg bg-gray-200 p-4 w-10/12 outline-none dark:bg-zinc-800"
            type="search"
          />
          <Link
            className="block p-4 w-2/12 flex justify-center items-center bg-blue-300 dark:bg-zinc-500"
            to="search"
          >
            🔎
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
